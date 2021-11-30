import React from 'react';

class EditorHobbies extends React.Component {
    render() {
        return (
            <div id='hobbies'>
                <h4>Hobbies</h4>
                <div className='form-group'>
                    <input
                        type='text'
                        className='form-control'
                        id='hobbies'
                        placeholder='Enter a Hobby'
                    />
                </div>
            </div>
        );
    }
}

export default EditorHobbies;
