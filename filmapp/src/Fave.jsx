import React from 'react';
import { Component } from 'react';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';

class Fave extends Component {

    constructor() {
        super();

        this.state = {
            isFave: false
        }
    }

    handleClick = (e) => {
        console.log("handling Fave click!");
        e.stopPropagation()

        this.setState(prevState => ({ isFave:!prevState.isFave }))
    };
    
    render () {
        const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue';
        return (
            <div className={`film-row-fave ${isFave}`} onClick={this.handleClick}>
                <div>
                {this.state.isFave ? <RemoveFromQueueIcon/> : <AddToQueueIcon/>}
                </div>
            </div>
        )
    }
}

export default Fave;