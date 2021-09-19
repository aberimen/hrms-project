import React, { useRef, useState } from 'react';
import './ProfileImage.scss';
import defaultProfileImage from '../../assets/user-avatar.png';
import EditButton from '../EditButton';
import { handleUpdateProfileImage } from '../../redux/actions/resumeActions';
import { useDispatch } from 'react-redux';

const ProfileImage = ({ resume }) => {

    const [newImage, setNewImage] = useState();
    const fileInput = useRef();
    const dispatch = useDispatch();

    const onClickBtn = () => {
        fileInput.current.click();
    };

    const onChangeFile = (e) => {
        if (e.target.files.length < 1) {
            return;
        }
        const file = e.target.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            setNewImage(fileReader.result);
            uploadFile(file);
        };
        fileReader.readAsDataURL(file);
    };

    const uploadFile = async (file) => {
        const multipartFile = new FormData();
        multipartFile.append('file', file);
        await dispatch(handleUpdateProfileImage(resume.id, multipartFile));
    };

    return (
        <div className="avatar">
            <div className="image">
                <img src={newImage || resume.profileImage || defaultProfileImage} />
            </div>
            <div className="edit-img">
                <EditButton onClick={onClickBtn} />
                <input className="d-none" type="file" ref={fileInput} onChange={onChangeFile} />
            </div>
        </div>
    );
};

export default ProfileImage;