import request from 'supertest';
import {app, server} from '../app.js'
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

    afterAll(() => {
        server.close()
        db.close()
    })
})