import React from "react";
import PropTypes from "prop-types";

function ColorBox(props) {
    const { color } = props;

    return (
        <div style={{ backgroundColor: color, width: "100px", height: "100px" }}></div>
    );
}

// Bắt buộc tk cha truyền thuộc tính xuống
ColorBox.prototype = {
    color: PropTypes.string.isRequired, // kiểm tra kiểu dữ liệu và bắt buộc
    rounded: PropTypes.bool, // không bắt buộc
};
// nếu tk cha kh truyền xuống thì phải gắn giá trị mặc định
ColorBox.defaultProps = {
    rounded: true,
}

export default ColorBox;
