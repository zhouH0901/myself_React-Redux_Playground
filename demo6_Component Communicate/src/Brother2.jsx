import React, {Component} from 'react';

export default class Brother2 extends Component{
    constructor(props){
            super(props);
            this.state = {}
    }

    render(){
        return(
            <div>
                {this.props.text || 'brother is not update'}
            </div>
        );

    }
}