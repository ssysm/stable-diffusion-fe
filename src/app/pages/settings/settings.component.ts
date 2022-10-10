import { Component, OnInit } from '@angular/core';
import STORAGE_KEY from "../../constants/storage_key";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public apiEndpoint: string = 'http://localhost:7861';
  public basePrompt: string = '';
  public negBasePrompt: string = '';

  constructor(
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
    this.apiEndpoint = localStorage.getItem(STORAGE_KEY.API_URL) || 'http://localhost:7861';
    this.basePrompt = localStorage.getItem(STORAGE_KEY.PROMPT.BASE_PROMPT) || '';
    this.negBasePrompt = localStorage.getItem(STORAGE_KEY.PROMPT.NEG_BASE_PROMPT) || '';
  }

  public save(): void {
    localStorage.setItem(STORAGE_KEY.API_URL, this.apiEndpoint);
    localStorage.setItem(STORAGE_KEY.PROMPT.BASE_PROMPT, this.basePrompt);
    localStorage.setItem(STORAGE_KEY.PROMPT.NEG_BASE_PROMPT, this.negBasePrompt);
    this.notification.create(
      'success',
      'Settings Saved!',
      'Your settings have been saved.'
    );
  }
}
