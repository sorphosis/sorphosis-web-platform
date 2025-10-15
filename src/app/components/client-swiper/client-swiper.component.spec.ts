import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSwiperComponent } from './client-swiper.component';

describe('ClientSwiperComponent', () => {
  let component: ClientSwiperComponent;
  let fixture: ComponentFixture<ClientSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
