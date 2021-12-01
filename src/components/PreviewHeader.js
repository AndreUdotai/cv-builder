import React from 'react';

class PreviewHeader extends React.Component{
    render(){
        return(
            <div className='row'>
                <div className='col py-4 previewHeader'>
                    <h1>{this.props.firstName} {this.props.lastName}</h1>
                    <h3>Web Developer</h3>
                </div>
            </div>
        )
    }
}

export default PreviewHeader;