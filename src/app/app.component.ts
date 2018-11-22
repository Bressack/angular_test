import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	categories = [
		{id :6,		nom :"Modes et travaux"},
		{id :18,	nom :"Poupees anciennes"},
		{id :7,		nom :"B\u00e9b\u00e9s reborn, poup\u00e9es d'artiste, s natterer"},
		{id :10,	nom :"Corolle"},
		{id :9,		nom :"Differentes marques"},
		{id :14,	nom :"Raynal, bella, gege, clodrey"},
		{id :4,		nom :"Gotz a jouer, kidz and cats, american girl"},
		{id :15,	nom :"Cathie,dolly,betsie"},
		{id :5,		nom :"Meubles de poupees, accessoires"},
		{id :12,	nom :"Ours en peluche"},
		{id :11,	nom :"Vetements de poupees"},
		{id :17,	nom :"PETITS PRIX"}
	];
}
