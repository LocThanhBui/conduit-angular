import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  articleFrm!: FormGroup
  constructor(private storage: StorageService) { }

  ngOnInit(): void {
    this.articleForn()
  }

  addNewArticle() {
    
  }
  articleForn() {
    this.articleFrm = new FormGroup({
      title: new FormControl(''),
      desc: new FormControl(''),
      desc_1: new FormControl(''),
      content: new FormControl(''),
    })
  }
}
