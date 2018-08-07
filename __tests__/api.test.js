const app = require("../server/app");
const request = require("supertest");

describe("API", () => {
  describe("GET /api/rooms/:id/photos", () => {
    test("should respond with status code 200", () => {
      return request(app)
        .get("/api/rooms/1/photos")
        .expect(200);
    });

    test("should respond with a array of Photo objects", () => {
      return request(app)
        .get("/api/rooms/1/photos")
        .expect(200)
        .expect(res => {
          expect(res.body.results).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                room_id: expect.anything(),
                description: expect.anything(),
                verified: expect.anything(),
                photo_url: expect.anything()
              })
            ])
          );
        });
    });

    test("should respond with correct values", () => {
      return request(app)
        .get("/api/rooms/1/photos")
        .expect(200)
        .expect(res => {
          const item = res.body.results[0];
          expect(item.room_id).toEqual(expect.any(Number));
          expect(item.room_id).toBeGreaterThanOrEqual(0);
          expect(item.room_id).toBeLessThanOrEqual(100);
          expect(item.description).toEqual(expect.any(String));
          expect(item.verified).toEqual(expect.any(Boolean));
          expect(item.photo_url).toEqual(expect.any(String));
        });
    });

    test("should respond with a 404 for invalid id", () => {
      return request(app)
        .get("/api/rooms/101/photos")
        .expect(404);
    });
  });

  describe("POST /api/rooms/:id/photos", () => {
    test("should respond with status code 200", () => {
      return request(app)
        .post("/api/rooms/1/photos")
        .expect(200);
    });

    test("should respond with a 404 for invalid id", () => {
      return request(app)
        .post("/api/rooms/101/photos")
        .expect(404);
    });

    test("should attempt to add photo to db", () => {
      expect(true).toEqual(false);
    });
  });

  describe("POST /api/rooms/:id/photos", () => {
    test("should respond with status code 200", () => {
      return request(app)
        .post("/api/rooms/1/photos")
        .expect(200);
    });

    test("should respond with a 404 for invalid id", () => {
      return request(app)
        .post("/api/rooms/101/photos")
        .expect(404);
    });

    test("should attempt to add photo to db", () => {
      expect(true).toEqual(false);
    });
  });

  describe("PUT /api/rooms/:id/photos", () => {
    test("should respond with status code 200", () => {
      return request(app)
        .put("/api/rooms/1/photos")
        .expect(200);
    });

    test("should respond with a 404 for invalid id", () => {
      return request(app)
        .put("/api/rooms/101/photos")
        .expect(404);
    });

    test("should attempt to edit photo in db", () => {
      expect(true).toEqual(false);
    });
  });

  describe("DELETE /api/rooms/:id/photos", () => {
    test("should respond with status code 200", () => {
      return request(app)
        .delete("/api/rooms/1/photos")
        .expect(200);
    });

    test("should respond with a 404 for invalid id", () => {
      return request(app)
        .delete("/api/rooms/101/photos")
        .expect(404);
    });

    test("should attempt to delete photo in db", () => {
      expect(true).toEqual(false);
    });
  });
});
