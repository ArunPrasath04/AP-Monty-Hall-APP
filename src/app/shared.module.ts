import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        InputNumberModule,
        RadioButtonModule,
        HttpClientModule,
        FormsModule
    ],
    declarations: [

    ],
    providers: [

    ],
    exports: [
        CommonModule,
        ButtonModule,
        InputNumberModule,
        RadioButtonModule,
        FormsModule
    ]
})
export class SharedModule { }