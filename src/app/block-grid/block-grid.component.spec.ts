import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockGridComponent } from './block-grid.component';

describe('BlockGridComponent', () => {
  let component: BlockGridComponent;
  let fixture: ComponentFixture<BlockGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
