import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedVariableService {

  isDisabled: boolean = false;

  constructor() { }
}
