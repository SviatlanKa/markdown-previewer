import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import './App.css';

class Previewer extends Component {
    render() {
        return(
            <div id="previewer">
                <ReactMarkdown
                    source={this.props.text}
                    escapeHtml={false}
                />
            </div>
        )
    }
}

export default Previewer;
