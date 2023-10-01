import { readJSON } from '../utils.js'
import { randomUUID } from 'crypto'
const products = readJSON('./products.json')

export class ProductsModel{
    static async getAll () {
    return products
    }
    static async getById ({id}){
        const product = products.find(product => product.id === id)
        return product
    }
    static async create ({input}){
        const newProduct = {
            id: randomUUID(),
            ...input
        }
        products.push(newProduct)
        return newProduct
    }
    static async delete ({id}){
        const productIndex = products.findIndex(product => product.id === id)
        if(productIndex === -1) return false
        products.splice(productIndex, 1)
        return true
    }
    static async update ({id, input}){
        const productIndex = products.findIndex(product => product.id === id)
        if(productIndex === -1) return false

        const updateProduct = {
            ...products[productIndex],
            ...input
        }
        products[productIndex] = updateProduct
        return updateProduct
    }
}