import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-horizontal-slider',
  templateUrl: './horizontal-slider.component.html',
  styleUrls: ['./horizontal-slider.component.css']
})
export class HorizontalSliderComponent implements OnInit {

  isLoading: boolean = false;
  showLeftBtn: boolean = false;
  showRightBtn: boolean = true;

  @ViewChild('scroller') scroller!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {}

  onLeftBtnClick(event: Event) {
    event.preventDefault();
    const scroller = this.scroller.nativeElement;
    this.displayBtn(scroller);
    scroller.scrollTo({ left: (scroller.scrollLeft - 525), behavior: 'smooth' });
  }

  onRightBtnClick(event: Event) {
    event.preventDefault();
    const scroller = this.scroller.nativeElement;
    this.displayBtn(scroller);
    scroller.scrollTo({ left: (scroller.scrollLeft + 525), behavior: 'smooth' });
  }

  @HostListener('wheel', ['$event'])
  onBtnWheel(event: WheelEvent) {
    event.preventDefault();
    const scroller = this.scroller.nativeElement;
    this.displayBtn(scroller);
    scroller.scrollTo({ left: (scroller.scrollLeft + event.deltaY), behavior: 'smooth' });
  }

  displayBtn(scroller: HTMLDivElement) {
    this.showLeftBtn = scroller.scrollLeft > 10;
    this.showRightBtn = scroller.scrollLeft < (scroller.scrollWidth - scroller.clientWidth - 10);
  }

}
