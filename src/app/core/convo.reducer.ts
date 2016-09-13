/**
 * Following @teropa's' harmonics-explorer (in tuts) this reducer should be:
 * The main (and only) @ngrx/store reducer for the application.
 */
import { ActionReducer, Action } from '@ngrx/store';
import { Convoturn } from './convoturn.model';
/**
 * NGRX
 * Create a reducer function for each data type you have
 * in your application. The combination of these reducers
 * will make up your application state.
 */

// ACTION definitions
export const ACTORS_IN_SCENE = 'ACTORS_IN_SCENE';
export const START_CONVO = 'START_CONVO';
export const NEXT_CONVOTURN = 'NEXT_CONVOTURN';
export const SPEAK = 'SPEAK';
export const THINK = 'THINK';
export const THINK_OPTIONS = 'THINK_OPTIONS';
export const SELECT_OPTION = 'SELECT_OPTION';

// The reducer function. Receives actions and produces new application states.
export const convoReducer: ActionReducer<Convoturn[]> =
  (state: Convoturn[] = [], action: Action) => {
    switch (action.type) {
      case ACTORS_IN_SCENE:
        return [...state, action.payload];

      case START_CONVO:
        return state;

      case NEXT_CONVOTURN:
        return state;

      case SPEAK:
        return state;

      case THINK:
        return state;

      case THINK_OPTIONS:
        return state;

      case SELECT_OPTION:
        return state;

      default:
        return state;
    }
  }


// Initial AppState, used to bootstrap the reducer - NOT USING YET
function initState(): Convoturn[] {
  // for how, see @teropa harmonics-explorer
  return [];
}

/**
 * Action (defined in ngrx/store dispatcher.ts):
 *  export interface Action {
 *    type: string;
 *    payload?: any;
 *  }
 */
