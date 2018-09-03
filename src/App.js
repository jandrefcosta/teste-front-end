import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';

class App extends Component {

	constructor(props) {
		super(props);
		this.KEY = 'AIzaSyCrLdnJGIICYiONBatfk-59h02AESqegJk';
		this.url_search = 'https://www.googleapis.com/youtube/v3/search';

		this.state 	= {search: '', videos: []};

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
			part: 'id,snippet',
			q: this.state.search,
			key: this.KEY
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

	rendererResultsVideos(){
		const videos = this.state.videos.map((video , index) => {
      		return( <div className="video-thumbs" key={index}> 
      					<img src={video.snippet.thumbnails.medium.url} alt=""/> 
      				</div> 
      		);
    	})
    	return videos;
	}



	render() {
		return (
			<Grid className="App" container spacing={24}>        		
				<Grid item xs={12}> 
					<header className="App-header">
						<h1 className="App-title">Search YouTube Videos</h1>
					</header>
				</Grid>
				<Grid item xs={12}> 
					<div className="container">
						<form onSubmit={this.handleSubmit}>
							<input type="text" name="search" onChange={this.handleChange}/>
							<input type="submit" value="Submit" />
						</form>
					</div>
					<div className="gallery-container" id="gallery">
						{this.rendererResultsVideos()}
					</div>
				</Grid>
			</Grid>
		);
	}
}

export default App;
