import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { Txt2imgComponent } from './pages/txt2img/txt2img.component';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSliderModule} from "ng-zorro-antd/slider";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzButtonModule} from "ng-zorro-antd/button";
import { SettingsComponent } from './pages/settings/settings.component';
import {NzNotificationModule} from "ng-zorro-antd/notification";
import {NzStepsModule} from "ng-zorro-antd/steps";
import {NzImageModule} from "ng-zorro-antd/image";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    Txt2imgComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzGridModule,
    NzFormModule,
    NzMenuModule,
    NzInputModule,
    NzSliderModule,
    NzInputNumberModule,
    NzToolTipModule,
    NzDropDownModule,
    NzCheckboxModule,
    NzCardModule,
    NzDividerModule,
    NzButtonModule,
    NzNotificationModule,
    NzStepsModule,
    NzImageModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
