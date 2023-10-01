import db from '../database/db.js'
import { DataTypes } from 'sequelize'

const BrandModel = db.define("brands", {
    name: {type: DataTypes.STRING}
}, {
    timestamps: false
}
)

export default BrandModel;