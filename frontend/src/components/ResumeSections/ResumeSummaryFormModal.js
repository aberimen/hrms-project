import React from 'react';
import TextArea from '../TextArea';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from '../Modal';
import { addSummary, updateSummary } from '../../api/resumeApi';

const ResumeSummaryFormModal = ({ modalVisible, onModalClickCancel, setModalVisible, summaryValue, updateMode, resume, setResume }) => {

    const formik = useFormik({
        initialValues: {
            summary: summaryValue || '',
        },

        enableReinitialize: true,
        validationSchema:
            Yup.object({
                summary: Yup.string().required('Özet Bilgi alanı boş bırakılamaz'),

            }),

        onSubmit: (values, { resetForm, setSubmitting }) => {
            saveSummary(values);
            setModalVisible(false);
            resetForm();
            setResume({ ...resume, ...values });
        }
    });

    const { handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting, setTouched } = formik;

    const saveSummary = async (summary) => {
        const resumeId = 1; //test
        try {
            if (!updateMode) {
                await addSummary(summary, resumeId);
            } else {
                await updateSummary(summary, resumeId);
            }
        } catch (error) { }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Modal
                name="summary"
                visible={modalVisible}
                onClickCancel={onModalClickCancel}
                // saveButtonDisabled={isSubmitting}
                title={updateMode ? 'Düzenle' : 'Yeni Ekle'}
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

export default ResumeSummaryFormModal;