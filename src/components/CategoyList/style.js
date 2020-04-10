import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${({ fixed }) => {
    return (
      fixed &&
      css`
         {
          position: fixed;
          top: -20px;
          background: #ffffff;
          border-radius: 60px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
          left: 0;
          margin: 0 auto;
          max-width: 400px;
          padding: 5px;
          right: 0;
          transform: scale(0.5);
          z-index: 2;
          ${fadeIn({ time: '.5s' })}
        }
      `
    )
  }}
`

export const Item = styled.li`
  padding: 0 8px;
  list-style: none;
`
