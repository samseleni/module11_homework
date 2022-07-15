const countDown = require('./index');

describe("test countDown", () => {
  it("countDown(3) equal [3, 2, 1]", () => {
    const result = countDown(3)
    expect(result).toMatchObject([3, 2, 1]);
  }),
  it("countDown(2) equal [2, 1, 0]", () => {
    const result = countDown(2)
    expect(result).toMatchObject([2, 1, 0]);
  });
  it("countDown(-2) equal [-2, -1, 0, 1]", () => {
    const result = countDown(-2)
    expect(result).toMatchObject([1, 0, -1, -2]);
  });
  it("countDown(-2) equal 'Используйте положительное число'", () => {
    const result = countDown(-2)
    expect(result).toBe('Используйте положительное число');
  });
});
