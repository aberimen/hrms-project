import React from 'react';
import Input from '../Input';
import './JobsFilter.scss';

const JobsFilter = () => {
    return (
        <div className="filter-menu">

            <h5>Filtrele</h5>
            <div className="filter-group">
                <h6>Pozisyon</h6>
                <Input type="checkbox" label="Java Developer" />
            </div>

            <div className="filter-group">
                <h6>Çalışma Tipi</h6>
                <Input type="checkbox" label="Tam Zamanlı" />
                <Input type="checkbox" label="Yarı Zamanlı" />
                <Input type="checkbox" label="Stajyer" />

            </div>

            <div className="filter-group">
                <h6>Maaş Sklası</h6>
                <div className="d-flex">
                    <div className="col-6">
                        <Input
                            name="minSalary"
                            placeholder="Min"
                            type="number"
                            className="me-2" />
                    </div>
                    <div className="col-6">
                        <Input
                            name="maxSalary"
                            placeholder="Max"
                            type="number"
                        />

                    </div>
                </div>

            </div>

            <div className="filter-group">
                <h6>Lokasyon</h6>
                <Input type="checkbox" label="Tam Zamanlı" />
                <Input type="checkbox" label="Yarı Zamanlı" />
                <Input type="checkbox" label="Stajyer" />

            </div>

            <div className="filter-group">
                <h6>Uzaktan Çalışma</h6>
                <Input type="checkbox" label="Tam Zamanlı" />
                <Input type="checkbox" label="Yarı Zamanlı" />
                <Input type="checkbox" label="Stajyer" />

            </div>
        </div>
    );
};

export default JobsFilter;