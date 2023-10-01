import { Router } from "express"; //router crea un enrutador a partir del cual podemos responder a todos los path
import { BrandController } from "../controllers/brands-controller.js";

export const brandsRouter = Router()

brandsRouter.get('/', BrandController.getAllBrands)

brandsRouter.get('/:id', BrandController.getBrandById)

brandsRouter.post('/', BrandController.createBrand)

brandsRouter.delete('/:id', BrandController.deleteBrand)

brandsRouter.patch('/:id', BrandController.updateBrand)