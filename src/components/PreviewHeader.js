import React from 'react';


function PreviewHeader(props){
        return(
            <div className='row'>
                <div className='col py-4 previewHeader'>
                    <h1>{props.firstName} {props.lastName}</h1>
                    <h3>{props.title}</h3>
                </div>
            </div>
        )
}

export default PreviewHeader;