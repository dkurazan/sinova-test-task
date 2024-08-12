import { fetchInitialDogBreedsData } from '@/utils/dataFetch';
import DogBreedCard from './DogBreedCard';

type DogBreed = {
  id: string;
  name: string;
  temperament: string;
  origin: string;
  image: {
    width: string;
    height: string;
    url: string;
  };
};

export default async function DogSection() {
  const initialData = await fetchInitialDogBreedsData();

  return (
    <section className='m-5'>
      <h2 className='text-4xl font-bold text-stone-700 pb-5'>Dog Breeds</h2>
      <ul className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        {initialData?.map((breed: DogBreed) => (
          <DogBreedCard
            id={breed.id}
            name={breed.name}
            temperament={breed.temperament}
            origin={breed.origin}
            imgUrl={breed.image.url}
            imgWidth={breed.image.width}
            imgHeight={breed.image.height}
          />
        ))}
      </ul>
    </section>
  );
}
