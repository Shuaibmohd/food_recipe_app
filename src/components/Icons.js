import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


export const Icons = () => {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    margin: 2rem 0;
    display: flex;
    justify-content: center;
`

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    // margin-right: 2rem;
    margin: 1rem;
    border-radius: 50%;
    text-decoration: none;
    background: linear-gradient(45deg, #494950, #313132);
    width: 6rem;
    height: 6rem;
    transform: scale(0.8);
    cursor: pointer;

    h4{
        color: #fff;
        font-size: 0.9rem;
        font-weight: 500;
    }
    svg{
        color: #fff;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(45deg, #1976D2, #2e7d32);
    }

`

export default Icons;