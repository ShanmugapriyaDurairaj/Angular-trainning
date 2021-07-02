import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  log(msg){console.log("My AOO",msg)}
  error(msg){console.log("M",msg)}
}
