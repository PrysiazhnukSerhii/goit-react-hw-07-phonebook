import styled from '@emotion/styled';

export const BookForm = styled.form`
  margin-left: 40px;
  border: 1px solid black;
  width: 300px;
`;

export const BookItem = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const BookButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;

  width: 100px;
  height: 25px;

  color: white;

  background-color: #2196f3;
  border: none;
  border-radius: 4px;

  &: disabled {
    background-color: rgb(168, 171, 172);
    color: black;
  }
`;
