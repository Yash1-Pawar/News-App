import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';
import { Theme } from '../model/Theme';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  theme: string = '';
  searchText: string = '';

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    const theme = localStorage.getItem(Theme.THEME);
    if (theme) {
      this.theme = theme;
      this.changeBodyTheme();
    } else {
      localStorage.setItem(Theme.THEME, Theme.LIGHT_MODE);
      this.theme = Theme.LIGHT_MODE
      this.changeBodyTheme();
    }
  }

  search(event: KeyboardEvent) {
    if (this.searchText.length == 0) return;
    if (event.key === 'Enter') {
      this.router.navigate(['search'], { queryParams: { query: this.searchText } });
      this.searchText = '';
    }
  }

  changeTheme() {
    const theme = localStorage.getItem(Theme.THEME);
    if (theme === Theme.LIGHT_MODE) {
      localStorage.setItem(Theme.THEME, Theme.DARK_MODE);
      this.theme = Theme.DARK_MODE;
      this.changeBodyTheme();
    } else {
      localStorage.setItem(Theme.THEME, Theme.LIGHT_MODE);
      this.theme = Theme.LIGHT_MODE;
      this.changeBodyTheme();
    }
  }

  changeBodyTheme() {
    if (this.theme === Theme.DARK_MODE) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

}
