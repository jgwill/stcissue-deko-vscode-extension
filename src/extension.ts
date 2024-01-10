import * as vscode from 'vscode';
import { parseReadme } from './utils/readme-parser';
import { TextDecoder } from 'util';

export function activate(context: vscode.ExtensionContext) {
    vscode.workspace.onDidChangeWorkspaceFolders(e => {
        e.added.forEach(folder => {
            checkReadme(folder);
        });
    });
}


function checkReadme(folder: vscode.WorkspaceFolder) {
    const readmePath = vscode.Uri.file(`${folder.uri.fsPath}/README.md`);
    vscode.workspace.fs.readFile(readmePath).then((content: Uint8Array) => {
        const decoder = new TextDecoder();
        const strContent = decoder.decode(content);
        const issue = parseReadme(strContent);
        if (issue) {
            vscode.window.showWarningMessage(issue);
        }
    }, (err: any) => {
        console.error(err);
    });
}