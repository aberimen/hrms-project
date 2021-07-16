import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
import NavLink from './NavLink';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const [activePath, setActivePath] = useState();

    const { pathname } = useLocation();

    useEffect(() => {
        setActivePath(pathname);
    }, [pathname]);

    const handleClickLink = (e) => {
        e.preventDefault();
        setActivePath(e.target.attributes.href.value);
    }

    const { isLoggedIn, user } = useSelector(state => state.auth);


    return (
        <div className="navbar-area">
            <nav className="navbar navbar-expand-lg container navbar-light pb-0">

                <Link className="navbar-brand" to="/" onClick={() => setActivePath("/")}>HRMS</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <NavLink name="Ana Sayfa" active={activePath} onClick={handleClickLink} to="/" />
                        <NavLink name="İş İlanları" active={activePath} onClick={handleClickLink} to="/jobs" />
                        {user.role === 'CANDIDATE' && <NavLink name="CV" active={activePath} onClick={handleClickLink} to="/resume" />}
                        {user.role === 'EMPLOYER' && < NavLink name="İlan Ver" active={activePath} onClick={handleClickLink} to="/post-job" />}
                        {isLoggedIn && <NavLink name="Hesabım" active={activePath} onClick={handleClickLink} to="/account" />}
                    </ul>

                    {!isLoggedIn &&
                        <div className="ms-5">
                            <Link className="btn btn-secondary my-2 my-sm-0" to="/register">Kayıt Ol</Link>
                            <Link className="btn btn-primary my-2 my-sm-0 ms-2" to="/login" >Giriş Yap</Link>
                        </div>
                    }
                </div>
            </nav>

        </div>
    );
};

export default Navbar;