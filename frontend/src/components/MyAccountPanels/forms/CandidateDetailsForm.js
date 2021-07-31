import React, { useState } from 'react';
import Input from '../../Input';
import { useDispatch } from 'react-redux';
import { useFormik } from "formik";
import * as Yup from 'yup';
import ValidationErrorsMessage from '../../ValidationErrorsMessage';
import { updateCandidateSuccess } from '../../../redux/actions/candidateActions';
import { updateCandidate } from '../../../api/candidateApi';

const CandidateDetailsForm = ({ user }) => {

    const { id, email, name, lastName, emailVerified } = user;

    const dispatch = useDispatch();
    const [apiError, setApiError] = useState({
        validationErrors: {},
        message: ''
    });

    const formik = useFormik({
        initialValues: {
            id,
            name,
            lastName,
            email,
        },

        validationSchema:
            Yup.object({
                email: Yup.string().required('E-posta alanı boş bırakılamaz'),
                name: Yup.string().required('İsim alanı boş bırakılamaz'),
                lastName: Yup.string().required('Soyisim alanı boş bırakılamaz'),

            }),
        enableReinitialize: true,

        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                const result = await updateCandidate(id, values);
                dispatch(updateCandidateSuccess(result.data));
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
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-12">
                        <Input
                            label="İsim"
                            name="name"
                            value={values.name}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.name && errors.name}
                        />
                    </div>
                    <div className="col-lg-12">
                        <Input
                            label="Soyisim"
                            name="lastName"
                            value={values.lastName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.lastName && errors.lastName}
                        />
                    </div>
                    <div className="col-lg-12">
                        <Input
                            name="email"
                            disabled
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
        </>
    );
}

export default CandidateDetailsForm;