import React from 'react';

const Modal = ({ title, visible, name, children, onClickCancel, onClickSave }) => {

    let className = 'modal fade';

    if (visible) {
        className += ' show d-block';
    }

    return (
        <div className={className} style={{ backgroundColor: '#000000b0' }} >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" onClick={onClickCancel} ></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClickCancel}>Çık</button>
                        <button type="button" className="btn btn-primary" type="submit" onClick={onClickSave}>Kaydet</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;