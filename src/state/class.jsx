class ColorBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            color: 'white',
        }
    }
    render() {
        return (
            <div>
                {this.state.color}
                <button onClick={() => this.setState({ color: 'black' })}>
                    Change to black
                </button>
                <button onClick={() => this.setState({ color: 'white' })}>
                    Change to white
                </button>
            </div>
        );
    }
}

class Counter extends PureComponent {
    constructor(props) {
        super(props);
        // State declaration
        this.state = {
            count: 0,
        }
    }
    render() {
        return (
            <div>
                {this.state.count}
                {/* use this.setState() function to update state */}
                <button
                    onClick={() => this.setState(prevState => ({
                        count: prevState.count + 1
                    }))}
                >
                    Increase
                </button>
            </div>
        );
    }
}
