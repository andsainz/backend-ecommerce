import z from 'zod'

const productSchema = z.object({
    name: z.string({
        invalid_type_error: 'product name must be a string',
        required_error: 'product name is required'
    }),
    price: z.number().min(0).max(2000),
    stock: z.number().min(0).max(1000).default(5),
    brand: z.string()
})

export function validateProduct(object){
    return productSchema.safeParse(object)
}

export function validatePartialProduct(object){
    return productSchema.partial().safeParse(object) //todas las propiedades opcionales, si están, las valida
}