/**
 |--------------------------------------------------
 | @reducer
 | ### This is a sample boilerplate Redux reducer file.
 |--------------------------------------------------
 */
import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import * as COUNTER from './constants';

export const initialState = {
	count: 0
}

const reducer = handleActions({
	[COUNTER.INCREMENT]: state => {
    const count = state.get('count');
		return state.set('count', count + 1);
	}
}, fromJS(initialState))

export default reducer;