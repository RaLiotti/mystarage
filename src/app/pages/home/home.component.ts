import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  teste: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  change(){

    if(this.teste == false){
      this.teste = true;
    }else{
      this.teste = false;
    }

  }

}
