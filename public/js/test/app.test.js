import { describe, it, expect } from "vitest";
import { tercerAngulo } from "../app.js";

describe("tercerAngulo", () => {
  it("the third angle should return 90", () => {
    const firstAngle = 30;
    const secondAngle = 60;
    const result = tercerAngulo(firstAngle, secondAngle);

    expect(result).toBe(90);
  });
  it("the third angle should return 60", () => {
    expect(tercerAngulo(60, 60)).toBe(60);
  });
});
