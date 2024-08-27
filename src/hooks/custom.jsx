function useMagicColor() {
    // eslint-disable-next-line no-undef
    const [color, setColor] = useState('green');
    // eslint-disable-next-line no-undef
    useEffect(() => {
        const intervalRef = setInterval(() => {
            // eslint-disable-next-line no-undef
            const newColor = randomColor();
            setColor(newColor);
        }, 2000);
        return () => {
            clearInterval(intervalRef);
        }
    }, [])
    // Custom hooks return data instead of JSX
    return color;
}
// component
// eslint-disable-next-line react-refresh/only-export-components, no-unused-vars
function MagicBox() {
    const color = useMagicColor();
    return <div className="magic-box" style={{ backgroundColor: color }}></div>
}
// sang custom hooks
function useClock() {
    // eslint-disable-next-line no-undef
    const [timeString, setTimeString] = useState('');
    // eslint-disable-next-line no-undef
    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            // HH:mm:ss
            // eslint-disable-next-line no-undef
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000);
        return () => {
            // cleanup
            console.log('Clock cleanup');
            clearInterval(clockInterval);
        };
    }, []);
    return { timeString };
}
//sử dụng component clock
// eslint-disable-next-line react-refresh/only-export-components, no-unused-vars
function Clock() {
    const { timeString } = useClock();
    return (
        <p style={{ fontSize: '42px' }}>{timeString}</p>
    );
}

// eslint-disable-next-line react-refresh/only-export-components, no-unused-vars
function BetterClock() {
    const { timeString } = useClock();
    return (
        <div className="better-clock">
            <p className="better-clock__time">{timeString}</p>
        </div>
    );
}
