import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireList, AngularFireDatabase } from "angularfire2/database";
@Injectable({
  providedIn: "root"
})
export class CustomerService {
  constructor(private firebase: AngularFireDatabase) {}
  customerList: AngularFireList<any>;
  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.email),
    mobile: new FormControl("", [Validators.required, Validators.minLength(8)]),
    location: new FormControl("")
  });

  getCustomers() {
    this.customerList = this.firebase.list("customers");
    return this.customerList.snapshotChanges();
  }

  insertCustomers(customer) {
    this.customerList.push({
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      location: customer.location
    });
  }

  deleteCustomer($key: string) {
    this.customerList.remove($key);
  }

  populateform(customer) {
    this.form.setValue(customer);
  }

  UpdateCustomers(customer) {
    this.customerList.update(customer.$key, {
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      location: customer.location
    });
  }
}
