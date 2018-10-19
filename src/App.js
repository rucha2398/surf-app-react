import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import Comments from './components/comments';
const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
        videos: [],
        selectedVideo: null,
        per: 2,
        page: 1,
        totalPages: null,

    };

    this.videoSearch('surfing');
}

videoSearch(searchTerm) {
  YTSearch({key: API_KEY, term: searchTerm}, (data) => {
    console.log(data);
      this.setState({ 
          videos: data,
          selectedVideo: data[0]
      });
  });

}

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <VideoList 
          onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;