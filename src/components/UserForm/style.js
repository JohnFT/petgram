import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  box-sizing: border-box;
  width: 100%;
  &:disabled {
    opacity: 0.9;
    background-color: #fff;
  }
`

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #ffffff;
  display: block;
  width: 100%;
  text-align: center;
  padding: 10px;

  &:disabled {
    opacity: 0.3;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`

export const Error = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`
