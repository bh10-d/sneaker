import React from 'react';
import SideBar from '../../components/user/SideBar.component';
import { post } from '../../service/apiServices';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../context/AppProvider';
import Loading from '../../components/loading/Loading.component';

const ChangePass = () => {
    const { info } = React.useContext(AppContext);
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = React.useState(false);
    const [visible, setVisible] = React.useState(true);

    const handleOnclick = (d) => {
        if (d.email != '') {
            setVisible(false);
            setLoading(true);
            setVisible(false);
            post('http://localhost:8080/user/auth/forgot_password', d)
                .then(data => {
                    setLoading(false);
                    // console.log(data)
                })
        }
        // console.log(d);
    }

    return (
        <>
            <div className="main">
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <SideBar />
                            <div className="col-9">
                                <div className="content_info">
                                    <div className="person_info" >
                                        {(loading) ? (
                                            <div className="text-center" style={{ marginTop: '200px' }}>
                                                <Loading />
                                                <p>The code recovery will send to your email</p>
                                            </div>
                                        ) : (
                                            <div className="text-center" style={{ display: (!visible) ? "block" : "none", marginTop: '200px' }}>
                                                <p><i className="fa-solid fa-check"></i> <br />
                                                    The recovery code has been sent to your email</p>
                                            </div>
                                        )}
                                        <form style={{ display: (visible) ? "block" : "none", marginTop: '150px' }} onSubmit={handleSubmit(handleOnclick)}>
                                            <div className="text-center" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                                <h3>Password change function has been sent to your registered email by default, please check your mailbox</h3>
                                                <p className="mb-3">Below is the email that the recovery link will be sent to</p>
                                                <input className="input_custom" id="email" type="email" {...register('email')} value={info.email} placeholder="example@gmail.com" />
                                            </div>
                                            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                                                <button className="btn_custom btn-success">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ChangePass;