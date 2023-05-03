import moment = require('moment');
import {
	ExtensionContext,
	StatusBarItem,
	window,
	StatusBarAlignment,
	MarkdownString,
} from 'vscode';
import { Commands } from '../../config/commands';
import { Tracking } from '../../helpers/tracking';

export class StatusBarTrackingItem {
	public readonly clockItem: StatusBarItem;

	constructor(ctx: ExtensionContext, alignment: StatusBarAlignment, priority: number) {
		this.clockItem = window.createStatusBarItem(alignment, priority);
		this.clockItem.show();
		ctx.subscriptions.push(this.clockItem);

		this.clockItem.text = 'Clockify';
		this.clockItem.name = 'Current Tracking';
		this.clockItem.tooltip = 'Start tracking to display information.';
	}

	public async update() {
		if (Tracking.isTracking && Tracking.timeEntry) {
			const duration = moment.duration(
				moment().diff(moment(Tracking.timeEntry.timeInterval.start))
			);

			this.clockItem.text = `⏰${duration.format('h[h] m[m] s[s]')}`;

			const tooltipLines: string[] = [];
			if (Tracking.description) {
				tooltipLines.push(`**Atividade:** ${Tracking.description}`);
			}
			if (Tracking.workspace) {
				tooltipLines.push(`**Workspace:** ${Tracking.workspace.name}`);
			}
			if (Tracking.project) {
				tooltipLines.push(`**Project:** ${Tracking.project.name}`);
			}
			if (Tracking.task) {
				tooltipLines.push(`**Task:** ${Tracking.task.name}`);
			}
			tooltipLines.push('_Click to update info_');
			this.clockItem.tooltip = new MarkdownString(tooltipLines.join('\n\n'));
			this.clockItem.command = {
				title: 'Update information',
				command: Commands.trackingUpdateInformation,
				tooltip: 'Update tracking information',
			};
		} else {
			this.clockItem.text = '⏰ Clockify Timer';
			this.clockItem.name = 'Current Tracking';
			this.clockItem.tooltip = 'Start tracking to display information.';
		}
	}
}
