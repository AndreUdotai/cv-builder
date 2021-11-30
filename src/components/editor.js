import React from 'react';
import EditorGeneral from './EditorGeneral';
import EditorExperiences from './EditorExperiences';
import EditorEducation from './EditorEducation';
import EditorSkills from './EditorSkills';
import EditorHobbies from './EditorHobbies'
import '../styles/editor.css';

class Editor extends React.Component {
    render() {
        return (
            <div className='row mt-4 mb-4 w-75 mx-auto'>
                <div className='col-12' id='editor'>
                    <form>
                        < EditorGeneral />
                        < EditorExperiences />
                        < EditorEducation />
                        < EditorSkills />
                        < EditorHobbies />
                    </form>
                </div>
            </div>
        );
    }
}

export default Editor;
