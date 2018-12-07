import * as React from 'react';

export interface IMyComponent {
    myprop?: string;
}

export interface IMyComponentState {
    subheading: string;
}

class MyComponent extends React.Component<IMyComponent, IMyComponentState> {

    public static defaultProps: Partial<IMyComponent> = {
        myprop: "default value"
    };

    public state = {
        subheading: 'below the line'
    };

    public render() {
        return (
            <div>
                <h1>{this.props.myprop}</h1>
                <h3>{this.state.subheading}</h3>
            </div>
        );
    };
}

export default MyComponent;
