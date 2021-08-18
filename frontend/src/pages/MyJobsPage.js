import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAppliedCandidates, getEmployerJobs } from '../api/jobPostingApi';

const MyJobsPage = () => {

    const [jobs, setJobs] = useState([]);

    const { user } = useSelector(state => state.auth);

    useEffect(async () => {
        try {
            const result = await getEmployerJobs(user.id);
            setJobs(result.data.content);
        } catch (err) { }
    }, []);

    const onClickGetCandidates = async (jobId) => {
        try {
            const result = await getAppliedCandidates(jobId);
            alert(JSON.stringify(result.data))
        } catch (err) { }
    };

    return (
        <div className="my-jobs bg-light" style={{ minHeight: '100vh' }}>
            <div className="page-cover">
                <div className="page-title">
                    <h3>İş İlanlarım</h3>
                </div>
            </div>

            <div className="container mt-5 rounded bg-white p-5">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#Id</th>
                            <th scope="col">Pozisyon</th>
                            <th scope="col">Oluşturulma Tarihi</th>
                            <th scope="col">Başvurular</th>
                        </tr>
                    </thead>
                    <tbody>

                        {jobs.map(job =>
                            <tr>
                                <th scope="row">{job.id}</th>
                                <td>{job.jobPosition.positionName}</td>
                                <td>{new Date(job.createdAt).toLocaleString('tr-TR')}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => onClickGetCandidates(job.id)}>Başvuruları Gör</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobsPage;