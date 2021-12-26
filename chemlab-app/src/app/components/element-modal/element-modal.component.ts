import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IElement, IElementData } from '../../interfaces/element.interface';
import { descriptions } from './element-modal.data';

@Component({
  selector: 'app-modal-info',
  templateUrl: './element-modal.component.html',
  styleUrls: ['./element-modal.component.scss']
})
export class ElementModalComponent implements OnInit {

  public elementName: string = '';
  public elementData: IElementData[] = [];

  constructor(
    public dialogRef: MatDialogRef<ElementModalComponent>,
    @Inject(MAT_DIALOG_DATA) public element: IElement
  ) {
    this.elementName = element.name;
  }

  ngOnInit(): void {
    this.assignElementData();
  }

  assignElementData(): void {
    const properties = Object.values(this.element).slice(1);
    properties.forEach((prop, index) => {
      this.elementData.push({
        property: prop,
        description: {
          text: descriptions[index].text,
          icon: descriptions[index].icon,
        }
      })
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
