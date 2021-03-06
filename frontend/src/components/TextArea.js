import React from 'react';

const TextArea = ({ error, id, onChange, name, value, label, placeholder, className, onBlur }) => {

    className = className || 'form-control';

    if (error) {
        className += ' is-invalid';
    }
    return (
        <div className="form-group my-2">
            {label && (<label className="form-label" htmlFor={id}>{label}</label>)}

            <div className="input-group">
                <textarea
                    id={id}
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

export default TextArea;


