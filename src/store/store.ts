import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { planningPokerReducer } from '../reducers/planningPokerReducer';
import { globalReducer } from '../reducers/globalReducer';

const reducers = combineReducers({
  auth: authReducer,
  planningPoker: planningPokerReducer,
  global: globalReducer
});

const composeEnhancers = ( window as any ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore( 
  reducers, {},
  composeEnhancers(
    applyMiddleware( thunk )
  )
);
