import * as vscode from 'vscode';
import { Config } from "./config";
import { Context } from './context';
import { GlobalState } from './global-state';
import { Clockify } from '../sdk';

export async function checkApiKey() {
    const apiKey = Config.get<string>('apiKey');
    console.log("API KEY", apiKey);
    if (!apiKey || apiKey === '') {
        const newApiKey = await vscode.window.showInputBox({
            prompt: 'Por favor, informe a sua API key do Clockify',
            ignoreFocusOut: true,
        });
        if (!newApiKey) {
            vscode.window.showErrorMessage('API key não informada');
            return;
        }
        Config.set('apiKey', newApiKey, true);
        
        Context.set('initialized', false);
		GlobalState.set('initialized', false);

		GlobalState.set('selectedWorkspace', null);
		GlobalState.set('selectedClient', null);
		GlobalState.set('selectedProject', null);
		Context.set('workspaces:selected', false);
		Context.set('clients:selected', false);
		Context.set('projects:selected', false);

    }

    Context.set('apiKey', apiKey);
	Clockify.authenticate(apiKey);
	Context.set('initialized', true);
	GlobalState.set('initialized', true);
}