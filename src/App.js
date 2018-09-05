import React, { Component } from 'react';
import VideoComponent from './components/VideoComponent';
import './App.css';
import Grid from '@material-ui/core/Grid';

class App extends Component {

	constructor(props) {
		super(props);
		this.app_container 		= "app-container";
		this.gallerry_container = "gallery-container";
		
		this.KEY = 'AIzaSyCrLdnJGIICYiONBatfk-59h02AESqegJk';
		this.url_search = 'https://www.googleapis.com/youtube/v3/search';

		this.state 	= {search: '', videos: [], showPopup: false, videoid: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event){
		event.preventDefault();
		const url_src = new URL(this.url_search)

		this.search = {
			key: this.KEY,
			part: 'id,snippet',
			maxResults: 25,
			order: 'viewCount',
			type:'video',
			q: this.state.search
		}

		Object.keys(this.search).forEach( key => url_src.searchParams.append(key, this.search[key]) )

		fetch(url_src)
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result)
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
		if (this.state.videos!=undefined){
			const videos = this.state.videos.map((video , index) => {
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
				<Grid className={this.app_container} container >
					<Grid item xs={12}>
						<header className="App-header">
							<h1 className="App-title">Search YouTube Videos</h1>
						</header>
					</Grid>

					<Grid item xs={12}>
						<form onSubmit={this.handleSubmit}>
							<input type="text" name="search" onChange={this.handleChange}/>
							<input type="submit" value="Submit" />
						</form>
					</Grid>
					<Grid className={this.gallerry_container} item xs={12} container spacing={16} alignItems="stretch" id="gallery">
						{this.rendererResultsVideos()}
					</Grid>

				</Grid>
				{this.state.showPopup ? 
					<VideoComponent
						text='Close Me'
						closePopup={this.togglePopup.bind(this)}
						video={this.state.videoid}
					/>
					: null
				}
			</div>
		);
	}
}

export default App;
