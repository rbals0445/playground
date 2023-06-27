declare module "my-util/utils" {
  function getName(): string;

  export default getName;
}

declare module "my-util/test" {
  export const test: () => string;
}
