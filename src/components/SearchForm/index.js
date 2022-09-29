
import React, {useState} from 'react'

function SearchForm({onSubmit}){


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({keyword});
      };

      const handleChange = (e) => {
        setKeyword(e.target.value);
      };


    const [keyword, setKeyword] = useState("");
    
    return <form onSubmit={handleSubmit}>
    <button>Buscar</button>
      <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
    </form>
}

export default React.memo(SearchForm)