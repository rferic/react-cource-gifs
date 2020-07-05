import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Rick y Morty'])

  return (
    <>
      <h1>Gif expert APP</h1>
      <hr />
      <AddCategory setCategories={setCategories} />
      <hr />
      <div>
        {
          categories.map(category => <GifGrid key={encodeURI(category)} category={category} />)
        }
      </div>
    </>
  )
}

export default GifExpertApp
