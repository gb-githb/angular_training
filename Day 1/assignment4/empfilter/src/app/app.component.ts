import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empfilter';
  propertySelected:String = "";
  propertyValue:String= "";

  empArray: any[] = [{
		"empNo": 1,
		"empName": "SCOTT",
		"empGrade": 1
	},

	{
		"empNo": 2,
		"empName": "ABRONS",
		"empGrade": 2
	},
	{
		"empNo": 3,
		"empName": "SMITH",
		"empGrade": 3
	},
	{
		"empNo": 4,
		"empName": "JAMES",
		"empGrade": 4
	},
	{
		"empNo": 5,
		"empName": "ADAM",
		"empGrade": 1
	},
	{
		"empNo": 6,
		"empName": "SATHYA",
		"empGrade": 3
	},
	{
		"empNo": 7,
		"empName": "MANEESH",
		"empGrade": 4
	},
	{
		"empNo": 8,
		"empName": "HANEESH",
		"empGrade": 2
	}
];
}
