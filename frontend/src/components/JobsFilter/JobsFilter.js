import React, { useEffect, useState } from 'react';
import Input from '../Input';
import './JobsFilter.scss';
import { FaFilter } from 'react-icons/fa';

const JobsFilter = ({ filters, setFilters }) => {

    const [values, setValues] = useState({
        employmentType: '',
        min: '',
        max: '',
        isRemote: '',
    });

    useEffect(() => {
        setFilters({ ...filters, ...values });
    }, [values]);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="filter-menu">


            <h5><FaFilter /> <span>Filtrele</span> </h5>

            <div className="filter-group">
                <h6>Çalışma Tipi</h6>
                <Input
                    type="radio"
                    label="Tam Zamanlı"
                    name="employmentType"
                    value="FULLTIME"
                    onChange={handleChange}
                />
                <Input
                    type="radio"
                    label="Yarı Zamanlı"
                    name="employmentType"
                    value="PARTTIME"
                    onChange={handleChange}
                />
                <Input
                    type="radio"
                    label="Yarı Zamanlı veya Tam Zamanlı"
                    name="employmentType"
                    value="FULLTIME_OR_PARTTIME"
                    onChange={handleChange}
                />
            </div>

            <div className="filter-group">
                <h6>Maaş Skalası</h6>
                <div className="d-flex">
                    <div className="col-6">
                        <Input
                            name="min"
                            placeholder="Min"
                            type="number"
                            className="me-2"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-6">
                        <Input
                            name="max"
                            placeholder="Max"
                            type="number"
                            onChange={handleChange}
                        />

                    </div>
                </div>

            </div>

            <div className="filter-group">
                <h6>Uzaktan Çalışma</h6>
                <Input
                    label="Evet"
                    type="radio"
                    value="true"
                    name="isRemote"
                    onChange={handleChange}
                />
                <Input
                    label="Hayır"
                    type="radio"
                    value="false"
                    name="isRemote"
                    onChange={handleChange}
                />


            </div>
        </div>
    );
};

export default JobsFilter;