import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { post } from '../../service/apiServices';
import { AppContext } from '../../context/AppProvider';
import Toast from '../../components/toast/Toast.component';

const Auth = () => {
	const { auth, login, loginAdmin, loginStaff, admin } = useContext(AppContext);
	const location = useLocation();
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm();
	const [check, setCheck] = useState(false);

	const onSubmitLogin = (d) => {
		post('http://localhost:8080/user/login', d)
			.then((data) => {
				if (data.data.status === 1) {
					// notify('Login successfully')
					Swal.fire({
						title: 'Success!',
						text: 'Login is successfully',
						icon: 'success',
						confirmButtonText: 'OK'
					})
					setTimeout(() => {
						login(data.data.data[0]);
					}, 2000)
				} else {
					Swal.fire({
						title: 'Error!',
						text: 'Something went wrong',
						icon: 'error',
						confirmButtonText: 'OK'
					})
					setCheck(true);
				}
			});
	}

	// if (auth) {
	// 	setTimeout(() => {
	// 		return navigate("/")
	// 	}, 2000)
	// }

	const onSubmitSingUp = (d) => {
		if (d.email != '' && d.password != '' && d.name != '') {
			post('http://localhost:8080/user/signup', d)
				.then((data) => {
					notify('Signup successfully')
					if (data.data.status == 1) {
						post('http://localhost:8080/user/login', d).then(
							(data) => {
								Swal.fire({
									title: 'Success!',
									text: 'Register is successfully',
									icon: 'success',
									confirmButtonText: 'OK'
								})
								login(data.data.data[0])
							}
						);
					} else {
						Swal.fire({
							title: 'Error!',
							text: 'Email is exists',
							icon: 'warning',
							confirmButtonText: 'OK'
						})
					}
				})
		}
	}

	if (auth) {
		// setTimeout(() => {
			return navigate("/")
		// }, 1000)
	}


	const Login = () => {
		return (
			<>
				<div className="tab-pane fade show active" id="signin-2" role="tabpanel" aria-labelledby="signin-tab-2">
					<form onSubmit={handleSubmit(onSubmitLogin)}>
						<div className="form-group">
							<label htmlFor="singin-email-2">Username or email address *</label>
							<input type="text" className="form-control" style={{ borderColor: (check) ? "red" : "#ebebeb" }} id="email" {...register("email")} />
							<p style={{ color: 'red', display: (check) ? "block" : "none" }}>error</p>
						</div>

						<div className="form-group">
							<label htmlFor="singin-password-2">Password *</label>
							<input type="password" className="form-control" style={{ borderColor: (check) ? "red" : "#ebebeb" }} id="password" {...register("password")} />
							<p style={{ color: 'red', display: (check) ? "block" : "none" }}>error</p>
						</div>

						<div className="form-footer">
							<button type="submit" className="btn btn-outline-primary-2">
								<span>LOG IN</span>
								<i className="icon-long-arrow-right"></i>
							</button>

							<div className="custom-control custom-checkbox">
								<input type="checkbox" className="custom-control-input" id="signin-remember-2" />
								<label className="custom-control-label" htmlFor="signin-remember-2">Remember Me</label>
							</div>

							<Link to="forgotpassword" className="forgot-link">Forgot Your Password?</Link>
						</div>
					</form>
					<div className="form-choice">
						<p className="text-center">or sign in with</p>
						<div className="row">
							<div className="col-sm-6">
								<a href="#" className="btn btn-login btn-g">
									<i className="icon-google"></i>
									Login With Google
								</a>
							</div>
							<div className="col-sm-6">
								<a href="#" className="btn btn-login btn-f">
									<i className="icon-facebook-f"></i>
									Login With Facebook
								</a>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}

	const Register = () => {
		return (
			<>
				<div className="tab-pane fade show active" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
					<form onSubmit={handleSubmit(onSubmitSingUp)}>
						<div className="form-group">
							<label htmlFor="register-email-2">Your email address *</label>
							<input type="email" className="form-control" id="register-email-2" {...register('email')} />
						</div>

						<div className="form-group">
							<label htmlFor="name">Name *</label>
							<input type="text" className="form-control" id="name" {...register('name')} />
						</div>

						<div className="form-group">
							<label htmlFor="register-password-2">Password *</label>
							<input type="password" className="form-control" id="register-password-2" {...register('password')} />
						</div>

						<div className="form-footer">
							<button type="submit" className="btn btn-outline-primary-2">
								<span>SIGN UP</span>
								<i className="icon-long-arrow-right"></i>
							</button>

							<div className="custom-control custom-checkbox">
								<input type="checkbox" className="custom-control-input" id="register-policy-2" required />
								<label className="custom-control-label" htmlFor="register-policy-2">I agree to the <a href="#">privacy policy</a> *</label>
							</div>
						</div>
					</form>
					<div className="form-choice">
						<p className="text-center">or sign in with</p>
						<div className="row">
							<div className="col-sm-6">
								<a href="#" className="btn btn-login btn-g">
									<i className="icon-google"></i>
									Login With Google
								</a>
							</div>
							<div className="col-sm-6">
								<a href="#" className="btn btn-login  btn-f">
									<i className="icon-facebook-f"></i>
									Login With Facebook
								</a>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}

	const Change = () => {
		if (location.pathname == '/auth') {
			return <Login />
		}
		if (location.pathname == '/auth/register') {
			return <Register />
		}
	}
	const notify = (message) => toast(<p>{message}</p>);
	return (

		<>
			<Toast />
			<main className="main">
				<nav className="breadcrumb-nav border-0 mb-0">
					<div className="container">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><a href="index.html">Home</a></li>
							<li className="breadcrumb-item"><a href="#">Pages</a></li>
							{(location.pathname == '/auth') ? (<li className="breadcrumb-item active" aria-current="page">Login</li>) : (<li className="breadcrumb-item active" aria-current="page">Register</li>)}
						</ol>
					</div>
				</nav>

				<div className="login-page bg-image" style={{ backgroundImage: "url('/images/backgrounds/login-bg.jpg')" }}>
					<div className="container pt-8 pb-8">
						<div className="form-box">
							<div className="form-tab">
								<ul className="nav nav-pills nav-fill" role="tablist">
									{(location.pathname == '/auth') ? (
										<>
											<li className="nav-item">
												<Link className="nav-link active" to="/auth">Sign In</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" to="register">Register</Link>
											</li>
										</>
									) : (
										<>
											<li className="nav-item">
												<Link className="nav-link " to="/auth">Sign In</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link active" to="/auth/register">Register</Link>
											</li>
										</>
									)}
								</ul>
								<div className="tab-content">
									<Change />
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Auth;