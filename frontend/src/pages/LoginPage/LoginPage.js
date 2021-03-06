import React, { useState } from 'react';
import './LoginPage.css';
import mapSvg from '../../assets/map.svg';
import Input from '../../components/Input';
import { loginHandler } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { handleGetFavoriteJobs } from '../../redux/actions/candidateActions';


const LoginPage = (props) => {

	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const [apiError, setApiError] = useState(undefined);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		});
		setApiError(undefined);
	};

	const onClickLogin = async (e) => {
		e.preventDefault();
		const { push } = props.history;

		try {
			const result = await dispatch(loginHandler(credentials));
			const user = result.data;
			if (user.role === 'CANDIDATE') {
				await dispatch(handleGetFavoriteJobs(user.id));
			}
			push('/');

		} catch (err) {
			if(err.response)
			setApiError(err.response.data.message);
		}
	};

	return (
		<div className="container centered">
			<div className="wrapper no-gutters shadow justify-content-center align-items-center">
				<div className="col-lg-7 d-none d-md-none d-lg-block">
					<img src={mapSvg} alt="map svg" />
				</div>
				<div className="col-lg-5 col-12 col-md-8">

					<div className="m-5">


						<h2 className="card-title" style={{ fontWeight: 800 }}>HRMS Giriş</h2>
						<p className="fw-normal text-muted">Hızlıca iş aramaya başla</p>

						<Input
							type="text"
							placeholder="E-Posta"
							name="email"
							onChange={handleChange}
						/>

						<Input
							type="password"
							placeholder="Şifre"
							name="password"
							onChange={handleChange} />


						<div className="form-group mb-4">
							<div className="input-group">
								<button type="submit" className="btn btn-primary btn-block" onClick={onClickLogin}>Giriş Yap</button>

							</div>
						</div>

						{apiError && <div class="text-danger">
							Hatalı giriş yaptınız..
						</div>}

						<div className="divider my-4 mx-auto"></div>

						<div className="form-group mb-4">
							<div className="input-group">
								<button type="submit"
									className="btn btn-outline-primary btn-block d-flex justify-content-center align-items-center py-2">
									<span>
										<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px"
											viewBox="0 0 48 48" className="abcRioButtonSvg">
											<g>
												<path fill="#EA4335"
													d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z">
												</path>
												<path fill="#4285F4"
													d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z">
												</path>
												<path fill="#FBBC05"
													d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z">
												</path>
												<path fill="#34A853"
													d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z">
												</path>
												<path fill="none" d="M0 0h48v48H0z"></path>
											</g>
										</svg>
									</span>

									<span className="ms-2" >Google ile Giriş Yap</span>
								</button>



							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default LoginPage;