import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'projectStatus' })
export class ProjectStatusPipe implements PipeTransform {
  transform(projets: any[], statut: string): number {
    if (!projets) return 0;
    return projets.filter(p => p.statut === statut).length;
  }
}