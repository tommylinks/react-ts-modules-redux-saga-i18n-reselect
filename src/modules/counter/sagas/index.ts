import { takeLatest, put } from 'redux-saga/effects';
import { actions } from '../reducers';

export const actionTypes: { UPDATE_COUNTER_DB: string } = {
  UPDATE_COUNTER_DB: 'UPDATE_COUNTER_DB',
};

function* sagaUpdateCounterDB({ payload: { counterDB, onSuccess, onError, onFinally } }: any): any {
  console.log('counterDB', counterDB);
  try {
    yield put({ type: actions.SET_COUNTER_DB, payload: counterDB });
    onSuccess && onSuccess();
  } catch ({ message }) {
    console.log(message);
    onError && onError(message);
  } finally {
    onFinally && onFinally();
  }
}

export const updateCounterDB = (payload: any) => ({ type: actionTypes.UPDATE_COUNTER_DB, payload });

const CounterSagas = [takeLatest(actionTypes.UPDATE_COUNTER_DB, sagaUpdateCounterDB)];

export default CounterSagas;
