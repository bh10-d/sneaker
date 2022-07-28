import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { post } from '../../service/apiServices';
import { AppContext } from '../../context/AppProvider';

const Auth = () => {
	const {auth, setAuth} = useContext(AppContext)
	const { register, handleSubmit } = useForm();
	// const [ auth, setAuth ] = useState(false);

	const onSubmit = (d) => {
		post('http://localhost:8080/user/login',d)
		.then((data) => {
			if(data.data!=[]){
				setAuth(true);
			}
			console.log(data); // JSON data parsed by `data.json()` call
		});
	}

	if(auth){
		console.log(auth);
		return <Navigate to="/" replace={true}/>
	}

	return (
		<>
			<main className="main">
				<nav className="breadcrumb-nav border-0 mb-0">
					<div className="container">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><a href="index.html">Home</a></li>
							<li className="breadcrumb-item"><a href="#">Pages</a></li>
							<li className="breadcrumb-item active" aria-current="page">Login</li>
						</ol>
					</div>
				</nav>

				<div className="login-page bg-image" style={{ backgroundImage: "url('/images/backgrounds/login-bg.jpg')" }}>
					<div className="container">
						<div className="form-box">
							<div className="form-tab">
								<ul className="nav nav-pills nav-fill" role="tablist">
									<li className="nav-item">
										<a className="nav-link active" id="signin-tab-2" data-toggle="tab" href="#signin-2" role="tab" aria-controls="signin-2" aria-selected="false">Sign In</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" id="register-tab-2" data-toggle="tab" href="#register-2" role="tab" aria-controls="register-2" aria-selected="true">Register</a>
									</li>
								</ul>
								<div className="tab-content">
									<div className="tab-pane fade show active" id="signin-2" role="tabpanel" aria-labelledby="signin-tab-2">
										<form onSubmit={handleSubmit(onSubmit)}>
											<div className="form-group">
												<label htmlFor="singin-email-2">Username or email address *</label>
												<input type="text" className="form-control" id="email" {...register("email")} />
											</div>

											<div className="form-group">
												<label htmlFor="singin-password-2">Password *</label>
												<input type="password" className="form-control" id="password" {...register("password")} />
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

												<Link to="forgot_password" className="forgot-link">Forgot Your Password?</Link>
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
									<div className="tab-pane fade" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
										<form action="#">
											<div className="form-group">
												<label htmlFor="register-email-2">Your email address *</label>
												<input type="email" className="form-control" id="register-email-2" name="register-email" />
											</div>

											<div className="form-group">
												<label htmlFor="register-password-2">Password *</label>
												<input type="password" className="form-control" id="register-password-2" name="register-password" />
											</div>

											<div className="form-footer">
												<button type="submit" className="btn btn-outline-primary-2">
													<span>SIGN UP</span>
													<i className="icon-long-arrow-right"></i>
												</button>

												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="register-policy-2" />
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