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
  }`;

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
  engine,
  dimensions,
  transmission,
  capacity,
  warranty,
}`;
