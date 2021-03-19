import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AtlpDirectivesModule } from '@atlp/directives/directives';
import { AtlpPipesModule } from '@atlp/pipes/pipes.module';
import {
    FieldNumberModule,
    AvatarsModule,
    FileModule,
    HeaderUserModule,
    VoyageModule,
    FiltersModule,
    AtlpSidebarModule
} from './components';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        AtlpDirectivesModule,
        AtlpPipesModule,
        AtlpSidebarModule,

        AvatarsModule,
        VoyageModule,
        FiltersModule,
        FieldNumberModule,
        FileModule,
        HeaderUserModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        AtlpDirectivesModule,
        AtlpPipesModule,
        AtlpSidebarModule,
        AvatarsModule,
        VoyageModule,
        FiltersModule,
        FieldNumberModule,
        FileModule,
        HeaderUserModule
    ]
})
export class AtlpSharedModule {
}
