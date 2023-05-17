import { createAction, props } from '@ngrx/store';

export const setActiveSong = createAction(
  '[Player] Set Active Song',
  props<{ song: any; data: any; i: number }>()
);

export const nextSong = createAction(
  '[Player] Next Song',
  props<{ index: number }>()
);

export const prevSong = createAction(
  '[Player] Previous Song',
  props<{ index: number }>()
);

export const playPause = createAction(
  '[Player] Play Pause',
  props<{ playing: boolean }>()
);

export const selectGenreListId = createAction(
  '[Player] Select Genre List Id',
  props<{ id: string }>()
);
