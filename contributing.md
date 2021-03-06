# Contributing

First of all: thanks for considering contributing to this project!

Here are the steps required for contributing:

1. Make sure your branch is up to date with the current master
2. Install latest dependencies with
  > npm run clean:install

3. Develop your feature/bug fix
4. Create tests for as much as possible
5. Make sure eslint errors are fixed, if eslint errors don't show up in your editor you can always check them with
  > npm run eslint

6. Check if everything works well by using the example application
  1. Create a build for the translation manager
    > npm run build
  2. Create a build for the example application
    > cd example

    > npm run build
  3. Run the translation manager
    > npm run manage:translations

7. Commit your changes according to the conventional changelog commit convention we use
8. Create a pull request

(If you encounter additional steps during your contribution, do not hesitate to update this document)
