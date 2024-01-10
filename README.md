# STCIssue Deko VSCode Extension

This is a Visual Studio Code extension that checks for the presence of '@STCIssue' in the README.md file of your workspace or folder. If found, it extracts the content following '@STCIssue' until the end of the line and displays a warning with that message when the folder or workspace is opened.

```--@STCGoal workspace generator

@workspace /new A VSCode extension detecting if the README.md in the workspace or folder has a line with '@STCIssue', extrac the content after it until the EOL and displays a warning when the folder or workspace is opening with that message.

```

## Features

- Scans the README.md file in your workspace or folder for '@STCIssue'.
- Extracts the content following '@STCIssue' until the end of the line.
- Displays a warning with the extracted content when the workspace or folder is opened.

## Usage

1. Install the extension.
2. Open a workspace or folder.
3. If '@STCIssue' is present in the README.md file, a warning will be displayed with the content following '@STCIssue'.

## Development

This extension is written in TypeScript. You can run the tests with `npm test`.

## License

See the `LICENSE.md` file for license rights and limitations.
```

This is a basic example and can be expanded based on the specific features and usage of your extension.