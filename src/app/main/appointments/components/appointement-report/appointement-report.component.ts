import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';
import { DemoFilePickerAdapter } from 'app/core/adapters/demo-file-picker.adapter';
import { TypeFile } from 'app/core/enums/type-file.enum';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { IconsService } from '@atlp/services/icons.service';
import { FilePickerComponent, FilePreviewModel, ValidationError } from 'ngx-awesome-uploader';

@Component({
  selector: 'appointement-report',
  templateUrl: './appointement-report.component.html',
  styleUrls: ['./appointement-report.component.scss']
})
export class AppointementReportComponent implements OnInit {
  public typeFiles = ['pdf', 'jpg', 'jpeg', 'png', 'mp4', 'css'];

  @Input() appointement;
  @Input() file;

  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;
  adapter = new DemoFilePickerAdapter(this._http);
  myFiles: FilePreviewModel[] = [];

  TypeFile = TypeFile;
  SidebarName = SidebarName;

  /**
   * Constructor
   * @param {IconsService} _iconsService
   * @param {HttpClient} _http
   * @param {AtlpSidebarService} _atplSidebarService
   */
  constructor(
    private _iconsService: IconsService,
    private _http: HttpClient,
    private _atplSidebarService: AtlpSidebarService
  ) {
    this._iconsService.registerIcons(this.icons);
  }

  ngOnInit(): void {
  }

  public onValidationError(error: ValidationError): void {
    alert(`Validation Error ${error.error} in ${error.file.name}`);
  }
  public onUploadSuccess(e: FilePreviewModel): void {
  }
  public onRemoveSuccess(e: FilePreviewModel) {
  }
  public onFileAdded(file: FilePreviewModel) {
    this.myFiles.push(file);
    this.myFiles.forEach(element => {
      switch (element.file.type) {
        case TypeFile.PNG:
          this._iconsService.registerIcons(['png-icon']);
          break;

        case TypeFile.PDF:
          this._iconsService.registerIcons(['pdf-icon']);
          break;

        default:
          break;
      }
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  
  // loadedFiles
  public loadedFiles(files): void {
    console.log('loadedFiles', files);
  }

  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._atplSidebarService.getSidebar(key).toggleOpen();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Register icon for current component
   */
  private get icons(): Array<string> {
    return ['pdf-icon', 'file-remove', 'folder'];
  }

}
