import React, { Component } from 'react';

class Tag extends React.Component {
    constructor() { // setting up defaults
        super();
        
        this.state = {
          current_tags: []
        };
    }


    render() {
        return (
            <div className="field-tag">
                <ul className="list-tags">

                    <li> // list each tag
                        Tag
                        <button type="button">Remove</button>
                    </li>
                </ul>
                <input type="text" onKeyUp={this.newItemAdded}/>
            </div>
        );
    }

    // item input function (tag function)
    newItemAdded = (eventbutton) => {
        const val = eventbutton.target.value;
        if (eventbutton.key === 'Enter' && val !== '') {
          this.setState({ tags: [...this.state.tags, val]});
        }
      }
}

ReactDOM.render(<InputTag/>, document.getElementById('content'));