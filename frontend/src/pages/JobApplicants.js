import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map(c =>

                            <tr>
                                <th scope="row">{c.name}</th>
                                <td>{c.lastName}</td>
                                <td>{c.email}</td>
                            </tr>

                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobApplicants;