import React from 'react';
import { FaClock } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import CandidateDetailsForm from './forms/CandidateDetailsForm';
import EmployerDetailsForm from './forms/EmployerDetailsForm';

const MyDetailsPanel = () => {
    const isPendingForUpdate = false;
    const { user } = useSelector(state => state.auth);

    //keyler kullanıcı rolünü temsil ediyor
    const forms = {
        CANDIDATE: <CandidateDetailsForm user={user} />,
        EMPLOYER: <EmployerDetailsForm user={user} />,
    }

    return (
        <div className="container">
            <div className="border-bottom pb-2 d-flex">
                <h3 className="fw-bold"> Bilgilerim </h3>

                {isPendingForUpdate && <div className="pending-for-update ms-auto text-warning d-flex align-items-center">
                    <FaClock />
                    <span className="pending-text ms-1">Güncelleme onayı bekleniyor..</span>
                </div>}
            </div>
            <div className="row py-3">
                <div className="col-lg-4 mt-4">
                    <span className="text-muted"> Hesap bilgilerinizi buradan güncelleyebilirsiniz..</span>
                </div>
                <div className="col-lg-8">

                    {forms[user.role]}

                </div>
            </div>
        </div>
    );
};

export default MyDetailsPanel;