import React, { Component } from 'react';

class Editor extends Component {
    render() {
        return(
            <div>
                <textarea id="editor"
                >
                    {this.props.text}
                </textarea>
            </div>
        )
    }
}

export default Editor;