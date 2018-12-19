import { Rule,
  SchematicContext,
  Tree,
  apply,
  contentTemplate,
  url,
  mergeWith,
  chain,
  move } from '@angular-devkit/schematics';

export function generateFiles(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const source = apply(url('./files'), [
      contentTemplate({
        name: options.name
      }),
      move(options.path),
    ]);
    return chain([mergeWith(source)])(tree, _context);
  };
}