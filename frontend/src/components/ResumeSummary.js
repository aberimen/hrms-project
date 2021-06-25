import React, { useEffect, useState } from 'react';
import EditButton from './EditButton';
import ResumeSummaryFormModal from './ResumeSummaryFormModal';
import ResumeSection from './ResumeSection/ResumeSection';

const ResumeSummary = ({ resume, setResume }) => {
    const [modalTitle, setModalTitle] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleClickAdd = () => {
        setModalTitle("Yeni Ekle");
        setModalVisible(true);
    };

    const handleClickEdit = () => {
        setModalTitle("Düzenle");
        setModalVisible(true);
    };

    return (
        <ResumeSection className="summary-section" title="Öz">

            <div className="card-body">
                <div className="row">
                    <div className="ps-3 col-10">
                        <div>{resume.summary}</div>
                    </div>
                    <div className="align-items-start col-2 d-flex justify-content-end pe-2">
                        <EditButton onClick={handleClickEdit} />
                    </div>
                </div>

                {!resume.summary &&
                    <ResumeSection.Footer onClickAdd={handleClickAdd} />
                }

                <ResumeSummaryFormModal
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    onModalClickCancel={() => { setModalVisible(false) }}
                    summaryValue={resume.summary}
                    modalTitle={modalTitle}
                    setResume={setResume}
                    resume={resume}
                />
            </div>
        </ResumeSection >

    );
};

export default ResumeSummary;