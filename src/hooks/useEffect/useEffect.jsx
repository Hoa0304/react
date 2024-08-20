function App() {
    const [color, setColor] = useState('deeppink');
    // executed after each render
    useEffect(() => {
        // do your side effect here ...
        return () => {
            // Clean up here ...
            // Executed before the next render or unmount
        };
    }, []);
    // rendering
    return <h1>Easy Frontend</h1>;
}