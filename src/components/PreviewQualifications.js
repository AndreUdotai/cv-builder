import React from 'react';
import '../styles/preview.css';

function PreviewDescription(props) {
    return (
        <div className='row my-3'>
            <div className='col binta'>
                <h5>Description</h5>
                <hr />
                <p>
                    <i>{props.description}</i>
                </p>
            </div>
        </div>
    );
}

function PreviewExperience(props) {
    return (
        <div>
            <div className='row'>
                <div className='col'>
                    <h5>Experience</h5>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <h6>
                        {props.experienceFrom}-{props.experienceTo}
                    </h6>
                </div>
                <div className='col-9'>
                    <h6>
                        {props.experienceCompany}, {props.experienceCity},{' '}
                        {props.experienceCountry}
                    </h6>
                    <p>{props.experiencePosition}</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-9'>
                    <div></div>
                </div>
            </div>
            <div className='row pr-1'>
                <div className='col-3'></div>
                <div className='col-9 achievement'>
                    <div>
                        <i>{props.experienceDescription}</i>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PreviewEducation(props) {
    return (
        <div>
            <div className='row mt-4'>
                <div className='col'>
                    <h5>Education</h5>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <h6>
                        {props.educationFrom}-{props.educationTo}
                    </h6>
                </div>
                <div className='col-9'>
                    <h6>
                        {props.educationSchool}, {props.educationCity},{' '}
                        {props.educationCountry}
                    </h6>
                    <div>{props.educationCertificate}</div>
                </div>
            </div>
        </div>
    );
}

function PreviewSkills(props) {
    return (
        <div>
            <div className='row mt-4'>
                <div className='col'>
                    <h5>Skills and Achievements</h5>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h6>{props.skill}</h6>
                    <div>
                        <i>{props.skillDescription}</i>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PreviewQualifications(props) {
    return (
        <div>
            <PreviewDescription description={props.description} />
            <PreviewExperience
                experienceCompany={props.experienceCompany}
                experiencePosition={props.experiencePosition}
                experienceCity={props.experienceCity}
                experienceCountry={props.experienceCountry}
                experienceFrom={props.experienceFrom}
                experienceTo={props.experienceTo}
                experienceDescription={props.experienceDescription}
            />
            <PreviewEducation
                educationSchool={props.educationSchool}
                educationCity={props.educationCity}
                educationCountry={props.educationCountry}
                educationCertificate={props.educationCertificate}
                educationFrom={props.educationFrom}
                educationTo={props.educationTo}
            />
            <PreviewSkills
                skill={props.skill}
                skillDescription={props.skillDescription}
            />
        </div>
    );
}

export default PreviewQualifications;
