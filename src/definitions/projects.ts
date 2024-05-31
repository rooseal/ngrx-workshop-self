import { EntityState } from '@ngrx/entity';

export interface Project {
  id: string;
  name: string;
  description: string;
}

export interface ProjectsState extends EntityState<Project> {
  currentProjectId: string | null;
}
