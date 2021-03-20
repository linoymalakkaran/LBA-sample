import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from "@ngx-translate/core";
import "hammerjs";
import { AtlpModule } from "@atlp/atlp.module";
import { AtlpSharedModule } from "@atlp/shared.module";
import { AtlpProgressBarModule, AtlpSidebarModule } from "@atlp/components";
import { atlpConfig } from "app/atlp-config";
import { AppComponent } from "app/app.component";
import { LayoutModule } from "app/layout/layout.module";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { AuthService } from "./core/services/auth.service";
import { LoaderService } from "./core/services/loader.service";
import { TokenInterceptor } from "./core/interceptor/token.interceptor";
import { EnvServiceProvider } from "./env.service.provider";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from "./store/reducers/app.reducer";
import { AppointmentEffects } from "./main/appointments/store/appointment.effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    //RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    TranslateModule.forRoot(),
    // Material moment date module
    MatMomentDateModule,
    // Material
    // MatButtonModule,
    // MatIconModule,
    // Atlp modules
    AtlpModule.forRoot(atlpConfig),
    AtlpProgressBarModule,
    AtlpSharedModule,
    AtlpSidebarModule,
    CoreModule,
    // App modules
    LayoutModule,
    //Shared modules
    SharedModule,
    // StoreModule.forRoot(appReducers),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25, // Retains last 25 states
    // }),
    // EffectsModule.forRoot([AppointmentEffects]),
  ],
  providers: [
    EnvServiceProvider,
    AuthService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
