import React, { useEffect, useState } from 'react';
import { getAllJobPosts } from '../api/jobPostApi';

const HomePage = () => {

    const [jobPosts, setJobPosts] = useState([]);

    useEffect(() => {
        loadJobPosts();
    }, []);

    const loadJobPosts = async () => {
        const result = await getAllJobPosts();
        setJobPosts(result.data.content);
    };

    return (
        <div>
            {jobPosts.map(p => {

                return (
                    <div style={{ padding: "10px", marginBottom: "5px", border: "1px solid #1e1e1e", borderRadius: "5px" }}>
                        <h3>
                            {p.jobPosition.positionName}
                        </h3>
                        <div>
                            {p.jobDescription}
                        </div>
                        <div style={{ color: "#ccc" }}>
                            {p.employer.email}
                        </div>
                    </div>
                );

            })}
        </div>
    );
};

export default HomePage;