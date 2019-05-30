import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import './App.css';

class Previewer extends Component {
    render() {
        return(
            <div id="previewer">
                <ReactMarkdown
                    className="container"
                    source={this.props.text}
                    escapeHtml={true}
                />
            </div>
        )
    }
}

export default Previewer;
