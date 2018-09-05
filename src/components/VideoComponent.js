import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './VideoComponent.css';
import Grid from '@material-ui/core/Grid';

class VideoComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);

        this.KEY = 'AIzaSyCrLdnJGIICYiONBatfk-59h02AESqegJk';
        this.url_videos = 'https://www.googleapis.com/youtube/v3/videos';
        this.state = {videoItem: ''};
        
        const url_src = new URL(this.url_videos)

        this.opts = {
            height: 'auto',
            width: '100%'
        }

        this.search = {
            key: this.KEY,
            part: 'snippet,statistics,player',
            id: props.video
        }

        Object.keys(this.search).forEach( key => url_src.searchParams.append(key, this.search[key]) )

        fetch(url_src)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result.items[0])
                const item = result.items[0];
                this.setState({videoItem: item})
                // console.log(item.snippet.title)
                // console.log(item.snippet.channelTitle)
                // console.log(item.snippet.description)
                // console.log("view" + item.statistics.viewCount)
                // console.log("like" + item.statistics.likeCount)
                // console.log("dislike" + item.statistics.dislikeCount)
                //this.setState({videos: result[0].items})
            },
            (error) => {
                console.log(error)
            }
        )

    }
  
    render() {
        return (
            <div className='videocomponent'>
                <div className='videocomponent-inner'>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={8} md={6}>
                            <Grid container  className='video-wrapper'>
                                <Grid item xs={12}>
                                    <YouTube videoId={this.state.videoItem.id}/>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                    <h1>{this.props.text}</h1>
                                    <button onClick={this.props.closePopup}>close me</button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }

}

export default VideoComponent;