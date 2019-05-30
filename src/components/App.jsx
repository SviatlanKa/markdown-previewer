import React, { Component } from 'react';
import Editor from './Editor';
import Previewer from './Previewer';
import defaultText from '../docs/defaultText.md';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(text) {
        this.setState({ text });
    }

    componentDidMount() {
      fetch(defaultText)
          .then(response => response.text())
          .then(text => this.setState({text}));
    }
    render() {
        return (
            <div className="wrapper">
                <Editor
                    text={this.state.text}
                    onHandleChange={this.handleChange}
                />
                <Previewer text={this.state.text}
                />
            </div>
        )
    }
}

export default App;
