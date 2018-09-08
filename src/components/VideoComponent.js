import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './VideoComponent.css';
import Grid from '@material-ui/core/Grid';

class VideoComponent extends Component {

    constructor(props) {
        super(props);

        console.log(props)

        this.KEY = 'AIzaSyCrLdnJGIICYiONBatfk-59h02AESqegJk';
        this.url_videos = 'https://www.googleapis.com/youtube/v3/videos';

        this.state = {videoItem: '', openedDetails: props.openedDetails, videoId: props.video};

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

    componentDidUpdate() {
        /*if (!this.props.video){
            
        }*/

        /*watch('params.video', (video) => {
            console.log(video)
            //this.dispatch(fetchUser(newUserId));
        });        */
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
                            <Grid item xs={12} sm={8} md={6}>
                                <Grid container  className='video-wrapper'>
                                    <Grid item xs={12}>
                                        <YouTube videoId={this.state.videoItem.id}/>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <h1>{this.props.text}</h1>
                                        <button onClick={ this.closeDetailsPage }>close me</button>
                                    </Grid>
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