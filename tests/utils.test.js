import { getOrdinalNum } from "../src/utils.js";

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
});
