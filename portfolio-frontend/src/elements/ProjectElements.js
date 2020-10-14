import styled from "styled-components"


export const ProjectWrap = styled.article`
    display: grid;
    margin-bottom: 4rem;
    
    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
    }

    @media screen and (min-width: 992px) {
        grid-column: 1 / span 8;
        grid-row: 1 / 1;
        height: 30rem;
        border-radius: var(--radius);
        box-shadow: var(--dark-shadow);
    }

    &:hover img::after {
        opacity: 0;
    }

    &:nth-of-type(even) img {
        grid-column: 5 / -1;
        grid-row: 1 / 1;
    }

    :nth-of-type(even) .project-info {
        grid-column: 2 / span 7;
        grid-row: 1 / 1;
        text-align: left;
    }

    @media screen and (min-width: 992px) {

        grid-template-columns: repeat(12, 1fr);
        align-items: center;

        :nth-of-type(even) img {
            grid-column: 5 / -1;
            grid-row: 1 / 1;
        }

        :nth-of-type(even) .project-info {
            grid-column: 2 / span 7;
            grid-row: 1 / 1;
            text-align: left;
        }

    }

`



// &:hover{
//     opacity: 0;
// }
// &:nth-of-type(even) {

// }