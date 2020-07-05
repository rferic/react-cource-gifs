import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
  const [ value, setValue ] = useState('')

  const handleOnChange = (e) => {
    setValue(e.target.value)
  }

  const handleKeyPress = (e) => {
    if ( e.key === 'Enter' ) {
      handleAdd()
    }
  }

  const handleAdd = () => {
    if ( value ) {
      setCategories(categories => [value, ...categories])
      setValue('')
    }
  }

  return (
    <div className="filter">
      <input
        type="text"
        value={value}
        onChange={handleOnChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory
