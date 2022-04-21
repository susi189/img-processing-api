import supertest from "supertest";
import app from "..";
import resizeFunc from "../utilities/transform";

const request = supertest(app);

describe("Test endpoints", () => {
  it("gets the api endpoint", async () => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
  });
});

describe("Test image processing", () => {
  it("should receive 3 parameters", async () => {
    await resizeFunc("beach", 200, 200);
    expect(resizeFunc).not.toThrow();
  });
});
