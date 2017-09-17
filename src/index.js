import _ from 'lodash';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDYWnFU167Q8qV5BPCf4NKt6C-3-u8-gRE';


// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('ass and titties');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        {/* {this.state.videos.length > 0 ? <VideoDetail video={this.state.videos[0]} /> : null}; */}
        {/* dont need above line, because video detail checks for no !video  */}
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}
// Take this component's genereated html and put it in the dom on the page
ReactDOM.render(<App />, document.getElementById("container"));
