# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to walk through the overall process of creating a custom schematic that customizes both the overall Angular project scaffolding and also how components should be bootstrapped.

This project is still pretty much an empty placeholder for the example files that will illustrate the talk "Efficiently setting up an Angular project and how Schematics may help with it", hosted along with [Natalia Venditto](https://twitter.com/AnfibiaCreativa), soon available in a conference near you.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
 