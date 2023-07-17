'use client'
import { useEffect } from 'react';

export default function ExerciseOne() {
  function maskify(value: string) {
    if (value.length <= 4) {
      return value;
    } else {
      const masked = "#".repeat(value.length - 4) + value.slice(-4);
      return masked;
    }
  }

  useEffect(() => {
    console.log(`Resultado: ${maskify('4556364607935616')}`);
    console.log(`Resultado: ${maskify('64607935616')}`);
    console.log(`Resultado: ${maskify('1')}`);
    console.log(`Resultado: ${maskify('Skippy')}`);
    console.log(`Resultado: ${maskify('Nanananananananananana Batman!')}`);
  }, []);

  return (
    <div>
      <h1>Exercício 1</h1>
      <ul>
        <li>"4556364607935616"</li>
        <li>"64607935616"</li>
        <li>"1"</li>
        <li>"Skippy"</li>
        <li>"Nanananananananananana Batman!"</li>
      </ul>
      <p>Vá até o console do navegador para visualizar!</p>
    </div>
  );
}
