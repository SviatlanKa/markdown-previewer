import React, { Component } from 'react';
import Editor from './Editor';
import Previewer from './Previewer';
import defaultText from '../docs/defaultText.md';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: defaultText
        }
    }
    render() {
        console.log(this.state.value);
        return (
            <div>
                <Editor />
                <Previewer text={this.state.value}/>
            </div>
        )
    }
}

export default App;