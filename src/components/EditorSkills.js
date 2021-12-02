import React from 'react';

function EditorSkills(props) {
    return (
        <div id='skill'>
            <h4>Skills</h4>
            <div className='form-group'>
                <input
                    type='text'
                    className='form-control'
                    id='skill'
                    placeholder='Enter a skill e.g. Front-end Web Development'
                    onChange={props.handleChange}
                    name='skill'
                    value={props.skill}
                />
            </div>
            <div className='form-group'>
                <input
                    type='text'
                    className='form-control'
                    id='skill'
                    placeholder='Description e.g. HTML, CSS, JS, Github'
                    onChange={props.handleChange}
                    name='skillDescription'
                    value={props.skillDescription}
                />
            </div>
        </div>
    );
}

export default EditorSkills;
