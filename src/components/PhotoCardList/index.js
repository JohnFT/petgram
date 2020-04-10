import React from 'react'
import { PhotoCard } from '../PhotoCard'

const PhotoCardListComponent = ({ data: { photos = [] } }) => {
  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard
            id={photo.id}
            src={photo.src}
            likes={photo.likes}
            liked={photo.liked}
          />
        </li>
      ))}
    </ul>
  )
}

export { PhotoCardListComponent }
