import { combineReducers } from 'redux';
import postReducer, { IPostState } from './post/post.reducer';

export default combineReducers({
    posts: postReducer
});

export interface IGlobalState {
    posts: IPostState
}