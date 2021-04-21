import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { counterIncrement, counterDecrement } from '../reducers';
import { selectCounterRedux } from '../selectors';

const Counter = () => {
  const dispatch = useDispatch();
  const counterRedux = useSelector(selectCounterRedux);
  const { t } = useTranslation();

  return (
    <>
      <div>Counter Redux</div>
      {counterRedux}
      <button type="button" onClick={() => dispatch(counterIncrement())}>
        {t('COUNTER_INCREMENT')}
      </button>
      <button type="button" onClick={() => dispatch(counterDecrement())}>
        {t('COUNTER_DECREMENT')}
      </button>
    </>
  );
};

export default Counter;
