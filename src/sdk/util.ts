import * as vscode from 'vscode';

export async function showError(message: string, error?: any) {
	vscode.window.showErrorMessage(message);
	await vscode.workspace.getConfiguration().update('clockify.apiKey', {}, vscode.ConfigurationTarget.Global);
	if (error) {
		console.error(message, error);
	}
}
