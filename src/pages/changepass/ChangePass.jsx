import React from 'react';
import SideBar from '../../components/user/SideBar.component';
import { post } from '../../service/apiServices';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../context/AppProvider';

const ChangePass = () => {
    const { info } = React.useContext(AppContext);
    const { register, handleSubmit } = useForm();

    const handleOnclick = (d) => {
        if (d.email != '') {
            post('http://localhost:8080/user/forgot_password', d)
                .then(data => console.log(data))
        }
        console.log(d);
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
                                    <div className="person_info">
                                        <h3>Change Password</h3>
                                        <form style={{ marginTop: '150px' }} onSubmit={handleSubmit(handleOnclick)}>
                                            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                                <label htmlFor="email">Enter your Email</label>
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