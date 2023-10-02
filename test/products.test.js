import request from 'supertest';
import { app, server } from '../app.js';
import db from '../database/db.js';
import ProductModel from '../models/product-model.js';

describe("test CRUD products", () => {
    
    describe("GET /products", () => {
        let response;
        beforeEach(async() => {response = await request(app).get('/products').send()})
        test('should return a response with status 200 and type json', async() => {
			expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })
        test('should return all products', async() => {
            expect(response.body).toBeInstanceOf(Array)
        })
    })

    describe('POST /products',() =>{ 
        const newProduct = {
            name_product: "test",
            price: 1,
            stock: 1,
            id_brand: 1
        }
        const wrongProduct = {
            wrong_field:'test'
        }
        test('should return a response with status 201 and type json', async () =>{
            const response = await request(app).post('/products').send(newProduct)
            expect(response.status).toBe(201)
            expect(response.headers['content-type']).toContain('json')
        });
        test('should return a message product created successfully', async () =>{
            const response = await request(app).post('/products').send(newProduct)
            expect(response.body.message).toContain("The product has been created successfully!")
        });
    })

    describe('DELETE /products', () =>{
        let createdProduct = {};
        beforeEach(async () => {
            createdProduct = await ProductModel.create({
                name_product: "test",
                price: 1,
                stock: 1,
                id_brand: 1
            });
        });
        test('should return a response with status 200 and delete successfully', async () => {
            const response = await request(app).delete(`/products/${createdProduct.id}`).send();
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("product deleted")
        })
    })

    describe('PATCH /products', () =>{
        let createdProduct = {};
        beforeEach(async () => {
            createdProduct = await ProductModel.create({
                name_product: "test",
                price: 1,
                stock: 1,
                id_brand: 1
            });
        });
        test('should return a response with status 200 and update successfully', async () => {
            const updatedData = {
                name_product: "test",
                price: 5,
                stock: 10,
                id_brand: 2
            };
            const response = await request(app).patch(`/products/${createdProduct.id}`).send(updatedData);
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("your product has been updated suscesfully!")
        })
    })
    


    afterAll(() => {
        server.close()
        db.close()
    })
})