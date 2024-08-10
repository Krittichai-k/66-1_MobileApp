import { Component, OnInit } from '@angular/core';
import { MemberService } from './../services/member.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.page.html',
  styleUrls: ['./member-detail.page.scss'],
})
export class MemberDetailPage implements OnInit {

  id!: number;
  fullname: any;
  email: any;
  mobile: any;
  lineid: any;
  detail: any;

  constructor(
    public service: MemberService,
    public route: ActivatedRoute,
    public router: Router,
    public alertController: AlertController
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

  async delete(id: number) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ยืนยัน',
      mode:'ios',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          },
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            this.service.delete(id).subscribe(() => {
              this.router.navigateByUrl("/member")
            });
          },
        },
      ],
    });

    await alert.present();

  }

}
