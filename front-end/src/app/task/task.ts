import { Component, Input, output } from '@angular/core';
import { TaskItem } from '../task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input() task: TaskItem = {
    label: '',
    priority: '',
    due_date: '',
  };

  edit = output<TaskItem>();
}
