import { hslToRgb } from "../hsl-to-rgb";

describe("hslToRgb - color helper", () => {
  it("should return a hsl color", () => {
    expect(hslToRgb("hsl(0, 0%, 0%")).toEqual("rgb(0,0,0)");
  });
});
