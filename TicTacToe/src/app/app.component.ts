import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SquareComponent, BoardComponent, NbLayoutModule, NbButtonModule, NbEvaIconsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TicTacToe';
}
