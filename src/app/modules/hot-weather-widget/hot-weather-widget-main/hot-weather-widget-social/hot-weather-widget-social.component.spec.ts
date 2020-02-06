import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotWeatherWidgetSocialComponent } from './hot-weather-widget-social.component';

describe('HotWeatherWidgetSocialComponent', () => {
  let component: HotWeatherWidgetSocialComponent;
  let fixture: ComponentFixture<HotWeatherWidgetSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotWeatherWidgetSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotWeatherWidgetSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
