import db from '../database/db.js'
import { DataTypes } from 'sequelize'

const ProductModel = db.define("products", {
    name_product: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
    stock: {type: DataTypes.INTEGER},
    id_brand: {type: DataTypes.INTEGER}
},
{
    timestamps: false
}
)

export default ProductModel;