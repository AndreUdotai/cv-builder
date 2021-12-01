import React from 'react';
import PreviewHeader from './PreviewHeader';
import PreviewBody from './PreviewBody';
import '../styles/preview.css';

class Preview extends React.Component {
    render() {
        return (
            <div className='row my-4 w-75 mx-auto'>
                <div className='col-12' id='preview'>
                    <PreviewHeader firstName={this.props.firstName} lastName={this.props.lastName} />
                    <PreviewBody />
                </div>
            </div>
        );
    }
}

export default Preview;
