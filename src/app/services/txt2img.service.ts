import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Txt2imgreq} from "../models/Txt2ImgReq";
import {Observable} from "rxjs";
import {Txt2ImgRes} from "../models/Txt2ImgRes";

@Injectable({
  providedIn: 'root'
})



export class Txt2imgService {

  constructor(private http: HttpClient) { }

  public generate(imageReq: Txt2imgreq): Observable<Txt2ImgRes.RootObject> {
    return this.http.post<Txt2ImgRes.RootObject>('http://localhost:7861/v1/txt2img', {
      txt2imgreq: imageReq
    });
  }

}
