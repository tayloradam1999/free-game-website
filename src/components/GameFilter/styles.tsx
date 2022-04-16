import styled from 'styled-components';
import { secondaryTextColor, backgroundColor } from 'styles/theme';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  max-width: 542px;
  padding: 20px 16px;
  margin: 0px auto;
  color: ${secondaryTextColor};
  box-sizing: border-box;
`

export const Label = styled.label`
  margin-right: 16px;
  flex-basis: 25%;

  &:last-of-type {
    margin-right: 0;
  }
`

export const Select = styled.select`
  width: 100%;
  margin-top: 0;
  color: white;
  background-color: ${backgroundColor};
`