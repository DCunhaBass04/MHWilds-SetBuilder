import { Routes } from '@angular/router';
import { ReqSenderComponent } from './req-sender/req-sender.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'reqsend', component: ReqSenderComponent }
];
