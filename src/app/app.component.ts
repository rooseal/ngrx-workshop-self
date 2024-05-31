import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable, map, of, tap } from 'rxjs';

import { Project, ProjectsState } from '@definitions';
import { initialProjects, projectsKey } from '../state/projects/projects.reducer';
import { ProjectListComponent } from './project-list/project-list.component';
import { AddProject, DeleteProject, LoadProjects, UpdateProject } from '../state/projects/projects.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectListComponent, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'NgRx Workshop Self';
  projects$: Observable<Project[]> = of([]);

  constructor(private store: Store<{ [projectsKey]: ProjectsState }>) {
    this.projects$ = store.pipe(
      select('projects'),
      map(data => data.entities),
      map(data => Object.keys(data).map(k => data[k])),
    ) as Observable<Project[]>
  }

  ngOnInit(): void {
    this.getProjects();
  }

  createProject(project: Project) {
    this.store.dispatch(new AddProject(project));
  }

  updateProject(project: Project) {
    this.store.dispatch(new UpdateProject(project));
  }

  deleteProject(projectId: string) {
    this.store.dispatch(new DeleteProject(projectId));
  }

  getProjects() {
    this.store.dispatch(new LoadProjects(initialProjects));
  }
}
