import styled from "styled-components"



//look in to this if set animations to paths on sidebar!!

export const SocialLinksWrap = styled.ul`
    
    margin: ${props => {
        switch (props.linksStyle){
            case "footer":
                return "0 auto 1rem auto"
            case "hero":
                return "2rem 0 0 0"
            default:
                return "2rem 0 0 0"
        }
    }};
    
    
    width: 15rem;
    display: flex;
    justify-content: space-between;

    a {
        font-size: 1.75rem;

        color: ${props => {
        switch (props.linksStyle) {
            case "footer":
                return props.theme.color.white
            case "hero":
                return props.theme.color.grey1
            case "sidebar":
                return props.theme.color.grey1
            default:
                return props.theme.color.grey1
            }
    }};
        //color: ${props => props.theme.color.grey1};
        transition: ${props => props.theme.transition};
    }

    a:hover {
        color: ${props => props.theme.color.primary5};
    }
`
/*
.sidebar-icons li {
        opacity: 0;
        animation: slideUp 0.5s ease-in-out 0.3s forwards;
    }
.sidebar-icons li:nth-of-type(1) {
    animation-delay: 0.25s;
}
.sidebar-icons li:nth-of-type(2) {
        animation-delay: 0.5s;
    }
.sidebar-icons li:nth-of-type(3) {
        animation-delay: 0.75s;
    }
.sidebar-icons li:nth-of-type(4) {
        animation-delay: 1s;
    }
.sidebar-icons li:nth-of-type(5) {
        animation-delay: 1.25s;
        }
@keyframes slideUp {
    0% {
        transform: translateY(200px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
*/