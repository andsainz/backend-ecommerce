import { ProductsModel } from '../models/product-model.js'
import { validateProduct, validatePartialProduct } from '../validations/products.js'

export class ProductController {
    static async getAll(req, res) {
        const movies = await ProductsModel.getAll()
        res.json(movies)
}
    static async getById (req, res){
            const { id } = req.params
            const product = await ProductsModel.getById({id})
            if(product) return res.json(product)
            res.status(404).json({message: 'product not found'})
    }

    static async create (req, res) {
        const result = validateProduct(req.body)
        if(result.error){
            return res.status(400).json({error: JSON.parse(result.error.message)})
        }
        const newProduct = await ProductsModel.create({input: result.data})
        res.status(201).json(newProduct)
    }

    static async delete(req, res) {
        const { id } = req.params
        const result = await ProductsModel.delete({id})
        if(result === false) return res.status(404).json({ message: 'product not found' })
        return res.json({ message: 'product deleted' })
    }
    
    static async update(req, res) {
    
        const result = validatePartialProduct(req.body)
    
        if(result.error){
            return res.status(400).json({error: JSON.parse(result.error.message)})
        }
    
        const { id } = req.params
        const updatedProduct = await ProductsModel.update({id, input: result.data})
        return res.json(updatedProduct)
    }
}