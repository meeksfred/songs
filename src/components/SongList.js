import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {


  renderList() {
    return this.props.songs.map( song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    })
  }

  render() {
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    )
  }
}

// state is all data in Redux store
// always takes param state
// normal name convention
const mapStateToProps = (state) => {
  return {
    songs: state.songs,
    selectedSong: state.selectedSong
  };
}

// pass connect a function that returns some state/
// second param takes actionCreators, and when an action is create onClick above,
// the connect function takes what's returned (an Action), and automatically passes it to the dispatch function
export default connect(mapStateToProps, { selectSong })(SongList);
