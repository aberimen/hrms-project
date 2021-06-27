import React, { useEffect, useState } from 'react';
import { getLocations } from '../../api/commonApi';
import { getAllJobPostings } from '../../api/jobPostingApi';
import Input from '../../components/Input';
import JobsFilter from '../../components/JobsFilter/JobsFilter';
import JobsTopMenu from '../../components/JobsTopMenu';
import Select from '../../components/Select';
import SingleJob from '../../components/SingleJob/SingleJob';
import './JobsPage.scss';


const JobsPage = () => {
    const [locations, setLocations] = useState([]);
    const [filters, setFilters] = useState({
        size: '10'
    });
    const [jobsPage, setJobsPage] = useState({ //pagination ve iş ilanlarını içeriyor
        content: [] //iş ilanları
    });

    useEffect(() => {
        loadJobs();
    }, [filters]);

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        loadLocations();
    }, []);

    const loadLocations = async () => {
        try {
            const result = await getLocations();
            setLocations(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    const loadJobs = async () => {
        try {
            const result = await getAllJobPostings({ ...filters });
            setJobsPage({
                ...result.data
            });
        } catch (error) { }
    };
    return (
        <div className="jobs-page bg-light">
            <div className="page-cover">
                <div className="page-title">
                    <h3>Güncel İş İlanları</h3>
                </div>

                <div className="row text-center justify-content-center p-4">
                    <div className="col-lg-3 col-md-4 col-sm-6">

                        <Input
                            placeholder="Pozisyon"
                            name="positionName"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">

                        <Select
                            name="location"
                            onChange={handleChange}
                            defaultOption={{ label: 'Şehir', value: '' }}
                            options={locations.map(l => ({ value: l.city, label: l.city }))}

                        />
                    </div>
                </div>
            </div>
            <div className="container py-5">

                <div className="row">

                    <div className="col-lg-3">
                        <JobsFilter
                            filters={filters}
                            setFilters={setFilters}
                        />
                    </div>

                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-end me-3 mb-2">
                                <JobsTopMenu
                                    filters={filters}
                                    setFilters={setFilters}
                                    totalJobsCount={jobsPage.totalElements}
                                />
                            </div>

                            {jobsPage.content.map(job =>
                                <div className="col-lg-6" key={job.id}>
                                    <SingleJob
                                        title={job.jobPosition.positionName}
                                        description={job.jobDescription}
                                        company={job.employer.company}
                                        workRemotely={job.workRemotely}
                                        tags={[
                                            job.employmentType,
                                            (job.workRemotely ? 'Remote' : 'İş Yerinde')
                                        ]}
                                    />
                                </div>
                            )}


                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default JobsPage;