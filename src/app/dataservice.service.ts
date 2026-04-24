// data.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
    private apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    saveFormData(data: any) {
        return this.http.post(`${this.apiUrl}/save`, data);
    }

    getAllData() {
        return this.http.get(`${this.apiUrl}/data`);
    }
}