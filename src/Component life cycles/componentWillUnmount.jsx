import React, { PureComponent } from 'react';

class CountDown extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentSecond: 0,
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(prevState => ({
                currentSecond: prevState.currentSecond - 1,
            }));
        }, 1000);
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    render() {
        const { currentSecond } = this.state;
        return <div>{currentSecond}</div>;
    }
}