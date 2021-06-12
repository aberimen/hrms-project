import React from 'react';

const Select = ({ id, name, value, label, options = [], iterateFor, error, keyField, onChange }) => {

    let className = "form-control form-select";

    if (error) {
        className += " is-invalid";
    }

    return (
        <div className="form-group my-4">
            {label && (<label className="form-label" htmlFor={id}>{label}</label>)}
            <select className={className} value={value} name={name} onChange={onChange}>
                <option value="" label="Bir seçim yapınız" />

                {options.map(value =>
                    <option key={value[keyField]} value={value[iterateFor]} label={value[iterateFor]} />
                )}

            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default Select;
