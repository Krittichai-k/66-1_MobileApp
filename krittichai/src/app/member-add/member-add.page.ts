import { MemberService } from './../services/member.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface IMember{
  fullnam: string;
  email: string;
  mobile: string;
  lineid: string;
  detail: string;
}

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.page.html',
  styleUrls: ['./member-add.page.scss'],
})
export class MemberAddPage implements OnInit {

  constructor(
    public service: MemberService,
    public router: Router
    ) { }

  ngOnInit() {
  }

  insert(member: any) {
    this.service.insert(member).subscribe(() => {
      //console.log('บันทึกรายการสำเร็จแล้ว')
      this.router.navigateByUrl('tabs/member')
    })

  }
}
