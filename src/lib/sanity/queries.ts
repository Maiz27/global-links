import { sanityClient } from './sanityClient';

export const fetchSanityData = async (query: string, variables?: {}) => {
  try {
    const data = await sanityClient.fetch(query, variables);
    return data;
  } catch (error) {
    // Handle errors or add custom error logging
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getAllPosts = `*[_type == 'post'] {
    title,
    slug,
    description,
    author-> {
      name,
      title,
      image,
    },
    mainImage,
    categories[]-> {
      title,
    },
    publishedAt,
    body,
  }`;

export const getAllPostsForSiteMap = `*[_type == 'post'] {
    slug,
    publishedAt,
  }`;

export const getAllVehicleForSiteMap = `*[_type == 'post'] {
    slug,
    publishedAt,
  }`;

export const getPostBySlug = `*[_type == 'post' && slug.current == $slug] {
    title,
    slug,
    description,
    author-> {
        name,
        title,
        image,
      },
    mainImage,
    categories[]-> {
        title,
    },
    publishedAt,
    body,
  }[0]`;

export const getPostDataForSEO = `*[_type == 'post' && slug.current == $slug] {
    title,
    slug,
    description,
    mainImage,
    publishedAt,
  }[0]`;

export const getLatestPosts = `*[_type == 'post'] 
  | order(publishedAt desc)[0..2] {
      title,
      slug,
      description,
      mainImage,
      categories[]-> {
          title,
      },
  }`;

export const getRecommendedPosts = `*[_type == "post" && $category in categories[]->title && slug.current != $currentSlug]
  | order(publishedAt desc)[0..1] {
    title,
    slug,
    categories[]-> {
      title,
    },
    mainImage,
  }`;

export const getPostCategories = `*[_type == 'postCategory'] 
| order(title asc) {
    title,
}`;

export const getAllHeroImages = `*[_type == 'heroImages'] 
| order(index asc) {
    title,
    index,
    image,
}`;

export const getVehicleTypes = `*[_type == 'vehicleTypes']
| order(title asc) {
  title,
}`;

export const getAllVehicles = `*[_type == 'vehicle']
| order(name asc) {
  name,
  slug,
  mainImage,
  type->{title},
}`;

export const getVehicleBySlug = `*[_type == 'vehicle' && slug.current == $slug] {
  name,
  slug,
  description,
  type->{title},
  mainImage,
  overview {
    model,
    drive,
    transmission,
    speed,
  },
  engine {
    model,
    displacement,
    power,
    fuelType,
  },
  dimensions,
  capacity,
  tyres,
}[0]`;

export const getVehicleDataForSEO = `*[_type == 'vehicle' && slug.current == $slug] {
  name,
  slug,
  description,
  mainImage,
}[0]`;

export const getVehicleGalleryBySlug = `*[_type == 'vehicle' && slug.current == $slug] {
  gallery {
    images
  }
}[0]`;

export const getVehicleAdditionalDetails = `*[_type == 'vehicle' && slug.current == $slug] {
  overview,
  engine,
  interior,
  exterior,
}[0]`;

export const getFAQs = `*[_type == 'faq']
| order(index asc) {
  index,
  question,
  answer,
}`;

export const getGalleryImages = `*[_type == 'gallery'] {
  images
}[0]`;
