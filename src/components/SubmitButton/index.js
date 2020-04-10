import React from 'react'
import { Button } from './style'

const SubmitButton = ({ children, onClick, disabled }) => (
  <Button onClick={onClick} disabled={disabled}>
    {children}
  </Button>
)

export { SubmitButton }
