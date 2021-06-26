import React, { useState } from 'react';
import { FaClock } from 'react-icons/fa';
import Input from '../../components/Input';

const MyDetailsMenu = () => {
    const isPendingForUpdate = false;

    return (
        <div className="container">
            <div className="border-bottom pb-2 d-flex">
                <h3 className="fw-bold"> Bilgilerim </h3>

                {isPendingForUpdate && <div className="pending-for-update ms-auto text-warning d-flex align-items-center">
                    <FaClock />
                    <span className="pending-text ms-1">Güncelleme onayı bekleniyor..</span>
                </div>}
            </div>
            <div className="row py-3">
                <div className="col-lg-4 mt-4">
                    <span className="text-muted"> Hesap bilgilerinizi buradan güncelleyebilirsiniz..</span>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-12">
                            <Input
                                label="Firma Adı"
                                name="company"
                                value="Kodlama IO"
                            />
                        </div>
                        <div className="col-lg-12">
                            <Input
                                label="Web Sitesi"
                                name="website"
                                value="www.kodlama.io"
                            />
                        </div>
                        <div className="col-lg-12">
                            <Input
                                type="tel"
                                label="Telefon Numarası"
                                name="phoneNumber"
                            />
                        </div>
                        <div className="col-lg-12">
                            <Input
                                type="email"
                                label="Email"
                                name="email"
                                value="varsayılan"
                            />
                        </div>
                        <div className="col-lg-12 py-3">
                            <button className="btn btn-primary" type="submit" name="submit" value="varsayılan"> Kaydet </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyDetailsMenu;