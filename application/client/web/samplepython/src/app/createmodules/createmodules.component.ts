import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatemodulesService } from './createmodules.service';





@Component({
  selector: 'app-createmodules',
  templateUrl: './createmodules.component.html',
  styleUrls: ['./createmodules.component.scss'],
})

export class CreatemodulesComponent implements OnInit {
    public modules:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }




    constructor (
        private createmodulesService: CreatemodulesService,
    ) { }

    ngOnInit() {
        this.modules.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }


}