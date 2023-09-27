import React from 'react'
import { BsSearchAlt2 } from 'react-icons/bs'

const Recipes = () => {
const [recipes, setRecipes] = useState([])
const [query, setQuery] = useState('vegan')
const [limit, setLimit] = useState(30)
const [loading, setLoading] = useState(false)

  return (
    <div>Recipes</div>
  )
}

export default Recipes