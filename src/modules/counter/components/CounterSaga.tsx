import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { updateCounterDB } from '../sagas';
import { selectCounterDB } from '../selectors';

const Counter = () => {
  const dispatch = useDispatch();
  const counterDB = useSelector(selectCounterDB);

  const { t } = useTranslation();

  const counterIncrement = () => {
    setTimeout(() => {
      dispatch(updateCounterDB({ counterDB: counterDB + 1 }));
    }, 500);
  };

  const counterDecrement = () => {
    setTimeout(() => {
      dispatch(updateCounterDB({ counterDB: counterDB - 1 }));
    }, 500);
  };

  return (
    <>
      <div>Counter DB</div>
      {counterDB}
      <button type="button" onClick={counterIncrement}>
        {t('COUNTER_INCREMENT')}
      </button>
      <button type="button" onClick={counterDecrement}>
        {t('COUNTER_DECREMENT')}
      </button>
    </>
  );
};

export default Counter;
