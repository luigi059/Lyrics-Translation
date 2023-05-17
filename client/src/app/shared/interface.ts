interface Song {
  track?: any; // Replace `any` with the actual type
  // other properties...
}

export interface PlayerState {
  currentSongs: Song[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: Song;
  genreListId: string;
}
