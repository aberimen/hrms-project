import React, { useEffect, useState } from 'react';
import { getDepartments, getLanguages, getUniversities } from '../api/commonApi';
import Input from './Input';
import Select from './Select';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from './Modal';
import { addEducationDetails, getEducationLevels, getEducationTypes } from '../api/resumeApi';


const ResumeEducationForm = ({ modalVisible, onModalClickCancel }) => {

    const [universities, setUniversities] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [languages, setLanguages] = useState([]);

    const formik = useFormik({
        initialValues: {
            educationLevel: '',
            schoolName: '',
            university: '',
            educationType: '',
            department: '',
            startDate: '',
            graduationDate: '',
            educationLanguage: '',
            stillStudying: false
        },

        validationSchema:
            Yup.object({
                educationLevel: Yup.string().required('Eğitim Düzeyi alanı boş bırakılamaz'),
                startDate: Yup.string().required('Başlangıç Tarihi alanı boş bırakılamaz'),

            }),

        onSubmit: (values, { resetForm, setSubmitting }) => {
            // department, educationLanguage, university backend'den obje olarak isteniyor
            const educationDetails = {
                ...values,
                department: { id: values.department },
                educationLanguage: { id: values.educationLanguage },
                university: { id: values.university }
            };
            saveEducationDetails(educationDetails)
        }
    });

    const { handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting, setTouched } = formik;

    useEffect(() => {
        loadFormValuesFromApi();
    }, []);

    const loadFormValuesFromApi = async () => {
        try {
            const universitiesResult = await getUniversities();
            setUniversities(universitiesResult.data);
            const languagesResult = await getLanguages();
            setLanguages(languagesResult.data);
            const departmentsResult = await getDepartments();
            setDepartments(departmentsResult.data);

        } catch (error) { }
    };

    const saveEducationDetails = async (educationDetails) => {
        const resumeId = 1; // test için
        await addEducationDetails(educationDetails, resumeId);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Modal
                name="educationDetails"
                visible={modalVisible}
                onClickCancel={onModalClickCancel}
                title="Yeni Eğitim Bilgisi Ekle">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <Select
                                name="educationLevel"
                                label="Eğitim Düzeyi *"
                                value={values.educationLevel}
                                options={getEducationLevels()}
                                onChange={handleChange}
                                error={errors.educationLevel}
                                onBlur={handleBlur} />
                        </div>

                        {values.educationLevel && (values.educationLevel !== "HIGH_SCHOOL" ?
                            (<>
                                <div className="col-md-12">
                                    <Select
                                        label="Üniversite"
                                        name="university"
                                        value={values.university}
                                        options={universities.map(u => ({ value: u.id, label: u.name }))}
                                        onChange={handleChange}
                                        error={errors.educationLevel}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div className="col-md-12">
                                    <Select
                                        label="Bölüm"
                                        name="department"
                                        value={values.department}
                                        options={departments.map(d => ({ value: d.id, label: d.name }))}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div className="col-md-8">
                                    <Select
                                        label="Eğitim Tipi"
                                        name="educationType"
                                        value={values.educationType}
                                        options={getEducationTypes()}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </>)
                            :
                            (<div className="col-md-12">
                                <Input
                                    label="Okul Adı"
                                    name="schoolName"
                                    value={values.schoolName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>))
                        }

                        <div className="col-md-5">
                            <Input
                                type="date"
                                name="startDate"
                                label="Başlangıç Tarihi *"
                                value={values.startDate}
                                error={errors.startDate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="col-md-5">
                            <Input
                                type="date"
                                label="Bitiş Tarihi"
                                name="graduationDate"
                                value={values.graduationDate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>

                        <div className="col-md-2">
                            <Input
                                type="checkbox"
                                label="Devam ediyor"
                                name="stillStudying"
                                value={values.stillStudying}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>

                        <div className="col-md-6">
                            <Select
                                label="Eğitim Dili"
                                name="educationLanguage"
                                value={values.educationLanguage}
                                options={departments.map(l => ({ value: l.id, label: l.languageName }))}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                    </div>
                </div>
            </Modal >
        </form >
    );
};

export default ResumeEducationForm;