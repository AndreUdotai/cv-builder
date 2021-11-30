import React from 'react';

class EditorGeneral extends React.Component {
    render() {
        return (
            <div className='my-4' id='general'>
                <h4>Personal Information</h4>
                <div className='form-row'>
                    <div className='col'>
                        <label htmlFor='firstName'>First Name</label>
                        <input
                            type='text'
                            className='form-control'
                            id='firstName'
                            placeholder='First Name'
                        />
                    </div>
                    <div className='col'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input
                            type='text'
                            className='form-control'
                            id='lastName'
                            placeholder='Last name'
                        />
                    </div>
                </div>
                <div className='form-row mt-1'>
                    <div className='col'>
                        <label htmlFor='emailAddress'>Email address</label>
                        <input
                            type='email'
                            className='form-control'
                            id='emailAddress'
                            aria-describedby='emailHelp'
                            placeholder='Enter email'
                        />
                        <small id='emailHelp' className='form-text text-muted'>
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className='col'>
                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <input
                            type='number'
                            className='form-control'
                            id='phoneNumber'
                            aria-describedby='emailHelp'
                            placeholder='Enter Phone Number'
                        />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='col-6'>
                        <label htmlFor='address'>Address</label>
                        <input
                            type='text'
                            className='form-control'
                            id='address'
                            placeholder='Enter Address'
                        />
                    </div>
                    <div className='col'>
                        <label htmlFor='city'>City</label>
                        <input
                            type='text'
                            className='form-control'
                            id='city'
                            placeholder='Enter City'
                        />
                    </div>
                    <div className='col'>
                        <label htmlFor='country'>Country</label>
                        <input
                            type='text'
                            className='form-control'
                            id='country'
                            placeholder='Enter Country'
                        />
                    </div>
                </div>
                <div className='form-row mt-1'>
                    <div className='col'>
                        <label htmlFor='nationality'>Nationality</label>
                        <input
                            type='text'
                            className='form-control'
                            id='nationality'
                            aria-describedby='emailHelp'
                            placeholder='Enter Nationality'
                        />
                    </div>
                    <div className='col'>
                        <label htmlFor='linkedinLink'>Linkedin Link</label>
                        <input
                            type='text'
                            className='form-control'
                            id='linkedinLink'
                            aria-describedby='emailHelp'
                            placeholder='Enter Linkedin link'
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='description'>Description/Objective</label>
                    <textarea
                        className='form-control'
                        id='description'
                        placeholder='Keep it short and simple. Three sentences is optimum.'
                        rows='3'
                    ></textarea>
                </div>
            </div>
        );
    }
}

export default EditorGeneral;
