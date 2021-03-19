import { Component, Input, OnInit } from '@angular/core';
import { IconsService } from '@atlp/services/icons.service';
import { CardStatus } from '../../enums/card-status.enum';
import { IVoyageCardData } from '../../interfaces';
@Component({
  selector: 'voyage-card',
  templateUrl: './voyage-card.component.html',
  styleUrls: ['./voyage-card.component.scss']
})
export class VoyageCardComponent implements OnInit {
  // input
  @Input() voyageCardData: IVoyageCardData;
  CardStatus = CardStatus;
  /**
  * Constructor
  * @param {IconsService} _iconsService
  */
  constructor(
    private _iconsService: IconsService,
  ) {
    // mat icon
    this._iconsService.registerIcons(this.icons);
  }

  ngOnInit(): void {
  }

  getDuration(value: number): string {
    if (value) {
      const hours = Math.floor((value / 60) / 60);
      const minutes = Math.floor(value / 60) % 60;
      // tslint:disable-next-line:max-line-length
      return `${hours > 0 ? `<span>${hours}h</span>` : null}${minutes > 0 ? `<span>${minutes}m</span>` : null}`;
    }
    return null;
  }

  /**
   * Register icon for current component
   */
  private get icons(): Array<string> {
    return ['data-icon', 'message-icon', 'added-icon', 'default-icon', 'message-active-icon', 'triangle-icon', 'approved-icon', 'rejected-icon', 'pending-icon', 'addDL-icon', 'addLL-icon', 'minus-icon'];
  }

}
