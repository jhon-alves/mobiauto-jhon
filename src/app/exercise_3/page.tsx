export default async function ExerciseThree() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();

  interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }

  const getRickAndMortyCharacters = data.results.filter((item: Character) => [
    'Rick Sanchez',
    'Morty Smith',
    'Summer Smith',
    'Beth Smith',
    'Jerry Smith'
  ].includes(item.name)).map((item: Character) => ({
    nome: item.name,
    genero: item.gender,
    avatar: item.image,
    especie: item.species
  }));

  return (
    <div>
      <h1>Exercício 3</h1>
      <h4>Resultado:</h4>
      <pre>{JSON.stringify(getRickAndMortyCharacters, undefined, 2)}</pre>
    </div>
  );
}
