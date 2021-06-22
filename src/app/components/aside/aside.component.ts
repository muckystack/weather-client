import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { AsideService } from 'src/app/services/aside.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  @ViewChild('asideSearchModal') asideSearchModal: ElementRef | any;
  constructor(
    private _asideServide: AsideService,
    private renderer2: Renderer2
  ) {}

  ngOnInit(): void {
    this._asideServide.openAsideSearchModal.subscribe((data) => {
      if (data)
        this.renderer2.setStyle(
          this.asideSearchModal.nativeElement,
          'margin-left',
          '0%'
        );
    });
  }

  closeModal() {
    this.renderer2.setStyle(
      this.asideSearchModal.nativeElement,
      'margin-left',
      '-100%'
    );
  }
}
