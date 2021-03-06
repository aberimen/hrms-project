import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from '../../Modal';
import { addTechnicalSkill } from '../../../api/resumeApi';
import { getTechStacks } from '../../../api/commonApi';
import Select from '../../Select';
import { useSelector } from 'react-redux';

const ResumeTechnicalSkillModalForm = ({ modalVisible, setModalVisible }) => {

    const [techStacks, setTechStacks] = useState([]);

    const resume = useSelector(state => state.resume);

    const formik = useFormik({
        initialValues: {
            techStackId: '',
        },

        validationSchema:
            Yup.object({

            }),

        onSubmit: (values, { resetForm, setSubmitting }) => {
            saveTechnicalSkill(values);
            // resetForm();
        }
    });

    const { handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting, setTouched } = formik;

    useEffect(() => {
        loadTechStacks();
    }, []);

    const loadTechStacks = async () => {
        try {
            const result = await getTechStacks();
            setTechStacks(result.data);
        } catch (error) { }
    };

    const saveTechnicalSkill = async (technicalSkill) => {
        const { id: resumeId } = resume;

        try {
            await addTechnicalSkill(technicalSkill, resumeId);
        } catch (error) { }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Modal
                visible={modalVisible}
                onClickCancel={() => setModalVisible(false)}
                // saveButtonDisabled={isSubmitting}
                title="Teknik Bilgi Ekle"
            >

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12">
                            <Select
                                label="Yetenek"
                                name="techStackId"
                                value={values.techStackId}
                                options={techStacks.map(t => ({ value: t.id, label: t.name }))}
                                error={touched.techStackId && errors.techStackId}
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

export default ResumeTechnicalSkillModalForm;