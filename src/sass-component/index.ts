import { Rule, SchematicContext, Tree, chain, externalSchematic } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
// Leverages the "compoment" schematic: https://github.com/angular/angular-cli/tree/master/packages/schematics/angular/component
export function sassComponent(options: any): Rule {
  return chain([
    externalSchematic('@schematics/angular', 'component', options),
    (tree: Tree, _context: SchematicContext) => {
      // TODO: Inject in external stylesheet the named SASS import alias, grabebd from SchematicContext
    
      return tree;
    },
  ]);
}
