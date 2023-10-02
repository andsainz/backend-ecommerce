import request from 'supertest';
import { app, server } from '../app.js';
import db from '../database/db.js';

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

    afterAll(() => {
        server.close()
        db.close()
    })
})