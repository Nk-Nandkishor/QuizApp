import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
isStart:boolean = true;
showWaring:boolean = false;
quizQuestion:boolean = false;
quistionList:any ;
currentQuestion:any = 0;
questionEnd:boolean = false;
counter:any = 10;
timer = interval(1000);
questionCount:number = 0;
subscription : Subscription[] = [];
  constructor( private httpClient : HttpClient , 
       public userService: UserDataService
  ) {
   }

  ngOnInit(): void {
    this.getQuestionList();
    // this.timer();
  }




getQuestionList(){
  this.userService.getUser().subscribe((res:any)=>{
    // console.log(res,'res');
    this.quistionList = res;
    // console.log(this.quistionList[0].question,"questionlist");
  })
  // this.httpClient.get("assets/quize.json").subscribe((res:any)=>{
  //   this.quistionList = res;
  //   console.log(this.quistionList);
  // })
}

  showingWarning(){
    this.showWaring = true;
    this.isStart = false;
   
  }

  quizQustionShowing(){
    this.quizQuestion = true;
    this.showWaring = false;
    
    //  this.timer = interval(1000);
    this.subscription.push(
      this.timer.subscribe((res:any)=>{
        if(this.counter != 0){
          this.counter --;
     
          // console.log(this.counter,"counter of timer");
          if(this.counter == 0){
            this.next()
            this.counter = 10;
          }
         
        }
        
        
      })
    )
 

  }
  next(){
    if(this.currentQuestion < this.quistionList.length-1){
      this.currentQuestion ++;
      this.counter = 10;
      
    }
    else{
      this.subscription.forEach((m:any)=>{
        m.unsubscribe();
      })
    }
   
  }
  selected(option:any){
option.isSelected = true;
console.log(option , option.isSelected);
if(option.isCorrect == true){
  this.questionCount++ ;
  console.log(this.questionCount, "This is question cpu");
  // this.questionEnd ++;

}

  }
  selection(option:any){
 
    const selectionCount = option.filter((m:any)=> m.isSelected == true).length;
    if(selectionCount == 0){
      return false;
    }else{
      return true;
    }

  }
  Finish(){
  
    this.quizQuestion = false;
    this.questionEnd = true;

  }
}
