import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(filename: string, args?: string): string {

    const imgSize = {
      small: '-tn160.png',
      medium: '-tn320.png',
      large: '-tn640.png'
    };

    if (args) { return filename.split('.')[0] + imgSize[args]; }

    return filename.split('.')[0] + imgSize.small;
  }

}
