import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from '../../Modal';
import Select from '../../Select';
import { getLanguages } from '../../../api/commonApi';
import { addLanguageSkill } from '../../../api/resumeApi';
import { useSelector } from 'react-redux';

const ResumeLanguageSkillModalForm = ({ modalVisible, setModalVisible }) => {

    const [languages, setLanguages] = useState([]);

    const { id: resumeId } = useSelector(store => store.resume);

    const formik = useFormik({
        initialValues: {
            languageId: '',
            languageLevel: '',
        },

        validationSchema:
            Yup.object({
                languageId: Yup.string().required('Dil alanı boş bırakılamaz'),
                languageLevel: Yup.string().required('Seviye alanı boş bırakılamaz'),
            }),

        onSubmit: (values, { resetForm, setSubmitting }) => {
            saveLanguageSkill(values);
            setModalVisible(false);
            resetForm();
        }
    });

    const { handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting, setTouched } = formik;

    useEffect(() => {
        loadLanguages();
    }, []);

    const loadLanguages = async () => {
        try {
            const languagesResult = await getLanguages();
            setLanguages(languagesResult.data);
        } catch (error) { }
    };


    const saveLanguageSkill = async (languageSkill) => {
        try {
            await addLanguageSkill(languageSkill, resumeId);
        } catch (error) { }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Modal
                visible={modalVisible}
                onClickCancel={() => { setModalVisible(false) }}
                // saveButtonDisabled={isSubmitting}
                title="Yabancı Dil Bilgisi Ekle"
            >

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-6">
                            <Select
                                label="Dil"
                                name="languageId"
                                value={values.languageId}
                                options={languages.map(l => ({ value: l.id, label: l.languageName }))}
                                error={touched.languageId && errors.languageId}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-8">
                            <Select
                                id="languageLevel"
                                name="languageLevel"
                                label="Seviye"
                                options={[
                                    { value: "BEGINNER", label: "Başlangıç" },
                                    { value: "ELEMENTARY", label: "Temel" },
                                    { value: "INTERMEDIATE", label: "Orta" },
                                    { value: "UPPER_INTERMEDIATE", label: "İyi" },
                                    { value: "ADVANCED", label: "İleri" },
                                ]}
                                value={values.languageLevel}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.languageLevel && errors.languageLevel}
                            />
                        </div>
                    </div>
                </div>
            </Modal >
        </form >
    );
};

export default ResumeLanguageSkillModalForm;