import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SC from 'soundcloud';

import SearchBar from './components/search/search_bar';
import List from './components/search/list';
import Photo from './components/main/photo';
import RecentSearch from './components/right/recent';
import BottomSearch from './components/search/bottom';

class App extends Component{
constructor(props){
  super(props);
  this.state ={
    tracks:[],
  selectedSong:null,
recentSearch: []}

  SC.initialize({
client_id: 'ggX0UomnLs0VmW7qZnCzw',
redirect_uri: 'http://example.com/callback'
});


}



songSearch(term){
  SC.get('/tracks', {
    q: term, license: 'cc-by-sa'
  }).then((tracks) => {
  console.log(tracks);

  this.setState({
    tracks: tracks,
    selectedSong: tracks[0],
    recentSearch: [...this.state.recentSearch,term]

  });

});

  }

  play(id){

SC.stream('/tracks/'+ id).then(function(player){
  player.play().then(function(){
    console.log('Playback started!');
  }).catch(function(e){
    console.error('Playback rejected. Try calling play() from a user interaction.', e);
  });
});
  }


  render(){

    return(
<div className='row'>
    <div className='left'>
        <SearchBar onSearch = {term => {this.songSearch(term)}}/>

        <List tracks={this.state.tracks}
        selected={this.state.selectedSong}
        onSongSelect={selectedSong =>{this.setState({selectedSong})}}/>

        <BottomSearch />
    </div>

    <div className='main'>
          <Photo track={this.state.selectedSong} play={id=>this.play(id)}/>
    </div>

    <div className='right'>
        <RecentSearch recent={this.state.recentSearch} search={term => this.songSearch(term)}/>
    </div>

</div>
  );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
