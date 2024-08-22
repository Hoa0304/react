function App() {
    const [filters, setFilters] = useState();
    useEffect(() => {
        // EVERY
        // No dependencies defined
        // Always execute after every render
        return () => {
            // Execute before the next effect or unmount.
        };
    });

    useEffect(() => {
        // ONCE
        // Empty dependencies
        // Only execute once after the FIRST RENDER
        return () => {
            // Execute once when unmount
        };
    }, []);
    useEffect(() => {
        // On demand
        // Has dependencies
        // Only execute after the first RENDER or filters state changes
        return () => {
            // Execute before the next effect or unmount.
        };
    }, [filters]);
}