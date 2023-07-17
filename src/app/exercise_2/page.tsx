'use client'
import { useEffect, useState, useMemo } from 'react';

interface FirstObject {
  name: string;
  country: string;
  age: number;
}

interface DataObject {
  [key: string]: any;
}

export default function ExerciseTwo() {
  const [firstObject, setFirstObject] = useState<FirstObject>({
    name: 'Marcos',
    country: 'Brasil',
    age: 22
  });

  const secondObject = useMemo(() => ({ country: 'Japão', age: 33 }), []);

  function updateData(currentObject: DataObject, newDataObject: DataObject) {
    const updatedObject: DataObject = { ...currentObject };

    for (const key in newDataObject) {
      if (currentObject.hasOwnProperty(key)) {
        updatedObject[key] = newDataObject[key];
      }
    }

    return updatedObject;
  }

  useEffect(() => {
    const updated = updateData(firstObject, secondObject);
    setFirstObject(updated as FirstObject);
    console.log(updated);
  }, []);

  return (
    <div>
      <h1>Exercício 2</h1>
      <ul>
        <li>
          <pre>{JSON.stringify(firstObject)}</pre>
        </li>
        <li>
          <pre>{JSON.stringify(secondObject)}</pre>
        </li>
      </ul>
      <p>Vá até o console do navegador para visualizar!</p>
    </div>
  );
}