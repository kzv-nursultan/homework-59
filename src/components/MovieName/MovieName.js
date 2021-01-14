import React,{PureComponent} from 'react';

class MovieName extends PureComponent{
    render(){
        return(
            <div className='d-flex bg-warning text-dark justify-content-center p-2'>
                <input
                value={this.props.value}
                onChange={this.props.onChange}/>
                <button className="btn btn-dark">
                    Delete
                </button>
            </div>
        );
    };
};

export default MovieName;

