import { Component, OnInit, Inject } from "@angular/core";
import { CustomerService } from "../shared/customer.service";
@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  constructor(@Inject(CustomerService) public CustomerService) {
    // console.log(CustomerService.form);
  }

  ngOnInit() {}
  submitted: boolean;
  showSuccessMessage: boolean;
  formcontrols = this.CustomerService.form.controls;

  onSubmit() {
    this.submitted = true;
    if (this.CustomerService.form.valid) {
      if (this.CustomerService.form.get("$key").value == null)
        this.CustomerService.insertCustomers(this.CustomerService.form.value);
      else
        this.CustomerService.UpdateCustomers(this.CustomerService.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => (this.showSuccessMessage = false), 3000);
      this.submitted = false;
      this.CustomerService.form.reset();
    }
  }
}
