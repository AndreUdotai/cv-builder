import React from 'react';
import Editor from './editor';
import Preview from './preview';
import '../styles/mode.css';

class Mode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mount: false,
        };
    }

    setMountTrue = () => {
        this.setState({
            mount: true,
        });
    };

    setMountFalse = () => {
        this.setState({
            mount: false,
        });
    };
    render() {
        // function editorMode(){
        //     document.getElementById('workingMode').classList.add('active');
        //     document.getElementById('previewMode').classList.remove('active');
        //     this.setMountTrue();
        // }
        // function previewMode(){
        //     document.getElementById('previewMode').classList.add('active');
        //     document.getElementById('workingMode').classList.remove('active');
        //     this.setMountFalse();
        // }
        return (
            <div>
                <div className='row mt-2'>
                    <div className='col-12 text-center'>
                        <button
                            onClick={this.setMountFalse}
                            type='button'
                            id='workingMode'
                            className='btn btn-secondary mr-2'
                        >
                            Editor Mode
                        </button>
                        <button
                            onClick={this.setMountTrue}
                            type='button'
                            id='previewMode'
                            className='btn btn-secondary ml-2'
                        >
                            Preview Mode
                        </button>
                    </div>
                </div>
                {this.state.mount ? <Preview /> : <Editor /> }
            </div>
        );
    }
}

export default Mode;
