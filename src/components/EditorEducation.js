import React from 'react';

class EditorEducation extends React.Component {
    render() {
        return (
            <div className='my-4' id='education'>
                <h4>Education</h4>
                <div className='form-group'>
                    <label htmlFor='univsersity'>
                        University or School Name
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='university'
                        placeholder='Enter University Name'
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
                <div className='form-group'>
                    <label htmlFor='certificate'>Certificate</label>
                    <input
                        type='text'
                        className='form-control'
                        id='certificate'
                        placeholder='Enter Certificate Obtained'
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
                        />
                    </div>
                    <div className='col'>
                        <label htmlFor='to'>To</label>
                        <input
                            type='number'
                            className='form-control'
                            id='to'
                            placeholder='Enter Year Ended'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default EditorEducation;
