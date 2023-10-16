import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignProprietairePageComponent } from './assign-proprietaire-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormAssignComponent } from './form-assign/form-assign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationModalModule } from '../../shared/modals/confirmation-modal/confirmation-modal.module';
import { MainModalModule } from '../../shared/modals/main-modal/main-modal.module';
import { ListAssignComponent } from './list-assign/list-assign.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditAssignmentProprietaireComponent } from './edit-assignment-proprietaire/edit-assignment-proprietaire.component';

const route: Routes = [
  { path: ':id_contrat', component: AssignProprietairePageComponent },
  { path: 'list/:id_proprietaire', component: ListAssignComponent },
];

@NgModule({
  declarations: [
    AssignProprietairePageComponent,
    FormAssignComponent,
    ListAssignComponent,
    EditAssignmentProprietaireComponent,
  ],
  imports: [
    RouterModule.forChild(route),
    CommonModule,
    ReactiveFormsModule,
    ConfirmationModalModule,
    FormsModule,
    MainModalModule,
    NgxPaginationModule,
  ],
  exports: [AssignProprietairePageComponent],
})
export class AssignProprietaireModule {}
