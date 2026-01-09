import { useEffect, useState } from "react";
import "./App.css";
import { Tip } from "./components/Tip/index";
import { Header } from "./components/Header/index";
import { Letter } from "./components/letter/index";
import { Input } from "./components/input/index";
import { Button } from "./components/button/index";
import { LettersUsed, type LettersUsedProps } from "./components/lettersUsed/index";
import { WORDS } from "./assets/utils/word";

interface Challenge {
  word: string;
  tip: string;
}

function App() {
  const [pontos, setPontos] = useState(0);
  const [score, setScore] = useState(0);
  const [letter, setLetter] = useState("");
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps>([]);
  const [tentativas, setTentativas] = useState(0);

  const attemptLimit = challenge ? challenge.word.length + 5 : 0;
  function confirmar() {
    if (!challenge) return;

    const value = letter.trim().toUpperCase();
    if (!value) return alert("Digite uma letra");

    setTentativas(prev => prev + 1);

    const exists = lettersUsed.find(used => used.value === value);
    if (exists) return alert("Você já usou essa letra: " + value);

    const hits = challenge.word.toUpperCase().split("").filter(c => c === value).length;
    const correct = hits > 0;

    if (correct) {
      setPontos(prev => prev + hits);
      setScore(prev => prev + hits);
    }

    setLettersUsed(prev => [...prev, { value, correct }]);
    setLetter("");
  }
  // Função para reiniciar
 function handleRestartGame() {
  if (!challenge) return;

  setPontos(0);
  setScore(0);
  setLetter("");
  setLettersUsed([]);
  setTentativas(0);
  alert("O jogo foi reiniciado!");
  // Começa um novo desafio
  startGame();
}


  // Função fim de jogo
  function endGame(message: string) {
    alert(message);
    handleRestartGame();
  }

  // Inicia o jogo
  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];
    setChallenge(randomWord);
    setScore(0);
    setPontos(0);
    setLetter("");
    setLettersUsed([]);
    setTentativas(0);
  }

  // Confirmar palpite
  function handleConfirm() {
    if (!challenge) return;

    const value = letter.trim().toUpperCase();
    if (!value) return alert("Digite uma letra");

    setTentativas((prev) => prev + 1);

    const exists = lettersUsed.find((used) => used.value === value);
    if (exists) return alert("Você já escreveu essa letra: " + value);

    const hits = challenge.word.toUpperCase().split("").filter((c) => c === value).length;
    const correct = hits > 0;

    if (correct) {
      setPontos((prev) => prev + hits);
      setScore((prev) => prev + hits);
    }

    setLettersUsed((prev) => [...prev, { value, correct }]);

    setLetter("");
  }

  // Start game on load
  useEffect(() => {
    startGame();
  }, []);

  // Vitória ou derrota
  useEffect(() => {
    if (!challenge) return;

    if (score === challenge.word.length) {
      endGame("Parabéns, você ganhou!");
    } else if (tentativas >= attemptLimit) {
      endGame("Que pena, você usou todas as tentativas!");
    }
  }, [score, tentativas, challenge]);

  if (!challenge) return <div>Carregando...</div>;

  return (
    <>
      <Header current={tentativas} max={attemptLimit} onRestart={handleRestartGame} />
      <Tip tip={challenge.tip} />

      <div className="letters-container">
        {challenge.word.split("").map((char, index) => {
          const isUsed = lettersUsed.some(
            item => item.value.toUpperCase() === char.toUpperCase() && item.correct
          );
          return <Letter key={index} value={isUsed ? char.toUpperCase() : ""} correct={isUsed} />;
        })}
      </div>

      <h4>Palpite</h4>
      <div>
        <Input
          autoFocus
          maxLength={1}
          placeholder=" "
          onChange={e => setLetter(e.target.value)}
          value={letter}
        />
        {/* Aqui chama a função que já está declarada */}
        <Button title="Confirmar" onClick={confirmar} />
      </div>

      <div>
        <LettersUsed data={lettersUsed} />
      </div>
    </>
  );
}



export default App;
