import styled from 'styled-components'

export const CategoryImage = styled.img`
  width: 90%;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  border: ${(props) =>
    props.selected ? '1px solid #00b0ff' : '1px solid #e0e0e0'};
  padding: 10px;
  cursor: pointer;
`
