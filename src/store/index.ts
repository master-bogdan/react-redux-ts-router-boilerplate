import {
  applyMiddleware,
  Middleware,
  Action,
  combineReducers,
  createStore,
  Store,
} from 'redux';
import reduxThunk, { ThunkAction } from 'redux-thunk';
// Reducers
import { sampleReducer } from './sample/sampleReducer';
import { SampleState } from './sample/sampleTypes';

interface StoreState {
  reducer: SampleState
}

const rootState = combineReducers<StoreState>({
  reducer: sampleReducer,
});

const processNode: string = process.env.NODE_ENV;

let middleware: Middleware[] = [];

if (processNode === 'development') {
  middleware = [reduxThunk];
}

export const store: Store<StoreState> = createStore(rootState, applyMiddleware(...middleware));

// Store types
export type RootState = ReturnType<typeof store.getState>

// Redux thunk type
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
