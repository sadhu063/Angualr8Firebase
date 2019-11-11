import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomerComponent } from "./customer/customer.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerService } from "./shared/customer.service";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [AppComponent, CustomerComponent, CustomerListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
