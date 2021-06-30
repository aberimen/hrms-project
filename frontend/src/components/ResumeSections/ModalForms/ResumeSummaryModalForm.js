import React from 'react';
import TextArea from '../../TextArea';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from '../../Modal';
import { addSummary, updateSummary } from '../../../api/resumeApi';
import { useDispatch } from 'react-redux';
import { updateResumeSuccess } from '../../../redux/actions/resumeActions';

const ResumeSummaryModalForm = ({ modalVisible, setModalVisible, summaryValue, updateMode, resume }) => {

    const dispatch = useDispatch();

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
        }
    });

    const { handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting, setTouched } = formik;

    const saveSummary = async (summary) => {
        try {
            let result;
            if (!updateMode) {
                result = await addSummary(summary, resume.id);

            } else {
                result = await updateSummary(summary, resume.id);
            }
            dispatch(updateResumeSuccess(result.data));
        } catch (error) { }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Modal
                name="summary"
                visible={modalVisible}
                onClickCancel={() => { setModalVisible(false) }}
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

export default ResumeSummaryModalForm;