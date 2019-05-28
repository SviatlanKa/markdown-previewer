import React, { Component } from 'react';
import Editor from './Editor';
import Previewer from './Previewer';
import defaultText from '../docs/defaultText.md';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value})
    }

    componentDidMount() {
      fetch(defaultText)
          .then(response => response.text())
          .then(text => this.setState({text}));
    }
    render() {
        const { text } = this.state;
        return (
            <div>
                <Editor
                    value={text}
                    onChange={this.handleChange}
                >
                </Editor>
                <Editor
                />
                <Previewer text={this.state.text}/>
            </div>
        )
    }
}

export default App;
