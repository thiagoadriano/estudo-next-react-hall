import { PortaModel } from "../model/portaModel";

export function criarPortas(
  qtd: number = 6,
  hasPresent: number = gerarNovaSelecao(qtd)
): PortaModel[] {
  qtd = isNaN(qtd) ? 6 : qtd;
  hasPresent = isNaN(hasPresent) ? gerarNovaSelecao(qtd) : hasPresent;
  return Array.from({ length: qtd }, (_, idx) => {
    const num = idx + 1;
    return new PortaModel(num, num === hasPresent);
  });
}

function gerarNovaSelecao(qtd: number): number {
  const selecionada = Math.round(Math.random() * qtd);
  if (selecionada < qtd && selecionada > 0) {
    return selecionada;
  }
  return gerarNovaSelecao(qtd);
}

export function atualizarPortas(portas: PortaModel[], novaPorta: PortaModel): PortaModel[] {
  return portas.map(atual => {
    return atual.numero === novaPorta.numero ? novaPorta : novaPorta.aberta ? atual : atual.removerSelecao();
  });
}