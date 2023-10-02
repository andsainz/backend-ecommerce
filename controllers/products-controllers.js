import ProductModel from '../models/product-model.js'

export class ProductController {
    static async getAllProducts(req, res) {
        const product = await ProductModel.findAll()
        res.json(product)
}
    static async getProductById (req, res){
            const id = req.params.id;
            const product = await ProductModel.findByPk(id)
            if(product) return res.json(product)
            res.status(404).json({message: 'product not found'})
    }

    static async createProduct (req, res) {
        const result = req.body
        if(result.error){
            return res.status(400).json({error: JSON.parse(result.error.message)})
        }
        const newProduct = await ProductModel.create(result)
        res.status(201).json({message: 'The product has been created successfully!'})
    }

    static async deleteProduct(req, res) {
        const id = req.params.id
        const result = await ProductModel.destroy({where: {id:req.params.id}})
        if(result === false) return res.status(404).json({ message: 'product not found' })
        return res.json({ message: 'product deleted' })
    }
    
    static async updateProduct(req, res) {
    
        const result =req.body
    
        if(result.error){
            return res.status(400).json({error: JSON.parse(result.error.message)})
        }
        const updatedProduct = await ProductModel.update(result, {where: {id: req.params.id}})
        return res.json({message: 'your product has been updated suscesfully!'})
    }
}