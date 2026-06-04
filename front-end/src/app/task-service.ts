import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskItem } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000';

  getTasks(): Observable<TaskItem[]> {
    return this.http.get<TaskItem[]>(`${this.apiUrl}/show_all_tasks`);
  }

  addTask(task: TaskItem): Observable<TaskItem> {
    return this.http.post<TaskItem>(`${this.apiUrl}/add_task`, task);
  }

  editTask(task: TaskItem): Observable<TaskItem> {
    return this.http.post<TaskItem>(`${this.apiUrl}/edit_task`, task);
  }

  getTasksByLabel(label: string): Observable<TaskItem[]> {
    return this.http.get<TaskItem[]>(`${this.apiUrl}/show_tasks_by_label`, {
      params: { label },
    });
  }

  getTasksByPriority(priority: string): Observable<TaskItem[]> {
    return this.http.get<TaskItem[]>(`${this.apiUrl}/show_tasks_by_priority`, {
      params: { priority },
    });
  }

  getTasksByDueDate(due_date: string): Observable<TaskItem[]> {
    return this.http.get<TaskItem[]>(`${this.apiUrl}/show_tasks_by_due_date`, {
      params: { due_date },
    });
  }
}
