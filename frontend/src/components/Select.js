import React from 'react';

const Select = ({ id, name, defaultOption = {}, value, label, options = [], error, onChange, onBlur }) => {

    let className = "form-control form-select";

    if (error) {
        className += " is-invalid";
    }

    return (
        <div className="form-group my-2">

            {label && (<label className="form-label" htmlFor={id}>{label}</label>)}

            <select className={className} value={value} name={name} onChange={onChange} onBlur={onBlur} >

                {defaultOption ? <option value={defaultOption.value} label={defaultOption.label} />
                    :
                    <option value="" label="Bir seçim yapınız" />
                }

                {options.map(option =>
                    <option key={option.value} value={option.value} label={option.label} />
                )}

            </select>

            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default Select;
