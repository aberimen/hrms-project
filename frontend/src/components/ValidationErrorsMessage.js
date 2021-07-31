import React from 'react';

const ValidationErrorsMessage = ({ errors = [] }) => {
    return (
        <ul className="mt-4">
            {errors.map(error => 
                <li key={error} className="text-danger">
                    {error}
                </li>
            )}
        </ul>
    );
};

export default ValidationErrorsMessage;