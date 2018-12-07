import * as React from 'react';

interface IMyFunctionalComp {
    anotherValue: string
}

const MyFunctionalComp = (props: IMyFunctionalComp) => {
    return (
        <div>
            <p>A functional component</p>
        </div>
    )
};

export default MyFunctionalComp