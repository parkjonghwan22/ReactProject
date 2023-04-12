import styled from "styled-components";

export const InputStyled = styled.input`
  background: #eee;
  padding: 16px;
  margin: 8px 0;
  width: 85%;
  border: 0;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 7px 2px 10px #babebc, inset -5px -5px 12px #fff;

  &::placeholder {
    ${(props) => props.placeholder}
  }
`;
