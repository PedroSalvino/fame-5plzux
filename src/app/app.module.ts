import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FooterComponent } from './templates/footer/footer.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { DashboardComponent } from './usuario/dashboard/dashboard.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { ParalisacaoComponent } from './usuario/paralisacao/paralisacao.component';
import { RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { TerminalService } from './terminal.service';
import { GlobalService } from './global.service';
import { UsuarioService } from './usuario.service';
import { ParalisacaoService } from './paralisacao.service';
import { CargoService } from './cargo.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'contato', component: ContatoComponent },
      { path: 'acesso', component: CadastroComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'paralisacao', component: ParalisacaoComponent },
      { path: 'usuarios', component: UsuariosComponent },
    ]),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    CadastroComponent,
    ContatoComponent,
    FooterComponent,
    NavbarComponent,
    DashboardComponent,
    PerfilComponent,
    ParalisacaoComponent,
    UsuariosComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    TerminalService,
    GlobalService,
    UsuarioService,
    ParalisacaoService,
    CargoService,
  ],
})
export class AppModule {}
