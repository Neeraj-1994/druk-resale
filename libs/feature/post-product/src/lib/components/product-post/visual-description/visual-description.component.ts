import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pp-visual-description',
  templateUrl: './visual-description.component.html',
  styleUrls: ['./visual-description.component.scss']
})
export class VisualDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  files: File[] = [];

  onSelect(event: any): void {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any): void {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
