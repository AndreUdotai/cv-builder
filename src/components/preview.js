import React from 'react';
import PreviewHeader from './PreviewHeader';
import PreviewBody from './PreviewBody';
import '../styles/preview.css';

function Preview(props) {
    return (
        <div className='row my-4 w-75 mx-auto'>
            <div className='col-12' id='preview'>
                <PreviewHeader
                    firstName={props.firstName}
                    lastName={props.lastName}
                    title={props.title}
                />
                <PreviewBody
                    email={props.email}
                    phoneNumber={props.phoneNumber}
                    address={props.address}
                    city={props.city}
                    country={props.country}
                    nationality={props.nationality}
                    linkedIn={props.linkedIn}
                    description={props.description}
                    handleChange={props.handleChange}

                    experienceCompany={props.experienceCompany}
                    experiencePosition={props.experiencePosition}
                    experienceCity={props.experienceCity}
                    experienceCountry={props.experienceCountry}
                    experienceFrom={props.experienceFrom}
                    experienceTo={props.experienceTo}
                    experienceDescription={props.experienceDescription}

                    educationSchool={props.educationSchool}
                    educationCity={props.educationCity}
                    educationCountry={props.educationCountry}
                    educationCertificate={props.educationCertificate}
                    educationFrom={props.educationFrom}
                    educationTo={props.educationTo}

                    skill={props.skill}
                    skillDescription={props.skillDescription}

                    hobby={props.hobby}
                />
            </div>
        </div>
    );
}

export default Preview;
