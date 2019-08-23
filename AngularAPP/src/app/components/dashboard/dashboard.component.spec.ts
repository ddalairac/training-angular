import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardComponent } from "./dashboard.component";
import { HeroesService } from "src/app/services/heroes.service";

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // El código de configuración se ejecuta antes de cada prueba
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    // Ejecute un código y pruebe el resultado
  });
  afterEach(() => {
    // código de desmontaje ejecutado después de cada prueba<
  });
});
