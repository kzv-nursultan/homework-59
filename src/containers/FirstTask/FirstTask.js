import React, {Component} from 'react';
import MovieName from '../../components/MovieName/MovieName';

class FirstTask extends Component{
    state = {movies:[
        {value: 'IT'}
    ]};

    newObject = {};

    onClick = () => {  
        const updatedstate = {movies:[...this.state.movies, this.newObject]};
        this.setState(updatedstate);
        console.log(this.state)
    }

    onChange = (e) =>{
        this.newObject = {value: e.target.value};
    }

    onChangeName = (e,i) =>{
        const stateCopy = [...this.state.movies];
        const movieCopy = {...this.state.movies[i]};
        movieCopy.value = e.target.value;
        stateCopy[i] = movieCopy;
        this.setState(stateCopy);
    }

    render(){
        return(
            <div className='container bg-primary'>
                <div className = "d-flex p-3 align-items-center">
                Type movie name:<input onChange={this.onChange}/>
                    <button 
                    className='btn btn-danger'
                    onClick={this.onClick}>
                        Add to list
                    </button>
                </div>
                <div>
                    {this.state.movies.map(movie=>(
                        <MovieName 
                        key = {movie.value}
                        value={movie.value}
                        onChange={this.onChangeName}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default FirstTask;