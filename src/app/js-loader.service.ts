import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsLoaderService {

  constructor() { }

  loadjs(url: string): Promise<void> {
    let p = new Promise<void>((resolve) => {
      let node = document.createElement('script');
      node.src = url;
      node.type = 'text/javascript';
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0]
        .appendChild(node);
      node.onload = () => {
        console.log(`The javascript file ${url} has been loaded.`);
        resolve();
      }
    });

    return p;
  }
}
