export class PortaModel {
  #numero: number;
  #temPresente: boolean;
  #selecionada: boolean;
  #aberta: boolean;

  constructor(
    _numero: number,
    _tempresente = false,
    _selecionada = false,
    _aberta = false
  ) {
    this.#numero = _numero;
    this.#temPresente = _tempresente;
    this.#selecionada = _selecionada;
    this.#aberta = _aberta;
  }

  get numero() {
    return this.#numero;
  }

  get temPresente() {
    return this.#temPresente;
  }

  get selecionada() {
    return this.#selecionada;
  }

  get aberta() {
    return this.#aberta;
  }

  removerSelecao() {
    return new PortaModel(
      this.#numero,
      this.#temPresente,
      false,
      this.#aberta
    );
  }

  alterarSelecao() {
    return new PortaModel(
      this.#numero,
      this.#temPresente,
      !this.#selecionada,
      this.#aberta
    );
  }

  abrir() {
    return new PortaModel(this.#numero, this.#temPresente, this.#selecionada, true);
  }
}