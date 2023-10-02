import BrandModel from "../models/brand-model.js";

export class BrandController {
    static async getAllBrands(req, res) {
        const brand = await BrandModel.findAll()
        res.json(brand)
}
    static async getBrandById (req, res){
            const id = req.params.id;
            const brand = await BrandModel.findByPk(id)
            if(brand) return res.json(brand)
            res.status(404).json({message: 'brand not found'})
    }

    static async createBrand (req, res) {
        const result = req.body
        if(result.error){
            return res.status(400).json({error: JSON.parse(result.error.message)})
        }
        const newBrand = await BrandModel.create(result)
        res.status(201).json(newBrand)
    }

    static async deleteBrand(req, res) {
        const id = req.params.id
        const result = await BrandModel.destroy({where: {id:req.params.id}})
        if(result === false) return res.status(404).json({ message: 'brand not found' })
        return res.json({ message: 'brand deleted' })
    }
    
    static async updateBrand(req, res) {
    
        const result =req.body
    
        if(result.error){
            return res.status(400).json({error: JSON.parse(result.error.message)})
        }
        const updatedBrand = await BrandModel.update(result, {where: {id: req.params.id}})
        return res.json({message: 'your brand has been updated suscesfully!'})
    }
}