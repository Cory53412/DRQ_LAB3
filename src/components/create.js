import React from 'react';//imported when class extended

export class Create extends React.Component { //extending react class Component

    render() {
        return (
            <div>
                <h1>Hello from create component</h1> 
                {/* heading is displayed on Footer component */}
            </div>
        );
    }
}