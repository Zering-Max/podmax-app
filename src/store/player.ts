import {PayloadAction, createSelector, createSlice} from '@reduxjs/toolkit';
import {RootState} from '.';
import {AudioData} from 'src/@types/audio';

interface Player {
  onGoingAudio: AudioData | null;
  onGoingList: AudioData[];
  playbackRate: number;
}

const initialState: Player = {
  onGoingAudio: null,
  onGoingList: [],
  playbackRate: 1,
};

const slice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    updateOnGoingAudio(
      playerState,
      {payload}: PayloadAction<AudioData | null>,
    ) {
      playerState.onGoingAudio = payload;
    },
    updateOnGoingList(playerState, {payload}: PayloadAction<AudioData[]>) {
      playerState.onGoingList = payload;
    },
    updatePlaybackRate(playerState, {payload}: PayloadAction<number>) {
      playerState.playbackRate = payload;
    },
  },
});

export const getPlayerState = createSelector(
  (state: RootState) => state,
  state => state.player,
);

export const {updateOnGoingAudio, updateOnGoingList, updatePlaybackRate} =
  slice.actions;

export default slice.reducer;
