import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from '../cat'
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-catpage',
  templateUrl: './catpage.component.html',
  styleUrls: ['./catpage.component.css']
})
export class CatpageComponent implements OnInit {
  cat: Cat = {
    catImage : "https://i.imgflip.com/3hef6t.jpg",
    catName : "You are NOT AUTHORIZED to view this cat! GTFO",
    catFacts: "Leave! You are not worthy of the knowledge of this cat!"
  };

  constructor(private route: ActivatedRoute, public api: ApiService) {
    this.api.getCatPage(this.route.snapshot.params.id).then((res: any) => {
      this.cat.catName = res[0].name;
      this.cat.catImage = res[0].catimageurl;
      this.cat.catFacts = res[0].catfacts;
    })

  }

  ngOnInit() {
  }

}
