import { createReducer, on } from '@ngrx/store';
import { PlayerState } from '../shared/interface';
import * as PlayerActions from './player.actions';

export const initialState: PlayerState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
  token: '',
  user: {},
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
  }),
  on(PlayerActions.updateToken, (state, { token }) => {
    return { ...state, token: token };
  }),
  on(PlayerActions.updateUser, (state, { user }) => {
    return { ...state, user: user };
  })
);
