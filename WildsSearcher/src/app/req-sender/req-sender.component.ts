import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-req-sender',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './req-sender.component.html',
  styleUrl: './req-sender.component.css'
})
export class ReqSenderComponent {
  methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
  selectedMethod = 'GET';
  requestUrl = '';
  requestBody = '';
  responseData: any;

  constructor(private http: HttpClient) {}

  sendRequest() {
    if (!this.requestUrl) {
      alert('Por favor insira uma URL!');
      return;
    }

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    switch (this.selectedMethod) {
      case 'GET':
        this.http.get(this.requestUrl).subscribe(res => this.responseData = res, err => this.responseData = err);
        break;

      case 'DELETE':
        this.http.delete(this.requestUrl).subscribe(res => this.responseData = res, err => this.responseData = err);
        break;

      case 'POST':
        this.http.post(this.requestUrl, this.parseBody(), { headers }).subscribe(res => this.responseData = res, err => this.responseData = err);
        break;

      case 'PUT':
        this.http.put(this.requestUrl, this.parseBody(), { headers }).subscribe(res => this.responseData = res, err => this.responseData = err);
        break;

      case 'PATCH':
        this.http.patch(this.requestUrl, this.parseBody(), { headers }).subscribe(res => this.responseData = res, err => this.responseData = err);
        break;
    }
  }

  private parseBody() {
    try {
      return this.requestBody ? JSON.parse(this.requestBody) : {};
    } catch (e) {
      alert('JSON inválido no corpo da requisição!');
      return {};
    }
  }
}
