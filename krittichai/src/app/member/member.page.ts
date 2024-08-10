import { Component, OnInit } from '@angular/core';
import { MemberService } from './../services/member.service';


@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {

members: any;

  constructor(
    public service: MemberService
    ) { }

  ngOnInit() :void {
    this.service.read().subscribe((data) => {
      this.members = data
    })
  }

  ionViewDidEnter(){
    this.ngOnInit()
  }
}
