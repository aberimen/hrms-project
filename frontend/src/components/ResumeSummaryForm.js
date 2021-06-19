import React, { useEffect } from 'react';
import TextArea from './TextArea';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from './Modal';
import { addSummary } from '../api/resumeApi';

const ResumeSummaryForm = ({ modalVisible, onModalClickCancel }) => {

    const formik = useFormik({
        initialValues: {
            summary: '',
        },

        validationSchema:
            Yup.object({
                summary: Yup.string().required('Özet Bilgi alanı boş bırakılamaz'),

            }),

        onSubmit: (values, { resetForm, setSubmitting }) => {
            saveSummary(values);
            // resetForm();
        }
    });

    const { handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting, setTouched } = formik;

    useEffect(() => {
    }, []);


    const saveSummary = async (summary) => {
        const resumeId = 1; //test
        try {
            await addSummary(summary, resumeId);
        } catch (error) { }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Modal
                name="summary"
                visible={modalVisible}
                onClickCancel={onModalClickCancel}
                // saveButtonDisabled={isSubmitting}
                title="Özet Bilgi Ekle"
            >

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12">
                            <TextArea
                                id="summary"
                                name="summary"
                                label="Özet Bilgi *"
                                value={values.summary}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.summary}
                            />
                        </div>


                    </div>
                </div>
            </Modal >
        </form >
    );
};

export default ResumeSummaryForm;