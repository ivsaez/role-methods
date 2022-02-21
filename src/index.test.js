import {random, critic, hit, Min, against} from ".";

describe("role module should", () => {
  it("return a random value between 0 and the specified maximum", () => {
    let rand = random(300);
    expect(rand).toBeGreaterThanOrEqual(0);
    expect(rand).toBeLessThanOrEqual(300);
  });

  it("return a critic value that must be -1, 0 or 1", () => {
    let crit = critic();
    let isValidValue = crit === 0 || crit === -1 || crit === 1;
    expect(isValidValue).toBe(true);
  });

  it("return a hit value greater or equal than 0", () => {
    let hitValue = hit(300, 400);
    expect(hitValue).toBeGreaterThanOrEqual(Min);
  });

  it("return false when first value of an against check is 0", () => {
    let aga = against(Min, 50);
    expect(aga).toBe(false);
  });

  it("return false when second value of an against check is 0", () => {
    let aga = against(false, Min);
    expect(aga).toBe(false);
  });
});
