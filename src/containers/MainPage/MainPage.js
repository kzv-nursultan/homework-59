import React, {useState} from 'react';
import FirstTask from '../FirstTask/FirstTask';

const MainPage = () =>{
    const [mode, setMode] = useState('first');

    const onRadioChange = event => {
        setMode(event.target.value);
    };



    return(
        <div>
           <div>
            <input
            type='radio'
            name='option'
            value='first'
            onChange={onRadioChange}
            checked={mode==='first'}
            /> First task
           </div>

           <div>
               <input
               type='radio'
               name='option'
               value='second'
               onChange={onRadioChange}
               checked={mode==='second'}
               /> Second Task
           </div>

           <div>
               {mode==='first' && (
                   <div>
                       <FirstTask/>
                   </div>
               )}
           </div>

           <div>
               {mode==='second' && (
                   <div>
                       second task
                   </div>
               )}
           </div>
        </div>
    );
};

export default MainPage;