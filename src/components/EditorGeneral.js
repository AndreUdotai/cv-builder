import React from 'react';

function EditorGeneral(props) {
    return (
        <div className='my-4' id='general'>
            <h4>Personal Information</h4>
            <div className='form-row'>
                <div className='col'>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        onChange={props.handleChange}
                        type='text'
                        className='form-control'
                        id='firstName'
                        placeholder='First Name'
                        name='firstName'
                        value={props.firstName}
                    />
                </div>
                <div className='col'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        onChange={props.handleChange}
                        type='text'
                        className='form-control'
                        id='lastName'
                        placeholder='Last name'
                        name='lastName'
                        value={props.lastName}
                    />
                </div>
                <div className='col'>
                    <label htmlFor='title'>Title</label>
                    <input
                        onChange={props.handleChange}
                        type='text'
                        className='form-control'
                        id='title'
                        placeholder='E.g. Web Developer'
                        name='title'
                        value={props.title}
                    />
                </div>
            </div>

            <div className='form-row mt-1'>
                <div className='col'>
                    <label htmlFor='emailAddress'>Email address</label>
                    <input
                        onChange={props.handleChange}
                        type='email'
                        className='form-control'
                        id='emailAddress'
                        aria-describedby='emailHelp'
                        placeholder='Enter email'
                        name='email'
                        value={props.email}
                    />
                    <small id='emailHelp' className='form-text text-muted'>
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className='col'>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input
                        onChange={props.handleChange}
                        type='number'
                        className='form-control'
                        id='phoneNumber'
                        aria-describedby='emailHelp'
                        placeholder='Enter Phone Number'
                        name='phoneNumber'
                        value={props.phoneNumber}
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='col-6'>
                    <label htmlFor='address'>Address</label>
                    <input
                        onChange={props.handleChange}
                        type='text'
                        className='form-control'
                        id='address'
                        placeholder='Enter Address'
                        name='address'
                        value={props.address}
                    />
                </div>
                <div className='col'>
                    <label htmlFor='city'>City</label>
                    <input
                        onChange={props.handleChange}
                        type='text'
                        className='form-control'
                        id='city'
                        placeholder='Enter City'
                        name='city'
                        value={props.city}
                    />
                </div>
                <div className='col'>
                    <label htmlFor='country'>Country</label>
                    <input
                        onChange={props.handleChange}
                        type='text'
                        className='form-control'
                        id='country'
                        placeholder='Enter Country'
                        name='country'
                        value={props.country}
                    />
                </div>
            </div>
            <div className='form-row mt-1'>
                <div className='col'>
                    <label htmlFor='nationality'>Nationality</label>
                    <input
                        onChange={props.handleChange}
                        type='text'
                        className='form-control'
                        id='nationality'
                        aria-describedby='emailHelp'
                        placeholder='Enter Nationality'
                        name='nationality'
                        value={props.nationality}
                    />
                </div>
                <div className='col'>
                    <label htmlFor='linkedinLink'>Linkedin Link</label>
                    <input
                        onChange={props.handleChange}
                        type='text'
                        className='form-control'
                        id='linkedinLink'
                        aria-describedby='emailHelp'
                        placeholder='Enter Linkedin link'
                        name='linkedIn'
                        value={props.linkedIn}
                    />
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor='description'>Description/Objective</label>
                <textarea
                    onChange={props.handleChange}
                    className='form-control'
                    id='description'
                    placeholder='Keep it short and simple. Three sentences is optimum.'
                    rows='3'
                    name='description'
                    value={props.description}
                ></textarea>
            </div>
        </div>
    );
}

export default EditorGeneral;
