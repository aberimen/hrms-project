import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../components/Input';
import { getLocations } from '../api/commonApi';
import Select from '../components/Select';
import { getAllJobPositions } from '../api/jobPositionApi';
import { createJobPosting } from '../api/jobPostingApi';
import TextArea from '../components/TextArea';
import { useSelector } from 'react-redux';
import { successToast } from '../components/utils/notification';
const PostJobPage = () => {

    const [locations, setLocations] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);

    const { id: employerId } = useSelector(store => store.auth.user);

    const formik = useFormik({
        initialValues: {
            jobPositionId: "",
            locationId: "",
            employmentType: "",
            workRemotely: "",
            jobDescription: "",
            minSalary: "",
            maxSalary: "",
            openPositions: "",
            deadline: ""

        },
        validationSchema:
            Yup.object({
                jobPositionId: Yup.string().required('İş Pozisyonu boş bırakılamaz'),
                locationId: Yup.string().required('Lokasyon boş bırakılamaz'),
                jobDescription: Yup.string().required('İş Tanımı alanı boş bırakılamaz'),
                openPositions: Yup.string().required('Açık Pozisyon Sayısı boş bırakılamaz'),
            }),

        onSubmit: (values, { resetForm, setSubmitting }) => {
            postJob(values);
            resetForm();
        }

    });

    const { handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting } = formik;

    useEffect(() => {
        loadLocations();
        loadJobPositions();
    }, []);

    const loadLocations = async () => {
        try {
            const result = await getLocations();
            setLocations(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    const loadJobPositions = async () => {
        try {
            const result = await getAllJobPositions();
            setJobPositions(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    const postJob = async (jobPosting) => {
        try {
            const result = await createJobPosting({
                ...jobPosting,
                employerId
            });
            successToast("İş İlanı Eklendi")
        } catch (error) { }
    }


    return (
        <div className="bg-light p-5">
            <div className="container bg-white border-radius p-5">

                <form onSubmit={handleSubmit}>
                    <h3 className="mb-4 fw-bold">İş İlanı Ver</h3>

                    <Select
                        label="İş Pozisyonu *"
                        onBlur={handleBlur}
                        name="jobPositionId"
                        value={values.jobPosition}
                        options={jobPositions.map(j => ({ value: j.id, label: j.positionName }))}
                        onChange={handleChange}
                        error={touched.jobPositionId && errors.jobPositionId}
                    />

                    <Select
                        label="Lokasyon *"
                        name="locationId"
                        value={values.location}
                        options={locations.map(l => ({ value: l.id, label: l.city }))}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.locationId && errors.locationId}
                    />

                    <Select
                        label="Çalışma Türü *"
                        name="employmentType"
                        value={values.employmentType}
                        options={[
                            { value: "FULLTIME", label: "Tam Zamanlı" },
                            { value: "PARTTIME", label: "Yarı Zamanlı" },
                            { value: "FULLTIME_OR_PARTTIME", label: "Tam Zamanlı veya Yarı Zamanlı" }
                        ]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.employmentType && errors.employmentType}
                    />

                    <Select
                        label="Uzaktan Çalışma"
                        name="workRemotely"
                        value={values.workRemotely}
                        options={[
                            { value: "true", label: "Evet" },
                            { value: "false", label: "Hayır" }
                        ]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.workRemotely && errors.workRemotely}
                    />

                    <TextArea
                        label="İş Tanımı *"
                        name="jobDescription"
                        value={values.jobDescription}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.jobDescription && errors.jobDescription}
                        id="jobDescription"
                        placeholder="iş tanımı giriniz" />

                    <label className="form-label">Maaş Skalası</label>
                    <div className="d-flex" >
                        <Input
                            type="number"
                            name="minSalary"
                            value={values.minSalary}
                            onChange={handleChange}
                            error={errors.minSalary}
                            id="minSalary"
                            placeholder="Min" />

                        <Input
                            className="ms-2"
                            type="number"
                            name="maxSalary"
                            value={values.maxSalary}
                            onChange={handleChange}
                            error={errors.maxSalary}
                            id="maxSalary"
                            placeholder="Max" />
                    </div>

                    <Input
                        label="Açık Pozisyon Sayısı *"
                        type="number"
                        name="openPositions"
                        value={values.openPositions}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.openPositions && errors.openPositions}
                        id="openPositions"
                        placeholder="Açık Pozisyon Sayısı" />

                    <Input
                        label="Son Başvuru Tarihi"
                        type="date"
                        name="deadline"
                        value={values.deadline}
                        onChange={handleChange}
                        error={touched.deadline && errors.deadline}
                        id="deadline" />

                    <button className="btn btn-primary btn-apply mt-3" type="submit" name="submit"  > Gönder </button>
                </form>
            </div >
        </div>
    );
};

export default PostJobPage;