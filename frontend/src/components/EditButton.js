import React from 'react';
import { FaRegEdit } from 'react-icons/fa';

const EditButton = ({ onClick }) => {
    return (
        <div>
            <button className="btn text-warning p-0  d-flex align-items-center" onClick={onClick}>
                <FaRegEdit />
                <span className="ms-1"></span>
            </button>

        </div>
    );
};

export default EditButton;