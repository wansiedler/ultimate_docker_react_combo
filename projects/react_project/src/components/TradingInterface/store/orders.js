import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_ORDERS, DELETE_ORDER, ADD_ORDER } from './types';

// GET ORDERS
export const getLeads = () => (dispatch, getState) => {
  axios
    .get('/api/orders/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ORDERS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE ORDER
export const deleteLead = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/orders/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
      dispatch({
        type: DELETE_ORDER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD ORDER
export const addLead = (order) => (dispatch, getState) => {
  axios
    .post('/api/orders/', order, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addLead: 'Lead Added' }));
      dispatch({
        type: ADD_ORDER,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
