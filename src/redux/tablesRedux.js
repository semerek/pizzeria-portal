import Axios from 'axios';
import { api } from '../settings';


/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const FETCH_UPDATE = createActionName('FETCH_UPDATE');
/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const fetchUpdate = (id, status) => ({id, status, type: FETCH_UPDATE});

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.tables}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
    
  };
};

export const update = (id, status, payload) => {
  return (dispatch, getState) => {

    Axios
      .put (`${api.url}/${api.tables}/${payload.id}`)
      .then(res =>{
        dispatch(fetchUpdate(res.data));
      })
      .get(`${api.url}/${api.tables}`)
      .then(res => {
        dispatch(fetchUpdate(id, status));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case FETCH_UPDATE: {
      return {
        ...statePart,
        data: statePart.data.map (order => order.id === action.id ? {...order, status: action.status } : order ),
      };
    }
    default:
      return statePart;
  }
}