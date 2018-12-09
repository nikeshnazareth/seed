import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IGlobalState } from '../reducers';
import { initialisePosts } from '../reducers/post/post.actions';
import { InitPostsAction } from '../reducers/post/post.actions.type';
import { INewRecord, IRecord } from '../Server';

class Posts extends Component<IProps> {
    public componentDidMount(): void {
        this.props.initialisePosts();
    }

    public render(): JSX.Element {
        const records = (this.props.newPost ? [this.props.newPost] : [])
            .concat(this.props.posts)
            .map((record: any) => (
                <div key={record.id}>
                    <h3>{record.title}</h3>
                    <p>{record.body}</p>
                </div>
            ));
        return (
            <div>
                <h1>Posts</h1>
                {records}
            </div>
        );
    };
}

const mapStateToProps = (state: IGlobalState) => ({
    newPost: state.posts.item,
    posts: state.posts.items
});

interface IProps {
    initialisePosts: () => (dispatch: Dispatch<InitPostsAction>) => void;
    newPost?: INewRecord;
    posts: IRecord[];
}

export default connect(mapStateToProps, {initialisePosts})(Posts);
