import { ProductsModel } from '../models/product-model.js'
import { validateProduct, validatePartialProduct } from '../validations/products.js'

export class ProductController {
    static async getAllProducts(req, res) {
        const movies = await ProductsModel.getAllProducts
        res.json(movies)
}
    static async getProductById (req, res){
            const { id } = req.params.id;
            const product = await ProductsModel.getProductById({id})
            if(product) return res.json(product)
            res.status(404).json({message: 'product not found'})
    }

    static async createProduct (req, res) {
        const result = validateProduct(req.body)
        if(result.error){
            return res.status(400).json({error: JSON.parse(result.error.message)})
        }
        const newProduct = await ProductsModel.createProduct({input: result.data})
        res.status(201).json(newProduct)
    }

    static async deleteProduct(req, res) {
        const { id } = req.params
        const result = await ProductsModel.deleteProduct({id})
        if(result === false) return res.status(404).json({ message: 'product not found' })
        return res.json({ message: 'product deleted' })
    }
    
    static async updateProduct(req, res) {
    
        const result = validatePartialProduct(req.body)
    
        if(result.error){
            return res.status(400).json({error: JSON.parse(result.error.message)})
        }
    
        const { id } = req.params
        const updatedProduct = await ProductsModel.updateProduct({id, input: result.data})
        return res.json(updatedProduct)
    }
}