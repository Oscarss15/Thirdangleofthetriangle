import { describe, it, expect } from "vitest";
import { thirdAngle } from "../app.js";

describe("thirdAngle", () => {
  it("the third angle should return 90", () => {
    const firstAngle = 30;
    const secondAngle = 60;
    const result = thirdAngle(firstAngle, secondAngle);

    expect(result).toBe(90);
  });
  it("the third angle should return 60", () => {
    expect(thirdAngle(60, 60)).toBe(60);
  });
  it("the third angle should return 59", () => {
    expect(thirdAngle(43, 78)).toBe(59);
  });
  it("the third angle should return 150", () => {
    expect(thirdAngle(10, 20)).toBe(150);
  });
});
