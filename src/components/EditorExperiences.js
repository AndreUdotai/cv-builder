import React from 'react';

function EditorExperiences(props){
        return (
            <div id='experience'>
                <h4>Experience</h4>
                <div className='form-group'>
                    <label htmlFor='company'>Company</label>
                    <input
                        type='text'
                        className='form-control'
                        id='company'
                        placeholder='Enter University Name'
                        onChange={props.handleChange}
                        name='experienceCompany'
                        value={props.experienceCompany}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='position'>Position</label>
                    <input
                        type='text'
                        className='form-control'
                        id='position'
                        placeholder='Enter University Name'
                        onChange={props.handleChange}
                        name='experiencePosition'
                        value={props.experiencePosition}
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
                            name='experienceCity'
                            value={props.experienceCity}
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
                            name='experienceCountry'
                            value={props.experienceCountry}
                        />
                    </div>
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
                            name='experienceFrom'
                            value={props.experienceFrom}
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
                            name='experienceTo'
                            value={props.experienceTo}
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='description'>
                        Job Description/Achievements
                    </label>
                    <textarea
                        className='form-control'
                        id='description'
                        placeholder='Keep it short and simple. A maximum of three sentences is optimum.'
                        rows='3'
                        onChange={props.handleChange}
                        name='experienceDescription'
                        value={props.experienceDescription}
                    ></textarea>
                </div>
            </div>
        );
}

export default EditorExperiences;
