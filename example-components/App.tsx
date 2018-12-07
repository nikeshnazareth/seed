import * as React from 'react';
import MyComponent from './MyComponent';
import MyFunctionalComp from './MyFunctionalComp';


class App extends React.Component {
    public render() {
        return (
            <div>
                <div>
                    <MyComponent myprop={"some value"}/>
                </div>

                <div>
                    <MyComponent/>
                </div>

                <div>
                    <MyFunctionalComp anotherValue={"something"}/>
                </div>

            </div>
        );
    }
}

export default App;
