import { Component, OnInit, Injectable} from '@angular/core';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss']
})

@Injectable()
export class CategoriesComponent implements OnInit {

	// urlCategories = 'https://api.lapassiondujouet.com/public/familles';
	categorie: any[];

	// constructor(private http: HttpClient) {
	// }

	constructor() {
	}

	ngOnInit() {
	}

	// getCategories() {
	// 	return this.http.get(this.urlCategories);
	// }
}
