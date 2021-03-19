import { Component, OnInit } from '@angular/core';
import { IconsService } from '@atlp/services/icons.service';
import { ISettingsAvatar, IUserData } from '../avatars/interfaces';

@Component({
  selector: 'header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent implements OnInit {
  userData: IUserData = {
    firstName: 'Oleg',
    lastName: 'Andre',
    imgUrl: '',
  };
  settingsAvatar: ISettingsAvatar = {
    round: false,
    size: 'medium',
  };

  /**
   * Constructor
   * @param {IconsService} _iconsService
   */
  constructor(
    private _iconsService: IconsService,
  ) {
    this._iconsService.registerIcons(this.icons);
  }

  ngOnInit(): void {
  }



  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Register icon for current component
   */
  private get icons(): Array<string> {
    return ['notification', 'question'];
  }


}
