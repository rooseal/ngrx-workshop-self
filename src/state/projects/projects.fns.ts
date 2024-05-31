import { Project } from "@definitions";

export function createProject(projects: Project[], newProjectData: Omit<Project, 'id'>): Project[] {
  const newProject = {
    id: Math.random().toString(36),
    ...newProjectData,
  };

  return [
    ...projects,
    newProject
  ];
}

export function updateProject(projects: Project[], updatedProject: Partial<Project>): Project[] {
  return projects.map(
    project => project.id === updatedProject.id
      ? { ...project, ...updatedProject }
      : project
  )
}

export function deleteProject(projects: Project[], projectId: string): Project[] {
  return projects.filter(
    p => p.id !== projectId
  )
}