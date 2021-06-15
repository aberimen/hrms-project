import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../components/Input';
import { useHistory } from 'react-router-dom';
import { registerEmployer } from '../api/employerApi';
import { registerCandidate } from '../api/candidateApi';

const SignupPage = () => {

    const history = useHistory();
    const isPageForEmployers = history.location.pathname === '/employer';

    const employerRegisterFormInitialValues = {
        company: "",
        phoneNumber: "",
        website: "",
    };

    const candidateRegisterFormInitialValues = {
        nationalId: "",
        name: "",
        lastName: "",
        yearOfBirth: ""
    };

    const employerRegisterFormValidations = {
        company: Yup.string().required('Şirket Adı alanı boş bırakılamaz'),
        phoneNumber: Yup.string().required('Telefon Numarası alanı boş bırakılamaz'),
        website: Yup.string().required('Website alanı boş bırakılamaz')
    };

    const candidateRegisterFormValidations = {
        nationalId: Yup.string().required('TC No alanı boş bırakılamaz'),
        name: Yup.string().required('İsim alanı boş bırakılamaz'),
        lastName: Yup.string().required('Soyisim alanı boş bırakılamaz'),
        yearOfBirth: Yup.string().required('Doğum Yılı alanı boş bırakılamaz')
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordRepeat: "",
            ...(isPageForEmployers ? employerRegisterFormInitialValues : candidateRegisterFormInitialValues)
        },

        validationSchema:
            Yup.object({
                email: Yup.string().required('E-posta alanı boş bırakılamaz'),
                password: Yup.string().required('Şifre boş bırakılamaz'),
                passwordRepeat: Yup.string().required('Şifre Tekrar alanı boş bırakılamaz'),
                ...(isPageForEmployers ? employerRegisterFormValidations : candidateRegisterFormValidations)
            }),

        onSubmit: (values, { resetForm, setSubmitting }) => {
            delete values.passwordRepeat;
            if (isPageForEmployers) {
                saveEmployer(values);
            } else {
                saveCandidate(values);
            }
        }

    });

    const saveEmployer = async (employer) => {
        try {
            await registerEmployer(employer);
        } catch (error) { }
    };

    const saveCandidate = async (candidate) => {
        try {
            await registerCandidate(candidate);
        } catch (error) { }
    };


    const { handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting } = formik;
    return (
        <div className="bg-light p-5">
            <div className="container bg-white border-radius p-5">

                <form onSubmit={handleSubmit}>
                    <h3>Kayıt Ol</h3>

                    {isPageForEmployers ?
                        <>
                            <Input
                                label="Şirket Adı *"
                                type="text"
                                name="company"
                                value={values.company}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.company && errors.company}
                                id="company" />

                            <Input
                                label="Telefon Numarası *"
                                type="text"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.phoneNumber && errors.phoneNumber}
                                id="phoneNumber" />

                            <Input
                                label="website *"
                                type="text"
                                name="website"
                                value={values.website}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.website && errors.website}
                                id="website" />
                        </>
                        :
                        <>
                            <Input
                                label="İsim *"
                                type="text"
                                name="name"
                                value={values.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.name && errors.name}
                                id="name" />

                            <Input
                                label="Soyisim *"
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.lastName && errors.lastName}
                                id="lastName" />

                            <Input
                                label="TC No *"
                                type="text"
                                name="nationalId"
                                value={values.nationalId}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.nationalId && errors.nationalId}
                                id="nationalId" />
                        </>

                    }

                    <Input
                        label="E-Posta *"
                        type="text"
                        name="email"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.email && errors.email}
                        id="email" />

                    <Input
                        label="Şifre *"
                        type="password"
                        name="password"
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.password && errors.password}
                        id="password" />

                    <Input
                        label="Şifre Tekrar *"
                        type="password"
                        name="passwordRepeat"
                        value={values.passwordRepeat}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.passwordRepeat && errors.passwordRepeat}
                        id="passwordRepeat" />


                    {!isPageForEmployers && <Input
                        label="Doğum Yılı *"
                        type="date"
                        name="yearOfBirth"
                        value={values.yearOfBirth}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.yearOfBirth && errors.yearOfBirth}
                        id="yearOfBirth" />}

                    <button className="btn btn-primary btn-apply" type="submit" name="submit" disabled={false} > Kayıt Ol </button>
                </form>
            </div >
        </div >
    );
};

export default SignupPage;