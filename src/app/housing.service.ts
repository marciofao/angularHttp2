import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';
  
  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const response = await fetch(this.url);
    return await response.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(housingLocationId: number | undefined, firstName: string, lastName: string, email: string): void {
    console.log(`Location ID: ${housingLocationId}, Name: ${firstName} ${lastName}, Email: ${email}`);
  }
}