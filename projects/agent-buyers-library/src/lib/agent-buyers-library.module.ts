import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgentBuyersLibraryComponent } from './agent-buyers-library.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { BuyerCardComponent } from './components/buyer-card/buyer-card.component';

@NgModule({
  declarations: [
    AgentBuyersLibraryComponent,
    BuyersComponent,
    BuyerCardComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, HttpClientModule],
  exports: [AgentBuyersLibraryComponent],
})
export class AgentBuyersLibraryModule {}
