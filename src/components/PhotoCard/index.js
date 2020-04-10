import React from 'react'
import { Link } from '@reach/router'
import { Img, ImgWrapper, Article } from './style'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

export const DEFAUTL_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({
  id,
  likes = 0,
  src = DEFAUTL_IMAGE,
  liked = false,
}) => {
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {show ? (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
        </>
      ) : null}
      <ToggleLikeMutation>
        {(toggleLike) => {
          const handleFavClick = () => {
            toggleLike({ variables: { input: { id } } })
          }

          return (
            <FavButton likes={likes} liked={liked} onClick={handleFavClick} />
          )
        }}
      </ToggleLikeMutation>
    </Article>
  )
}
