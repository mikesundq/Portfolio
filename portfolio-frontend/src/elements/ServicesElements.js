import styled from "styled-components"

export const ServicesSection = styled.section`

    background: ${props => props.theme.color.grey10};
    padding: 5rem 0;
`

export const ServicesCenter = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;

    @media screen and (min-width: 992px) {
        width: 95vw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (min-width: 676px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        -webkit-column-gap: 2rem;
        -moz-column-gap: 2rem;
        column-gap: 2rem;
    }

`
/*
.section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  @media screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
  }

  @media screen and (min-width: 676px) {
  .services-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
  }
}
@media screen and (min-width: 992px) {
  .services-center {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
*/

export const Service = styled.article`
    background: ${props => props.theme.color.white};
    padding: 3rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: ${props => props.theme.radius};
    text-align: center;
    -webkit-transition: ${props => props.theme.transition};
    transition: ${props => props.theme.transition};

    p {
        -webkit-transition: ${props => props.theme.transition};
        transition: ${props => props.theme.transition};
    }

    &:hover{
        background: ${props => props.theme.color.primary5};
        color: ${props => props.theme.color.primary9};

        p {
            color: ${props => props.theme.color.primary9};
        }

        .underline {
            background: ${props => props.theme.color.primary9};
        }
    }
`

/*
.service {
  background: var(--clr-white);
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: var(--radius);
  text-align: center;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.service p {
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.service:hover {
  background: var(--clr-primary-5);
  color: var(--clr-primary-9);
}
.service:hover p {
  color: var(--clr-primary-9);
}
.service:hover .underline {
  background: var(--clr-primary-9);
}

*/