import React from 'react';
import './SingleJob.scss';
import defaultImage from '../../assets/company-default.png'

const SingleJob = ({ title, description, tags = [] }) => {
    return (
        <div className="single-job">

            <div className="company-image">
                <img src={defaultImage} alt="img" />
            </div>

            <div className="card-body">
                <div className="job-title">
                    <h5>{title}</h5>
                </div>

                <div className="job-tags">
                    {tags.map(tag =>
                        <div className="tag" key={tag}>
                            {tag}
                        </div>
                    )}

                </div>

                <div className="job-description">
                    <p>
                        {description}
                    </p>
                </div>
            </div>

            <div className="card-submit">
                <button className="btn btn-primary">Başvur</button>
            </div>
        </div>
    );
};

export default SingleJob;