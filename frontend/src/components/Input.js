import React from 'react';

const Input = ({ error, id, onChange, name, value, type, label, placeholder, className, onBlur }) => {

    if (error) {
        className += ' is-invalid';
    }

    let isFormCheck = false;

    if (type === 'checkbox' || type === 'radio') {
        className = 'form-check-input';
        isFormCheck = true;

    } else {
        className = `form-control ${className}`;
    }


    return (
        <div className="form-group my-2">
            {label && (!isFormCheck && (<label className="form-label" htmlFor={id}>{label}</label>))}
            <div className={`${isFormCheck ? 'form-check' : 'input-group'}`}>

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

                {isFormCheck && (<label className="form-label-check" htmlFor={id}>{label}</label>)}
            </div>
        </div>
    );
};


export default Input;