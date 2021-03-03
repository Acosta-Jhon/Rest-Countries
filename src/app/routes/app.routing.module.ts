import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';

//Components
import { ForCapitalComponent } from "../countries/pages/for-capital/for-capital.component";
import { ForCountryComponent } from "../countries/pages/for-country/for-country.component";
import { ForRegionComponent } from "../countries/pages/for-region/for-region.component";

//routes
const routes: Routes = [
    { path: 'pais', component: ForCountryComponent, pathMatch: 'full' },
    { path: 'region', component: ForRegionComponent },
    { path: 'capital', component: ForCapitalComponent },
    { path: 'pais', component: ForCountryComponent },
    { path: '**', redirectTo: 'pais', pathMatch: 'full' },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        FormsModule
    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule {

}