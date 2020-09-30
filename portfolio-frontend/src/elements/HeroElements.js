import styled from "styled-components"

export const HeroWrapper = styled.header`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  background: var(--clr-primary-10);
  position: relative;

  img{
    display: none;
  }
  

  @media screen and (min-width: 992px) {
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 65%;
      right: 0;
      bottom: 0;
      background: var(--clr-white);
    }
    .hero-center {
      grid-template-columns: repeat(12, 1fr);
    }

    h4 {
      font-size: 0.85rem;
    }
    .hero-info {
      grid-row: 1/1;
      grid-column: 1 / span 8;
    }
    img {
      display: block;
      grid-row: 1/1;
      grid-column: 6/-1;
    }
  }
`
export const Underline = styled.div`

  margin-bottom: 0.5rem;
  width: 15rem;
  height: 0.25rem;
  background: var(--clr-primary-5);

`

// .underline {
//     width: 5rem;
//     height: 0.25rem;
//     margin-bottom: 1.25rem;
//     background: var(--clr-primary-5);
//     margin-left: auto;
//     margin-right: auto;
//   }


// .hero-center {
//     height: 100%;
//     display: grid;
//     align-items: center;
//   }
  
//   .hero .underline {
//     margin-bottom: 0.5rem;
//     margin-left: 0;
//   }
//   .hero-info {
//     background: var(--clr-primary-10);
//   }
//   .hero-img {
//     display: none;
//   }
//   .hero-info h4 {
//     color: var(--clr-grey-5);
//   }
//   .hero-icons {
//     justify-items: flex-start;
//   }
//   .hero .btn {
//     margin-top: 1.25rem;
//   }
  
//   @media screen and (min-width: 992px) {
//     .hero::before {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 65%;
//       right: 0;
//       bottom: 0;
//       background: var(--clr-white);
//     }
//     .hero-center {
//       grid-template-columns: repeat(12, 1fr);
//     }
  
//     .hero h4 {
//       font-size: 0.85rem;
//     }
//     .hero-info {
//       grid-row: 1/1;
//       grid-column: 1 / span 8;
//     }
//     .hero-img {
//       display: block;
//       grid-row: 1/1;
//       grid-column: 6/-1;
//     }
//   }
//   @media screen and (min-width: 1170px) {
//     .hero h4 {
//       font-size: 1rem;
//     }
  
//     .hero-info {
//       grid-column: 1 / span 8;
//     }
  
//     .hero h4 {
//       line-height: 1;
//     }
//   }
  