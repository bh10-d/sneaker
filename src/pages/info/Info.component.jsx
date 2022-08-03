import { useState, useContext } from 'react';
import SideBar from '../../components/user/SideBar.component';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../context/AppProvider';
import { put } from '../../service/apiServices';
import Swal from 'sweetalert2';

const Info = () => {
    const { info } = useContext(AppContext);
    const [disable, setDisable] = useState(true);
    const { register, handleSubmit } = useForm();


    const handleDisabled = () => {
        setDisable(false);
    }

    const handleOnclick = (d) => {
        put('http://localhost:8080/user/update',
            {
                id: info.id,
                email: d.email ?? info.email,
                name: d.name ?? info.name,
                phone: d.phone ?? info.phone,
                password: info.password
            }
        )
            .then(data => {
                localStorage.setItem('info', JSON.stringify(data.data));
                setDisable(true);
            })
        Swal.fire({
            title: 'Success!',
            text: 'Change Information Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }

    return (
        <>
            <main className="main">
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <SideBar />
                            <div className="col-9">
                                <div className="content_info">
                                    <div className="person_info">
                                        <h3>Personal Infomation</h3>
                                        <form onSubmit={handleSubmit(handleOnclick)}>
                                            <div className="row">
                                                <div className="col-7">
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <label htmlFor="name">Name</label>
                                                        <input className="input_custom" id="name" type="text" {...register("name")} defaultValue={info.name} required disabled={disable} />
                                                        <label htmlFor="phone">Phone Number</label>
                                                        <input className="input_custom" id="phone" type="text" {...register("phone")} defaultValue={info.phone} required disabled={disable} />
                                                        <label htmlFor="email">Email</label>
                                                        <input className="input_custom" id="email" type="email" {...register("email")} defaultValue={info.email} disabled={disable} />
                                                        <label htmlFor="email">Role</label>
                                                        <input className="input_custom" id="email" type="email" defaultValue={(info.type == 0) ? "Customer" : (info.type == 2) ? "Admin" : "Staff"} disabled />
                                                    </div>
                                                </div>
                                                <div className="col-5">
                                                    <label htmlFor="hidden">Avatar</label>
                                                    <div className="content_image">
                                                        <div className="content_image_sub">
                                                            <img src="/images/team/about-2/buiduchieu.jpg" alt="" />
                                                            <div>
                                                                <p><i className='bx bx-upload'></i></p>
                                                                <input className="input_avatar" type="file" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <input id="hidden" type="text" hidden />
                                                </div>
                                            </div>
                                            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                                                {(disable) ? (<p className="btn_custom btn btn-warning" onClick={handleDisabled}>Edit</p>) : (<button className="btn_custom btn-success">Submit</button>)}
                                                <p>For edit infomation please press Edit button</p>
                                            </div>
                                        </form>
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

export default Info;