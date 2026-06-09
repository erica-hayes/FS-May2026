import { Component } from '@angular/core';

interface Book {
  name: string;
  genre: string;
  details: string;
  logo: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  books: Book[] = [
    {
      name: 'It Ends with Us',
      genre: 'Contemporary Romance',
      details:
        'Colleen Hoover\'s emotional bestseller about Lily, a young woman navigating a passionate new romance while confronting painful patterns from her past.',
      logo: 'https://covers.openlibrary.org/b/isbn/9781501110367-L.jpg',
    },
    {
      name: 'Beach Read',
      genre: 'Rom-Com',
      details:
        'Emily Henry\'s sun-soaked enemies-to-lovers story follows two rival writers who swap genres for the summer and slowly fall for each other.',
      logo: 'https://covers.openlibrary.org/b/isbn/9781984806734-L.jpg',
    },
  ];

  constructor() {}
}
