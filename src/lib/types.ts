import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

export type heroImage = {
  title: string;
  index: number;
  image: Object;
};

export type blog = {
  index: number;
  slug: {
    current: string;
  };
  publishedAt: string;
  title: string;
  description: string;
  categories: Array<blogCategory>;
  mainImage: { asset: Object; _type: 'image' };
  author: {
    name: string;
    title: string;
    image: Object;
  };
  body: blogBody;
};

export type blogCategory = {
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
  description: string;
  overview: VehicleOverview;
  engine: vehicleEngine;
  dimensions: vehicleDimensions;
  capacity: vehicleCapacity;
  tyres: vehicleTyres;
  // interior?: vehicleInterior;
  // exterior?: vehicleExterior;
  gallery?: vehicleGallery;
};

export type VehicleOverview = {
  model: string;
  drive: string;
  transmission: string[];
  speed: number;
};

export type vehicleEngine = {
  model: string;
  displacement: number;
  power: string;
  fuelType: string[];
};

export type vehicleDimensions = {
  length: number;
  width: number;
  height: number;
  groundClearance: number;
  wheelbase: number;
  doors: number;
};

export type vehicleCapacity = {
  weight: number;
  seats: number;
  tank: number;
};

export type vehicleTyres = {
  front: string;
  rear: string;
  type: string;
};

// export type vehicleInterior = {
//   airCondition: string;
//   seatBelts: string;
//   outlets: string;
//   heater: string;
// };

// export type vehicleExterior = {
//   headlamp: string;
//   gradeMark: string;
//   mudGuards: string[];
//   windshield: string;
// };

export type vehicleGallery = {
  gallery: {
    images: Object[];
  };
};

export type FormErrors = DeepMap<FieldValues, FieldError>;

export type BaseInputProps<T extends FieldValues> = {
  label?: string;
  name: Path<T>;
  errors: FormErrors;
  defaultValue?: string | number;
  register: UseFormRegister<T>;
  className?: string;
};
