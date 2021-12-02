import React from 'react';

function EditorHobbies(props) {
    return (
        <div id='hobbies'>
            <h4>Hobbies</h4>
            <div className='form-group'>
                <input
                    type='text'
                    className='form-control'
                    id='hobbies'
                    placeholder='Enter a Hobby'
                    onChange={props.handleChange}
                    name='hobby'
                    value={props.hobby}
                />
            </div>
        </div>
    );
}

export default EditorHobbies;
