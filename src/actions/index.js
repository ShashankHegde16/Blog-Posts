import jsonApi from '../apis/jsonplaceholder'
import _ from 'lodash';


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    (async () => {
        return await dispatch(getPosts());
    })().then((response) => {
        _.chain(getState().posts)
            .map('userId')
            .uniq()
            .forEach(id => {
                dispatch(getUser(id))
            })
            .value();
    });

};

export const getPosts = () => {
    return (dispatch) => {
        (async () => {
            return await jsonApi.get('/posts');
        })().then((response) => {
            dispatch({
                type: 'FETCH_POSTS',
                payload: response.data
            });
        }).catch(err => console.error(err));
    }
}

export const getUser = id => dispatch => {
    return (async () => {
        return await jsonApi.get('/users/' + id);
    })().then((response) => {
        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        });
    }).catch(err => console.error(err));
};

// const _fetchUser = _.memoize((id, dispatch) => {
//     (async () => {
//         return await jsonApi.get('/users/' + id);
//     })().then((response) => {
//         dispatch({
//             type: 'FETCH_USER',
//             payload: response.data  
//         });
//     }).catch(err => console.error(err));
// });


