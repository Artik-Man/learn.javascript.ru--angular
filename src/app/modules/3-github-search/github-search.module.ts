import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubSearchComponent } from './github-search.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { GithubApiService } from './services/github-api.service';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SearchStringComponent } from './search-string/search-string.component';
import { RepositoriesListComponent } from './repositories-list/repositories-list.component';


@NgModule({
  declarations: [
    GithubSearchComponent,
    SearchStringComponent,
    RepositoriesListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressBarModule,
    RouterModule.forChild([
      { path: '', component: GithubSearchComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [
    GithubApiService
  ]
})
export class GithubSearchModule {
  constructor() {
    console.log('3. GithubSearchModule');
  }
}
