import { Rule,
  SchematicContext,
  Tree,
  apply,
  contentTemplate,
  url,
  mergeWith,
  branchAndMerge,
  chain,
  move,
  noop,
  filter } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

export function generateFiles(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.info(JSON.stringify(options));
    // we need to define a source, which conventionally is the files folder inside of the schematics folder
    const source = apply(url('./files'), [
      // do not regeneate core and global unless flag is there
      options.core ? noop() : filter(path => !path.includes('core')),
      options.global ? noop() : filter(path => !path.includes('global')),
      contentTemplate({
        // option `flat` if true, creates the file/directory at top level,
        // otherwise skips generation
        'isFlat': (s: string) => (options.flat ? '' : s),
        ...strings,
        ...(options as object)
      } as any),
      // since create alwats creates at top level, we then move it under the right path
      move(options.path),
    ]);
    return chain([branchAndMerge(chain([mergeWith(source)]))])(tree, _context);
  };
}
