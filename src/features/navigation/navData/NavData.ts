
/* === INTERFACE & NAVIGATION STRUCTURE === */
export interface NestedSideNavItems {
  _id: string;
  link: string;
  name: string;
  active: boolean;
}

export interface SideNavItems {
  _id: string;
  link: string;
  name: string;
  active: boolean;
  nestedSideNavItems?: NestedSideNavItems[];
}

export interface MainNavItems {
  _id: string;
  link: string;
  name: string;
  active: boolean;
  sideNavItems?: SideNavItems[];
}

export type NavData = MainNavItems[];

/* === NAVIGATION DATA === */
const navData: NavData = [
  {
    _id: "1",
    link: '/men',
    name: 'Mens',
    active: false,
    sideNavItems: [
      {
        _id: "a1",
        link: '#mens-clothing',
        name: 'Clothing',
        active: false,
        nestedSideNavItems: [
          { _id: "1a", link: '/mens-tops', name: 'Tops & T-Shirts', active: false },
          { _id: "1b", link: '/mens-bottoms', name: 'Pants', active: false },
          { _id: "1c", link: '/mens-hoodies', name: 'Hoodies & Sweatshirts', active: false },
          { _id: "1d", link: '/mens-jackets', name: 'Jackets', active: false },
        ],
      },
    ],
  },
  {
    _id: "2",
    link: '/women',
    name: 'Women',
    active: false,
    sideNavItems: [
      {
        _id: "a2",
        link: '#women-clothing',
        name: 'Clothing',
        active: false,
        nestedSideNavItems: [
          { _id: "2a", link: '/women-tops', name: 'Tops & T-Shirts', active: false },
          { _id: "2b", link: '/women-bottoms', name: 'Pants', active: false },
          { _id: "2c", link: '/women-hoodies', name: 'Hoodies & Sweatshirts', active: false },
          { _id: "2d", link: '/women-jackets', name: 'Jackets', active: false },
          { _id: "2e", link: '/women-shoes', name: 'Shoes', active: false },
        ],
      },
    ],
  },
  {
    _id: "3",
    link: '/shoes',
    name: 'Shoes',
    active: false,
  },
];

export default navData;


