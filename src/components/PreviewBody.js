import React from 'react';
import '../styles/preview.css'
import PreviewPersonal from './PreviewPersonal';
import PreviewQualifications from './PreviewQualifications';

class PreviewBody extends React.Component{
    render(){
        return(
            <div className='row previewBody'>
                <div className='col-9 qualifications'>
                    < PreviewQualifications />
                </div>
                <div className='col-3 personalInfo'>
                    < PreviewPersonal />
                </div>
            </div>
        )
    }
}

export default PreviewBody;