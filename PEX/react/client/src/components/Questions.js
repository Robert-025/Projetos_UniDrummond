import React, { useEffect, useState } from 'react';
import data from '../database/data.js';

import '../styles/App.css';

export default function Questions(){

    const [checked, setChecked] = useState(undefined)

    // const questions = data
    const questions = data[0];
    
    // const correctBonus = 10;
    // const maxQuestions = 3;

    // let currentQuestion = {};
    // let acceptingAnswers = true;
    // let score = 0;
    // let questionCouter = 0;
    // let avaliableQuestion = [];

    useEffect(() => {
        console.log(data);
    })

    function onSelect(){
        console.log('radio button change')
    }

    return(
            <div className="conteudo-pergunta">
                <div className="pergunta">

                    <h2>{questions.question}</h2>
                    
                    <div key={questions.id} className="alternativas">
                        {
                            questions.options.map((q, i) =>(
                                <div className="alternativa">
                                    <input 
                                        type="radio" 
                                        value={false}
                                        name="options" 
                                        id={`q${i}-option`} 
                                        onChange={onSelect()}
                                    />
                                    <label htmlFor={`q${i}-option`}>{q}</label><br />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
    );
}