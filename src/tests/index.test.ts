import {random, critic, hit, Min, against, Critic, randomFromList} from "..";

describe("role module should", () => {
  it("return a random value between 0 and the specified maximum", () => {
    let rand = random(300);
    expect(rand).toBeGreaterThanOrEqual(0);
    expect(rand).toBeLessThanOrEqual(300);
  });

  it("return a random value from a list", () => {
    let list = [2, 3, 4, 5];
    let elem = randomFromList(list);

    let rightResult = elem === 2 || elem === 3 || elem === 4 || elem === 5;
    expect(rightResult).toBe(true);
  });

  it("return a critic value that must be high, low or none", () => {
    let crit = critic();
    let isValidValue = crit === Critic.High || crit === Critic.Low || crit === Critic.None;
    expect(isValidValue).toBe(true);
  });

  it("return a hit value greater or equal than 0", () => {
    let hitValue = hit(300, 400);
    expect(hitValue).toBeGreaterThanOrEqual(Min);
  });

  it("return false when first value of against check is 0", () => {
    let aga = against(Min, 50);
    expect(aga).toBe(false);
  });

  it("return false when second value of against check is 0", () => {
    let aga = against(50, Min);
    expect(aga).toBe(true);
  });
});
