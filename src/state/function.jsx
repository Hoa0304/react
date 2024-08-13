function ColorBox(props) {
    const [color, setColor] = useState('white');
    return (
        <div>
            {color}
            <button onClick={() => setColor('black')}>Change to black</button>
            <button onClick={() => setColor('white')}>Change to white</button>
        </div>
    );
}

function Counter(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            {count}
            <button onClick={() => setCount(x => x + 1)}>Increase</button>
        </div>
    );
}
