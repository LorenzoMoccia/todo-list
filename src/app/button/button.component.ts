import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() name: string = '' ;
  @Input() icon: string = '' ;

  buttons = [
    {
      name: 'Youtube ',
      icon: 'https://www.svgrepo.com/show/475700/youtube-color.svg'
    },
    {
      name: 'LinkedIn ',
      icon: 'https://www.svgrepo.com/show/448234/linkedin.svg'
    },
    {
      name: 'GitHub ',
      icon: 'https://www.svgrepo.com/show/475654/github-color.svg'
    },
    {
      name: 'Portfolio ',
      icon: 'https://www.svgrepo.com/show/209613/portfolio.svg'
    },
  ];
}
