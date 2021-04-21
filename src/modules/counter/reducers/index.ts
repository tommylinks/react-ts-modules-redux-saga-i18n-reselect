const defaultState: any = {
  counterRedux: 0,
  counterDB: 0,
};

interface IAction {
  type: string;
  payload?: object;
}

export const actions = {
  SET_COUNTER_DB: 'SET_COUNTER_DB',
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT',
};

export const counterIncrement = () => ({ type: actions.INCREMENT });
export const counterDecrement = () => ({ type: actions.DECREMENT });

const counterReducer = (state = defaultState, action: IAction) => {
  console.log('action', action);
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, counterRedux: state.counterRedux + 1 };
    case actions.DECREMENT:
      return { ...state, counterRedux: state.counterRedux - 1 };
    case actions.SET_COUNTER_DB:
      return { ...state, counterDB: action.payload };
    default:
      return state;
  }
};
export default counterReducer;
