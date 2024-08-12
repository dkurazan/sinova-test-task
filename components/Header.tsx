import Link from 'next/link';

export default function Header() {
  return (
    <header className='py-2 px-1 sm:py-5 sm:px-3 mx-auto bg-gray-500'>
      <Link href='/'>
        <h1 className='text-center text-white font-bold text-2xl sm:text-4xl'>
          Cat&DogBreeds
        </h1>
      </Link>
    </header>
  );
}
