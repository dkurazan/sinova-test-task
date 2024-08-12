import Image from 'next/image';
import Link from 'next/link';

type BreedCardProps = {
  id: string;
  name: string;
  temperament: string;
  origin: string;
  imgUrl: string;
  imgWidth: string;
  imgHeight: string;
};

export default function DogBreedCard({
  id,
  name,
  imgUrl,
  imgWidth,
  imgHeight,
  temperament,
  origin,
}: BreedCardProps) {
  return (
    <Link
      href={`dogs/${id}`}
      className='max-w-full bg-gray-300 rounded-xl overflow-hidden block relative'
    >
      {origin && (
        <span className='absolute top-2 right-3 py-1 px-2 bg-indigo-500 text-white rounded-2xl'>
          {origin}
        </span>
      )}
      <Image
        src={imgUrl}
        width={+imgWidth}
        height={+imgHeight}
        alt={name}
        className='object-cover aspect-square block'
      />
      <div className='p-3'>
        <p className='text-center font-bold text-xl mb-2'>{name}</p>
        <p className='text-center italic'>{temperament}</p>
      </div>
    </Link>
  );
}
