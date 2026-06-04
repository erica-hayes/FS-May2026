import { Component, OnInit, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../task-service';
import { TaskItem } from '../task.model';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask implements OnInit {
  private taskService = inject(TaskService);
  private router = inject(Router);

  editTask = input<TaskItem | null>(null);
  isEditMode = input(false);
  saved = output<void>();
  cancelled = output<void>();

  label = '';
  priority = 'Medium';
  date = '';
  time = '';

  ngOnInit(): void {
    const task = this.editTask();
    if (task) {
      this.label = task.label;
      this.priority = task.priority;
      this.date = task.date || '';
      this.time = task.time || '';
    }
  }

  onSubmit(): void {
    const due_date = `${this.date} ${this.time}`;
    const payload: TaskItem = {
      label: this.label,
      priority: this.priority,
      due_date,
      date: this.date,
      time: this.time,
    };

    if (this.isEditMode() && this.editTask()) {
      payload.id = this.editTask()!.id;
      this.taskService.editTask(payload).subscribe(() => {
        this.saved.emit();
      });
    } else {
      this.taskService.addTask(payload).subscribe(() => {
        this.resetForm();
        this.router.navigate(['/tasks']);
      });
    }
  }

  onCancel(): void {
    this.cancelled.emit();
  }

  private resetForm(): void {
    this.label = '';
    this.priority = 'Medium';
    this.date = '';
    this.time = '';
  }
}
