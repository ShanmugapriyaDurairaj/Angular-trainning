import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  parentRouteId: number;
  private sub: any;
  constructor(private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    // Get parent ActivatedRoute of this route.
    // this.sub = this.router.routerState.parent(this.route)
    //   .params.subscribe(params => {
    //     this.parentRouteId = +params["id"];
    //   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}