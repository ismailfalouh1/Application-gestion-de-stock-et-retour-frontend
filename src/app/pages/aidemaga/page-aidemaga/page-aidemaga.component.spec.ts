import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAidemagaComponent } from './page-aidemaga.component';

describe('PageAidemagaComponent', () => {
  let component: PageAidemagaComponent;
  let fixture: ComponentFixture<PageAidemagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAidemagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAidemagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
