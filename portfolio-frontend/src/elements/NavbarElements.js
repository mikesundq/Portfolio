import styled from "styled-components"


//logo in navbar
export const LogoImg = styled.img`

    height: 65px;
    width: auto;
    margin-bottom: 0.375rem;

`
//navwrapper
export const NavbarWrapper = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    z-index: 200;
    background: ${props => props.theme.color.white};

    @media screen and (min-width: 992px) {
    background: transparent;
    }
`
//navcenter
export const NavCenter = styled.div`
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
`

//navheader
export const NavHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

// toggelbutton
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

// .toggle-btn {
//     font-size: 2rem;
//     background: transparent;
//     border-color: transparent;
//     color: var(--clr-primary-5);
//     cursor: pointer;
//     transition: var(--transition);
//   }
//   .toggle-btn:hover {
//     color: var(--clr-primary-2);
//   }
//   .nav-links {
//     display: none;
//   }
//   @media screen and (min-width: 768px) {
//     .toggle-btn {
//       display: none;
//     }