interface Song {
  track?: any;
}

export interface PlayerState {
  currentSongs: Song[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: Song;
  genreListId: string;
  token: string;
  user: any;
}
