import React from 'react'
import { PhotoCard } from '../PhotoCard'

const FavsList = ({ favs }) => {
  return (
    <ul>
      {favs.map((fav) => (
        <li>
          <PhotoCard
            key={fav.id}
            id={fav.id}
            liked={fav.id}
            likes={fav.likes}
            src={fav.src}
          />
        </li>
      ))}
    </ul>
  )
}

export { FavsList }
