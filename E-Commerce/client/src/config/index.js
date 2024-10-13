export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "accessories", label: "Electronics and Accessories" },
      { id: "footwear", label: "Footwear" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "square", label: "4Square" },
      { id: "abhlifestyle", label: "ABH Lifestyle" },
      { id: "erica", label: "Erica" },
      { id: "fille", label: "Fille" },
      { id: "josh", label: "josh" },
      { id: "kaydee", label: "Kay Dee" },
      { id: "threads", label: "7Threads" },
      { id: "aleva", label: "Aleva" },
      { id: "aster", label: "Aster" },
      { id: "baquax", label: "Baquax" },
      { id: "apple", label: "Apple" },
      { id: "samsung", label: "Samsung" },
      { id: "google", label: "Google" },
      { id: "motorola", label: "Motorola" },
      { id: "vivo", label: "Vivo" },
      { id: "infinix", label: "Infinix" },
      { id: "redmi", label: "Redmi" },
      { id: "nokia", label: "Nokia" },
      { id: "hp", label: "HP" },
      { id: "asus", label: "Asus" },
      { id: "dell", label: "DELL" },
      { id: "zebronics", label: "Zebronics" },
      { id: "sony", label: "Sony" },
      { id: "lg", label: "LG" },
      { id: "mi", label: "MI" }, 
      { id: "puma", label: "PUMA" }, 
      { id: "adidas", label: "Adidas" }, 
      { id: "bata", label: "Bata" }, 
      { id: "paragon", label: "Paragon" }, 
      { id: "sparx", label: "Sparx" }, 
      { id: "woodland", label: "Woodland" },          
      
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "men",
    label: "Men",
    path: "/shop/listing",
  },
  {
    id: "women",
    label: "Women",
    path: "/shop/listing",
  },
  {
    id: "kids",
    label: "Kids",
    path: "/shop/listing",
  },
  {
    id: "footwear",
    label: "Footwear",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Electronics & Accessories",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  accessories: "Electronics and Accessories",
  footwear: "Footwear",
};

export const brandOptionsMap = {
  square: "4Square",
  abhlifestyle: "ABH Lifestyle",
  erica: "Erica",
  fille: "Fille",
  josh: "Josh",
  kaydee: "Kay Dee",
  threads: "7Threads",
  aleva: "Aleva",
  aster: "Aster",
  baquax: "Baquax",
  apple: "Apple",
  samsung: "Samsung",
  google: "Google",
  motorola: "Motorola",
  vivo: "Vivo",
  infinix: "Infinix",
  redmi: "Redmi",
  nokia: "Nokia",
  hp: "HP",
  asus: "Asus",
  dell: "DELL",
  zebronics: "Zebronics",
  sony: "Sony",
  lg: "LG",
  mi: "MI",
  puma: "PUMA",
adidas: "Adidas",
bata: "Bata",
paragon: "Paragon",
sparx: "Sparx",
woodland: "Woodland"


};

export const filterOptions = {
  category: [
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
    { id: "kids", label: "Kids" },
    { id: "accessories", label: "Electronics & Accessories" },
    { id: "footwear", label: "Footwear" },
  ],
  brand: [
    { id: "square", label: "4Square" },
    { id: "abhlifestyle", label: "ABH Lifestyle" },
    { id: "erica", label: "Erica" },
    { id: "fille", label: "Fille" },
    { id: "josh", label: "Josh" },
    { id: "kaydee", label: "Kay Dee" },
    { id: "threads", label: "7Threads" },
    { id: "aleva", label: "Aleva" },
    { id: "aster", label: "Aster" },
    { id: "baquax", label: "Baquax" },
    { id: "apple", label: "Apple" },
    { id: "samsung", label: "Samsung" },
    { id: "google", label: "Google" },
    { id: "motorola", label: "Motorola" },
    { id: "vivo", label: "Vivo" },
    { id: "infinix", label: "Infinix" },
    { id: "redmi", label: "Redmi" },
    { id: "nokia", label: "Nokia" },
    { id: "hp", label: "HP" },
    { id: "asus", label: "Asus" },
    { id: "dell", label: "DELL" },
    { id: "zebronics", label: "Zebronics" },
    { id: "sony", label: "Sony" },
    { id: "lg", label: "LG" },
    { id: "mi", label: "MI" },
    { id: "puma", label: "PUMA" }, 
    { id: "adidas", label: "Adidas" }, 
    { id: "bata", label: "Bata" }, 
    { id: "paragon", label: "Paragon" }, 
    { id: "sparx", label: "Sparx" }, 
    { id: "woodland", label: "Woodland" },
    
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
