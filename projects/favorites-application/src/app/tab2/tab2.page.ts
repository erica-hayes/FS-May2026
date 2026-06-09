import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  songs: string[] = [
    'Espresso - Sabrina Carpenter',
    'Birds of a Feather - Billie Eilish',
    'Good Luck, Babe! - Chappell Roan',
    'Snooze - SZA',
    'Flowers - Miley Cyrus',
  ];

  handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    const itemToMove = this.songs.splice(event.detail.from, 1)[0];
    this.songs.splice(event.detail.to, 0, itemToMove);
    event.detail.complete();
  }

  constructor() {}
}
