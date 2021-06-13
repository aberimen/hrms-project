import React from 'react';

const Input = ({ error, id, onChange, name, value, type, label, placeholder, className, onBlur }) => {

    className = `form-control ${className}`;

    if (error) {
        className += ' is-invalid';
    }
    return (
        <div className="form-group my-4">
            {label && (<label className="form-label" htmlFor={id}>{label}</label>)}
            <div className="input-group">

                <input
                    id={id}
                    type={type}
                    className={className}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                />

                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

export default Input;