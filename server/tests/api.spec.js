const request = require('supertest');
const app = require('../index');

describe('', () => {
    let api;
    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log(`Test API running on port 5000`)
        });
    });
    afterAll((done) => {
        console.log('Gracefully stopping test server');
        api.close(done);
    });
  
    test('GET / returns a random trump quote', (done) => {
        request(api)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })

    test('GET /:word returns a random trump quote containing the word "word"', (done) => {
        request(api)
            .get('/intelligent')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({quote: "I'm intelligent. Some people would say I'm very, very, very intelligent."})
            .expect(200, done);
    })

});