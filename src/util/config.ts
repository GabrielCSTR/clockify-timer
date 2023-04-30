import * as vscode from 'vscode';

export class Config {

    private static getConfiguration(): vscode.WorkspaceConfiguration {
		return vscode.workspace.getConfiguration('clockify');
	}

    public static get<T>(key: any): T | undefined {
		let config = this.getConfiguration();
		return config.get<T>(key);
	}

    public static set(key: any, value: any, global: boolean | null = null) {
		let config = this.getConfiguration();
		config.update(key, value, global);
	}
}