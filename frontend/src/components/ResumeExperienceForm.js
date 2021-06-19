import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from './Modal';
import { addExperience, addSummary } from '../api/resumeApi';
import Input from './Input';
import Select from './Select';
import { getAllJobPositions } from '../api/jobPositionApi';

const ResumeExperienceForm = ({ modalVisible, onModalClickCancel }) => {
    const [jobPositions, setJobPositions] = useState([]);

    const formik = useFormik({
        initialValues: {
            companyName: '',
            endDate: '',
            jobPositionId: '',
            startDate: '',
            stillWorking: false,
        },

        validationSchema:
            Yup.object({
                companyName: Yup.string().required('Şirket Adı alanı boş bırakılamaz'),
                startDate: Yup.string().required('Başlangıç Tarihi alanı boş bırakılamaz'),

            }),

        onSubmit: (values, { resetForm, setSubmitting }) => {
            saveExperience(values);
            // resetForm();
        }
    });

    const { handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting, setTouched } = formik;

    useEffect(() => {
        loadJobPositions();
    }, []);


    const loadJobPositions = async () => {
        try {
            const result = await getAllJobPositions();
            setJobPositions(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    const saveExperience = async (experience) => {
        const resumeId = 1; //test
        try {
            await addExperience(experience, resumeId);
        } catch (error) { }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Modal
                name="summary"
                visible={modalVisible}
                onClickCancel={onModalClickCancel}
                // saveButtonDisabled={isSubmitting}
                title="Yeni Deneyim Ekle"
            >

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12">
                            <Input
                                id="companyName"
                                label="Şirket Adı *"
                                name="companyName"
                                value={values.companyName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.companyName && errors.companyName}
                            />
                        </div>

                        <Select
                            label="İş Pozisyonu"
                            onBlur={handleBlur}
                            name="jobPositionId"
                            value={values.jobPositionId}
                            options={jobPositions.map(j => ({ value: j.id, label: j.positionName }))}
                            onChange={handleChange}
                            error={touched.jobPositionId && errors.jobPositionId}
                        />


                        <div className="col-md-5">
                            <Input
                                type="date"
                                name="startDate"
                                label="Başlangıç Tarihi *"
                                value={values.startDate}
                                error={touched.startDate && errors.startDate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>

                        {values.stillWorking !== true && <div className="col-md-5">
                            <Input
                                type="date"
                                label="Bitiş Tarihi"
                                name="graduationDate"
                                value={values.graduationDate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>}

                        <div className={values.stillWorking ? 'col-6' : 'col-md-2'}>
                            <Input
                                type="checkbox"
                                label="Devam Ediyor"
                                name="stillWorking"
                                error={touched.stillWorking && errors.stillWorking}
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

export default ResumeExperienceForm;