import React from 'react';
import EditorGeneral from './EditorGeneral';
import EditorExperiences from './EditorExperiences';
import EditorEducation from './EditorEducation';
import EditorSkills from './EditorSkills';
import EditorHobbies from './EditorHobbies';
import '../styles/editor.css';

function Editor(props) {
    return (
        <div className='row mt-4 mb-4 w-75 mx-auto'>
            <div className='col-12' id='editor'>
                <form>
                    <EditorGeneral
                        firstName={props.firstName}
                        lastName={props.lastName}
                        title={props.title}
                        email={props.email}
                        phoneNumber={props.phoneNumber}
                        address={props.address}
                        city={props.city}
                        country={props.country}
                        nationality={props.nationality}
                        linkedIn={props.linkedIn}
                        description={props.description}
                        handleChange={props.handleChange}
                    />
                    <EditorExperiences
                        experienceCompany={props.experienceCompany}
                        experiencePosition={props.experiencePosition}
                        experienceCity={props.experienceCity}
                        experienceCountry={props.experienceCountry}
                        experienceFrom={props.experienceFrom}
                        experienceTo={props.experienceTo}
                        experienceDescription={props.experienceDescription}
                        handleChange={props.handleChange}
                    />
                    <EditorEducation
                        educationSchool={props.educationSchool}
                        educationCity={props.educationCity}
                        educationCountry={props.educationCountry}
                        educationCertificate={props.educationCertificate}
                        educationFrom={props.educationFrom}
                        educationTo={props.educationTo}
                        handleChange={props.handleChange}
                    />
                    <EditorSkills
                        skill={props.skill}
                        skillDescription={props.skillDescription}
                        handleChange={props.handleChange}
                    />
                    <EditorHobbies
                        hobby={props.hobby}
                        handleChange={props.handleChange}
                    />
                </form>
            </div>
        </div>
    );
}

export default Editor;
