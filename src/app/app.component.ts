import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/services/data-service.service';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

export interface Ianswer {
  text: string;
  isCorrect: boolean;
}

export interface Iquestion {
  question: string;
  answears: Ianswer [];
}

const data: Iquestion[]  = [
  {
      question: "In CSS, which of these values CANNOT be used with the &quot;position&quot; property?",
      answears: [
          {
              "text": "static",
              "isCorrect": false
          },
          {
              "text": "relative",
              "isCorrect": false
          },
          {
              "text": "center",
              "isCorrect": true
          },
          {
              "text": "absolute",
              "isCorrect": false
          }
      ]
  },
  {
      question: "How long is an IPv6 address?",
      answears: [
          {
              "text": "128 bits",
              "isCorrect": true
          },
          {
              "text": "64 bits",
              "isCorrect": false
          },
          {
              "text": "128 bytes",
              "isCorrect": false
          },
          {
              "text": "32 bits",
              "isCorrect": false
          }
      ]
  },
  {
      question: "In the server hosting industry IaaS stands for...",
      answears: [
          {
              "text": "Infrastructure as a Service",
              "isCorrect": true
          },
          {
              "text": "Internet and a Server",
              "isCorrect": false
          },
          {
              "text": "Internet as a Service",
              "isCorrect": false
          },
          {
              "text": "Infrastructure as a Server",
              "isCorrect": false
          }
      ]
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  click: number | undefined;
  count = 0;
  res: boolean = false;
  title = 'test_task';
  questionList: Iquestion[] = [];
  resList: boolean[] = [];
  checkIcon = faCheck;
  xMarkIcon = faTimes;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {  
    this.questionList = data;
    
  }

  next() {
    if (this.count < this.questionList.length-1)
      this.count +=1;
    this.click = undefined;
    this.resList.push(this.res);
    this.res = false;
  }

  checkAnswer(answer: Ianswer,  num: number) {
    this.click = num;
    this.res = answer.isCorrect;
    
  }
  
}
