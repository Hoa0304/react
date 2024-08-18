import React from 'react';

function ColorBox() {
    const [share, setShape] = useState('square');
    const [color, setColor] = useState('deeppink');
    function handleBoxClick() {
        setColor('green');
    }
    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        ></div>
    );
}
