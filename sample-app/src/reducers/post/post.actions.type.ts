import { Action } from 'redux';
import { IRecord } from '../../Server';

export type InitPostsAction = Action<PostActionNames.INITIALISE_POSTS> & {
    posts: IRecord[];
};

export type NewPostAction = Action<PostActionNames.NEW_POST> & {
    post: IRecord;
}

export type PostAction = InitPostsAction | NewPostAction;

export enum PostActionNames {INITIALISE_POSTS, NEW_POST}
