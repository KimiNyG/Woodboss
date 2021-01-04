import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images = [
    { name: 'mestari', url: '../../assets/images/galleria/mestari.jpg' },
    { name: 'forest', url: '../../assets/images/galleria/forest.jpg' },
    { name: 'fadeforest', url: '../../assets/images/galleria/fadeforest.png' },
    { name: 'mestari', url: '../../assets/images/galleria/mestari.jpg' },
    { name: 'forest', url: '../../assets/images/galleria/forest.jpg' },
    { name: 'fadeforest', url: '../../assets/images/galleria/fadeforest.png' },
    { name: 'mestari', url: '../../assets/images/galleria/mestari.jpg' },
    { name: 'forest', url: '../../assets/images/galleria/forest.jpg' },
    { name: 'fadeforest', url: '../../assets/images/galleria/fadeforest.png' },
    { name: 'mestari', url: '../../assets/images/galleria/mestari.jpg' },
    { name: 'forest', url: '../../assets/images/galleria/forest.jpg' },
    { name: 'fadeforest', url: '../../assets/images/galleria/fadeforest.png' },
    { name: 'mestari', url: '../../assets/images/galleria/mestari.jpg' },
    { name: 'forest', url: '../../assets/images/galleria/forest.jpg' },
    { name: 'fadeforest', url: '../../assets/images/galleria/fadeforest.png' },
  ];

  imageIndex = 0;
  count;

  mouseEnter(i : number, count :number){
    this.count = count;
    let a = document.getElementsByClassName('small-overlay');
    for (var j = 0; j < count; j++) {
      if(j==i) continue;
      else{
        a[j].setAttribute("style", "visibility:hidden;");
      }
    }
    a[i].setAttribute("style", "visibility:visible;");
  }

 mouseLeave(i : number){
   let a = document.getElementsByClassName('small-overlay');
    a[i].setAttribute("style", "visibility:hidden;");  
 }

 openClick(i : number){
  this.imageIndex = i;
  let a = document.getElementsByClassName('big-overlay');
  let img = document.getElementsByClassName('big-img');
  img[0].setAttribute("src",this.images[i].url);
  a[0].setAttribute("style", "visibility:visible;");
}

closeClick(){
  let a = document.getElementsByClassName('big-overlay');
  a[0].setAttribute("style", "visibility:hidden;");
}
  
nextClick(){
  this.imageIndex++;
  if(this.imageIndex >= this.count)
  { this.imageIndex = 0; }
  let img = document.getElementsByClassName('big-img');
  img[0].setAttribute("src",this.images[this.imageIndex].url);
}

prevClick(){
  this.imageIndex--;
  if(this.imageIndex <= -1)
  {this.imageIndex = this.count-1;}
  console.log("count: "+this.count)
  console.log("index: "+this.imageIndex)
  let img = document.getElementsByClassName('big-img');
  img[0].setAttribute("src",this.images[this.imageIndex].url);
}


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }
}
