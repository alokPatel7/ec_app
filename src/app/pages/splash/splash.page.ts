import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-splash',
    templateUrl: './splash.page.html',
    styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
    isloading: boolean = false;

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.isloading = true;
        setTimeout(() => {
            this.isloading = false;
            this.router.navigate(['/login'])
        }, 4000);
    }
}
