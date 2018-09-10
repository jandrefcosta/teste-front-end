import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './VideoComponent.css';
import Grid from '@material-ui/core/Grid';

class VideoComponent extends Component {

    constructor(props) {
        super(props);

        this.KEY = 'AIzaSyCrLdnJGIICYiONBatfk-59h02AESqegJk';
        this.url_videos = 'https://www.googleapis.com/youtube/v3/videos';

        this.state = {videoItem: '', openedDetails: props.openedDetails, videoId: props.video, videoDetails:{}};

        this.closeDetailsPage = this.closeDetailsPage.bind(this);

        this.search = {
            key: this.KEY,
            part: 'snippet,statistics,player',
            id: props.video
        }

        const url_src = new URL(this.url_videos)
        Object.keys(this.search).forEach( key => url_src.searchParams.append(key, this.search[key]) )
        fetch(url_src)
        .then(res => res.json())
        .then(
            (result) => {
                const item = result.items[0];
                this.setState({videoItem: item, openedDetails:true} )
                this.setState({videoDetails:{
                                    title: item.snippet.title,
                                    channelTitle: item.snippet.channelTitle,
                                    likeCount: item.statistics.likeCount,
                                    dislikeCount: item.statistics.dislikeCount,
                                    description: item.snippet.description,
                                    viewCount: item.statistics.viewCount
                                }
                              })
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

    closeDetailsPage(){
        this.setState({openedDetails:false})
        this.props.closePopup();
    }
  
    render() {
        console.log(this.state)
        return (
            // <div className={this.props.className}>
                <div className='videocomponent-inner'>
                { this.state.videoItem ? 
                        <Grid container justify="center">
                            <Grid container item xs={12} sm={10} md={8}>
                                <Grid item xs={1}>
                                    <button onClick={ this.closeDetailsPage }>X</button>
                                </Grid>
                                <Grid item xs={10}>
                                    <h2>{this.state.videoDetails.title}</h2>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} sm={10} md={8}>
                                <Grid item xs={12} className='video-wrapper'>
                                    <YouTube videoId={this.state.videoItem.id}/>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} sm={10} md={8}>
                                <Grid container item xs={12}>
                                    <Grid item xs={8}>
                                        <h3>{this.state.videoDetails.channelTitle}</h3>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <h3>{this.state.videoDetails.likeCount}</h3>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <h3>{this.state.videoDetails.dislikeCount}</h3>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12}>
                                    <p>{this.state.videoDetails.description}</p>
                                </Grid>
                                <Grid container item xs={12}>
                                    <p>{this.state.videoDetails.viewCount}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    : null
                }
                </div>
            // </div>
        );
    }

}

export default VideoComponent;