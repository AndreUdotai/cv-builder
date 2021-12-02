import React from 'react';
import '../styles/preview.css';
import PreviewPersonal from './PreviewPersonal';
import PreviewQualifications from './PreviewQualifications';

function PreviewBody(props) {
    return (
        <div className='row previewBody'>
            <div className='col-9 qualifications'>
                <PreviewQualifications
                    description={props.description}
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
                />
            </div>
            <div className='col-3 personalInfo'>
                <PreviewPersonal
                    email={props.email}
                    phoneNumber={props.phoneNumber}
                    address={props.address}
                    city={props.city}
                    country={props.country}
                    nationality={props.nationality}
                    linkedIn={props.linkedIn}
                    handleChange={props.handleChange}
                    hobby={props.hobby}
                />
            </div>
        </div>
    );
}

export default PreviewBody;
