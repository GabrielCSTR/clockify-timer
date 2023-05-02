<div align="center">
<h1> Clockify Timer </h1>

![Clockify logo](assets/logo/logo-full.png)
Clockify Timer - VSCode Extension for Time Tracking

</div>


## Description
The Clockify Timer is a VSCode extension that allows you to track time for your projects directly from the code editor. The extension integrates with [Clockify](https://clockify.me/), a time tracking tool that helps you keep track of your work hours, manage your projects, and generate reports.

With Clockify Timer, you can:
- Start and stop timers directly from VSCode
- View your time entries and project progress in a TreeView
- Manage your Clockify projects, workspaces, clients, tasks, and tags


## Functions
The Clockify Timer extension adds a Time Tracker view to VS Code, where you can start, stop, and switch between time entries. This view displays your current time entry and a list of your previous time entries.

## Workspace and Project Selector
The extension allows you to select the active workspace and project, making it easy to switch between different projects and keep track of your time accordingly.

## Installation
You can install the Clockify Timer extension from the VSCode Marketplace or by running the following command in the Quick Open window (`Ctrl+P`):
```
ext install gabrielcarlos.clockify-timer
```

Or you can just search for "Clockify Timer" in the Extensions view.

## Getting Started
For more information on how to use the Clockify Timer extension, please see the [Getting Started](https://github.com/GabrielCSTR/clockify-timer/wiki/Home) in the project wiki.

## Configuration

| Settings key                                      | Type    | Default value | Description |
| ------------------------------------------------- | ------- | ------------- | ------------------------------------------------------------------------------------------------------------------- |
| apiKey                                            | string  |     `""`      | The clockify API key, get key in [Clockify](https://clockify.me/)
| defaultWorkspaceId                                | string  |     `""`      | The ID of the default workspace in which start tracking (if no workspace ID is set in the workspaces settings.json)
| fetchLimit                                        | number  | `200`         | Limit the number of items that will be fetched for displaying in the tree view.
| hideSensitiveData                                 | boolean | `false`       | Hide sensitive data. Can be useful for screenshots.
| showIds                                           | boolean | `false`       | Show IDs of the data.
| workspaces.showNumberOfMembers                    | boolean | `false`       | Show the number of members for each workspace.
| tracking.workspaceId                              | string  | `""`          | The ID of the default workspace.                                                                                    |
| tracking.projectId                                | string  | `""`          | The ID of the default project in the workspace. `clockify.timer.tracking.workspaceId` must be set.                        |
| tracking.taskId                                   | string  | `""`          | The ID of the default task in the workspace. `clockify.timer.tracking.workspaceId` must be set.                           |
| tracking.billable                                 | boolean | `false`       | Check if Time Entry is billable.                                                                                    |
| tracking.autostart                                | boolean | `false`       | Start tracking with opening the IDE.                                                                                |
| tracking.autostop                                 | boolean | `true`        | Stop tracking with closing the IDE. 
## Credits
The Clockify Timer extension was developed by [Gabriel Carlos](https://github.com/GabrielCSTR) and is distributed under the MIT license.

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/GabrielCSTR/clockify-timer/blob/master/LICENSE) file for details.

## Acknowledgment
- >[Clockify](https://clockify.me/) team for providing a great time tracking tool and API

- >Inspired by the [vscode-clockify](https://github.com/tobiaswaelde/vscode-clockify) by [Tobias Waelde ](https://github.com/tobiaswaelde)

