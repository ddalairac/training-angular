import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./components/list/list.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { Page404Component } from "./components/page404/page404.component";
import { EditComponent } from "./components/edit/edit.component";

const routes: Routes = [
  { path: "list", component: ListComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "new", component: EditComponent },
  { path: "page404", component: Page404Component },
  { path: "", redirectTo: "/list", pathMatch: "full" },
  { path: "**", redirectTo: "/page404", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
