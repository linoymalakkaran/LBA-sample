import { Component, Input, OnInit } from '@angular/core';
import { IconsService } from '@atlp/services/icons.service';
import { IVoyageInfoData } from '../../interfaces';

@Component({
  selector: 'voyage-info',
  templateUrl: './voyage-info.component.html',
  styleUrls: ['./voyage-info.component.scss']
})
export class VoyageInfoComponent implements OnInit {
  // input
  @Input() voyageInfoData: IVoyageInfoData;

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

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter src company icon 
   * @name - type string
   */
  public srcCompany(name: string): string {
    return `assets/images/${name}.png`;
  }


  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Register icon for current component
   */
  private get icons(): Array<string> {
    return ['data-icon', 'message-icon', 'message-active-icon', 'triangle-icon'];
  }

}
