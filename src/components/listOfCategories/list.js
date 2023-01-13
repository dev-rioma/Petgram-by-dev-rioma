import React, { useEffect, useState } from 'react'
import Category from '../category/Category'
import useGetCategories from '../../hooks/useGetCategories'
import { Item, List } from './styles'

const API = 'https://petgram-server-luicast.vercel.app/categories'

const ListOfCategoriesComponent = () => {
  const categories = useGetCategories(API)

  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>))}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
