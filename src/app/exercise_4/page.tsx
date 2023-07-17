'use client'
import { useEffect } from 'react';

export default function ExerciseFour() {
  function checkIfTheFirstLetterIsUppercase(word: string) {
    const firstCharacter = word.split('')[0];
    return firstCharacter === firstCharacter.toUpperCase();
  }

  useEffect(() => {
    console.log(checkIfTheFirstLetterIsUppercase("Brasil")); // true
    console.log(checkIfTheFirstLetterIsUppercase("mobiauto")); // false
    console.log(checkIfTheFirstLetterIsUppercase("xXx xXx")); // false
    console.log(checkIfTheFirstLetterIsUppercase("xDD")); // false
    console.log(checkIfTheFirstLetterIsUppercase("Deu Certo!")); // true
  }, []);

  return (
    <div>
      <h1>Exercício 4</h1>
      <ul>
        <li>Brasil</li>
        <li>mobiauto</li>
        <li>xXx xXx</li>
        <li>xDD</li>
        <li>Deu Certo!</li>
      </ul>
      <p>Vá até o console do navegador para visualizar!</p>
    </div>
  );
}
