import styled from "styled-components"

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
    
    
    
    //margin-top: 2rem;
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
const MyComponentWithParams = styled.div<{ something?: boolean }>`
  background: yellow;
  color: ${(p) => (p.something ? "green" : "red")};
`;
*/