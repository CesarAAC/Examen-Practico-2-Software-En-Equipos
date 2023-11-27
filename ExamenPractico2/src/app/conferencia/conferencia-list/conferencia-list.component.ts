import { Component, OnInit } from '@angular/core';
import { Conferencia } from '../conferencia';
import { ConferenciaService } from '../conferencia.service';

@Component({
  selector: 'app-conferencia-list',
  templateUrl: './conferencia-list.component.html',
  styleUrls: ['./conferencia-list.component.css']
})
export class ConferenciaListComponent implements OnInit {

  conferencias: Array<Conferencia> = [];
  fechaActual:Date= new Date();
  incomingConferencias: number= 0;

  constructor(private conferenciaService: ConferenciaService) { }
 
  getConferencias(): void {
    this.conferenciaService.getConferencias().subscribe((conferencias) => {
      this.conferencias = conferencias;
      this.fechaActual=new Date();
      let Iconf=0;
      conferencias.forEach((c)=>{
        if (this.fechaActual >(new Date(c.starts))){
          Iconf+=1;
        }
      });
      this.incomingConferencias=Iconf;
    });
  }

 
  ngOnInit() {
    this.getConferencias();
  }
 
 }
