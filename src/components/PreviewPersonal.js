import React from 'react';

class PreviewPersonalDetails extends React.Component{
    render(){
        return(
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
                        <p></p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h6>Phone Number</h6>
                        <p></p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h6>Address</h6>
                        <p></p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h6>LinkedIn</h6>
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }
}

class PreviewPersonalHobbies extends React.Component{
    render(){
        return(
            <div>
                <div className='row'>
                    <div className='col'>
                        <h5>Hobbies & Interests</h5>
                        <hr />
                        
                    </div>
                </div>
            </div>
        )
    }
}

class PreviewPersonal extends React.Component{
    render(){
        return(
            <div className='personalInfoContent'>
                < PreviewPersonalDetails />
                < PreviewPersonalHobbies />
            </div>
        )
    }
}

export default PreviewPersonal;