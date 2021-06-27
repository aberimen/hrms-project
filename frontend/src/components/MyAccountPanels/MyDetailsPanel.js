import React, { useState } from 'react';
import { FaClock } from 'react-icons/fa';
import Input from '../Input';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateEmployer } from '../../api/employerApi';
import { updateSuccess } from '../../redux/actions/employerActions';
import { useDispatch } from 'react-redux';
import ValidationErrorsMessage from '../ValidationErrorsMessage';


const MyDetailsPanel = () => {
    const isPendingForUpdate = false;
    const { user } = useSelector(state => state.auth);

    //keyler kullanıcı rolünü temsil ediyor
    const forms = {
        ADMIN: <AdminDetailsForm />,
        CANDIDATE: <CandidateDetailsForm />,
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

const EmployerDetailsForm = ({ user = {} }) => {
    const { id, company, phoneNumber, website, email } = user;
    const dispatch = useDispatch();
    const [apiError, setApiError] = useState({
        validationErrors: {},
        message: ''
    });

    const formik = useFormik({
        initialValues: {
            company,
            phoneNumber,
            website,
            email,
        },

        validationSchema:
            Yup.object({
                company: Yup.string().required('Şirket Adı alanı boş bırakılamaz'),
                phoneNumber: Yup.string().required('Başlangıç Tarihi alanı boş bırakılamaz'),
                website: Yup.string().required('Başlangıç Tarihi alanı boş bırakılamaz'),
                email: Yup.string().required('Başlangıç Tarihi alanı boş bırakılamaz'),

            }),
        enableReinitialize: true,

        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                const result = await updateEmployer(id, values);
                dispatch(updateSuccess(result.data));
            } catch (err) {
                if (err.response.data.validationErrors) {
                    setApiError({
                        validationErrors: err.response.data.validationErrors
                    });
                } else {
                    setApiError({
                        message: err.response.data.message
                    });
                }
            }
        }
    });

    const { handleSubmit, handleChange, handleBlur, values, touched, errors, dirty } = formik;

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-12">
                    <Input
                        label="Firma Adı"
                        name="company"
                        value={values.company}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.company && errors.company}
                    />
                </div>
                <div className="col-lg-12">
                    <Input
                        label="Web Sitesi"
                        name="website"
                        value={values.website}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.website && errors.website}
                        id="website" />
                </div>
                <div className="col-lg-12">
                    <Input
                        label="Telefon Numarası"
                        type="text"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.phoneNumber && errors.phoneNumber}
                        id="phoneNumber" />
                </div>
                <div className="col-lg-12">
                    <Input
                        name="email"
                        label="E-Posta"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.email && errors.email}
                        id="email" />
                </div>

                <div className="col-lg-12 py-3">
                    <button className="btn btn-primary" type="submit" name="submit" disabled={!dirty}> Kaydet </button>
                </div>

                {apiError.validationErrors && <ValidationErrorsMessage errors={Object.values(apiError.validationErrors)} />}

                {apiError.message && <span className="text-danger">{apiError.message}</span>}
            </div>
        </form>

    );
}

const CandidateDetailsForm = () => {
    return (
        <>
            Candidate
        </>
    );
}

const AdminDetailsForm = () => {

}

export default MyDetailsPanel;