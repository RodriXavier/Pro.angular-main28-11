import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from './components/dashboard/BaseComponent';
import { CommonService } from './components/dashboard/ComService/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent{
  title = 'Front';

  constructor(private commonService: CommonService, private router: Router) {
    super();
  }

  getData() {
    const getDataSubscription = this.commonService.getData()
      .subscribe((data) => {
        console.log(data);

      }, (error) => {
        console.log(error);
        this.router.navigate(['/error-status', error.status]);
      });

    this.subscriptions.push(getDataSubscription);
  }
}
