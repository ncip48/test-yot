import {FETCHING_DEALS_SEARCH, FETCHING_TODOS} from '../api/constants';

export const searchDeals = (searchStr = '') => {
  return {type: FETCHING_DEALS_SEARCH, payload: searchStr};
};

export const fetchTodos = (dealId) => {
  return {type: FETCHING_TODOS, payload: dealId};
};
