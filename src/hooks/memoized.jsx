// Mỗi lần App re-render
// --> tạo ra một function mới
// --> Chart bị re-render
function App() {
    const handleChartTypeChange = (type) => { }
    return <Chart onTypeChange={handleChartTypeChange} />;
}

// Mỗi lần App re-render
// --> nhờ có useCallback() nó chỉ tạo function một lần đầu
// --> Nên Chart ko bị re-render.
function App() {
    const handleChartTypeChange = useCallback((type) => { }, [])
    return <Chart onTypeChange={handleChartTypeChange} />;
}

//----------------------------------------------------------------

// Mỗi lần App re-render
// --> tạo ra một mảng mới
// --> Chart bị re-render do props thay đổi
function App() {
    const data = [{}, {}, {}];
    return <Chart data={data} />;
}

// Mỗi lần App re-render
// --> nhờ có useMemo() nó chỉ tạo ra cái mảng 1 lần đầu
// --> Nên Chart ko bị re-render.
function App() {
    const data = useMemo(() => [{}, {}, {}], [])
    return <Chart data={data} />;
}
