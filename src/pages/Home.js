import React from 'react'
import Header from '../Component/header'
import Cuisines from '../Component/cuisines'
import ProductList from '../Component/productList'

function Home() {
  return (
    <div>
        <Header />
        <Cuisines />
        <ProductList />
    </div>
  )
}

export default Home