import React from 'react';
const ToggleBtn = ({ title, ...rest }) => {
    return (
        <label className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
            <input
                {...rest}
                type="checkbox"
                className="d-none" // مخفی کردن input اصلی
            />
            <div className="custom-switch"></div>
            <span className="ms-3 mb-0">{title}</span>
        </label>

    );
};

export default ToggleBtn;