import { IRecord } from '../../Server';
import { PostAction, PostActionNames } from './post.actions.type';

export interface IPostState {
    item?: IRecord;
    items: IRecord[]
}

export default function (state = initialState, action: PostAction) {
    switch (action.type) {
        case PostActionNames.INITIALISE_POSTS:
            return {
                ...state,
                items: action.posts
            };
        case PostActionNames.NEW_POST:
            return {
                ...state,
                item: action.post
            };
        default:
            return state;
    }
};

const initialState: IPostState = {
    item: undefined,
    items: []
};
