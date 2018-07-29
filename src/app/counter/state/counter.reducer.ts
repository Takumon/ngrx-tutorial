import { Action } from '@ngrx/store';
import { CounterActionTypes } from './counter.actions';

export interface State {
  count: number;
}

export const initialState: State = {
  count: 0
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case CounterActionTypes.CountIncrement:
      return Object.assign({}, { ...state, count : state.count + 1 });
      case CounterActionTypes.CountDecrement:
      return Object.assign({}, { ...state, count : state.count - 1 });
    default:
      return state;
  }
}

export const getCount = (state: State) => state.count;
