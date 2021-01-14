import React, {Component} from 'react';

class Joke extends Component{
    render(){
        return(
            <div className='card-body bg-dark'>
                <p>
                <img src={this.props.img} alt='Chuck'/>
                </p>
                <p className='rounded-pill bg-secondary text-white p-3'>
                { this.props.joke}
                </p>
            </div>
        );
    };
};

export default Joke;