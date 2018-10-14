# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to walk through the overall process of creating a custom schematic that customizes both the overall Angular project scaffolding and also how components should be bootstrapped.

This project is still pretty much an empty placeholder for the example files that will illustrate the talk "Efficiently setting up an Angular project and how Schematics may help with it", hosted along with [Natalia Venditto](https://twitter.com/AnfibiaCreativa), soon available in a conference near you.

### How to test this sample project

This project requires both to compile the schematics project and an Angular sandbox project where to test the functionalities of the former. Please follow the following steps:

1. Clone the Schematics sample project by running `git clone https://github.com/deeleman/angular-schematics-talk.git`. Fetch all dependencies by running `npm i` in the target folder once cloned.
2. Build the Schematics project by running `npm run build`
3. Navigate one level up and generate an empty Angular project on a sibling folder by running `ng new test-project`
4. Navigate to the resulting folder and symlink the `aliased-sass` Schematics sample collection by running `npm link ./../aliased-sass`
5. Run the schematics project into your new project by running `ng generate aliased-sass:aliased-sass --name=myProject`

You can see how a new path alias named `@my-project` has been created for you at `tsconfig.json`.

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
 