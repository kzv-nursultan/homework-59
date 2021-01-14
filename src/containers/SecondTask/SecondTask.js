import React, {useState,useEffect} from 'react';
import Joke from '../../components/Joke/Joke';

const SecondTask = () =>{
    const[jokes, setJokes] = useState([]);
    const url = 'https://api.chucknorris.io/jokes/random';

    const fetchData = async () =>{
        const response = await fetch(url);
        if(response.ok) {
            const joke = await response.json();
            setJokes(joke);
        };
    };

    useEffect(()=>{
       fetchData();
      fetchData().catch(console.error);  
    }, []);


    return(
        <div className='card bg-dark'>
                <Joke 
                img={jokes.icon_url}
                joke={jokes.value}/>
                <p>
                    <button onClick={fetchData} className='btn btn-warning'>
                        Fun captions about Chuck Norris
                    </button>
                </p>
        </div>
    );
};

export default SecondTask;