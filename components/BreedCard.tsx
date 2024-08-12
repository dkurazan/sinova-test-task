import Image from 'next/image';
import Link from 'next/link';

type BreedCardProps = {
  id: string;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  imgUrl: string;
  imgWidth: string;
  imgHeight: string;
}


export default function BreedCard({
  id,
  name,
  imgUrl,
  imgWidth,
  imgHeight,
}: BreedCardProps) {
  return (
    <Link href={`cats/${id}`} className='max-w-full bg-gray-300 rounded-xl overflow-hidden'>
      <Image
        src={imgUrl}
        width={+imgWidth}
        height={+imgHeight}
        alt={name}
        className='object-cover aspect-square block'
      />
      <p className='text-center font-bold text-xl py-3'>{name}</p>
    </Link>
  );
}
