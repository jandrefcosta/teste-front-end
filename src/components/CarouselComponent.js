import React, { Component } from 'react';
import './CarouselComponent.css';
import Grid from '@material-ui/core/Grid';

class CarouselComponent extends Component {

	constructor(props) {
        super(props);

        this.state = {	widthBase: 140, 
        				selected: -1,
        				moving: false,
        				slidesToShow: this.props.slidesToShow, 
        				timeAnimation: this.props.timeAnimation, 
        				videos: [],
        				fullcarousel: false}

        this.setAnimationClass = this.setAnimationClass.bind(this)
    }

    componentDidUpdate(prevProps, prevState){
    	console.log();

		var prevVideosEquals = prevProps.videos.every(e=>this.props.videos.includes(e)); 
		if (!prevVideosEquals){
			this.setState({videos: [], fullcarousel: false})
		}
		if((prevProps.videos.length!== 0 || !prevVideosEquals) && this.state.selected===-1){

			this.setupCarousel();
		}

		if (prevProps.videos.length!== 0 && this.state.videos.length===0){
			this.setState({videos:this.props.videos.slice()})			
		}
		if (this.state.videos.length!==0 && !this.state.fullcarousel){
			if (this.state.videos.length < this.state.slidesToShow){
				const temp = this.state.videos.slice();
				this.setState({videos: temp.concat(this.props.videos.slice())});
			}else{
				this.setState({fullcarousel: true})
			}
		}
	}

	onMouseEnterThumbEvent(index, event ){
		this.removeTimerAnimation()
		this.setState({selected: index})
	}

	onMouseLeaveThumbEvent(index, event){
		this.setTimerAnimation()
		this.setState({selected: -1})
	}

	componentWillMount()
	{
		console.log("teste")
		
	}

    rendererResultsVideosCarousel(){
		if (this.props.videos.length>0){
			let videos = this.state.videos.map((video , index) => {
	      		return(
      				<div className={"video-thumbs " + ((this.state.selected === index) ? 'selected' : 'default')} key={index}
      					onMouseEnter={this.onMouseEnterThumbEvent.bind(this, index)}
    					onMouseLeave={this.onMouseLeaveThumbEvent.bind(this, index)}
    					onClick={this.props.toggleDetails.bind(this, video.id.videoId)}>
      					<img src={video.snippet.thumbnails.medium.url} alt=""/> 
      				</div>
	      		);
	    	})
	    	return videos;
    	}else{
    		return "";
    	}
	}
	
	setupCarousel(){
		let container = document.getElementById("carouselContainer");
	    let imageNumber = this.state.videos.length;
	    let imageWidth = this.state.widthBase;
	    container.style.width = parseInt((imageWidth * imageNumber), 10) + "px";
	    this.setTimerAnimation();
	}

	removeTimerAnimation(){
		if(this.timer){
            clearTimeout(this.timer);
        }
	}

	setTimerAnimation(){
		if(this.timer){
            clearTimeout(this.timer);
        }
		this.timer =  setTimeout( this.setAnimationClass, this.state.timeAnimation*1000);
	}

	setAnimationClass(){
		if(this.timer){
            clearTimeout(this.timer);
        }
		if (this.state.moving){
			this.state.videos.push(this.state.videos.shift());
			this.setState(() => ({moving: false}))
		}else{
			this.setState(() => ({moving: true}))
		}
		this.setTimerAnimation();
	}

	render(){
		return (
			<Grid item xs={10} className={this.props.className} >
				<div className={(this.state.moving?"carousel-container moving":"carousel-container") + (this.state.videos.length>0?" fixed-size":"")} id="carouselContainer">
					{ this.rendererResultsVideosCarousel() }
				</div>
			</Grid>
		);
    }

}

export default CarouselComponent;