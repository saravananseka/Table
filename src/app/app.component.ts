import { Component } from '@angular/core';
export interface Olacabs   {
  name: string;
  Phonenumber: number;
  OTP: number;
  Location: string;
  amount: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataSource: Olacabs[] = [
    {name: 'mani', Phonenumber: 9965435678, OTP: 7272, Location:'Thilainagar', amount: 40},
    {name: 'Yogesh', Phonenumber: 9965435680, OTP: 4272, Location:'KKnagar', amount: 60},
    {name: 'selva', Phonenumber: 9965435655, OTP: 6272, Location:'srirangam', amount: 100},
    {name: 'ari', Phonenumber: 9965435665, OTP: 3272, Location:'Puthur', amount: 55},
    {name: 'vinoth', Phonenumber: 9965435672, OTP: 9272, Location:'chairambussatand', amount: 33},
    {name: 'virat', Phonenumber: 9965435644, OTP: 7272, Location:'Thilainagar', amount: 69},
    {name: 'sachin', Phonenumber: 9965435549, OTP: 1372, Location:'KKnagar', amount: 39},
    {name: 'saravanan', Phonenumber: 9965435144, OTP: 1431, Location:'srirangam', amount: 59},
    {name: 'vijay', Phonenumber: 9965435234, OTP: 1234, Location:'Puthur', amount: 44},
    {name: 'ajith', Phonenumber: 9965435167, OTP: 1456, Location:'chairambussatand', amount: 35},
    {name: 'kamal', Phonenumber: 99654350765, OTP: 7896, Location:'Thilainagar', amount: 48},
    {name: 'suresh', Phonenumber: 8526891365, OTP: 1456, Location:'KKnagar', amount: 110},
    {name: 'muthukumar', Phonenumber: 6360132657, OTP: 5345, Location:'srirangam', amount: 150},
    {name: 'vignesh', Phonenumber: 99654358976, OTP: 2987, Location:'Puthur', amount: 170},
    {name: 'santhosh', Phonenumber: 9965435110, OTP: 6532, Location:'chairambussatand', amount: 160},
 ];
 displayedColumns: string[] = ['name', 'Phonenumber', 'OTP', 'Location','amount'];
}
