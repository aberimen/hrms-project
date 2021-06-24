import React, { useEffect, useState } from 'react';
import { getAllJobPostings } from '../../api/jobPostingApi';
import JobsFilter from '../../components/JobsFilter/JobsFilter';
import SingleJob from '../../components/SingleJob/SingleJob';
import './JobsPage.scss';
import axios from "axios";


const JobsPage = () => {

    const [filters, setFilters] = useState({});
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        loadJobs();
    }, [filters]);

    const loadJobs = async () => {
        try {
            const result = await getAllJobPostings({ ...filters });
            setJobs(result.data.content);
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
                        <JobsFilter handleFilters={setFilters} />
                    </div>
                    {console.log(filters)}


                    <div className="col-lg-9">
                        <div className="row">

                            {jobs.map(job =>
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