/**
 * The extensions commands
 */
export enum Commands {
  // general
  setApiKey 					= "clockify.timer.setApiKey",
  refresh 						= "clockify.timer.refresh",
  copyToClipboard 				= "clockify.timer.copyToClipboard",
  // workspaces
  workspacesRefresh 			= "clockify.timer.workspaces.refresh",
  workspacesSelection 			= "clockify.timer.workspaces.selection",
  workspacesSetDefault 			= "clockify.timer.workspaces.setAsDefault",
  workspacesSetWorkspaceDefault = "clockify.timer.workspaces.setAsWorkspaceDefault",
  workspacesAdd 				= "clockify.timer.workspaces.add",
  // clients
  clientsRefresh 				= "clockify.timer.clients.refresh",
  clientsSelection 				= "clockify.timer.clients.selection",
  clientsAdd 					= "clockify.timer.clients.add",
  clientsRename 				= "clockify.timer.clients.rename",
  clientsDelete 				= "clockify.timer.clients.delete",
  // projects
  projectsRefresh 				= "clockify.timer.projects.refresh",
  projectsSelection 			= "clockify.timer.projects.selection",
  projectsSetDefault 			= "clockify.timer.projects.setAsDefault",
  projectsAdd 					= "clockify.timer.projects.add",
  projectsRename 				= "clockify.timer.projects.rename",
  projectsDelete 				= "clockify.timer.projects.delete",
  // tasks
  tasksRefresh 					= "clockify.timer.tasks.refresh",
  tasksSetDefault 				= "clockify.timer.tasks.setAsDefault",
  tasksAdd 						= "clockify.timer.tasks.add",
  // tags
  tagsRefresh 					= "clockify.timer.tags.refresh",
  tagsAdd 						= "clockify.timer.tags.add",
  tagsRename 					= "clockify.timer.tags.rename",
  tagsDelete 					= "clockify.timer.tags.delete",
  tagsArchive 					= "clockify.timer.tags.archive",
  tagsUnarchive 				= "clockify.timer.tags.unarchive",
  // timeentries
  timeentriesRefresh 			= "clockify.timer.timeentries.refresh",

  // tracking
  trackingStart 				= "clockify.timer.tracking.start",
  trackingStop 					= "clockify.timer.tracking.stop",
  trackingUpdateInformation 	= "clockify.timer.tracking.updateInformation"
}
