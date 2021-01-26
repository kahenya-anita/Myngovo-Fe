import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserServiceService } from './services/users/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'myngovofe';
  users = [];
  checkedUsers = [];

  constructor(private UserServiceService: UserServiceService) {}

  ngOnInit() {
    this.UserServiceService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onCheckBoxClicked(id: string) {
    if (this.checkedUsers.findIndex((user) => user === id) === -1) {
      this.checkedUsers.push(id);
    } else {
      this.checkedUsers = this.checkedUsers.filter((user) => user !== id);
    }
  }

  isChecked(id: string) {
    const checked = this.checkedUsers.some((checkedUser) => checkedUser === id);

    return checked;
  }
}
