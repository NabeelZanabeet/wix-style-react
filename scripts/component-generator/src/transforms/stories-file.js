module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);
  const imports = root.find(j.ImportDeclaration).paths();

  const { ComponentName } = options;

  j(imports[imports.length - 1]).insertAfter(
    `// This import was added by the component generator
import './components/${ComponentName}/index.story';`,
  );

  j(imports[imports.length - 1]).insertAfter(
    `// This import was added by the component generator
import './components/${ComponentName}/${ComponentName}TestStories';`,
  );

  return root.toSource();
};
