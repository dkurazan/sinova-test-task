import { fetchSingleDogBreedDataWithImages } from '@/utils/dataFetch';
import Image from 'next/image';

type BreedPageProps = {
  params: { id: 'string' };
};

const breedCharacteristic = ['bred_for', 'breed_group', 'weight', 'height'];

export default async function BreedPage({ params }: BreedPageProps) {
  const { data, secondImage } = await fetchSingleDogBreedDataWithImages(
    params.id,
  );

  return (
    <article className='mb-2 flex flex-col items-center w-full lg:px-5 lg:mb-5 lg:flex-row lg:items-start'>
      <div className='w-full max-w-full flex flex-col items-center lg:max-w-[50%]'>
        <Image
          src={secondImage.url}
          alt={secondImage.breeds[0].name}
          width={secondImage.width}
          height={secondImage.height}
          className='w-full max-h-[60vh] object-cover lg:max-h-full lg:max-w-full'
        />
        <Image
          src={data.url}
          alt={data.breeds[0].name}
          width={data.width}
          height={data.height}
          className='w-full max-h-[60vh] object-cover lg:max-h-full lg:max-w-full'
        />
      </div>
      <aside className='w-full px-2 pt-5 flex flex-col gap-2 lg:px-0 lg:max-w-[50%] lg:mx-0 lg:pl-10 lg:pt-10'>
        {/* display breed name and origin */}
        <div className='flex gap-2 flex-col justify-between sm:flex-row sm:items-center'>
          <h1 className='text-3xl md:text-5xl font-bold'>
            {data.breeds[0].name}
          </h1>
          {data.breeds[0].origin && (
            <span className='w-fit py-1 px-2 bg-indigo-500 text-white rounded-2xl text-sm text-center md:text-md'>
              {data.breeds[0].origin}
            </span>
          )}
        </div>

        {/* display breed temperament */}
        <p className='text-stone-500 text-lg md:text-xl'>
          {data.breeds[0].temperament}
        </p>

        {/* display breed life span */}

        {/* display breed caracteristic */}
        <ul className='text-lg md:text-xl flex flex-col gap-2'>
          <li className='text-lg md:text-xl'>
            <b>Life span:</b> {data.breeds[0].life_span} years
          </li>
          <li>
            <b>Bred for:</b> {data.breeds[0].bred_for}
          </li>
          <li>
            <b>Breed group:</b> {data.breeds[0].breed_group}
          </li>
          <li>
            <b>Weight:</b> {data.breeds[0].weight.metric} kg
          </li>
          <li>
            <b>Height:</b> {data.breeds[0].height.metric} cm
          </li>
        </ul>
      </aside>
    </article>
  );
}
