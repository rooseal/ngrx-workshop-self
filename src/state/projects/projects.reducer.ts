import { Project, ProjectsState } from "@definitions";
import { createProject, updateProject, deleteProject } from "./projects.fns";
import { ProjectsActionTypes } from "./projects.actions";
import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export const initialProjects: Project[] = [
  {
    id: '01',
    name: 'Project One',
    description: 'This is a sample project'
  },
  {
    id: '02',
    name: 'Project Two',
    description: 'This is a sample project'
  },
  {
    id: '03',
    name: 'Project Three',
    description: 'This is a sample project'
  },
];

export const adapter: EntityAdapter<Project> = createEntityAdapter<Project>();

export const initialState: ProjectsState = adapter.getInitialState({
  currentProjectId: null,
});

export function projectsReducer(state = initialState, action: any): ProjectsState {
  switch (action.type) {
    case ProjectsActionTypes.ProjectSelected:
      return {
        ...state,
        currentProjectId: action.payload,
      }
    case ProjectsActionTypes.AddProject:
      return adapter.addOne(action.payload, state);
    case ProjectsActionTypes.UpdateProject:
      return adapter.updateOne(action.payload, state);
    case ProjectsActionTypes.DeleteProject:
      return adapter.removeOne(action.payload, state);
    case ProjectsActionTypes.LoadProjects:
      return adapter.addMany(action.payload, state);
    default:
      return state;
  }
}

export const projectsKey = 'projects';