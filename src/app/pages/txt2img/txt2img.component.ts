import {Component, OnDestroy, OnInit} from '@angular/core';
import SAMPLER from "../../constants/sampler";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {InfoService} from "../../services/info.service";
import {SDInfoModel} from "../../models/SDInfoModel";
import storage_key from "../../constants/storage_key";
import {OperationService} from "../../services/operation.service";
import {Txt2imgService} from "../../services/txt2img.service";
import {Txt2imgreq} from "../../models/Txt2ImgReq";
import {Txt2ImgRes} from "../../models/Txt2ImgRes";
import {StateModel} from "../../models/StateModel";
import { Subscription, timer} from "rxjs";


@Component({
  selector: 'app-txt2img',
  templateUrl: './txt2img.component.html',
  styleUrls: ['./txt2img.component.scss']
})
export class Txt2imgComponent implements OnInit,OnDestroy {

  public _SAMPLER = SAMPLER;

  public prompt: string = '';
  public negPrompt: string = '';

  public samplingSteps: number = 40;
  public samplerIndex: number = 0;

  public imageSizeW: number = 512;
  public imageSizeH: number = 512;

  public restoreFaceFlag: boolean = false;
  public tilingFlag: boolean = false;
  public highresFixFlag: boolean = false;

  public batchCount: number = 1;
  public batchSize: number = 1;

  public cfgScale: number = 10.0;
  public seed: number = -1;

  public modelSelect: string = '';
  public hypernetSelect: string = '';

  public isGenerating: boolean = false;

  public availableModels: SDInfoModel.Checkpoint[] | null = null;
  public availableHypernets: string[] | null = null;

  public generatedData: Txt2ImgRes.RootObject | null = null;
  public jobState: StateModel.RootObject | null = null;
  public steps: number = 0;
  public generatingPercent: number = 0;

  private intervalSubscription: Subscription = new Subscription;


  constructor(
    private _notification: NzNotificationService,
    private _infoService:InfoService,
    private _opService: OperationService,
    private _2ImgService: Txt2imgService
  ) { }

  ngOnInit(): void {
    this.fetchModelInfo();
    this.fetchState();
    this.negPrompt = localStorage.getItem(storage_key.PROMPT.NEG_BASE_PROMPT) || '';
  }

  public fetchState(): void {
    this._infoService.getState().subscribe(
  (data) => {
      if(data.model_loading && this.steps === 0) {
        this.steps = 1;
      }
      if(!data.model_loading&& this.steps === 1) {
        this.steps = 2;
      }
      if(this.steps === 1) {
        this.generatingPercent = (data.sampling_step / data.sampling_steps) * 100;
      }
    }, error => {
      console.error(error);
      this._notification.create(
        'error',
        'Error',
        'Failed to fetch state.'
      );
    })
  }

  public fetchModelInfo(): void {
    this._infoService.getStableDiffusionModelInfo().subscribe(
      (data) => {
        this.availableModels = data.checkpoints;
        this.availableHypernets = ['none', ...data.hypernets];
        if(this.modelSelect === '') {
          this.modelSelect = this.availableModels[0].title;
        }
        if(this.hypernetSelect === '') {
          this.hypernetSelect = this.availableHypernets[0];
        }
      }, error => {
        console.error(error);
        this._notification.create(
          'error',
          'Error',
          'Failed to fetch model info.'
        );
      });
  }

  public setSampler(index: number): void {
    this.samplerIndex = index;
  }

  public resetSeed(): void {
    this.seed = -1;
  }

  public reuseLastSeed(): void {
    this.seed = -1;
  }

  public generate(): void {
    this.generatedData = null;
    const requestBody: Txt2imgreq = {
      prompt: this.prompt,
      negative_prompt: this.negPrompt,
      steps: this.samplingSteps,
      sampler_index: this.samplerIndex,
      restore_faces: this.restoreFaceFlag,
      tiling: this.tilingFlag,
      n_iter: this.batchCount,
      batch_size: this.batchSize,
      cfg_scale: this.cfgScale,
      seed: this.seed,
      height: this.imageSizeH,
      width: this.imageSizeW,
      modelOptions: {
        checkpoint: this.modelSelect,
        hypernet: this.hypernetSelect
      }
    }
    this.isGenerating = true;

    this.intervalSubscription = timer(0, 1500)
      .subscribe(time => {
      this.fetchState();
      return time;
    });

    // A very long callback
    this._2ImgService.generate(requestBody)
      .subscribe(
        (data: Txt2ImgRes.RootObject) => {
          this.isGenerating = false;
          this.intervalSubscription.unsubscribe();
          this.steps = 3;
          this.generatedData = data;
          this.seed = data.seed
        }, error => {
          console.error(error);
          this.isGenerating = false;
          this.intervalSubscription.unsubscribe();
          this.steps = 0;
          this._notification.create(
            'error',
            'Error',
            'Failed to generate image due to ' + error.error.detail
          );
        });
  }

  public skip(): void {
  this._opService.skipJob();
  this.isGenerating = false;
  }

  public interrupt(): void {
    this._opService.interruptJob();
    this.isGenerating = false;
  }

  public setModel(model: string): void {
    this.modelSelect = model;
  }

  public setHypernet(hypernet: string): void {
    this.hypernetSelect = hypernet;
  }

  ngOnDestroy(): void {
    if(this.intervalSubscription){
      this.intervalSubscription.unsubscribe();
    }
  }

}
