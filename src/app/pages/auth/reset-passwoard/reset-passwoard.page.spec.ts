import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetPasswoardPage } from './reset-passwoard.page';

describe('ResetPasswoardPage', () => {
  let component: ResetPasswoardPage;
  let fixture: ComponentFixture<ResetPasswoardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResetPasswoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
