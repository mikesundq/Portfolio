import styled, { keyframes, css } from "styled-components"


const fadeIn = keyframes`
    0% {
            transform: translateX(-200px);
            opacity: 0;
        }
    100% {
            transform: translateX(0);
            opacity: 1;
        }
`

const slideRight = css`
    animation: ${fadeIn} 0.5s ease-in-out 0.3s forwards; 
`

export const SidebarLinks = styled.ul`

    li {
        opacity: 0;
    }

    li a {
        display: block;
        text-align: center;
        text-transform: capitalize;
        color: ${props => props.theme.color.grey5};
        letter-spacing: ${props => props.theme.spacing};
        margin-bottom: 0.5rem;
        font-size: 2rem;
        transition: ${props => props.theme.transition};
        border-radius: ${props => props.theme.radius};
    }

    li a:hover{
        background: ${props => props.theme.color.primary9};
        color: ${props => props.theme.color.primary5};
    }
    
    li {
        ${slideRight};
    }
    

    li:nth-of-type(1) {
        animation-delay: 0.25s;
    }
    li:nth-of-type(2) {
        animation-delay: 0.5s;
    }
    li:nth-of-type(3) {
        animation-delay: 0.75s;
    }
    li:nth-of-type(4) {
        animation-delay: 1s;
    }
    li:nth-of-type(5) {
        animation-delay: 1.25s;
    }
`

export const SidebarWrap = styled.aside`
    background: ${props => props.theme.color.grey10};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: grid;
    place-items: center;
    opacity: ${({ isOpen }) => isOpen ? "1" : "0"};
    //opacity: 0;
    transition:  ${props => props.theme.transition};
    transform: ${({ isOpen }) => isOpen ? "translateX(0)" : "translateX(-100%)"};
    //transform: translateX(0);
    //transform: translateX(-100%);

    @media screen and (min-width: 992px) {
        transform: translateX(-100%);
    }

    button {
        position: absolute;
        right: 4.75%;
        top: 2.75%;
        font-size: 2.5rem;
        background: transparent;
        border-color: transparent;
        color: ${props => props.theme.color.redDark};
        cursor: pointer;
    }
`
