import * as fs from 'fs';
import * as vscode from 'vscode';

export function parseReadme(readmePath: string): string | null {
    if (fs.existsSync(readmePath)) {
        const readmeContent = fs.readFileSync(readmePath, 'utf8');
        const lines = readmeContent.split('\n');
        for (let line of lines) {
            if (line.includes('@STCIssue')) {
                const message = line.split('@STCIssue')[1].trim();
                return message;
            }
        }
    }
    return null;
}