import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './style'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://petgram-john-server.now.sh/categories')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setCategories(data)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

const CategoryList = () => {
  const { categories, loading } = useCategoriesData([])

  const [showFixed, setFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = (fixed) => {
    return (
      <List fixed={fixed}>
        {loading ? (
          <Item />
        ) : (
          categories.map((category) => (
            <Item key={category.id}>
              <Category
                cover={category.cover}
                emoji={category.emoji}
                path={`/pet/${category.id}`}
              />
            </Item>
          ))
        )}
      </List>
    )
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
export { CategoryList }
