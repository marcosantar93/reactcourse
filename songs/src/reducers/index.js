import { combineReducers } from "redux";
/* The combineReducers helper function turns an object whose values 
   are different reducing functions into a single reducing function you
   can pass to createStore.*/

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Song 2", duration: "3:21" },
    { title: "Lua", duration: "5:25" },
    { title: "All Star", duration: "2:05" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  // the keys of this object are the keys that appear on the state object
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
