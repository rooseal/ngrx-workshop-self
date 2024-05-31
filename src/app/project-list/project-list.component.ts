import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { Project } from '@definitions';
import { Observable } from 'rxjs';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))
  ]),
]);

export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('200ms', style({ opacity: 0 })),
      { optional: true }
    )
  ])
]);

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [MatListModule, MatCardModule, AsyncPipe],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
  animations: [fadeAnimation, listAnimation]
})
export class ProjectListComponent {
  protected _projects!: Project[];

  @Input()
  set projects$(projectsStream: Observable<Project[]>) {
    projectsStream.subscribe(value => this._projects = value);
  }
}
