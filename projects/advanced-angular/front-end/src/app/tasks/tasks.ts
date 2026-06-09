import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task';
import { AddTask } from '../add-task/add-task';
import { TaskService } from '../task-service';
import { TaskItem } from '../task.model';

@Component({
  selector: 'app-tasks',
  imports: [Task, AddTask, FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {
  private taskService = inject(TaskService);

  tasks: TaskItem[] = [];
  showEditModal = false;
  taskToEdit: TaskItem | null = null;

  filterLabel = '';
  filterPriority = 'High';
  filterDueDate = '';

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  onEditTask(task: TaskItem): void {
    this.taskToEdit = { ...task };
    this.showEditModal = true;
  }

  closeModal(): void {
    this.showEditModal = false;
    this.taskToEdit = null;
  }

  onTaskSaved(): void {
    this.closeModal();
    this.loadTasks();
  }

  filterByLabel(): void {
    this.taskService.getTasksByLabel(this.filterLabel).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  filterByPriority(): void {
    this.taskService.getTasksByPriority(this.filterPriority).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  filterByDueDate(): void {
    this.taskService.getTasksByDueDate(this.filterDueDate).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  showAllTasks(): void {
    this.loadTasks();
  }
}
