import React, { useState } from 'react';
import data from '../database/data.js'; //Banco de questões

import '../styles/App.css';


export default function Questions() {

    let [ index, setIndex ] = useState(1);
    let [ question, setQuestion ] = useState(data[index]);
    let [ selectedAnswer, setSelectedAnswer ] = useState(null);    

    function selecionarAleatorios(data, quantidade = 10) {
        // Faz uma cópia do array original para não modificar o original
        const copia = [...data];
      
        // Embaralha os elementos usando o algoritmo de Fisher-Yates
        for (let i = copia.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [copia[i], copia[j]] = [copia[j], copia[i]];
        }
      
        // Retorna os primeiros 'quantidade' elementos do array embaralhado
        return copia.slice(0, quantidade);
      }
      
      // Exemplo de uso:
      const meuArray = data;
      
      const selecionados = selecionarAleatorios(meuArray);
      console.log(selecionados);

    const checkAns = (selectedOption) => {
        if (question.answer === selectedOption) {
            console.log("correto");
        } else {
            console.log("incorreto");
        }
    };

    const handleOptionChange = (event) => {
        // O objeto do event é o que foi recebido nos dados do event
        const value = event.target.id;
        setSelectedAnswer(value);
        checkAns(value);
    };

    return (
        <div className="conteudo-pergunta">
            <div className="pergunta">

                <h2>{question.question}</h2>

                <div key={question.id} className="alternativas">
                    {
                        //a -> variável que representa a alternativa | i -> representa o indice do item atual do array
                        question.options.map((a, i) => (
                            <div className="alternativa">
                                <input
                                    type="radio"
                                    value={i}
                                    name="options"
                                    id={i}
                                    onChange={handleOptionChange}
                                    checked={selectedAnswer === a}

                                />
                                <label htmlFor={i}>{a}</label><br />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

// import React, { useState } from 'react';
// import data from '../database/data.js';
// import '../styles/App.css';

// export default function Questions() {
//     const [index, setIndex] = useState(0);
//     const [question, setQuestion] = useState(data[index]);
//     const [selectedAnswer, setSelectedAnswer] = useState(null);

//     const checkAns = (selectedOption) => {
//         if (question.answer == selectedOption) {
//             console.log("correto");
//         } else {
//             console.log("incorreto");
//         }
//     };

//     const handleOptionChange = (event) => {
//         const value = event.target.value;
//         setSelectedAnswer(value);
//         checkAns(value);
//     };

//     return (
//         <div className="conteudo-pergunta">
//             <div className="pergunta">
//                 <h2>{question.question}</h2>
//                 <div key={question.id} className="alternativas">
//                     {question.options.map((a, i) => (
//                         <div className="alternativa" key={i}>
//                             <input
//                                 type="radio"
//                                 value={a}
//                                 name="options"
//                                 id={`option-${i}`}
//                                 onChange={handleOptionChange}
//                                 checked={selectedAnswer === a}
//                             />
//                             <label htmlFor={`option-${i}`}>{a}</label><br />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }