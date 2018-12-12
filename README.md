# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to walk through the overall process of creating a custom schematic that customizes both the overall Angular project scaffolding.

This project is still pretty much an empty placeholder for the example files that will illustrate the talk "Efficiently setting up an Angular project and how Schematics may help with it", hosted along with [Natalia Venditto](https://twitter.com/AnfibiaCreativa), soon available in a conference near you.

### How to test this sample project

This project requires both to compile the schematics project and an Angular sandbox project where to test the functionalities of the former. Before running into the code, please make sure your environment fulfils the following requirements:

* Node v10.14.1 or higher (LTS version is usually fine)
* npm 6.4.1
* Angular CLI v7.0.0 (or higher)
* @angular-devkit/schematics-cli 0.10.3 (or higher)

Once you're ready, please follow the following steps:

1. Clone the Schematics sample project by running `git clone https://github.com/deeleman/angular-schematics-talk.git`. Fetch all dependencies by running `npm i` (or `yarn`) in the target folder once cloned.
2. Build the Schematics project by running `npm run build` or `yarn build`. 
3. Create a NPM symlink here by typing `npm link`. We will need this symlink in a bit.
4. Navigate out from the main schematics folder and generate an empty Angular project on a sibling folder by running `ng new my-project`
5. Navigate to the resulting `my-project` folder and apply the symlink created before by running `npm link my-schematics`.
6. Now you can enhance your newly generated Angular project with your custom schematic by running `ng generate my-schematics:aliased-sass --name=myProject`

You can see how a new path alias named `@my-project` has been created for you at `tsconfig.json`. Now you can import any code entity (eg: `myTestComponent`) located within `src/app/` by using a statement like:

```
import { myTestComponent } from '@my-project';
```
Try creating other alias by re-running the command above with other values in the `--name` parameter.
 