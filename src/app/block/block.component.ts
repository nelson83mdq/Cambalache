import { Component, Input } from '@angular/core';
import { BlockInfo } from './block-info';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent {
  @Input()  blockData?: BlockInfo;
  constructor(){ }

}
