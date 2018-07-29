import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  CountIncrement = '[Counter] Increment Count',
  CountDecrement = '[Counter] Decrement Count'
}

export class CountIncrement implements Action {
  readonly type = CounterActionTypes.CountIncrement;
  public constructor() {}
}

export class CountDecrement implements Action {
  readonly type = CounterActionTypes.CountDecrement;
  public constructor() {}
}

export type CounterActions = CountIncrement | CountDecrement;
