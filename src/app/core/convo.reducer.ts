/**
 * Stub out the ACTIONS that will apply to this REDUCER
 * to give a blueprint of the updates I need to implement
 */
/**
 * Following @teropa e.g. in harmonics-explorer (in tuts) this reducer should be:
 * The main (and only) @ngrx/store reducer for the application.
 */
import { ActionReducer, Action } from '@ngrx/store';
/**
 * NGRX
 * Create a reducer function for each data type you have
 * in your application. The combination of these reducers
 * will make up your application state.
 */

// Action definitions
export const EXAMPLE_STUB_ACTION = 'EXAMPLE_STUB_ACTION';

// The reducer function. Receives actions and produces new application states.
export const convoReducer: ActionReducer<any> =
  (state = makeInitialState(), action: Action) => {
    switch (action.type) {
      case EXAMPLE_STUB_ACTION:
        return [...state, action.payload];

      case STUB_ACTION:
        return state;

      case STUB:
        return state;

      default:
        return state;
    }
  }


// Initial AppState, used to bootstrap the reducer
function makeInitialState() {
  // for how, see @teropa harmonics-explorer
}

/**
 * Possible ACTIONS and/or REDUCER functions:
 *
 */
