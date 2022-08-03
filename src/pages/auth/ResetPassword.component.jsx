import { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { post } from '../../service/apiServices';
import { AppContext } from '../../context/AppProvider';

const ResetPassword = () => {
    const { auth } = useContext(AppContext)
    const { email, token } = useParams();
    const [visible, setVisible] = useState(true);
    const { register, handleSubmit } = useForm();
    const [check, setCheck] = useState(false);

    const handleOnclick = (d) => {
        console.log(d);
        if (d.password !== d.re_password) {
            setCheck(true);
        } else {
            post('http://localhost:8080/user/reset_password', {
                ...d, email: email, token: token
            }).then(data => {
                setVisible(false);
                console.log(data)
            })
        }
    }

    return (
        <>
            <div className="login-page bg-image" style={{ backgroundImage: "url('/images/backgrounds/login-bg.jpg')" }}>
                <div className="container pt-8 pb-8">
                    <div className="form-box">
                        <div className="form-tab">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
                                    {(visible) ? (
                                        <>
                                            <h4>Change password for: </h4>
                                            <h5>{email}</h5>
                                            <form onSubmit={handleSubmit(handleOnclick)}>
                                                <div className="form-group">
                                                    <label htmlFor="password">Enter your password</label>
                                                    <input type="password" className="form-control" id="password" {...register('password')} required />
                                                    <label htmlFor="re_password" style={{ marginTop: '10px' }}>ReEnter your password</label>
                                                    <input type="password" className="form-control" style={{ borderColor: (!check) ? "#ebebeb" : "red" }} id="re_password" {...register("re_password")} required />
                                                    <p style={{ color: 'red', display: (!check) ? "none" : "block" }}>Error Password</p>
                                                </div>
                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>SUBMIT</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>
                                                </div>
                                            </form>
                                        </>
                                    ) : (
                                        <div className="text-center" style={{ display: (!visible) ? "block" : "none" }}>
                                            <p><i className="fa-solid fa-check"></i> <br />
                                                Your password has been changed successfully</p>
                                            {(auth) ? (<Link to="/user">Return to Personnal Infomation</Link>) : (<Link to="/auth">Return to login</Link>)}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ResetPassword;