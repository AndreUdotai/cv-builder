import React, { useState } from 'react';
import Editor from './editor';
import Preview from './preview';
import '../styles/mode.css';

function Mode() {
    const [mount, setMount] = useState(false);
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        title: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        country: '',
        nationality: '',
        linkedIn: '',
        description: '',

        experienceCompany: '',
        experiencePosition: '',
        experienceCity: '',
        experienceCountry: '',
        experienceFrom: '',
        experienceTo: '',
        experienceDescription: '',

        educationSchool: '',
        educationCity: '',
        educationCounry: '',
        educationCertificate: '',
        educationFrom: '',
        educationTo: '',

        skill: '',
        skillDescription: '',

        hobby: '',
    });

    function handleChange(e) {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    }

    const setMountTrue = () => {
        setMount(true);
    };

    const setMountFalse = () => {
        setMount(false);
    };

    const editorMode = () => {
        document.getElementById('workingMode').classList.add('active');
        document.getElementById('previewMode').classList.remove('active');
        setMountFalse();
    };

    function previewMode() {
        document.getElementById('previewMode').classList.add('active');
        document.getElementById('workingMode').classList.remove('active');
        setMountTrue();
    }

    return (
        <div>
            <div className='row mt-2'>
                <div className='col-12 text-center'>
                    <button
                        type='button'
                        id='workingMode'
                        className='btn btn-secondary mr-2'
                        onClick={editorMode}
                    >
                        Editor Mode
                    </button>
                    <button
                        type='button'
                        id='previewMode'
                        className='btn btn-secondary ml-2'
                        onClick={previewMode}
                    >
                        Preview Mode
                    </button>
                </div>
            </div>
            {mount ? (
                <Preview
                    firstName={state.firstName}
                    lastName={state.lastName}
                    title={state.title}
                    email={state.email}
                    phoneNumber={state.phoneNumber}
                    address={state.address}
                    city={state.city}
                    country={state.country}
                    nationality={state.nationality}
                    linkedIn={state.linkedIn}
                    description={state.description}

                    experienceCompany={state.experienceCompany}
                    experiencePosition={state.experiencePosition}
                    experienceCity={state.experienceCity}
                    experienceCountry={state.experienceCountry}
                    experienceFrom={state.experienceFrom}
                    experienceTo={state.experienceTo}
                    experienceDescription={state.experienceDescription}

                    educationSchool={state.educationSchool}
                    educationCity={state.educationCity}
                    educationCountry={state.educationCountry}
                    educationCertificate={state.educationCertificate}
                    educationFrom={state.educationFrom}
                    educationTo={state.educationTo}

                    skill={state.skill}
                    skillDescription={state.skillDescription}

                    hobby={state.hobby}
                />
            ) : (
                <Editor
                    handleChange={handleChange}
                    firstName={state.firstName}
                    lastName={state.lastName}
                    title={state.title}
                    email={state.email}
                    phoneNumber={state.phoneNumber}
                    address={state.address}
                    city={state.city}
                    country={state.country}
                    nationality={state.nationality}
                    linkedIn={state.linkedIn}
                    description={state.description}

                    experienceCompany={state.experienceCompany}
                    experiencePosition={state.experiencePosition}
                    experienceCity={state.experienceCity}
                    experienceCountry={state.experienceCountry}
                    experienceFrom={state.experienceFrom}
                    experienceTo={state.experienceTo}
                    experienceDescription={state.experienceDescription}

                    educationSchool={state.educationSchool}
                    educationCity={state.educationCity}
                    educationCountry={state.educationCountry}
                    educationCertificate={state.educationCertificate}
                    educationFrom={state.educationFrom}
                    educationTo={state.educationTo}

                    skill={state.skill}
                    skillDescription={state.skillDescription}

                    hobby={state.hobby}
                />
            )}
        </div>
    );
}

export default Mode;
