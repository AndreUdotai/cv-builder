import React from 'react';

class EditorExperiences extends React.Component {
    render() {
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
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='position'>Position</label>
                    <input
                        type='text'
                        className='form-control'
                        id='position'
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
                <div class='form-group'>
                    <label htmlFor='description'>
                        Job Description/Achievements
                    </label>
                    <textarea
                        className='form-control'
                        id='description'
                        placeholder='Keep it short and simple. A maximum of three sentences is optimum.'
                        rows='3'
                    ></textarea>
                </div>
            </div>
        );
    }
}

export default EditorExperiences;
