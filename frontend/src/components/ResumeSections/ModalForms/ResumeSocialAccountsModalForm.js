import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from '../../Modal';
import Input from '../../Input';
import { addSocialAccounts } from '../../../api/resumeApi';
import { useSelector } from 'react-redux';

const ResumeSocialAccountsModalForm = ({githubAccount, linkedinAccount, resume, isUpdateMode, modalVisible, setModalVisible }) => {

    console.log(githubAccount);
    const { id: resumeId } = useSelector(store => store.resume);

    const formik = useFormik({
        initialValues: {
            githubAccount: githubAccount || '',
            linkedinAccount: linkedinAccount || '',
        },

        enableReinitialize: true,
        validationSchema:
            Yup.object({

            }),

        onSubmit: (values, { resetForm, setSubmitting }) => {
            saveSocialAccount(values);
            // resetForm();
        }
    });

    const { handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting, setTouched } = formik;

    useEffect(() => {
    }, []);


    const saveSocialAccount = async (socialAccounts) => {
        try {
            await addSocialAccounts(socialAccounts, resumeId);
        } catch (error) { }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Modal
                visible={modalVisible}
                onClickCancel={() => { setModalVisible(false) }}
                // saveButtonDisabled={isSubmitting}
                title="Sosyal Hesaplar Bilgisi Ekle"
            >

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12">
                            <Input
                                id="githubAccount"
                                name="githubAccount"
                                label="GitHub Hesabı"
                                value={values.githubAccount}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.githubAccount}
                            />

                            <Input
                                id="linkedinAccount"
                                name="linkedinAccount"
                                label="Linkedin Hesabı"
                                value={values.linkedinAccount}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.linkedinAccount}
                            />
                        </div>


                    </div>
                </div>
            </Modal >
        </form >
    );
};


export default ResumeSocialAccountsModalForm;