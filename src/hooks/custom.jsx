function useMagicColor() {
    const [color, setColor] = useState('green');
    useEffect(() => {
        const intervalRef = setInterval(() => {
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
function MagicBox() {
    const color = useMagicColor();
    return <div class="magic-box" style={{ backgroundColor: color }}></div>
}
// sang custom hooks
function useClock() {
    const [timeString, setTimeString] = useState('');
    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            // HH:mm:ss
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
function Clock() {
    const { timeString } = useClock();
    return (
        <p style={{ fontSize: '42px' }}>{timeString}</p>
    );
}

function BetterClock() {
    const { timeString } = useClock();
    return (
        <div className="better-clock">
            <p className="better-clock__time">{timeString}</p>
        </div>
    );
}
