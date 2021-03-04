import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    // console.warn('RESPONSSNSNE');
    // console.log(response);

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
    
    // VV Below is the bad approach
    // dispatch({ type: 'FETCH_POSTS', payload: response });
    // // Bad approach !!! Breaking rules of action creator
    // const response = await jsonPlaceholder.get('/posts');

    // return {
    //     type: 'FETCH_POSTS',
    //     payload: response
    // };
};

// This doesn't resolve calling for the same User several time, cuz we call the function
// We recreate a version of this function everytime, not able 
// export const fetchUser = _.memorize(function(id) {
//     // return _.memoize(async function(dispatch) {  // <<< This too will not work
//     return async function(dispatch) {
//         const response = await jsonPlaceholder.get(`/users/${id}`);
//         dispatch({ type: 'FETCH_USER', payload: response.data });
//     };
// });


// export const _fetchUser = id => dispatch => {  // << private function?
//     _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const repsonse = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });



export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
}

