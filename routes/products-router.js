import { Router } from "express"; //router crea un enrutador a partir del cual podemos responder a todos los path
import { ProductController } from "../controllers/products-controllers.js";

export const productsRouter = Router()

productsRouter.get('/', ProductController.getAllProducts)

productsRouter.get('/:id', ProductController.getProductById)

productsRouter.post('/', ProductController.createProduct)

productsRouter.delete('/:id', ProductController.deleteProduct)

productsRouter.patch('/:id', ProductController.updateProduct)