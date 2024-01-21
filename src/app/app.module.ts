import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormComponent } from './components/form/form.component';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { HomeComponent } from './pages/home/home.component';
import { TableModule } from 'primeng/table';
import { ProjectsComponent } from './components/projects/projects.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChartComponent } from './components/chart/chart.component';
import { TestcasesComponent } from './components/testcases/testcases.component';
import { ChartModule } from 'primeng/chart';
import { LogoutComponent } from './components/logout/logout.component';
import { CardModule } from 'primeng/card';
import {HttpClientModule} from'@angular/common/http';
import { Toast, ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    HomeComponent,
    ProjectsComponent,
    NavbarComponent,
    DashboardComponent,
    ChartComponent,
    TestcasesComponent,
    LogoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    PasswordModule,
    FormsModule,
    InputTextModule,
    TableModule,
    DialogModule,
    BrowserAnimationsModule,
    ChartModule,
    CardModule,
    HttpClientModule,
    ToastModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
