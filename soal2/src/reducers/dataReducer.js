import {
  FETCHING_TODOS,
  FETCHING_TODOS_SUCCESS,
  FETCHING_TODOS_FAIL,
} from '../api/constants';

const initialState = {
  data: [],
  isFetching: false,
  error: false,
};

export default dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TODOS:
      return {
        ...state,
        data: [],
        isFetching: true,
      };
    case FETCHING_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case FETCHING_TODOS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};
