import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolvedHttpServiceService } from 'src/app/solved-reimbursment/solved-http-service.service';
import { SolvedRequest } from '../solved-model';

@Component({
  selector: 'app-view-resolved',
  templateUrl: './view-resolved.component.html',
  styleUrls: ['./view-resolved.component.css']
})
export class ViewResolvedComponent implements OnInit {

  allSolved: SolvedRequest[] = [];
 // toggleAdd: boolean = false;

  newSolved: SolvedRequest = {
    reimbursementId: 2,
    requestingEmployeeId: 1,
    reimbursementAmount: 300,
    requestApproved: true,
    //dateOfRequest: "",
    dateResolved: ""
  }

  constructor(private solvedHttpServiceService: SolvedHttpServiceService, private router: Router) { }
 
  ngOnInit(): void {
    this.loadAllSolved();  
  }

  loadAllSolved(){
    this.solvedHttpServiceService.fetchAllSolved().subscribe((response)=>{
    //  the response that we receive here is an array of Employees
     console.log(response);
     this.allSolved = response;
   });
  }
  addSolved(){
    this.solvedHttpServiceService.addSolved(this.newSolved).subscribe((response)=>{
      console.log(response);
      this.newSolved = {
        reimbursementId: 2,
        requestingEmployeeId: 1,
        reimbursementAmount: 300,
        requestApproved: true,
        //dateOfRequest: "",
        dateResolved: ""
     }
      this.loadAllSolved();
    })
   }

}
