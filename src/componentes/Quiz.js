import React, { useState } from 'react';

import style from './Quiz.module.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'Qual é a eficiência média das placas solares?',
      options: ['20%', '30%', '40%', '50%'],
      correctAnswer: '20%',
    },
    {
      question: 'Quanto tempo dura a vida útil típica de uma instalação fotovoltaica?',
      options: ['10 anos', '20 anos', '30 anos', '40 anos'],
      correctAnswer: '25 anos',
    },
    {
      question: 'Quais são os principais componentes de um sistema fotovoltaico?',
      options: ['Painéis solares, inversor, suportes de montagem', 'Cabos elétricos, baterias, disjuntores', 'Módulos solares, painéis de LED, transformadores', 'Tubos de vácuo, geradores eólicos, controladores de carga'],
      correctAnswer: 'Painéis solares, inversor, suportes de montagem',
    },
    {
      question: 'O que é o efeito fotovoltaico?',
      options: ['Captação de calor solar para produção de energia térmica', 'Capacidade de um material gerar eletricidade quando exposto à luz', 'Processo de conversão de energia eólica em energia elétrica', 'Estudo da distribuição da luz solar em diferentes comprimentos de onda'],
      correctAnswer: 'Capacidade de um material gerar eletricidade quando exposto à luz',
    },
    {
      question: 'Qual é a vantagem da energia fotovoltaica em relação às fontes de energia convencionais?',
      options: ['Menor impacto ambiental', 'Maior custo de instalação', 'Dependência das condições climáticas', 'Limitação geográfica'],
      correctAnswer: 'Menor impacto ambiental',
    },
  ];

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // O quiz está completo, você pode exibir o resultado ou reiniciar o quiz aqui
      alert(`Quiz completo! Sua pontuação é ${score} de ${questions.length}.`);
      // Reinicie o quiz se desejar
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <div>
      <h3>{questions[currentQuestion].question}</h3>
      <select onChange={(e) => handleAnswerClick(e.target.value)}>
        <option value="">Selecione uma opção</option>
        {questions[currentQuestion].options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Quiz;
