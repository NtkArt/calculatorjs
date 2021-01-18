import styled from 'styled-components';

interface ButtonProps{
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Container = styled.main`
  height: 100vh;
  align-items: center;
  justify-items: center;
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media (max-width: 768px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    grid-template-rows: 0.7fr 1.3fr;
  }
`;

export const Title = styled.h1`
  color: #7159c4;
  font-size: 46px;
  max-width: 450px;
`;

export const Button = styled.button<ButtonProps>`
  background-color: #373f47;
  max-height: 100px;
  max-width: 225px;
  justify-content: space-between;
  min-width: 65px;
  border-style: none;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 15px;
  font-weight: bold;
  font-size: 20px;
  @media (max-width: 768px) {
    height: 44px;
    width: 44px;
  }

  &:hover {
    background-image: none;
  }
  &:last-child {
    width: 100%;
    margin: 10% 0px 5px 0px;
  }
`;

export const CalcScreen = styled.input`
  min-height: 30px;
  font-size: 30px;
  text-align: right;
  word-wrap: break-word;
  background-color: #373f47;
  color: white;
  margin-top: 15px;
  margin-bottom: 10px;
  width: 90%;
  padding: 7px;
  @media (max-width: 768px) {
    max-width: 230px;
  }
`;

export const Wrapper = styled.div`
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: background-color 5s linear;
  &:nth-child(1) {
    height: 100%;
    width: 100%;
    background-image: url('https://images.unsplash.com/photo-1521133573892-e44906baee46?crop=entropy&c…rgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1200');
    background-size: cover;
    background-repeat: no-repeat;
  }

  &:nth-child(2) {
    width: 320px;
    height: 30%;
    border-radius: 10px;
    background-color: #373f47;
    padding: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
    @media (max-width: 768px) {
      width: 250px;
    }
  }


`;

export const Layer = styled.div`
  background-color: #373f47;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  p {
    color: white;
    font-size: 70px;
  }
  @media (max-width: 768px) {
    p {
      font-size: 40px;
    }
  }
`;
