import React from 'react';
import '../styles/preview.css';

class PreviewDescription extends React.Component {
    render() {
        return (
            <div className='row my-3'>
                <div className='col binta'>
                    <h5>Description</h5>
                    <hr />
                    <p>
                        <i>
                            From the days of Jean Baptista, the kingodm of
                            heaven suffereth violence and only the violent men
                            can take it by force.
                        </i>
                    </p>
                </div>
            </div>
        );
    }
}

class PreviewExperience extends React.Component {
    render() {
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
                        <h6></h6>
                    </div>
                    <div className='col-9'>
                        <h6></h6>
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
                            <i></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class PreviewEducation extends React.Component {
    render() {
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
                        <h6></h6>
                    </div>
                    <div className='col-9'>
                        <h6></h6>
                        <div></div>
                    </div>
                </div>
            </div>
        );
    }
}

class PreviewSkills extends React.Component {
    render() {
        return (
            <div>
                <div className='row mt-4'>
                    <div className='col'>
                        <h5>Skills and Achievements</h5>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

class PreviewQualifications extends React.Component {
    render() {
        return (
            <div>
                <PreviewDescription />
                <PreviewExperience />
                <PreviewEducation />
                <PreviewSkills />
            </div>
        );
    }
}

export default PreviewQualifications;
