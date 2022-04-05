import supertest from "supertest";
import app from "..";

const request = supertest(app);

describe("Test endpoints", () => {
  it("gets the api endpoint", async () => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
  });
});
