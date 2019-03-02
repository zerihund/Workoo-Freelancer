import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPostPage } from '../new-post/new-post';
import { HomePage } from '../home/home';
import { JobInfoPage } from '../job-info/job-info';

@Component({
  selector: 'page-upload-image',
  templateUrl: 'upload-image.html',
})
export class UploadImagePage {

  constructor(public navCtrl: NavController) {
  }

  goToNewPost(params) {
    if (!params) params = {};
    this.navCtrl.push(NewPostPage);
  }

  goToUploadImage(params) {
    if (!params) params = {};
    this.navCtrl.push(UploadImagePage);
  }

  goToHome(params) {
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }

  goToJobInfo(params) {
    if (!params) params = {};
    this.navCtrl.push(JobInfoPage);
  }
}