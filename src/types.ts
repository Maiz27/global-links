export type heroImages = {
  images: Array<{
    title: string;
    index: number;
    image: Object;
  }>;
};

export type blog = {
  index: number;
  slug: {
    current: string;
  };
  publishedAt: string;
  title: string;
  description: string;
  categories: Array<postCategory>;
  mainImage: { asset: Object; _type: 'image' };
  author: {
    name: string;
    title: string;
    image: Object;
  };
  body: blogBody;
};

export type postCategory = {
  title: string;
  description?: string;
};

export type blogBody = Array<{
  _type: string;
  style: string;
  children: Array<{
    _type: string;
    text: string;
  }>;
}>;

export type vehicleType = {
  title: string;
  description?: string;
};

export type vehicle = {
  name: string;
  slug: {
    current: string;
  };
  mainImage: Object;
  type: {
    title: string;
  };
  description?: string;
  engine?: {
    displacement: number;
    fuelSystem: 'Direct' | 'Port';
    fuelType: string[];
  };
  dimensions?: {
    length: number;
    width: number;
    height: number;
    groundClearance: number;
    wheelbase: number;
  };
  transmission?: {
    gearbox: string[];
    transmission: string;
  };
  capacity?: {
    weight: number;
    tank: number;
  };
  warranty?: {
    period: number;
    network: string;
  };
};
