import { Clockify } from '../sdk';
import { Config } from '../util/config';
import { Context } from '../util/context';
import { Dialogs } from '../util/dialogs';
import { GlobalState } from '../util/global-state';
import { TreeView } from '../views/treeview';

export async function setApiKey() {
	// ask user for the api key
	const apiKey = await Dialogs.askForApiKey();
	if (!apiKey) {
		Context.set('initialized', false);
		return;
	}

	// set API key in config
	Config.set('apiKey', apiKey, true);
	Config.set('tracking.workspaceId', null);
	Config.set('defaultWorkspaceId', null);
	GlobalState.set('initialized', false);
	GlobalState.set('selectedWorkspace', null);
	GlobalState.set('selectedClient', null);
	GlobalState.set('selectedProject', null);
	Context.set('workspaces:selected', false);
	Context.set('clients:selected', false);
	Context.set('projects:selected', false);

	// authenticate the SDK
	Clockify.authenticate(apiKey);

	// refresh tree view providers
	TreeView.refresh();

	Context.set('initialized', true);
	GlobalState.set('initialized', true);
}
