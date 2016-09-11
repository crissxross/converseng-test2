/**
 * Stub out the ACTIONS that will apply to this REDUCER
 * to give a blueprint of the updates I need to implement
 */
/**
 * Following @teropa e.g. in harmonics-explorer (in tuts) this reducer should be:
 * The main (and only) @ngrx/store reducer for the application.
 */
import { ActionReducer, Action } from '@ngrx/store';

// Action definitions
export const EXAMPLE_ACTION = 'EXAMPLE_ACTION';

// The reducer function. Receives actions and produces new application states.
export const convoReducer: ActionReducer<any> =
  (state = makeInintialState(), action: Action) => {
    switch (action.type) {
      case EXAMPLE_ACTION:
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
function makeInintialState() {
  // for how, see @teropa harmonics-explorer
}
