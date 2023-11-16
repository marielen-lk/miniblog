import style from './Simulador.module.css';

import React, { useState } from 'react';

const Simulador = () => {
  const [formData, setFormData] = useState({
    locationType: '',
    location: '',
    annualEnergyConsumption: 0,
    nome: '',
    cidade: '',
    regiao: 'Norte', // Define um valor padrão para região
  });

  const [result, setResult] = useState({
    estimatedCost: 0,
    solarCapacity: 0,
    averageConsumption: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { annualEnergyConsumption, locationType } = formData;

    let calculoDeCusto = 0;
    let capacidadeSolar = 0;
    let custoPorKW = 0;

    // Definição de custos diferentes com base no tipo de local selecionado
    if (locationType === 'residencial') {
      custoPorKW = 6000; // Valor hipotético de custo para instalação residencial
    } else if (locationType === 'empresarial') {
      custoPorKW = 10000; // Valor hipotético de custo para instalação empresarial
    } else {
      custoPorKW = 7000; // Valor hipotético de custo para outras instalações
    }

    // Suposição de uma produção média de energia solar por kW instalado em Curitiba (valores hipotéticos)
    const producaoMediaSolarPorDia = 2; // Em kWh por kW instalado

    if (annualEnergyConsumption > 0) {
      // Cálculo da capacidade solar estimada com base no consumo anual
      capacidadeSolar = annualEnergyConsumption / (producaoMediaSolarPorDia * 365);

      // Cálculo do custo estimado com base na capacidade solar
      calculoDeCusto = capacidadeSolar * custoPorKW;
    }

    setResult({
      estimatedCost: calculoDeCusto.toFixed(2),
      solarCapacity: capacidadeSolar.toFixed(2),
    });
  };

  return (
    <div>
      <h1>Calculadora Solar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Insira seu nome"
          />
        </label>
        <br />
        <label>
          Cidade:
          <input
            type="text"
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
            placeholder="Insira sua cidade"
          />
        </label>
        <br />
        <label>
          Tipo de local:
          <select name="locationType" value={formData.locationType} onChange={handleChange}>
            <option value="residencial">Residencial</option>
            <option value="empresarial">Empresarial</option>
            <option value="outro">Outro</option>
          </select>
        </label>
        <br />
        <label>
          Região:
          <select name="regiao" value={formData.regiao} onChange={handleChange}>
            {/* Opções para as regiões do Brasil */}
            <option value="Norte">Norte</option>
            <option value="Nordeste">Nordeste</option>
            <option value="Centro-Oeste">Centro-Oeste</option>
            <option value="Sudeste">Sudeste</option>
            <option value="Sul">Sul</option>
          </select>
        </label>
        <br />
        <label>
          Consumo de energia total anual (em kWh):
          <input
            type="number"
            name="annualEnergyConsumption"
            value={formData.annualEnergyConsumption}
            onChange={handleChange}
          />
        </label>
        <br />
        {/* ... */}
        <button type="submit" className={style.botao}>Calcular</button>
      </form>

      {/* Exibição dos resultados */}
      <div>
        <h2>Resultados</h2>
        <p>Custo estimado: {result.estimatedCost} BRL</p>
        <p>Capacidade solar estimada: {result.solarCapacity} kW</p>
      </div>
      <div>
        <br></br>
        <br></br>
        <p>
          Para dar continuidade ao seu projeto e adequar a suas necessidades, o nosso time entrará em contato com você através do e-mail cadastrado em nosso site. Até breve.
        </p>
        {/* Aqui você pode adicionar informações de contato, formulário de contato ou outros elementos */}
      </div>
    </div>
  );
};
export default Simulador