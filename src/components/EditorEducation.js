import React from 'react';

function EditorEducation(props) {
    return (
        <div className='my-4' id='education'>
            <h4>Education</h4>
            <div className='form-group'>
                <label htmlFor='univsersity'>University or School Name</label>
                <input
                    type='text'
                    className='form-control'
                    id='university'
                    placeholder='Enter University Name'
                    onChange={props.handleChange}
                    name='educationSchool'
                    value={props.educationSchool}
                />
            </div>
            <div className='form-row'>
                <div className='col'>
                    <label htmlFor='city'>City</label>
                    <input
                        type='text'
                        className='form-control'
                        id='city'
                        placeholder='Enter City'
                        onChange={props.handleChange}
                        name='educationCity'
                        value={props.educationCity}
                    />
                </div>
                <div className='col'>
                    <label htmlFor='country'>Country</label>
                    <input
                        type='text'
                        className='form-control'
                        id='country'
                        placeholder='Enter Country'
                        onChange={props.handleChange}
                        name='educationCountry'
                        value={props.educationCountry}
                    />
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor='certificate'>Certificate</label>
                <input
                    type='text'
                    className='form-control'
                    id='certificate'
                    placeholder='Enter Certificate Obtained'
                    onChange={props.handleChange}
                    name='educationCertificate'
                    value={props.educationCertificate}
                />
            </div>
            <div className='form-row'>
                <div className='col'>
                    <label htmlFor='from'>From</label>
                    <input
                        type='number'
                        className='form-control'
                        id='from'
                        placeholder='Enter Year Started'
                        onChange={props.handleChange}
                        name='educationFrom'
                        value={props.educationFrom}
                    />
                </div>
                <div className='col'>
                    <label htmlFor='to'>To</label>
                    <input
                        type='number'
                        className='form-control'
                        id='to'
                        placeholder='Enter Year Ended'
                        onChange={props.handleChange}
                        name='educationTo'
                        value={props.educationTo}
                    />
                </div>
            </div>
        </div>
    );
}

export default EditorEducation;
