import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss'],
})
export class MovieModalComponent implements OnInit {
  @Input() data: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  public onModalClose() {
    this.modalCtrl.dismiss();
  }

}