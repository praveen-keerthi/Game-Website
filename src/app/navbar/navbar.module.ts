import { NavbarComponent } from "./navbar.component";
import { NavbarSearchInputComponent } from "./navbar-search-input/navbar-search-input.component";
import { NgModule } from "@angular/core";
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [NavbarComponent, NavbarSearchInputComponent, NavbarUserComponent],
    imports: [FormsModule],
    providers: [],
    exports: [NavbarComponent, NavbarSearchInputComponent]
})
export class navbarModule { }