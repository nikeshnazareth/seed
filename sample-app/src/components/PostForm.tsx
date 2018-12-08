import * as React from 'react';
import { ChangeEvent, Component, FormEvent } from 'react';

class PostForm extends Component {

    public state: IState = {
        body: '',
        title: ''
    };

    public render(): JSX.Element {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label><br/>
                        <input type="text"
                               name="title"
                               onChange={this.onTitleChange}
                               value={this.state.title}
                        />
                    </div>
                    <br/>
                    <div>
                        <label>Body:</label><br/>
                        <textarea name="body"
                                  onChange={this.onBodyChange}
                                  value={this.state.body}/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    };

    private onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({title: e.target.value})
    };

    private onBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({body: e.target.value})
    };

    private onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const record: INewRecord = {
            body: this.state.body,
            title: this.state.title
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            body: JSON.stringify(record),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        })
            .then(res => res.json())
            // tslint:disable-next-line
            .then(data => console.log(data));
    };

}

interface IState {
    body: string;
    title: string;
}

interface INewRecord {
    body: string;
    title: string;
}

export default PostForm;
