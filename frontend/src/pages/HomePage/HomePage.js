import React, { useEffect, useState } from 'react';
import onlineResume from '../../assets/undraw_online_resume.svg';
import './HomePage.scss';
import { FaBriefcase, FaRegAddressCard, FaUserCheck } from 'react-icons/fa';
import SingleJob from '../../components/SingleJob/SingleJob';
import { getAllJobPostings } from '../../api/jobPostingApi';

const HomePage = () => {

    const [lastJobs, setLastJobs] = useState([]);

    useEffect(async () => {
        try {
            const result = await getAllJobPostings({ size: 4 });
            if (result.data)
                setLastJobs(result.data.content);
        } catch (err) { 
        }
    }, [])
    return (
        <>
            <section className="mt-5">
                <div className="container">
                    <div className="pt-5">
                        <div className="row">
                            <div className="col-lg-6 p-5">
                                <h1 className="fw-bold" style={{ marginTop: '5rem' }}>
                                    HRMS, Hemen iş Aramaya Başla
                                </h1>
                            </div>

                            <div className="col-lg-6 bg-white" style={{ borderTopLeftRadius: '5rem', borderBottomRightRadius: '5rem' }}>
                                <img className="mt-2 d-md-none d-none d-lg-block" src={onlineResume} alt="online resume svg" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="apply-steps">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div>
                                <FaUserCheck className="large-icon" />
                                <span className="ms-3"> Hemen Kayıt Ol</span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div>
                                <FaRegAddressCard className="large-icon" />
                                <span className="ms-3"> CV'ni Ekle</span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div>
                                <FaBriefcase className="large-icon" />
                                <span className="ms-3">Hayalindeki İşi Bul</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="last-posts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">


                            <div className="section-title p-5">
                                <span className="badge bg-primary">Yeni İlanlar</span>
                                <h2 > Son İş İlanlarına Göz At</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row contents">
                        {lastJobs.map(job =>
                            <div className="col-lg-3 col-md-6" key={job.id}>
                                <SingleJob
                                    title={job.jobPosition.positionName}
                                    description={job.jobDescription}
                                    company={job.employer.company}
                                    workRemotely={job.workRemotely}
                                    tags={[
                                        job.employmentType,
                                        (job.workRemotely ? 'Remote' : 'İş Yerinde')
                                    ]}
                                    jobId={job.id}
                                    location={job.location}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>


        </>
    );
};

export default HomePage;