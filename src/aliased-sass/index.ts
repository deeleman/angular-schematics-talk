import { Rule, SchematicContext, Tree, chain, externalSchematic } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
// Leverages the "application" schematic: https://github.com/angular/angular-cli/tree/master/packages/schematics/angular/application
export function aliasedSass(options: any): Rule {
  return chain([
    externalSchematic('@schematics/angular', 'application', options),
    (tree: Tree, _context: SchematicContext) => {
      // TODO: Merge './file' filesystem into Tree dir representation. Rename __name__.scss on the go.

      // TODO: Update 'tsconfig.json' in Tree dir representation to include "@__name__/*" as alias to "["src/app/*"]"

      // TODO: Rewrite styles.__style__ (if necessary) to feature renamed import. Replace into Tree dir representation
    
      return tree;
    },
  ]);
}
