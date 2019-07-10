import React, { Component } from 'react';

class InputTagField extends React.Component {
    constructor() { // setting up defaults
        super();
        
        // create standard props from Storybook reqs
        this.state = {
          tags: []
        };
        
        this.margin = 0;
        this.bold = true;
        this.icon = 'Times';
        this.size = 1;

    }


    render() { // layout + i/0
        const {tags} = this.state; // pointer to tags ref

        return (
            <div className="field-tag">
                <ul className="list-tags">
                    { tags.map((tag, i) => (
                        <li key={tag}>
                            {tag}
                            <button type="button" onClick={() => { this.deleteTag(i); }}>x</button>
                        </li>
                    ))}
                    <input type="text" onKeyUp={this.newItemAdded} ref={c => { this.tagGiven = c}}/>
                </ul>
            </div>
        );
    }

    // item input function (tag function)
    newItemAdded = (eventbutton) => {
        const val = eventbutton.target.value;
        if (eventbutton.key === 'Enter' && val !== '') {
            // first make sure tag isn't present. Leave if so.
            if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
                return;
            }
          this.setState({ tags: [...this.state.tags, val]});
          this.tagGiven.value = null; // resetting typebox
        } else if (eventbutton.key === 'Backspace' && val === '') {
            this.deleteTag(this.state.tags.length - 1); // removing tag at last index
        }
    }

    // item deletion function (untag function)
    deleteTag = (tag_index) => {
        const updatedTags = [ ...this.state.tags ];
        updatedTags.splice(tag_index, 1);
        this.setState({ tags: updatedTags });
    }
}

ReactDOM.render(<InputTagField/>, document.getElementById('content'));