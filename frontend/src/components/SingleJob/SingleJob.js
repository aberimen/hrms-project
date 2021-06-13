import React from 'react';
import './SingleJob.scss';
import image from '../../assets/undraw_online_resume.svg'

const SingleJob = ({ title }) => {
    return (
        <div className="single-job">

            <div className="company-image">
                <img src="https://kuponla.com/wp-content/uploads/2020/02/airbnb-guncel-indirim-kuponlari-KUPONLACOM.png" alt="img" />
            </div>

            <div className="card-body">
                <div className="job-title">
                    <h5>{title}</h5>
                </div>

                <div className="job-tags">
                    {/* tags here */}
                    <div className="tag">Uzaktan</div>
                    <div className="tag">Yakından</div>
                    <div className="tag">Full Time</div>

                </div>
            </div>

            <div className="card-submit">
                <button className="btn btn-primary">Başvur</button>
            </div>
        </div>
    );
};

export default SingleJob;