import { Component, OnInit } from "@angular/core";
import { Inject } from "@angular/core";
import { CustomerService } from "../shared/customer.service";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.css"]
})
export class CustomerListComponent implements OnInit {
  constructor(@Inject(CustomerService) public Customerservice) {}
  customerArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";
  ngOnInit() {
    this.Customerservice.getCustomers().subscribe(list => {
      this.customerArray = list.map(item => {
        return { $key: item.key, ...item.payload.val() };
      });
      console.log(list);
      console.log(this.customerArray);
    });
  }

  onDelete($key) {
    if (confirm("Are you Sure You Want To Delete ?")) {
      this.Customerservice.deleteCustomer($key);

      this.showDeletedMessage = true;
      setTimeout(() => (this.showDeletedMessage = false), 3000);
    }
  }

  filterCondition(customer) {
    return (
      customer.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) !=
      -1
    );
  }
}
