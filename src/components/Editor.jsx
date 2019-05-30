import React, { Component } from 'react';
import './App.css';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onHandleChange(event.target.value)
  }
    render() {
        return(
            <div>
                <textarea
                    id="editor"
                    value={this.props.text}
                    onChange={this.handleChange}
                >
                </textarea>
            </div>
        )
    }
}

export default Editor;
