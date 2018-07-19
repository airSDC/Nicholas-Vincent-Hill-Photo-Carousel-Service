const app = require('../server/app');

const request = require('supertest');

describe('API', () => {
  
  describe('GET /api/photos/:id', () => {

    test('should respond with status code 200', (done) => {
      
      return request(app)
        .get('/api/photos/1')
        .expect(200);

    });

    test('should respond with a array of Photo objects', () => {
      
      return request(app)
        .get('/api/photos/1')
        .expect(200)
        .expect( (res) => {

          expect(state).toEqual(
            expect.arrayContaining([      
              expect.objectContaining({
                room_id: expect.anything(),
                description: expect.anything(),
                verified: expect.anything(),
                photo_url: expect.anything()
              }),
            ])
          )

        });
    });

    test('should respond with correct values', () => {
      
      return request(app)
        .get('/api/photos/1')
        .expect(200)
        .expect( (res) => { 
          
          expect( res.body.room_id ).toEqual( expect.any(Number) );
          expect( res.body.room_id ).toBeGreaterThanOrEqual( 0 );
          expect( res.body.room_id ).toBeLessThanOrEqual( 100 );

          expect( res.body.description ).toEqual( expect.any(String) );

          expect( res.body.verified ).toEqual( expect.any(Boolean) );

          expect( res.body.photo_url ).toEqual( expect.any(String) );

        });
    });

    test('should respond with a 404 for invalid id', () => {
      
      return request(app)
        .get('/api/photos/101')
        .expect(404);
                
    });

  }); // desc for GET /api/photos
}); // main desc