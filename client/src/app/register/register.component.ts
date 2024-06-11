import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerModel:any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor(private accountService: AccountService) { }

  register() {
    this.accountService.register(this.registerModel).subscribe(response => {
      console.log(response);
      this.cancel();
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
