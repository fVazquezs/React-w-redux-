import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        { title: 'Believer', duration: '3:09' },
        { title: 'Yellow Submarine', duration: '2:40' },
        { title: 'All Star', duration: '3:15' },
        { title: 'Faroeste caboclo', duration: '10:00' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})