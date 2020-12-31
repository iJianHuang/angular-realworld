import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contactuser } from 'src/app/contactmanager/core/models/contactuser';
import { ContactuserService } from '../../core/services/contactuser.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  user: Contactuser;

  constructor(
    private route: ActivatedRoute,
    private userService: ContactuserService
    ) { console.log('building main content .... '); }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.userService.users.subscribe(users => {
        if (users.length == 0) return;

        this.user = this.userService.userById(id);
      });      
    });
  }

}
