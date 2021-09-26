import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path: '', // Indice el url raiz
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region', // raiz/region
        component: PorRegionComponent,
    },
    {
        path: 'capital', // raiz/region
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**', // cualquier otro path
        redirectTo: ''
    
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}