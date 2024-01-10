import * as vscode from 'vscode';
import { parseReadme } from './utils/readme-parser';

export function activate(context: vscode.ExtensionContext) {
    vscode.workspace.onDidChangeWorkspaceFolders(e => {
        e.added.forEach(folder => {
            checkReadme(folder);
        });
    });
}

function checkReadme(folder: vscode.WorkspaceFolder) {
    const readmePath = `${folder.uri.fsPath}/README.md`;
    vscode.workspace.fs.readFile(vscode.Uri.file(readmePath)).then((content: Uint8Array) => {
        const issue = parseReadme(content.toString());
        if (issue) {
            vscode.window.showWarningMessage(issue);
        }
    }, (err: any) => {
        console.error(err);
    });
}