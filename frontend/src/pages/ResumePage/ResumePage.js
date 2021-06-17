import React, { useState } from 'react';
import ResumeSection from '../../components/ResumeSection/ResumeSection';
import './ResumePage.scss';
import Modal from '../../components/Modal';
import ResumeEducationForm from '../../components/ResumeEducationForm';


const ResumePage = () => {
    const [visibleModalName, setVisibleModalName] = useState(undefined);


    return (
        <div className="resume-page">
            <div className="page-cover">

            </div>
            <div className="container">
                <section className="profile-abstract">
                    <div className="avatar">
                        <img src="https://docs.kariyer.net/candidate/000/023/126/avatar/2312643620200305030012126.jpg?filesec=XdsV1VzBKiPzRwcAz5MUUkG5fX%2FbBgSfjhdDH1dPFyzu4riam%2BLuxakhgzkZIV7EdySUEoa4gX4Q9cePbWkABF%2F9dgSvqBIQ!e!" />
                    </div>

                    <div className="name">
                        <h3>Abdurrahman Berimen</h3>
                    </div>
                </section>



                <ResumeSection className="summary" title="Öz" >

                </ResumeSection>

                <ResumeSection className="education-details" title="Eğitim Bilgisi" onClickAdd={() => { setVisibleModalName('educationDetails') }} >
                    {(visibleModalName === "educationDetails") &&
                        <ResumeEducationForm
                            modalVisible={true}
                            onModalClickCancel={() => { setVisibleModalName(undefined) }} />
                    }
                    body here
                </ResumeSection>


                <ResumeSection className="experiences" title="Deneyim" >

                </ResumeSection>


                <ResumeSection className="language-skills" title="Yabancı Dil" >

                </ResumeSection>

                <ResumeSection className="technical-skills" title="Teknik Bilgileri" >

                </ResumeSection>

                <ResumeSection className="social" title="Sosyal Hesaplar" >

                </ResumeSection>

            </div>
        </div >
    );
};

export default ResumePage;