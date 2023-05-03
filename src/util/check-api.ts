import * as vscode from 'vscode';
import { Config } from "./config";
import { Context } from './context';
import { GlobalState } from './global-state';
import { Clockify } from '../sdk';

export async function checkApiKey() {
    const apiKey = Config.get<string>('apiKey');
    if (!apiKey || apiKey === '') {
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