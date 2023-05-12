import { minus } from "../minus";
import { it, describe, expect } from "@jest/globals";

describe("Test minus util function", () => {
  it("should never return negative value, when first is greater than second argument", () => {
    expect(minus(6, 4)).toBe(2);
    expect(minus(6, 4)).toBeGreaterThan(0);
  });
});
