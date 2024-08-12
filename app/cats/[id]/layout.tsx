import { fetchSingleBreed } from '@/utils/dataFetch';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const pageData = await fetchSingleBreed('cat', params.id);

  const title = pageData.breeds[0].name;
  const description = pageData.breeds[0].description;

  return {
    title,
    description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
