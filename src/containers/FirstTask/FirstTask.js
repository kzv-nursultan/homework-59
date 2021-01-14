import React, {Component} from 'react';
import MovieName from '../../components/MovieName/MovieName';
import { nanoid } from 'nanoid'

class FirstTask extends Component{
    state = {movies:[
        {value: 'IT', id:nanoid()}
    ]};

    newObject = {};

    onClick = () => {  
        const updatedstate = {movies:[...this.state.movies, this.newObject]};
        this.setState(updatedstate);
        console.log(this.state)
    }

    onChange = (e) =>{
        this.newObject = {value: e.target.value, id:nanoid()};
    }

    onChangeName = (id,e) =>{
        const index = this.state.movies.findIndex(p=>p.id===id);
        const stateCopy = {...this.state};
        const moviesCopy = [...this.state.movies];
        const movie = {...moviesCopy[index]};
        movie.value=e.target.value;
        moviesCopy[index] = movie;
        stateCopy.movies = moviesCopy;
        this.setState(stateCopy);
    }

    deleteBtn = id =>{
        const index = this.state.movies.findIndex(p=>p.id===id);
        const stateCopy = {...this.state};
        const moviesCopy = [...this.state.movies];
        moviesCopy.splice(index,1);
        stateCopy.movies = moviesCopy;
        this.setState(stateCopy);

    }

    render(){
        return(
            <div className='container bg-primary'>
                <div className = "d-flex p-3 align-items-center justify-content-around">
                Type movie name:<input onChange={this.onChange}/>
                    <button 
                    className='btn btn-danger'
                    onClick={this.onClick}>
                        Add to list
                    </button>
                </div>
                <div className="p-3">
                    {this.state.movies.map((movie)=>(
                        <MovieName 
                        key = {movie.id}
                        value={movie.value}
                        onChange={(e)=>this.onChangeName(movie.id,e)}
                        onClick={()=>this.deleteBtn(movie.id)}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default FirstTask;