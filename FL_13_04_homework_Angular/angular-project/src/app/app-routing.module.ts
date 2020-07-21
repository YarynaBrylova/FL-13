import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleFormComponent} from './article-form/article-form.component';
import {HeaderComponent} from './header/header.component';

const routes: Routes = [
    {path: '', component: HeaderComponent},
    {path: 'create', component: ArticleFormComponent}]

@NgModule({
    //declaret that it's routing
    imports: [RouterModule.forRoot(routes)] , //зареєстрували масив routes
    exports: [RouterModule]
})

export class AppRoutingModule {

}

