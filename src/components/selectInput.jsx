import React from 'react';
import genre from '../store/genre';
import {useSelector} from 'react-redux'

function SelectInput({value,changeHandler,name}) {
    const {genres} = useSelector(state=>state.entities)
    return (
        <div className="form-group">
        <select value={value} onChange={changeHandler}  name={name} className="custom-select" required>
          <option value="">Genres</option>
        {
            genres.map(genre=>(
                <option key={genre._id} value={genre.name}>{genre.name}</option>
            ))
        }
        </select>
      </div>
    );
}

export default SelectInput;