import Image from 'next/image';
import { fetchSingleBreed } from '@/utils/dataFetch';

type BreedPageProps = {
  params: { id: 'string' };
};

const breedFeatures = [
  'indoor',
  'experimental',
  'hairless',
  'natural',
  'rare',
  'rex',
  'suppressed_tail',
  'short_legs',
  'hypoallergenic',
];

const breedCharacteristic = [
  'adaptability',
  'affection_level',
  'child_friendly',
  'dog_friendly',
  'energy_level',
  'grooming',
  'health_issues',
  'intelligence',
  'shedding_level',
  'social_needs',
  'stranger_friendly',
  'vocalisation',
];

export default async function BreedPage({ params }: BreedPageProps) {
  const data = await fetchSingleBreed(params.id);

  return (
    <article className='mb-2 flex flex-col items-center w-full lg:px-5 lg:mb-5 lg:flex-row lg:items-start'>
      <div className='lg:max-w-[50%]'>
        <Image
          src={data.url}
          alt={data.breeds[0].name}
          width={data.width}
          height={data.height}
          className='max-h-[60vh] object-cover md:max-h-full lg:max-w-full'
        />
      </div>
      <aside className='w-full px-2 pt-5 flex flex-col gap-2 lg:px-0 lg:max-w-[50%] lg:mx-0 lg:pl-10 lg:pt-10'>
        {/* display breed name and origin */}
        <div className='flex gap-2 flex-col justify-between sm:flex-row sm:items-center'>
          <h1 className='text-3xl md:text-5xl font-bold'>
            {data.breeds[0].name}
          </h1>
          <span className='w-fit py-1 px-2 bg-indigo-500 text-white rounded-2xl text-sm text-center md:text-lg'>
            {data.breeds[0].origin}
          </span>
        </div>

        {/* display breed temperament */}
        <p className='text-stone-500 text-lg md:text-xl'>
          {data.breeds[0].temperament}
        </p>

        {/* display breed life span */}
        <p className='mb-2 text-lg md:text-xl'>
          <b>Life span:</b> {data.breeds[0].life_span} years
        </p>

        {/* display breed description */}
        <p className='p-3 bg-stone-200 rounded-lg text-sm md:text-lg'>
          {data.breeds[0].description}
        </p>

        {/* display breed caracteristic */}
        <ul className='p-3 bg-stone-200 rounded-lg grid grid-cols-2 text-sm md:text-lg'>
          {breedCharacteristic.map((trait: string) => {
            if (data.breeds[0][trait]) {
              return (
                <li>
                  <b className='capitalize'>{trait.replace('_', ' ')}:</b>{' '}
                  {data.breeds[0][trait]}/5
                </li>
              );
            }
          })}
        </ul>

        {/* display breed features */}
        <ul className='flex gap-3 text-sm md:text-lg'>
          {breedFeatures.map((feature: string) => {
            if (data.breeds[0][feature] > 0) {
              return (
                <li className='bg-red-500 text-white px-2 py-1 rounded-xl font-bold'>
                  {feature.replace('_', ' ')}
                </li>
              );
            }
          })}
        </ul>
      </aside>
    </article>
  );
}
