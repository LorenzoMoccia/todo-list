import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  skills = [
    {
      title: 'HTML',
      img: 'assets/images/html.png',
    },
    {
      title: 'CSS',
      img: 'assets/images/css.png',
    },
    {
      title: 'BOOTSTRAP',
      img: 'assets/images/bootstrap.png',
    },
    {
      title: 'Vue.js',
      img: 'assets/images/vue.png',
    },
    {
      title: 'Angular',
      img: 'assets/images/angular.png',
    },
    {
      title: 'Python',
      img: 'assets/images/python.png',
    }
  ];
}
