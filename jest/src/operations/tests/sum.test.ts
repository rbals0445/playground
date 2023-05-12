import { sum } from "../sum";
import { describe, expect, test, it } from "@jest/globals";

describe("Matcher에 대해서 학습합니다", () => {
  test("4+2 should be 6", () => {
    expect(sum(4, 2)).toBe(6); // toBe(6)이 matcher이다.
    // jest를 실행했을때 에러가 나는 matcher들을 찾아내고 에러 메세지를 출력해준다.
  });

  // toBe는 Object.is를 사용하므로, object의 value까지 같은지 보려면 toEqual을 사용하는것이 좋다.
  // 소수점을 비교하려면 toBeCloseTo 로 사용하기.
  test("object equal check", () => {
    const firstObj = { a: 1, b: undefined };
    const secondObj = { a: 1 };

    //   expect(firstObj).toBe(secondObj);
    expect(firstObj).toEqual(secondObj); // 통과
    //   expect(firstObj).toStrictEqual(secondObj); // 실패
  });
});

describe("test대신 it 사용해보기", () => {
  it("should be 6 when 4 + 2", () => {
    expect(sum(4, 2)).toBe(6); // toBe(6)이 matcher이다.
    // jest를 실행했을때 에러가 나는 matcher들을 찾아내고 에러 메세지를 출력해준다.
  });

  // toBe는 Object.is를 사용하므로, object의 value까지 같은지 보려면 toEqual을 사용하는것이 좋다.
  // 소수점을 비교하려면 toBeCloseTo 로 사용하기.
  it("object equal check", () => {
    const firstObj = { a: 1, b: undefined };
    const secondObj = { a: 1 };

    //   expect(firstObj).toBe(secondObj);
    expect(firstObj).toEqual(secondObj); // 통과
    //   expect(firstObj).toStrictEqual(secondObj); // 실패
  });
});

// not을 써서 결과를 inverse 할 수 있다.
test("양수끼리의 합은 0이 될 수 없다.", () => {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      expect(i + j).not.toBe(0);
    }
  }
});
describe("null과 0을 테스트합니다", () => {
  // undef, null, false를 명시적으로 구분하고 싶다.
  test("null 구분하기", () => {
    const n = null;
    // toBeNull only null인가?
    expect(n).toBeNull();
    // toBeDefined : undef 외에 모든것.
    expect(n).toBeDefined();
    // toBeUndefined: only undefined인가?
    expect(n).not.toBeUndefined();
    // toBeTruthy: if문에서 true로 다뤄지는지?
    expect(n).not.toBeTruthy();
    // toBeFalsy: if문에서 false 다뤄지는지?
    expect(n).toBeFalsy();
  });

  test("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
});
