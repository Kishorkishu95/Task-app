import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  input,
  output,
} from '@angular/core';
import { type User } from './user.model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true })
  user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  name: any;

  // select=output<string>();
  // avatar=input.required<string>();
  // name=input.required<string>();
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  // imagePath=computed(()=>{
  //   return "assets/users/" + this.avatar();
  // });
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
