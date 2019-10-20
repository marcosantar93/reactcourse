import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";
import history from "../history";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

// we use the middleware redux-thunk in order to return an async function which uses an api instead of an
// object, as we would have had to do if we had followed the conventional flow
// whenever we get a response back from axios, the response has a ton of info but we only care about the data
export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  });
  // do some programmatic navigation to get the user to the root route
  history.push("/");
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get("/streams");
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({
    type: FETCH_STREAM,
    payload: response.data
  });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({
    type: EDIT_STREAM,
    payload: response.data
  });
  history.push("/");
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({
    type: DELETE_STREAM,
    payload: id
  });
};
