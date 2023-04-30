import * as vscode from 'vscode';
import { checkApiKey } from './util/check-api';
import ClockifyAPI, { WorkspaceType } from 'clockify-ts';
import { Config } from './util/config';
import  Workspace  from 'clockify-ts';
import { ExtensionContext, ThemeIcon, TreeItem, Uri, workspace } from 'vscode';
import * as path from 'path';
import { Context } from './util/context';
import { checkDefaultWorkspace } from './functions/check-default-workspace';
import { registerCommands } from './commands';
import { registerProvider } from './util/stores/register-provider';
import { WorkspacesProvider } from './views/treeview/workspaces';
import { TreeView } from './views/treeview';
import { ClientsProvider } from './views/treeview/clients';
import { ProjectsProvider } from './views/treeview/projects';
import { TasksProvider } from './views/treeview/tasks';
export class WorkspaceTreeItem extends TreeItem {
	constructor(public workspace: any, vscodeContext: ExtensionContext) {
		super(workspace.name);
		this.contextValue = 'workspace';
		this.description = 'Workspace description'; // Define a descrição
		this.iconPath =  Uri.joinPath(vscodeContext.extensionUri, 'assets', 'bytes.svg'); // Define o ícone
		this.tooltip = 'Workspace tooltip'; // Define o tooltip
	}
  }
export async function activate(context: vscode.ExtensionContext) {

	console.log('[clockify-timer] Activating extension...');
	Context.setObject(context);
	Context.set('initialized', false);
	// Check Clockify ApiKey
	checkApiKey();
	await checkDefaultWorkspace();
	
	registerCommands(context);
	
	//#region tree view
	registerProvider('workspaces', new WorkspacesProvider(context));
	registerProvider('clients', new ClientsProvider(context));
	registerProvider('projects', new ProjectsProvider(context));
	registerProvider('tasks', new TasksProvider(context));
	// registerProvider('tags', new TagsProvider(context));
	// registerProvider('timeentries', new TimeentriesProvider(context));
	//#endregion

	// refresh treeview when config changes
	workspace.onDidChangeConfiguration((e) => {
		// only listen for config changes in clockify config
		if (e.affectsConfiguration('clockify')) {
			checkApiKey();
			TreeView.refresh();
			// StatusBar.update();
		}
	});
	
	// const apiKey = Config.get<string>('apiKey');
	// if(apiKey) {
	// 	// const treeDataProvider = new WorkspaceTreeDataProvider();
	// 	const clockify = new ClockifyAPI(apiKey);
	//   	const workspaces = await clockify.workspace.get();
	// 	console.log(workspaces);
	// 	const workspaceTreeItems = workspaces.map((workspace) => {
	// 		return new WorkspaceTreeItem(workspace, context);
	// 	});
	// 	console.log(workspaceTreeItems);
		
	// 	const workspaceTreeView = vscode.window.createTreeView('clockify-workspaces', {
	// 		treeDataProvider: {
	// 		getChildren: (element?: any): any[] => {
	// 			if (element) {
	// 				return []; // retorna nós filhos vazios, pois não há nada abaixo de um workspace
	// 			} else {
	// 				return workspaceTreeItems;
	// 			}
	// 			},
	// 			getTreeItem: (element: any): any => {
	// 			return element;
	// 			},
	// 		},
	// 	});
	// 	context.subscriptions.push(workspaceTreeView);

	// 	// const treeView = vscode.window.createTreeView('workspaces', { workspaces });
		
	// }
}

// This method is called when your extension is deactivated
export function deactivate() {}