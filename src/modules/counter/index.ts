import CounterPage from './pages/Counter';
import CounterSagaPage from './pages/CounterSaga';
import reducers from './reducers';
import sagas from './sagas';

// pages:
export const pages = [
  {
    path: '/counter-redux',
    icon: 'counter',
    order: 1,
    color: '#dc6be5',
    title: 'COUNTER_TITLE',
    visible: true,
    component: CounterPage,
  },
  {
    path: '/counter-db',
    icon: 'counterSaga',
    order: 2,
    color: '#dc6be5',
    title: 'COUNTER_SAGA_TITLE',
    visible: true,
    component: CounterSagaPage,
  },
];

const Counter = {
  pages,
  reducers: { counter: reducers },
  sagas,
};

export default Counter;
