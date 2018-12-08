import * as React from 'react';
import { Component } from 'react';

class Posts extends Component {

    public state: IState = {
        posts: []
    };

    public componentDidMount(): void {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({posts: data}));
    }

    public render(): JSX.Element {
        const records = this.state.posts.map(record => (
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

interface IState {
    posts: IRecord[];
}

interface IRecord {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export default Posts;
