import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import * as fromCounter from './state';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', fromCounter.reducers, { metaReducers: fromCounter.metaReducers })
  ],
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class CounterModule { }
