import styled from "styled-components"


//logo in navbar
export const LogoImg = styled.img`

    height: 65px;
    width: auto;
    margin-bottom: 0.375rem;

`
//NavWrapper
export const NavbarWrapper = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    z-index: 200;
    background:  ${props => props.theme.color.white};

    @media screen and (min-width: 992px) {
    background: transparent;
    }
`
//NavCenter
export const NavCenter = styled.div`
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    
    
    @media screen and (min-width: 768px){
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
    }
    
`

//navheader
export const NavHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

// ToggelButton
export const ToggleButton = styled.button`
    
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: ${props => props.theme.color.primary5};
    cursor: pointer;
    transition: ${props => props.theme.transition};

    &:hover {
        color: ${props => props.theme.color.primary2}; 
    }

    @media screen and (min-width: 768px) {
        display: none;
    }

`

// NavLinks
export const NavLinks = styled.ul`

    display: none;

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: flex-end;

        li {
            margin-right: 2rem;
        }

        a {
            text-transform: capitalize;
            color: ${props => props.theme.color.grey1};
            font-weight: bold;
            letter-spacing: ${props => props.theme.spacing};
            transition: ${props => props.theme.transition};
            padding: 0.5rem 0;
        }

        a:hover {
            color: ${props => props.theme.color.primary5};
            box-shadow: 0px 2px ${props => props.theme.color.primary5};
        }
    }

`