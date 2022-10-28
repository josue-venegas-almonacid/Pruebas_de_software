import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUpdateComponent } from './create-update.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CreateUpdateComponent', () => {
  let component: CreateUpdateComponent;
  let fixture: ComponentFixture<CreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateComponent ],
      imports: [
        HttpClientTestingModule, 
        RouterTestingModule,
        FormsModule, 
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*----------------------------------------------------------*/
  it('should mark name field as invalid when it has no value', () => {
    const ctrl: any = component.recipeForm.get('name');

    ctrl.setValue(null);
    fixture.detectChanges();

    expect(ctrl.invalid).toBeTruthy();
  });

  it('should mark name field as valid when it has value', () => {
    const ctrl: any = component.recipeForm.get('name');

    ctrl.setValue('test');
    fixture.detectChanges();

    expect(ctrl.valid).toBeTruthy();
  });

  it('should mark image field as invalid when it has no value', () => {
    const ctrl: any = component.recipeForm.get('image');

    ctrl.setValue(null);
    fixture.detectChanges();

    expect(ctrl.invalid).toBeTruthy();
  });

  it('should mark image field as valid when it has value', () => {
    const ctrl: any = component.recipeForm.get('image');

    ctrl.setValue('test');
    fixture.detectChanges();

    expect(ctrl.valid).toBeTruthy();
  });

  it('should mark ingredients field as invalid when it has no value', () => {
    const ctrl: any = component.recipeForm.get('ingredients');

    ctrl.setValue(null);
    fixture.detectChanges();

    expect(ctrl.invalid).toBeTruthy();
  });

  it('should mark ingredients field as valid when it has value', () => {
    const ctrl: any = component.recipeForm.get('ingredients');

    ctrl.setValue('test');
    fixture.detectChanges();

    expect(ctrl.valid).toBeTruthy();
  });

  it('should mark instructions field as invalid when it has no value', () => {
    const ctrl: any = component.recipeForm.get('instructions');

    ctrl.setValue(null);
    fixture.detectChanges();

    expect(ctrl.invalid).toBeTruthy();
  });

  it('should mark instructions field as valid when it has value', () => {
    const ctrl: any = component.recipeForm.get('instructions');

    ctrl.setValue('test');
    fixture.detectChanges();

    expect(ctrl.valid).toBeTruthy();
  });
});
