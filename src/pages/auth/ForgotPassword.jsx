import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { post } from '../../service/apiServices';
import Loading from '../../components/loading/Loading.component';


const ForgotPassword = () => {
    const [status, setStatus] = useState(0);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm();
    const [visible, setVisible] = useState(true);

    const handleOnclick = (d) => {
        setVisible(false);
        setLoading(true);
        post('http://localhost:8080/user/forgot_password', d)
            .then(data => {
                if (data.data.status == 1) {
                    setStatus(1);
                }
                setLoading(false);
                console.log(data);
            })
    }

    // if (status == 1) {
    //     setTimeout(() => {
    //         console.log("123");
    //         return navigate("/");
    //     }, 3000);
    // }

    return (
        <>
            <div className="login-page bg-image" style={{ backgroundImage: "url('/images/backgrounds/login-bg.jpg')" }}>
                <div className="container pt-8 pb-8">
                    <div className="form-box">
                        <div className="form-tab">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
                                    {(loading) ? (
                                        <div className="text-center">
                                            <Loading />
                                            <p>The code recovery will send to your email</p>
                                        </div>
                                    ) : (
                                        <div className="text-center" style={{ display: (!visible) ? "block" : "none" }}>
                                            <p><i className="fa-solid fa-check"></i> <br />
                                                The recovery code has been sent to your email</p>
                                        </div>
                                    )}
                                    <form style={{ display: (visible) ? "block" : "none" }} onSubmit={handleSubmit(handleOnclick)}>
                                        <div className="form-group">
                                            <label htmlFor="email">Your email address *</label>
                                            <input type="text" className="form-control" id="email" {...register('email')} />
                                        </div>
                                        <div className="form-footer">
                                            <button type="submit" className="btn btn-outline-primary-2">
                                                <span>FORGOT</span>
                                                <i className="icon-long-arrow-right"></i>
                                            </button>
                                            <div style={{ fontSize: '15px', marginLeft: '25px' }}>
                                                <Link to="/auth">Return to Login</Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;