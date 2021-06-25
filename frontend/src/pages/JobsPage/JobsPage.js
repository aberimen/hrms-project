import React, { useEffect, useState } from 'react';
import { getAllJobPostings } from '../../api/jobPostingApi';
import JobsFilter from '../../components/JobsFilter/JobsFilter';
import JobsTopMenu from '../../components/JobsTopMenu';
import SingleJob from '../../components/SingleJob/SingleJob';
import './JobsPage.scss';


const JobsPage = () => {

    const [filters, setFilters] = useState({
        size: '10'
    });
    const [jobsPage, setJobsPage] = useState({ //pagination ve iş ilanlarını içeriyor
        content: [] //iş ilanları
    });

    useEffect(() => {
        loadJobs();
    }, [filters]);

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
            </div>
            <div className="container py-5">

                <div className="row">

                    <div className="col-lg-3">
                        <JobsFilter
                            filters={filters}
                            handleFilters={setFilters}
                        />
                    </div>

                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-end me-3 mb-2">
                                <JobsTopMenu
                                    filters={filters}
                                    handleFilters={setFilters}
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