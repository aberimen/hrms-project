import React from 'react';

const Input = ({ error, onChange, name, type, label, placeholder, className }) => {

    className = className || 'form-control';

    if (error) {
        className += ' is-invalid';
    }
    return (
        <div className="form-group my-4">
            <div className="input-group">
                {label && (<label>{label}</label>)}
                <input type={type} className={className} name={name} placeholder={placeholder} onChange={onChange} />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

export default Input;