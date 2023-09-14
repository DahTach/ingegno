import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
    public teamMates = [
        {"name": "Federico", "role": "Software Engineer", "img": "./assets/img/fa.png", "bkg": "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"name": "Sergio", "role": "Frontend Developer", "img": "./assets/img/sd.png", "bkg": "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"name": "Nicola", "role": "Backend Developer", "img": "./assets/img/ng.png", "bkg": "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"name": "Riccardo", "role": "Full-stack Developer", "img": "./assets/img/rm.png", "bkg": "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"name": "Francesco", "role": "Machine Learning Specialist", "img": "./assets/img/ft.png", "bkg": "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
    ]
}
