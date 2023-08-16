import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  newTask: string = '';

  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    if (this.newTask.trim() !== '') {
      this.taskAdded.emit(this.newTask);
      this.newTask = '';
    }
  }
}

class component{
  newTask: string = '';
  

}
