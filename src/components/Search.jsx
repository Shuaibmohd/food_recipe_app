import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const [ input, setInput ] = useState('');
    const navigate = useNavigate('');

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
    }

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch />
            <input 
            onChange={(e) => setInput(e.target.value)} 
            type="text" 
            value={input} 
            />
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 1rem auto;
    max-width: 500px;
    div{
        position: relative;
        width: 100%;
    }
    input {
        background: linear-gradient(45deg, #757575, #858585);
        width: 100%;
        border: 0;
        border-radius: 3rem;
        font-size: 1.5rem;
        color: #fff;
        padding: 1rem 3rem;
        outline: none;
        font-family: inherit;
    }
    svg{
        color: #fff;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(100%, -50%);
    }
`

export default Search