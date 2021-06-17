import React from 'react';

const Input = ({ error, id, onChange, name, value, type, label, placeholder, className, onBlur }) => {

    if (type !== 'checkbox') {
        className = `form-control ${className}`;
    } else {
        className = 'form-check-input';
    }

    if (error) {
        className += ' is-invalid';
    }
    return (
        <div className="form-group my-2">
            {label && (type !== 'checkbox' && (<label className="form-label" htmlFor={id}>{label}</label>))}
            <div className={`${type !== 'checkbox' ? 'input-group' : 'form-check'}`}>

                <input
                    id={id}
                    type={type || 'text'}
                    className={className}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                />

                {type === 'checkbox' && (<label className="form-label-check" htmlFor={id}>{label}</label>)}

                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

export default Input;