import { MemberService } from './../services/member.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.page.html',
  styleUrls: ['./member-edit.page.scss'],
})
export class MemberEditPage implements OnInit {

  id!: number;
  fullname: any;
  email: any;
  mobile: any;
  lineid: any;
  detail: any;

  constructor(
    public service: MemberService,
    public route: ActivatedRoute,
    public alertController: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id)
    this.service.find(this.id).subscribe((data: any) => {
      console.log(data)
      this.fullname = data[0].mem_fullname;
      this.email = data[0].mem_email;
      this.mobile = data[0].mem_mobile;
      this.lineid = data[0].mem_lineid;
      this.detail = data[0].mem_detail;
    })
  }

  update(data: any) {
    this.service.update(this.id, data).subscribe(() => {
      console.log('Update successfully');
      this.router.navigateByUrl('tabs/member');
    })
  }

}
