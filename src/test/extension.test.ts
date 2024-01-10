import * as assert from 'assert';
import * as vscode from 'vscode';
import { parseReadme } from '../utils/readme-parser';

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('Readme parser', () => {
    const readmeContent = `
# Project Title
@STCIssue This is a test issue
    `;
    const issue = parseReadme(readmeContent);
    assert.strictEqual(issue, 'This is a test issue');
  });
});