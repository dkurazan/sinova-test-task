import { fetchInitialCatBreedsData } from '@/utils/dataFetch';
import CatBreedCard from '../cats/CatBreedCard';

type CatBreed = {
  id: string;
  url: string;
  width: string;
  height: string;
  breeds: [
    {
      name: string;
      temperament: string;
      origin: string;
    },
  ];
};

export default async function CatSection() {
  const initialData = await fetchInitialCatBreedsData();

  return (
    <section className='m-5'>
      <h2 className='text-4xl font-bold text-stone-700 pb-5'>Cat Breeds</h2>
      <ul className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        {initialData?.map((breed: CatBreed) => (
          <CatBreedCard
            id={breed.id}
            name={breed.breeds[0].name}
            temperament={breed.breeds[0].temperament}
            origin={breed.breeds[0].origin}
            imgUrl={breed.url}
            imgWidth={breed.width}
            imgHeight={breed.height}
          />
        ))}
      </ul>
    </section>
  );
}
