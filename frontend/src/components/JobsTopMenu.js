import React, { useEffect, useState } from 'react';
import Select from './Select';

const JobsTopMenu = ({ totalJobsCount, filters, handleFilters }) => {

    const [sizePerPage, setSizePerPage] = useState('10'); // sayfa başına iş ilanı

    useEffect(() => {
        handleFilters({
            ...filters,
            size: sizePerPage
        });
    }, [sizePerPage]);

    const onChange = (e) => {
        setSizePerPage(e.target.value);
    };

    return (
        <div className="jobs-top-menu w-100 bg-white rounded d-flex shadow-sm px-3 py-2 mb-2 align-items-center justify-content-between">
            <div className="">
                <span> Toplam <span className="fw-bold">{totalJobsCount}</span> iş ilanı var</span>
            </div>
            <div className="">
                <Select
                    defaultValue={10}
                    onChange={onChange}
                    options={[
                        { value: 20, label: 20 },
                        { value: 50, label: 50 },
                        { value: 100, label: 100 },
                    ]}
                />
            </div>
        </div>
    );
};

export default JobsTopMenu;