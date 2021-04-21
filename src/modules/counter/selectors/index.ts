import { createSelector } from 'reselect';

interface CounterState {
  counter: {
    counterRedux: number;
    counterDB: number;
  };
}

export const selectCounterRedux = createSelector(
  (state: CounterState) => state.counter,
  (counter) => counter.counterRedux,
);

export const selectCounterDB = createSelector(
  (state: CounterState) => state.counter,
  (counter) => counter.counterDB,
);
