import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-section',
  templateUrl: './drop-section.component.html',
  styleUrls: ['./drop-section.component.scss'],
})
export class DropSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() elements!: any[];
}
