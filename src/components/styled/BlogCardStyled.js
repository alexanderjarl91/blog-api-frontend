import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
`;
export const Cards = styled.div``;

export const Card = styled.div`
  display: flex;
  background-color: white;
  max-width: 800px;
  margin: 3rem auto;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  align-items: center;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const CardImage = styled.img`
  float: left;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 1rem;
  border-radius: 15px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin: 1rem 1rem;
`;

export const CardTitle = styled.h1`
  font-size: 30px;
  margin: 0;
  margin-bottom: 1rem;
`;

export const CardContent = styled.p`
  margin: 0;
`;

export const CardButton = styled.button`
  border: none;
  margin-top: 1rem;
  margin-bottom: 1rem;
  max-width: 100px;
  text-align: center;
  font-size: 15px;
  padding: 5px;
  &:hover {
    background-color: orange;
    border-radius: 10px;
  }
`;
