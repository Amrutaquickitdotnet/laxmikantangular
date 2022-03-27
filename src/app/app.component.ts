import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', ],
})
export class AppComponent {
  title = 'Demo'; // Instance Variable 

  static d: string;

  menuChange(selectView: any) {
    debugger;
  }

  name="Abhay";//
  address: string="";
  show(value: string){
    this.name = value;
    for (let i = 0; i < 5; i=i+1) {
      console.log(i);
    }

   
     
    /*
     * String< 30%
     * number<-10%
     * boolean<-5%
     * DateTime<-15%
     * Group/collection/Array<-40%
     *
     */
  }

  showConsoleNormalFor() {
    let arr = [1, 4, 6, 3, 2, 1, 9];
    for (let i = 0; i < arr.length; i = i + 1) {
      console.log(`${i}-${arr[i]}`);
    }
  }


  showConsoleForIn() {
    let arr = [1, 4, 6, 3, 2, 1, 9];
    for (let i in arr) {
      console.log(`${i}-${arr[i]}`);
    }
  }

  showConsoleForLetOf() {//ES 6 
    let arr = [1, 4, 6, 3, 2, 1, 9];
    for (let a of arr) { // you have to add index.
      console.log(`${a}`);
    }
  }

  showConsoleForEach() {//ES 6 
    let arr = [1, 4, 6, 3, 2, 1, 9];
    arr.forEach(function (e, i) {  //CallBack <- Deleget 
      console.log(`${e}`);
    });

    
  }


  showConsoleForEach2() {//ES 6 
    let arr = [1, 4, 6, 3, 2, 1, 9];
    //arrow function ES 6
    arr.forEach((e, i) => {
      console.log(`${e}`);
    });


  }
}

//3 types
//--> Instance Variable 
//class Variable 
//Local Variable/Parameter or argments 
