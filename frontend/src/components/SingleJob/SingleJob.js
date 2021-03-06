import React from 'react';
import './SingleJob.scss';
import defaultImage from '../../assets/company-default.png'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { handleAddToFavoriteJobs, handleRemoveFromFavoriteJobs } from '../../redux/actions/candidateActions';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { FaCity } from 'react-icons/fa';
import { applyJob } from '../../api/candidateApi';
import { errorToast, successToast } from '../utils/notification';


const SingleJob = ({ title, description, tags = [], jobId, location }) => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const { favoriteJobs } = useSelector(state => state.candidate);

    const isFavoritedJob = favoriteJobs.find(j => j.jobId === jobId);

    const onClicFavoriteJobIcon = async () => {
        if (!isFavoritedJob) {
            await dispatch(handleAddToFavoriteJobs(user.id, jobId));
        }
        else {
            await dispatch(handleRemoveFromFavoriteJobs(user.id, jobId));
        }
    };

    const onClickApplyJob = async () => {
        try {
            if (user.role === 'CANDIDATE') {
                await applyJob(user.id, jobId);
                successToast("Başvurunuz alındı");
            } else {
                errorToast("Başvuru sırasında bir hata oluştu");
            }
        } catch (err) {
            errorToast("Başvuru sırasında bir hata oluştu");
        }
    }

    return (
        <div className="single-job">
            <div className="job-header">
                <div className="company-image">
                    <img src={defaultImage} alt="img" />
                </div>
                <div className="favorite-button">
                    <button className="btn" onClick={onClicFavoriteJobIcon}>
                        {!isFavoritedJob ?
                            <AiOutlineStar className="star-icon" />
                            : <AiFillStar className="star-icon" />
                        }
                    </button>
                </div>
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

                {location &&
                    <div className="job-location" >
                        <FaCity className="icon" />
                        <div>{location.city}</div>
                    </div>}

                <div className="job-description">
                    <p>
                        {description}
                    </p>
                </div>
            </div>

            <div className="card-submit">
                <button className="btn btn-primary" onClick={onClickApplyJob}>Başvur</button>
            </div>
        </div>
    );
};

export default SingleJob;