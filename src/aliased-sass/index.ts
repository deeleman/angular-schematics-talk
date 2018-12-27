import { dasherize } from '@angular-devkit/core/src/utils/strings';
import { Rule,
  SchematicContext,
  Tree, 
  chain,
  schematic
} from '@angular-devkit/schematics';

export function aliasedSass(options: any): Rule {
  return chain([
    // chains and generates the generate-files schematic
    schematic(`generate-files`, options),
    (tree: Tree, _context: SchematicContext) => {

      tree.getDir('/').visit(filePath => {
        if (filePath.includes('node_modules')) {
          return;
        }
  
        if (!filePath.endsWith('tsconfig.json')) {
          return;
        }
  
        const tsConfigBuffer = tree.read(filePath);
        if (!tsConfigBuffer) {
          return;
        }
  
        const rawTsConfig = JSON.parse(tsConfigBuffer.toString('utf8'));
        const paths = { ...rawTsConfig['compilerOptions']['paths'] };
        const alias = dasherize(options.name);

        paths[`@${alias}`] = ['src/app/*'];
  
        const decoratedTsConfigJSON = {
          ...rawTsConfig,
          compilerOptions: {
            ...rawTsConfig['compilerOptions'],
            paths
          }
        };
  
        tree.overwrite(filePath, JSON.stringify(decoratedTsConfigJSON, null, 2));
      });
  
      return tree;
    },
  ]);
}