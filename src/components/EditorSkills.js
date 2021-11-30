import React from 'react';

class EditorSkills extends React.Component {
    render() {
        return (
            <div id='skill'>
                <h4>Skills</h4>
                <div className='form-group'>
                    <input
                        type='text'
                        className='form-control'
                        id='skill'
                        placeholder='Enter a skill e.g. Front-end Web Development'
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        className='form-control'
                        id='skill'
                        placeholder='Description e.g. HTML, CSS, JS, Github'
                    />
                </div>
            </div>
        );
    }
}

export default EditorSkills;
