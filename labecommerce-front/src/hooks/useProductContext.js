import { createContext, useEffect, useState } from "react";

import { db } from '../db/db'

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([])


  const [searchProducts, setSearchProducts] = useState('')


  const handleName = (product) => {

    return product.name.toLowerCase().includes(searchProducts.toLowerCase())
  };


  const initialProductsAdded = localStorage.getItem('productsAdded')

  const [productsAdded, setProductsAdded] = useState(JSON.parse(initialProductsAdded) || [])

  const [total, setTotal] = useState(0)

  const addProductsCart = (product) => {

    const newProdutcsAdded = productsAdded.concat({ ...product, amount: 1 })

    setProductsAdded(newProdutcsAdded)
  }

  const increaseAmount = (id) => {

    const newProductsAdded = productsAdded.map((item) => {

      if (item.id === id) {
        return {
          ...item,
          amount: item.amount + 1
        }
      }
      return item
    })
    setProductsAdded(newProductsAdded)
  }

  const decreaseAmount = (id) => {

    const newProductsAdded = productsAdded.map((item) => {

      if (item.id === id) {
        return {
          ...item,
          amount: item.amount === 0 ? 0 : item.amount - 1
        }
      }
      return item
    })
    setProductsAdded(newProductsAdded)
  }

  const totalCart = () => {

    let newTotal = 0

    productsAdded.forEach(item => {
      newTotal = + newTotal + item.amount * item.price
    });
    setTotal(newTotal)
  }

  const removeProductsById = (id) => {
    const newProdutcsAdded = productsAdded.filter((product) => {
      return product.id !== id
    })

    setProductsAdded(newProdutcsAdded)
  }

  useEffect(() => {

    if (productsAdded.length >= 0) {

      localStorage.setItem("productsAdded", JSON.stringify(productsAdded))

      totalCart()
    }

  }, [productsAdded])

  useEffect(() => {
    setProducts(db)
  }, [])


  return (
    <ProductContext.Provider
      value={{
        products,
        productsAdded,
        setProducts,
        setSearchProducts,
        handleName,
        addProductsCart,
        total,
        increaseAmount,
        decreaseAmount,
        removeProductsById
      }}
    >
      {children}

    </ProductContext.Provider>
  )
}