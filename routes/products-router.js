import { Router } from "express"; //router crea un enrutador a partir del cual podemos responder a todos los path
import { ProductController } from "../controllers/products-controllers.js";

export const productsRouter = Router()

productsRouter.get('/', ProductController.getAll)

productsRouter.get('/:id', ProductController.getById)

productsRouter.post('/', ProductController.create)

productsRouter.delete('/:id', ProductController.delete)

productsRouter.patch('/:id', ProductController.update)