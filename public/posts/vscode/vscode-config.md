## Keymaps ( Open Keyboard Shourtcuts (JSON) )

```json
// Place your key bindings in this file to override the defaults
[
  {
    "key": "ctrl+alt+right",
    "command": "workbench.action.nextEditor"
  },
  {
    "key": "ctrl+pagedown",
    "command": "-workbench.action.nextEditor"
  },
  {
    "key": "ctrl+alt+left",
    "command": "workbench.action.previousEditor"
  },
  {
    "key": "ctrl+pageup",
    "command": "-workbench.action.previousEditor"
  },
  {
    "key": "ctrl+alt+right",
    "command": "-workbench.action.moveEditorToNextGroup"
  }
]
```

## User Snippets ( Configure User Snippets )

```json
{
  "log": {
    "scope": "",
    "prefix": "log",
    "body": "console.log($0);"
  },
  "Import module style": {
    "scope": "",
    "prefix": "imc",
    "body": "import styles from '.$0';"
  },
  "Import svg icon": {
    "scope": "",
    "prefix": "isvg",
    "body": "import {ReactComponent as $1 } from '.$0';"
  },
  "Import base": {
    "scope": "",
    "prefix": "imp",
    "body": "import {} from '$0';"
  },
  "Use hooks": {
    "scope": "",
    "prefix": "hook",
    "body": "const [] = use$0();"
  },
  "Query check": {
    "scope": "",
    "prefix": "qcheck",
    "body": [
      "if (error) return 'Error: '",
      "if (isLoading) return 'Loading...'",
      "if (!data) return 'Data not fetch!'"
    ]
  },
  "TypeScript Component": {
    "scope": "",
    "prefix": "tscom",
    "body": [
      "import { FC } from 'react';\n",
      "interface IProps {}\n",
      "export const $1: FC<IProps> = ({}) => {\n$0",
      "  return <div>$2</div>;",
      "};"
    ]
  }
}
```

## JSON User Settings ( Open User Settings (JSON) )

```json
{
  "window.menuBarVisibility": "compact",
  "workbench.colorTheme": "Bearded Theme Monokai Stone",
  "editor.minimap.enabled": false,
  "editor.cursorBlinking": "phase",
  "editor.glyphMargin": false,
  "editor.fontSize": 15,
  "editor.fontLigatures": true,
  "editor.fontFamily": "JetBrainsMono-Nerd",
  "editor.inlineSuggest.enabled": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": false,
    "source.addMissingImports": true
  },
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.smoothScrolling": true,
  "editor.padding.top": 10,
  "terminal.integrated.smoothScrolling": true,
  "explorer.confirmDelete": false,
  "explorer.compactFolders": false,

  //Breadcrumbs (minimal path on top)
  "breadcrumbs.icons": false,
  "breadcrumbs.showKeys": false,
  "breadcrumbs.showFiles": false,
  "breadcrumbs.symbolPath": "off",
  "breadcrumbs.showArrays": false,
  "breadcrumbs.showEvents": false,
  "broadcrumbs.showFields": false,
  "broadcrumbs.showClasses": false,
  "breadcrumbs.showFunctions": false,
  "breadcrumbs.showConstants": false,
  "breadcrumbs.showEnumMembers": false,
  "breadcrumbs.showConstructors": false,

  // JavaScript && TypeScript
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.preferences.quoteStyle": "single",
  "typescript.preferences.quoteStyle": "single",
  "javascript.format.semicolons": "remove",
  "typescript.format.semicolons": "remove",

  // Ignore files
  "files.exclude": {
    "**/.expo": true,
    "**/.expo-shared": true,
    "**/.idea": true,
    "**/.vscode": true,
    "**/.next": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  "emmet.includeLanguages": {
    "postcss": "css",
    "javascript": "javascriptreact"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[xml]": {
    "editor.defaultFormatter": "PrateekMahendrakar.prettyxml"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "workbench.sideBar.location": "right",
  "explorer.confirmDragAndDrop": false,
  "workbench.editor.enablePreview": false,
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "window.titleBarStyle": "custom",
  "workbench.startupEditor": "none",
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[python]": {
    "editor.defaultFormatter": "ms-python.python"
  },
  // "terminal.integrated.fontFamily": "",
  "window.zoomLevel": 1,
  "workbench.iconTheme": "material-icon-theme"
}
```
