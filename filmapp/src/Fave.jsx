import React from 'react';
import { Component } from 'react';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';

class Fave extends Component {

    handleClick = (e) => {
        e.stopPropagation()
        console.log('Handling Fave click!')
      
        // Add this line. You'll call the function passed through props.
        this.props.onFaveToggle()
    }
    
    render () {
        const isFave = this.props.isFave ? 'remove_from_queue' : 'add_to_queue';
        return (
            <div className={`film-row-fave ${isFave}`} onClick={this.handleClick}>
                <div>
                {this.props.isFave ? <RemoveFromQueueIcon/> : <AddToQueueIcon/>}
                </div>
            </div>
        )
    }
}

export default Fave;