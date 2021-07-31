import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../Input";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ValidationErrorsMessage from '../../ValidationErrorsMessage';
import { updateEmployer } from '../../../api/employerApi';
import { updateSuccess } from '../../../redux/actions/employerActions';

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

export default EmployerDetailsForm;