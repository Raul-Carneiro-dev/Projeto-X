import styled, { css } from 'styled-components';


export const Container = styled.header`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 110%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  

  background: #e1e1e1;
  background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(225,225,225,1) 100%);

  opacity: 0;
  pointer-events: none;

  transition: .5s;
  transform: translateY(50px);


  > svg {
    position: absolute;
    color: #e1e1e1;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    transform: rotate(45deg);
    transition: .7s;
  }

  .social-media-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  
  }

  .social-media-mobile a {
    margin-top: 3rem;
    color: black;
    font-size: 20px;
  }

  nav {
    transform: scale(0);
    transition: .7s;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

   nav ul li {
    color: #e1e1e1;
    border-bottom: solid 2px #e1e1e1;
    padding: 1rem;
   }

   ${({ $isVisible }) => $isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > svg {
      transform: rotate(0deg);
    }

    nav {
      transform: scale(1);
    }

   `}
`;



