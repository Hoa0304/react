import React, { PureComponent } from 'react';

class App extends PureComponent{
    render(){
        return (
            <div>
                <h1>Hello World!</h1>
                <button onClick={() => this.handleClick()}>Click me!</button>
            </div>
        )
    }
}

export default App;
