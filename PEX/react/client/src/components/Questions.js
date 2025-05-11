import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../database/data.js'; //Banco de questões

import '../styles/App.css';

function selecionarAleatorios(data, quantidade = 10) {
    const copia = [...data];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia.slice(0, quantidade);
}

export default function Questions() {

    const [selecionados] = useState(() => selecionarAleatorios(data));
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [lock, setLock] = useState(false);
    const [result, setResult] = useState(false);
    const [question, setQuestion] = useState(selecionados[0]);

    const checkAns = (selectedOption, ans) => {
        if (question.answer === ans) {
            setLock(true);
            setScore(pontos => pontos + 1);
        } else {
            setLock(true);
        }
    };

    const next = () => {
        if (lock === true) {
            if (index === selecionados.length - 1) {
                setResult(true);
                return;
            }
            const newIndex = index + 1;
            setIndex(newIndex);
            setQuestion(selecionados[newIndex]);
            setLock(false);
        }
        // console.log(selecionados)
    };

    return (
        <div className="conteudo-pergunta">
            <div className="pergunta">
                {result ? (
                    <>
                        <h2>Você acertou {score} de {selecionados.length} perguntas</h2>
                        <Link className="espaco-botao-final" to="/">Reiniciar</Link>
                    </>
                ) : (
                    <>
                        <h2>{question.question}</h2>

                        <div key={question.id} className="alternativas">
                            {question.options.map((a, i) => (
                                <div className="alternativa" key={i}>
                                    <input
                                        type="radio"
                                        value={i}
                                        name="options"
                                        id={i}
                                        onChange={() => { checkAns(null, i) }}
                                    />
                                    <label htmlFor={i}>{a}</label><br />
                                </div>
                            ))}
                        </div>
                        <div className="espaco-botao-quiz">
                            <button onClick={next}>Próxima questão</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
