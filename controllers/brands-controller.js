import BrandModel from "../models/brand-model.js"

export class BrandController {
    static async getAllBrands(req, res) {
        const brands = await BrandModel.getAll
        res.json(brands)
}
    static async getBrandById (req, res){
            const { id } = req.params
            const brand = await BrandModel.getBrandById({id})
            if(brand) return res.json(brand)
            res.status(404).json({message: 'brand not found'})
    }

    static async createBrand (req, res) {
        const result = req.body
        if(result.error){
            return res.status(400).json({error: JSON.parse(result.error.message)})
        }
        const newBrand = await BrandModel.createBrand({input: result.data})
        res.status(201).json(newBrand)
    }

    static async deleteBrand(req, res) {
        const { id } = req.params
        const result = await BrandModel.deleteBrand({id})
        if(result === false) return res.status(404).json({ message: 'brand not found' })
        return res.json({ message: 'brand deleted' })
    }
    
    static async updateBrand(req, res) {
    
        const result = req.body
    
        if(result.error){
            return res.status(400).json({error: JSON.parse(result.error.message)})
        }
    
        const { id } = req.params
        const updatedBrand = await BrandModel.updateBrand({id, input: result.data})
        return res.json(updatedBrand)
    }
}