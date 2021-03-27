import {
  getOrdinalNum,
  padZeros,
  getParamValueFromURL,
  getFormattedDate,
  getLocalTime,
} from "../src/utils.js";

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

  it("should return local time", () => {
    const input = new Date(1616852706000);
    expect(getLocalTime(input)).toBe("1:45 PM");
  });

  it("should return local time - AM", () => {
    const input = new Date(1616809506000);
    expect(getLocalTime(input)).toBe("1:45 AM");
  });

  it("should retrun the formateed date", () => {
    const input = new Date(1616809506000);
    expect(getFormattedDate(input)).toBe("27 Mar 2021");
  });

  it("should parse the url and retrun params", () => {
    expect(
      getParamValueFromURL("key", "https://myorg.github.io/event/#/test?key=7")
    ).toBe("7");
  });
});
