import { onlyAlphaNum } from "./userValidation"

describe('onlyAlphaNum', () => {
  test('returns true when only alpha characters are passed', () => {
    const result = onlyAlphaNum('onlyalphacharacters');
    expect(result).toBe(true);
  })
})