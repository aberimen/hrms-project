import React, { useRef, useState } from 'react';
import './ProfileImage.scss';
import defaultProfileImage from '../../assets/user-avatar.png';
import EditButton from '../EditButton';
import { saveImage } from '../../api/resumeApi';

const ProfileImage = ({ resume }) => {

    const [newImage, setNewImage] = useState();
    const fileInput = useRef();

    console.log(resume);
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
        try {
            const multipartFile = new FormData();
            multipartFile.append('file', file);
            await saveImage(resume.id, multipartFile);
        } catch (err) {
        }
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