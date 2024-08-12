export const fetchSingleBreed = async (id: string) => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': `${process.env.CAT_BREEDS_API_KEY}`,
        },
      },
    );

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error('Single breed data fetching went wrong');
  }
};

export const fetchInitialDogBreedsData = async () => {
  const url = 'https://api.thedogapi.com/v1/breeds?limit=10&page=0';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${process.env.DOG_BREEDS_API_KEY}`,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error('Dog breeds data fetching went wrong');
  }
};

export const fetchInitialCatBreedsData = async () => {
  const url = 'https://api.thecatapi.com/v1/breeds?limit=10&page=0';

  // Fetching breeds data without images
  const breedsListResponse = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': `${process.env.CAT_BREEDS_API_KEY}`,
    },
  });

  if (!breedsListResponse.ok) {
    throw new Error('Cat breeds data fetching went wrong');
  }

  const breedsList = await breedsListResponse.json();

  // Creating new arrey with breeds info including images
  const breedsDataWithImages = [];

  for (const breed of breedsList) {
    const data = await fetchSingleBreed(breed.reference_image_id);

    breedsDataWithImages.push(data);
  }

  return breedsDataWithImages;
};

export const fetchSingleDogBreedDataWithImages = async (id: string) => {
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': `${process.env.DOG_BREEDS_API_KEY}`,
  };

  const breedDataResp = await fetch(
    `https://api.thedogapi.com/v1/images/search?breed_ids=${id}`,
    {
      method: 'GET',
      headers,
    },
  );

  if (!breedDataResp.ok) {
    throw new Error('Single dog breed data fetching went wrong');
  }

  const breedData = await breedDataResp.json();

  const secondImageResp = await fetch(
    `https://api.thedogapi.com/v1/images/${breedData[0].breeds[0].reference_image_id}`,
    {
      method: 'GET',
      headers
    },
  );

  if (!secondImageResp.ok) {
    throw new Error('Second dog breed image fetching went wrong');
  }

  const secondImage = await secondImageResp.json();

  return {
    data: breedData[0],
    secondImage
  }
};
