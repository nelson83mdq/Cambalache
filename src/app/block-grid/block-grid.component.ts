import { Component } from '@angular/core';
import { BlockInfo } from '../block/block-info';

@Component({
  selector: 'app-block-grid',
  templateUrl: './block-grid.component.html',
  styleUrls: ['./block-grid.component.css']
})
export class BlockGridComponent {
  blockInfo: BlockInfo[]= [
    {
      id:1,
      name: 'Carlos',
      url: 'www.google.com'
    },
    {
      id:3,
      name: 'Ana',
      url: 'www.yahoo.com'
    },
    {
      id:4,
      name: 'Milena',
      url: 'www.bing.com'
    }

  ];




}
