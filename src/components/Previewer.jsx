import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown/with-html';

class Previewer extends Component {
    render() {
        return(
            <div id="previewer">
                <ReactMarkdown
                    className="container"
                    source={this.props.text}
                    escapeHtml={false}
                />
            </div>
        )
    }
}

export default Previewer;
