import { Pipe, PipeTransform } from '@angular/core';  

@Pipe({ name: 'columnFormat' }) 
export class ColumnFormatPipe implements PipeTransform { 
  transform(value: string): string {
    const upper = value.charAt(0).toUpperCase() + value.slice(1);
    return upper;
  } 
}