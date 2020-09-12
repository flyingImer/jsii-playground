import { Hello } from '../src'

test('hello', async () => {
  expect(await new Hello().sayHello()).toBe('hello, world!');
});