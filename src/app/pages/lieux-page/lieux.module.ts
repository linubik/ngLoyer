import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrFormComponent } from './forms/dr-form/dr-form.component';
import { PvFormComponent } from './forms/pv-form/pv-form.component';
import { SiegeFormComponent } from './forms/siege-form/siege-form.component';
import { LfFormComponent } from './forms/lf-form/lf-form.component';
import { SvFormComponent } from './forms/sv-form/sv-form.component';
import { LieuxComponent } from './lieux/lieux.component';
import { DetailLieuxComponent } from './detail-lieux/detail-lieux.component';
import { EditLieuxComponent } from './edit-lieux/edit-lieux.component';
import { ListLieuxComponent } from './list-lieux/list-lieux.component';
import { ConfirmationModalModule } from '../../../app/shared/modals/confirmation-modal/confirmation-modal.module';
import { MainModalModule } from '../../../app/shared/modals/main-modal/main-modal.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { lieuxReducer } from './lieux-store/lieux.reducer';
import { LieuxEffects } from './lieux-store/lieux.effect';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ListReportingLieuxComponent } from './list-reporting-lieux/list-reporting-lieux.component';
import { PipesModule } from '../../core/pipes/pipes.module';
import { DirectivesModule } from '../../core/directives/directives.module';

const route: Routes = [
  { path: '', component: LieuxComponent },
  { path: 'list/list/:id', component: DetailLieuxComponent },
  { path: 'list', component: ListLieuxComponent },
  { path: 'list/edit/:id', component: EditLieuxComponent },
  { path: 'list/list-reporting', component: ListReportingLieuxComponent },
];

@NgModule({
  declarations: [
    DrFormComponent,
    PvFormComponent,
    SiegeFormComponent,
    LfFormComponent,
    SvFormComponent,
    LieuxComponent,
    DetailLieuxComponent,
    EditLieuxComponent,
    ListLieuxComponent,
    ListReportingLieuxComponent,
  ],
  imports: [
    RouterModule.forChild(route),
    CommonModule,
    ReactiveFormsModule,
    MainModalModule,
    ConfirmationModalModule,
    StoreModule.forFeature('lieux', lieuxReducer),
    EffectsModule.forFeature([LieuxEffects]),
    NgxPaginationModule,
    FormsModule,
    PipesModule,
    DirectivesModule,
  ],
})
export class LieuxModule {}
