import { Action } from "@ngrx/store";
import { Project } from "@definitions";

export enum ProjectsActionTypes {
  ProjectSelected = '[Projects] Selected',
  AddProject = '[Projects] Add Data',
  UpdateProject = '[Projects] Update Data',
  DeleteProject = '[Projects] Delete Data',
  LoadProjects = '[Projects] Load Data'
}

export class AddProject implements Action {
  readonly type = ProjectsActionTypes.AddProject;
  constructor(private payload: Project) {}
}
export class UpdateProject implements Action {
  readonly type = ProjectsActionTypes.UpdateProject;
  constructor(private payload: Partial<Project>) {}
}
export class DeleteProject implements Action {
  readonly type = ProjectsActionTypes.DeleteProject;
  constructor(private payload: string) {}
}
export class SelectProject implements Action {
  readonly type = ProjectsActionTypes.ProjectSelected;
  constructor(private payload: string) {}
}
export class LoadProjects implements Action {
  readonly type = ProjectsActionTypes.LoadProjects;
  constructor(private payload: Project[]) {}
}

export type ProjectsActions = AddProject
  | UpdateProject
  | DeleteProject 
  | SelectProject
  | LoadProjects
  ;