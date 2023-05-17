import { createReducer, on } from '@ngrx/store';
import * as PlayerActions from './player.actions';

interface Song {
  track?: any; // Replace `any` with the actual type
  // other properties...
}

interface PlayerState {
  currentSongs: Song[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: Song;
  genreListId: string;
}

export const initialState: PlayerState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
};

export const playerReducer = createReducer(
  initialState,
  on(PlayerActions.setActiveSong, (state, { song, data, i }) => {
    let currentSongs = [];
    if (data?.tracks?.hits) {
      currentSongs = data.tracks.hits;
    } else if (data?.properties) {
      currentSongs = data?.tracks;
    } else {
      currentSongs = data;
    }
    return {
      ...state,
      activeSong: song,
      currentSongs: currentSongs,
      currentIndex: i,
      isActive: true,
    };
  }),
  on(PlayerActions.nextSong, (state, { index }) => {
    let activeSong =
      state.currentSongs[index]?.track ?? state.currentSongs[index];
    return {
      ...state,
      activeSong: activeSong,
      currentIndex: index,
      isActive: true,
    };
  }),
  on(PlayerActions.prevSong, (state, { index }) => {
    let activeSong =
      state.currentSongs[index]?.track ?? state.currentSongs[index];
    return {
      ...state,
      activeSong: activeSong,
      currentIndex: index,
      isActive: true,
    };
  }),
  on(PlayerActions.playPause, (state, { playing }) => {
    return { ...state, isPlaying: playing };
  }),
  on(PlayerActions.selectGenreListId, (state, { id }) => {
    return { ...state, genreListId: id };
  })
);
