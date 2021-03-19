import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { DemoFilePickerAdapter } from 'app/core/adapters/demo-file-picker.adapter';
import { TypeFile } from 'app/core/enums/type-file.enum';
import { IconsService } from '@atlp/services/icons.service';
import { FilePickerComponent, FilePreviewModel, UploaderCaptions, ValidationError } from 'ngx-awesome-uploader';
// import { Observable, of } from 'rxjs';
// import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  // file
  @Input() typeFiles: Array<string>;
  @Input() onceFile?: boolean = false;
  @Output() loadedFiles = new EventEmitter<FilePreviewModel[]>();
  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;
  @ViewChild('drop', { static: true }) dropButton: ElementRef<HTMLButtonElement>;
  adapter = new DemoFilePickerAdapter(this._http);
  myFiles: FilePreviewModel[] = [];
  uploadType: 'multi' | 'single';
  TypeFile = TypeFile;
  showDrop: boolean = true;
  /**
   * Constructor
   * @param {IconsService} _iconsService
   * @param {HttpClient} _http
   */
  constructor(
    private _iconsService: IconsService,
    private _http: HttpClient
  ) {
    this._iconsService.registerIcons(this.icons);
  }
  ngOnInit(): void {
    this.uploadType = this.onceFile ? 'single' : 'multi';
  }
  public onValidationError(error: ValidationError): void {
    // alert(`Validation Error ${error.error} in ${error.file.name}`);
  }
  public onUploadSuccess(e: FilePreviewModel): void {
  }
  public onRemoveSuccess(e: FilePreviewModel): void {
  }
  public onFileRemoved(file: FilePreviewModel): void {
    this.myFiles = this.myFiles.filter(item => item.fileName !== file.fileName);
    if (this.myFiles.length === 0) {
      this.showDrop = true;
    }
    this.emitFiles(this.myFiles);
  }
  public onFileAdded(file: FilePreviewModel): void {
    this.showDrop = false;
    this.myFiles.push(file);
    this.emitFiles(this.myFiles);
    console.log(this.myFiles);
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
  btnClick(): void {
    console.log(this.dropButton.nativeElement);
    const el: HTMLElement = this.dropButton.nativeElement;
    el.click();
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
  /**
   * Output loaded files
   * @param files 
   */
  private emitFiles(files: FilePreviewModel[]): void {
    this.loadedFiles.emit(files);
  }
}