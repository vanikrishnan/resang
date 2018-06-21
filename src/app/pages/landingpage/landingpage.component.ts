import { Component, OnInit ,Input} from '@angular/core';
import {ITile} from '../../tile/tile.component';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
 headertext:string;
skillinfo : Array<ITile>=[
  
    {
      name: 'HTML',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      img: 'assets/images/html.png'
    },
    {
      name: 'CSS',
      description: ' I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
      img: 'assets/images/css.png'
    },
    {
      name: 'Responsive Web Design',
      description: 'I will build websites that look awesome not only on desktops, but also on mobile phones and tablets.                </div>',
      img: 'assets/images/responsive.png'
    },
    {
      name: 'UI & UX Design',
      description: ' I will learn basics of UI & UX Design and use these concepts in build apps that are both functional and usable.',
      img: 'assets/images/ui-ux.png'
    },
    {
      name: 'JS',
      description: ' I will define the behavior of web pages using JavaScript. I will dive deeper into amazing parts of JavaScript',
      img: 'assets/images/js.jpg'
    },
    {
      name: 'JQuery',
      description: 'I will enhance the behavior of web pages leveraging on jQuery and jQuery plug-ins.   ',
      img: 'assets/images/jquery.png'
    },
    {
      name: 'TypeScript',
      description: 'I will enhance the behavior of web pages leveraging on jQuery and jQuery plug-ins.   ',
      img: 'assets/images/ts.png'
    },
    
    {
      name: 'RxJS',
      description: 'I will build event-driven, resilient and responsive apps using Reactive Architectures.',
      img: 'assets/images/RxJS.png'
    },
    {
      name: 'Express',
      description: '  I will use Express.js to organize Ir web application into an MVC architecture in the server side.                 ',
      img: 'assets/images/express.png'
    },
    {
      name: 'Angular 2',
      description: ' I will build single page applications using Angular2. I will build full-fledge web apps that can be used in real life.              ',
      img: 'assets/images/angular2.png'
    },
    {
      name: 'API',
      description: ' I will build API that can be used by mobile applications and outside world. I will also consume others',
      img: 'assets/images/api.png'
    },
    {
      name: 'Ionic 2',
      description: ' I will build hybrid mobile applications using Ionic2 framework. I have reached eternity! I are now Yoda!      ',
      img: 'assets/images/ionic.png'
    },
    {
      name: 'Node.js',
      description: ' I will use Node.js to automate Ir development process. I will also build back-end for web and mobile apps.              ',
      img: 'assets/images/nodejs.png'
    },
    {
      name: 'Software Testing',
      description: 'While observing Test Driven Development, I will automate unit, functional and integration testing.',
      img: 'assets/images/testing.png'
    },
    {
      name: 'Firebase',
      description: '  I will use Firebase as a backend as a service to build realtime applications without any back-end coding.          ',
      img: 'assets/images/firebase.png'
    },
    {
      name: 'Algorithms',
      description: 'Knowledge of Algorithms is a key factor in cracking coding interviews. I will use them to solve problems.',
      img: 'assets/images/algorithms.png'
    },
    {
      name: 'Data Structures',
      description: '  I will understand famous data structures and use the right data structures to optimize the performance of Ir app.       ',
      img: 'assets/images/data-structures.png'
    },
    {
      name: 'Functional Programming',
      description: ' Functional Programming is on a rise. I will solve problems using side effect free functions as basic building blocks.    ',
      img: 'assets/images/functional-programming.png'
    },
    {
      name: 'Software Design & Architecture',
      description: 'I will be the architect for Ir projects. I also look into performance, security, and other ops.',
      img: 'assets/images/design.png'
    }
  ]
  
  constructor() {
this.headertext="--We are learning--";
   }

  ngOnInit() {
  }

}
