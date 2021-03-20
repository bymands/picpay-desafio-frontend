import { Component, Input } from "@angular/core";
import { ResultadoPagamentoResponse } from "../../models/response/resultado-pagamento-response.model";

@Component({
    selector: 'app-usuario-notificacao',
    templateUrl: './usuario-notificacao.component.html',
    styleUrls: ['./usuario-notificacao.component.scss']
})
export class NotificaUsuarioComponent {

    @Input() resultadoPagamentoResponse: ResultadoPagamentoResponse; 
}