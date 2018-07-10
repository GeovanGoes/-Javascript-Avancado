import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent 
{
    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    service: FotoService;

    constructor(formBuilder: FormBuilder, service: FotoService)
    {
        this.service = service;
        this.meuForm = formBuilder.group({
            titulo: [ '', Validators.compose([ Validators.required, Validators.minLength(4) ]) ],
            url: [ '', Validators.required ],
            descricao:[ '' ]
        });
    }
    cadastrar(event)
    {
        event.preventDefault();
        this.service.cadastra(this.foto)
        .subscribe(() => {
            console.log('foto salva com sucesso');
            this.foto = new FotoComponent();    
        }, erro => console.log(erro))
    }
}