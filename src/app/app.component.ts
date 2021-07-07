import { createComponent } from '@angular/compiler/src/core';
import { Component, VERSION, ViewChild, 
  ComponentFactoryResolver } from '@angular/core';
import { HelloComponent, HiComponent } from './hello.component';
import { HostDirective } from './host.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  @ViewChild(HostDirective, {static:true}) childRef:HostDirective
  components = [HiComponent, HelloComponent];
  constructor(public compfact : ComponentFactoryResolver) {}
  loadComponents(id){
    this.childRef.viewRef.clear();
    const chk = 
    this.compfact.resolveComponentFactory(this.components[id]);
    this.childRef.viewRef.createComponent(chk);
  }

}
