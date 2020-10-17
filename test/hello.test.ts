import { Hello, HelloJsii } from '../src';

test('hello', async () => {
  expect(await new Hello().sayHello()).toBe('hello, world!');
});

test('hello', () => {
  expect(new HelloJsii().sayHello('hello, world!')).toBe('Hello, hello, world!!');
});