import { getOrdinalNum, padZeros } from "../src/utils.js";

describe("Utils", () => {
  test("check ordinal number for 1", () => {
    expect(getOrdinalNum(1)).toBe("st");
  });
  test("check ordinal number for 2", () => {
    expect(getOrdinalNum(2)).toBe("nd");
  });

  test("check ordinal number for 4", () => {
    expect(getOrdinalNum(4)).toBe("th");
  });

  test("check ordinal number for -1", () => {
    expect(getOrdinalNum(-1)).toBe("");
  });
  it("should always run in UTC timezone", () => {
    expect(new Date().getTimezoneOffset()).toBe(0);
  });

  it("should pad digits with zeros", () => {
    expect(padZeros(5, 5)).toBe("00005");
  });
  it("should not pad digits with zeros", () => {
    expect(padZeros(50000, 5)).toBe("50000");
  });
});
