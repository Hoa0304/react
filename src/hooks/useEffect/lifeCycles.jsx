class App extends PureComponent {
    componentDidMount() {
        console.log('Component Did Mount');
    }
    componentWillUnmount() {
        console.log('Component Will Unmount');
    }
}
// viết lại tương đương với hooks
function App() {
    useEffect(() => {
        console.log('Component Did Mount');
        return () => {
            console.log('Component Will Unmount');
        };
    }, []);
}

class Apps extends PureComponent {
    componentDidMount() {
        console.log('Component Did Mount or Did Update');
    }
    componentDidUpdate() {
        console.log('Component Did Mount or Did Update');
    }
}

// viết lại tương đương với hooks
function Apps() {
    useEffect(() => {
        console.log('Component Did Mount or Did Update');
    });
}
