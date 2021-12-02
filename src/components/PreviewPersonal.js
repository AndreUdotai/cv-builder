import React from 'react';

function PreviewPersonalDetails(props) {
    return (
        <div>
            <div className='row mt-3'>
                <div className='col'>
                    <h5>Personal Details</h5>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h6>Nationality</h6>
                    <p>{props.nationality}</p>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h6>Phone Number</h6>
                    <p>{props.phoneNumber}</p>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h6>Address</h6>
                    <p>
                        {props.address} <br /> {props.city} <br />{' '}
                        {props.country}{' '}
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h6>LinkedIn</h6>
                    <p>{props.linkedIn}</p>
                </div>
            </div>
        </div>
    );
}

function PreviewPersonalHobbies(props) {
    return (
        <div>
            <div className='row'>
                <div className='col'>
                    <h5>Hobbies & Interests</h5>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <p>{props.hobby}</p>
                </div>
            </div>
        </div>
    );
}

function PreviewPersonal(props) {
    return (
        <div className='personalInfoContent'>
            <PreviewPersonalDetails
                email={props.email}
                phoneNumber={props.phoneNumber}
                address={props.address}
                city={props.city}
                country={props.country}
                nationality={props.nationality}
                linkedIn={props.linkedIn}
                handleChange={props.handleChange}
            />
            <PreviewPersonalHobbies hobby={props.hobby} />
        </div>
    );
}

export default PreviewPersonal;
