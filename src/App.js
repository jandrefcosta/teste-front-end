import React, { Component } from 'react';
import './App.css';
import VideoComponent from './components/VideoComponent';
import CarouselComponent from './components/CarouselComponent';
import Grid from '@material-ui/core/Grid';

class App extends Component {

	constructor(props) {
		super(props);

		this.KEY = 'AIzaSyCrLdnJGIICYiONBatfk-59h02AESqegJk';
		this.url_search = 'https://www.googleapis.com/youtube/v3/search';

		this.state 	= {search: '', videos: [], showPopup: false, videoid: '', loading: false};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event){
		event.preventDefault();
		this.setState({ loading: true, videos: []});
		const url_src = new URL(this.url_search)
 
		this.search = {
			key: this.KEY,
			part: 'id,snippet',
			maxResults: 5,
			order: 'viewCount',
			type:'video',
			q: this.state.search
		}

		Object.keys(this.search).forEach( key => url_src.searchParams.append(key, this.search[key]) )

		fetch(url_src)
		.then(res => res.json())
		.then(
			(result) => {
				setTimeout(()=>{ this.setState({loading: false}); }, 1000)
				this.setState({videos: result.items})
			},
			(error) => {
				console.log(error)
			}
		)
	}

	togglePopup(param, e) {
		this.setState({
			showPopup: !this.state.showPopup,
			videoid: param
		});
	}

	rendererResultsVideos(){
		if (this.state.videos!==undefined){
			let videos = this.state.videos.map((video , index) => {
      		return( <Grid key={index} item xs={12} sm={4} md={3}> 
      					<div className="video-thumbs">
	      					<img src={video.snippet.thumbnails.medium.url} alt=""/> 
	      					<h4>{video.snippet.title}</h4>
	      					<h6>{video.snippet.channelTitle}</h6>
	      					<p>{video.snippet.description}</p>
	      					<button onClick={this.togglePopup.bind(this, video.id.videoId)} >Detalhes</button>
	      				</div>
      				</Grid> 
      			);
	    	})
	    	return videos;
    	}else{
    		return "";
    	}
	}

	render() {
		return (
			<div className="App">
				<Grid className="app-container" container direction="row" justify="center" alignItems="flex-start">
					<div className={(this.state.loading)?"loading actived":"loading"}>
						<div className="loading-container">
							<img src={require('./image/loading.gif')} alt='loading'/>
						</div>
					</div>
					<Grid item xs={12} className={"form-before-search" + (this.state.videos.length>0?" found":"")} container>
						<Grid item xs={12}>
							<form onSubmit={this.handleSubmit}>
								<input type="text" name="search" onChange={this.handleChange}/>
								<input type="submit" value="Submit" />
							</form>
						</Grid>
					</Grid>
					<Grid className="gallery-container" item xs={12} container spacing={16} alignItems="stretch" justify="flex-start" id="gallery">
						{
							// this.state.videos ? this.rendererResultsVideos() : null 
						}
					</Grid>

					<Grid item xs={12} container justify="center">
						{
							this.state.videos ? 
							<CarouselComponent
								className="carousel"
								timeAnimation={2}
								slidesToShow={15}
								videos={this.state.videos}
								toggleDetails={this.togglePopup.bind(this)}
							/>
							: null
						}
					</Grid>

				</Grid>

				<div className={this.state.showPopup?"videocomponent active":"videocomponent"}>
					{this.state.videoid ?
						<VideoComponent
							openedDetails={false}
							video={this.state.videoid}
							closePopup={this.togglePopup.bind(this)}	
						/>
						: null
						}
				</div>

			</div>
		);
	}
}

export default App;
