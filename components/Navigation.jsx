import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
padding: 1.75rem 1rem;
display: flex;
justify-content: space-between;
align-items: center;

p{
    margin: 0;
    font-size: 1.25rem;
}

`

const NavLink = styled.a`
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    text-decoration: none;
    tranbsition: color 0.15s ease-in-out;
    color: black;

    &:hover {
        color: red;
    }

    &.active {
        text-decoration: underline;
    }
`
export default function Navigation() {
  return (
    <Nav>
        <p>Bryanna Gardner</p>

        <div className="d-flex">
            <NavLink href="#" className="active">About</NavLink>
            <NavLink href="#">Work</NavLink>
            <NavLink href="#">Contact</NavLink>
        </div>
    </Nav>
  )
}
