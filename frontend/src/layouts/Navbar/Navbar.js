import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
import NavLink from './NavLink';
import { useDispatch, useSelector } from 'react-redux';
import { logoutHandler } from '../../redux/actions/authActions';
import { handleGetResume } from '../../redux/actions/resumeActions';
import defaultProfileImage from '../../assets/user-avatar.png';

const Navbar = () => {

    const [activePath, setActivePath] = useState();
    const [drowpdownVisible, setDropdownVisible] = useState(false);
    const { pathname } = useLocation();
    const dropdown = useRef();
    const dispatch = useDispatch();

    const { isLoggedIn, user } = useSelector(state => state.auth);
    const { profileImage } = useSelector(store => store.resume);

    useEffect(() => {
        dispatch(handleGetResume(user.resumeId));
    }, []);

    useEffect(() => {
        setActivePath(pathname);
    }, [pathname]);

    useEffect(() => {
        document.addEventListener('click', trackDropdown);

        return () => {
            document.removeEventListener('click', trackDropdown);
        }
    }, []);

    const trackDropdown = (e) => {
        if (!dropdown.current || !dropdown.current.contains(e.target)) {
            setDropdownVisible(false);
        }
    }

    const handleClickLink = (e) => {
        e.preventDefault();
        setActivePath(e.target.attributes.href.value);
    }




    const onClickLogout = () => {
        dispatch(logoutHandler());
    };

    return (
        <div className="navbar-area">
            <nav className="navbar navbar-expand-lg container navbar-light pb-0">

                <Link className="navbar-brand" to="/" onClick={() => setActivePath("/")}>HRMS</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <NavLink name="Ana Sayfa" active={activePath} onClick={handleClickLink} to="/" />
                        <NavLink name="İş İlanları" active={activePath} onClick={handleClickLink} to="/jobs" />
                        {user.role === 'CANDIDATE' && <NavLink name="CV" active={activePath} onClick={handleClickLink} to="/resume" />}
                        {user.role === 'EMPLOYER' && < NavLink name="İlan Ver" active={activePath} onClick={handleClickLink} to="/post-job" />}

                        {isLoggedIn &&
                            <li class="nav-item ms-5" ref={dropdown}>
                                <div className={`dropdown-toggle  ${drowpdownVisible && 'show'}`} role="button" onClick={() => setDropdownVisible(!drowpdownVisible)}>
                                    {user.role === 'CANDIDATE' ?
                                        <img className="rounded-circle nav-avatar" src={profileImage || defaultProfileImage} />
                                        :
                                        user.company
                                    }
                                </div>
                                <ul class={`dropdown-menu ${drowpdownVisible && 'show'}`} aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/account">Hesabım</Link></li>
                                    <li><Link className="dropdown-item" onClick={onClickLogout}>Çıkış Yap</Link></li>
                                </ul>
                            </li>}
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