import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
	{
		path: '',
		component: Tab2Page,
		children: [
			{
				path: 'voyage-display',
				loadChildren: () => import('./voyage-display/voyage-display.module').then(m => m.VoyageDisplayPageModule)
			},
			{
				path: 'voyage-map',
				loadChildren: () => import('./voyage-map/voyage-map.module').then(m => m.VoyageMapPageModule)
			},
			{
				path: '',
				redirectTo: 'voyage-display',
				pathMatch: 'full'
			}

		]

	},
	{
		path: '',
		redirectTo: 'voyage-display',
		pathMatch: 'full'
	},

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class Tab2PageRoutingModule { }
