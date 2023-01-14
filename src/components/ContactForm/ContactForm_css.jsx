import styled from "styled-components";

export const Label = styled.label`
display: block;
  padding: 4px;
  margin: 8px;
  text-transform: uppercase;
  font-size: 24px;
  `;

export const Input = styled.input`
display: block;
margin-top: 8px;
font-size: 24px;
&:hover {
    border-color: black;
}`;

export const Button = styled.button`  
  width: 200px;
  height: 50px;
  padding: 4px;
  margin: 8px;
  color: white;
  font-size: 24px;
  text-transform: uppercase;
  background-color: black;
  border-radius: 6px;
  cursor: pointer;`;
