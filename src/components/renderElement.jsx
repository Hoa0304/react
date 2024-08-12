import React from "react";

function Element() {
    const name = 'Hoa';
    const age = 20;
    const isMale = false;
    const student = {
        name: 'jsx',
    };
    const colorList = ['red', 'blue', 'green'];

    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Age: {age}</p>
            <p>Gender: {isMale? 'Male' : 'Female'}</p>

            {isMale ? <p> Male </p> : <p> Female </p>} //c1

            {isMale && <p> Student is male </p>}
            {!isMale && <p> Student is female </p>} //c2

            {isMale && (
                <div>
                    <p>Student is male </p>
                    <p>Age: {age}</p>
                    <p>Gender: Male</p>
                </div>
            )} // c1: bắt buộc phải có 1 tk bọc ngoài, không được để ngang cấp

            {isMale && (
                <React.Fragment>
                    <p>Student is male </p>
                    <p>Age: {age}</p>
                    <p>Gender: Male</p>
                </React.Fragment>
            )} // c2: chỉ render ra 3 thẻ p (nó k có ý nghĩa gì) có thể để mỗi <></>

            <p>Student name: {student.name}</p>

            <ul>
                {colorList.map((color, index) => (
                    <li key={index} style={{ color }}>{color}</li>
                ))}
            </ul>
        </div>
    );
}
