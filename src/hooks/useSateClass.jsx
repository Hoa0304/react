import React, { PureComponent } from 'react';

class ColorBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            shape: 'square',
            color: 'deeppink',
        };
    }
    handleBoxClick() {
        this.setState({ color: 'green' });
    };
    render() {
        const { color } = this.state;
        return (
            <div
                className="color-box"
                style={{ backgroundColor: color }}
                onClick={this.handleBoxClick}
            ></div>
        )
    }
}
