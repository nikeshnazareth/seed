import { Dispatch } from 'redux';

import Server, { INewRecord } from '../../Server';
import { InitPostsAction, NewPostAction, PostActionNames } from './post.actions.type';

export const initialisePosts = () => (dispatch: Dispatch<InitPostsAction>) => {
    Server.get()
        .then(posts => dispatch({
            posts,
            type: PostActionNames.INITIALISE_POSTS
        }));
};

export const newPost = (record: INewRecord) => (dispatch: Dispatch<NewPostAction>) => {
    Server.post(record)
        .then(response => dispatch({
            post: response,
            type: PostActionNames.NEW_POST
        }));
};
