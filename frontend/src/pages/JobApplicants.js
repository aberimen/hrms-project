import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAppliedCandidates } from '../api/jobPostingApi';

const JobApplicants = () => {
    const [candidates, setCandidates] = useState([]);

    const { jobId } = useParams();

    useEffect(async () => {
        try {
            const result = await getAppliedCandidates(jobId);
            setCandidates(result.data);
        } catch (err) { }
    }, []);

    return (
        <div className="bg-light">
            <div className="page-cover">
                <div className="page-title">
                    <h3>Başvuran Aday Listesi</h3>
                </div>
            </div>
            <div className="container mt-5 rounded bg-white p-5">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Adı</th>
                            <th scope="col">Soyadı</th>
                            <th scope="col">Email</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map(c =>

                            <tr>
                                <th scope="row">{c.name}</th>
                                <td>{c.lastName}</td>
                                <td>{c.email}</td>
                                <td><Link className="btn btn-primary" to={`/resume-preview/${c.resumeId}`}>CV Gör</Link></td>
                            </tr>

                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobApplicants;