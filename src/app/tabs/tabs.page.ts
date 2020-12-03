import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(private actionSheet: ActionSheetController) {}

  async more(): Promise<void> {
    const sheet = await this.actionSheet.create({
      buttons: [
        {
          icon: 'star-outline',
          text: 'Tab Title 4',
        },
        {
          icon: 'alert-circle-outline',
          text: 'Tab Title 5',
        },
        {
          icon: 'basketball-outline',
          text: 'Tab Title 6',
        },
      ],
    });
    await sheet.present();
  }
}
