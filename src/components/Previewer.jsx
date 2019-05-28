import React, { Component } from 'react';
import marked from 'react-marked';

class Previewer extends Component {
    render() {
      marked.setOptions({
          renderer: new marked.Renderer(),
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: true,
          smartLists: true,
          smartypants: false
      });
        return(
            <div id="previewer">
                {marked(this.props.text)}
            </div>
        )
    }
}

export default Previewer;
