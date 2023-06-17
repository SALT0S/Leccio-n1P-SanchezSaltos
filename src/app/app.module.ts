import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import {AuthGuard} from "./auth.guard";
import { AlumnosService } from './alumnos.service';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import { LoginComponent } from './login/login.component';
import { DeveloperComponent } from './developer/developer.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'developer', component: DeveloperComponent, canActivate: [AuthGuard] },
  { path: 'alumnos', component: AlumnosComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, AlumnosComponent, NavbarComponent, FooterComponent, LoginComponent, DeveloperComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [AlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
