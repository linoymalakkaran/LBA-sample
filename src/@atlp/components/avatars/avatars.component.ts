import { Component, Input, OnInit } from '@angular/core';
import { AvatarsState } from './enums';
import { ISettingsAvatar, IUserData } from './interfaces';

@Component({
  selector: 'atlp-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent implements OnInit {
  // Input params
  @Input() userData: IUserData;
  @Input() settingsAvatar: ISettingsAvatar;

  constructor() { }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  ngOnInit(): void {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Get/Set method
  // -----------------------------------------------------------------------------------------------------

  get searchRequiredAvatar(): string {
    // checking for the existence of passed parameters
    if (!this._checkExistence(this.userData) && !this._checkExistence(this.settingsAvatar)) { return AvatarsState.DEFAULT; }

    // check for the presence of an image
    if (this._checkExistence(this.userData.imgUrl)) {
      return AvatarsState.PHOTO;
    }
    // check for availability firstName and lastName
    if (this._checkExistenceFirstLastName()) {
      return AvatarsState.INITIAL;
    }

    // default fallback
    return AvatarsState.DEFAULT;
  }

  /**
   * Returns the first characters
   */
  get initial(): string {
    if (!this._checkExistenceFirstLastName()) { return 'AA'; }
    return this.userData.firstName[0] + this.userData.lastName[0];
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private method
  // -----------------------------------------------------------------------------------------------------
  /**
   * Checking for null, undefined, string; 
   * Return - Boolean;
   * @param value - type any
   */
  private _checkExistence(value): boolean {
    return value !== null && value !== undefined && value !== '';
  }

  /**
   * Check for lingering firstName and lastName and they are not empty strings;
   * Return - Boolean;
   */
  private _checkExistenceFirstLastName(): boolean {
    return this._checkExistence(this.userData.firstName) && this._checkExistence(this.userData.lastName);
  }
}
