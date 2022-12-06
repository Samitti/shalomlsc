import React, { Component } from 'react'
import "./HeroimgAllStyles.css";

class HeroimgAll extends Component {
    render () {
        return (
            <div className='hero-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                </div>
            </div>
          );
    }
  
}

export default HeroimgAll