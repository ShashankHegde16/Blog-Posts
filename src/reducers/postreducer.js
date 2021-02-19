const postReducer = (state = [], action) => {

    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }

}
export default postReducer;

/*
-- Rule of Reducers--
Must Return any value other than undfined
Produces 'State' or data based on previous state
Reducers are pure function, Must not reach 'out of itself' to decide what value to return
must not mutate its input 'state' arguement
*/