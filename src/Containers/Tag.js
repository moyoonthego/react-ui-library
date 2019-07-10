import React, { Component } from 'react';
import styled from 'styled-components';

//attempted styled-component
const actualTag = styled.Tag`
        font-size: {this.size}
        margin: {this.margin}
        color:gray

        :hover {
            color: red;
          }
        `


class Tag extends React.Component {
    constructor() { // setting up defaults
        super();
        
        this.margin = 0; // int
        this.bold = true; // bool
        this.icon = 'Times'; // image path(?)
        this.size = 1; // int
        this.active = null; // bool
        this.data = ''; // text

    }


    render() { // layout + i/0
        return (
            <div className="Tag">
                    <li key={this.data}>
                            <actualTag>{this.data}</actualTag>
                            <button type="button" onClick={() => { return }}>{this.icon}</button>
                    </li>
            </div>
        );
    }

}

ReactDOM.render(<Tag/>, document.getElementById('content'));