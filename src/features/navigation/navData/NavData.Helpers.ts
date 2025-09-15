// import navData, { type MainNavItems, type NavData, type NestedSideNavItems } from "./NavData";

// // Find a nav link by ID
// export const findMainNavItemById = (id: string): MainNavItems | undefined => {
//   return navData.find(item => item._id === id);
// };

// // Get all top-level active nav items
// export const getActiveMainNavItems = (): MainNavItems[] => {
//   return navData.filter(item => item.active);
// };

// // Get all clothing items from the NestedSideMenu
// export const nestedSideNavItems = (): NestedSideNavItems[] => {
//   const allItems: NestedSideNavItems[] = [];

//   navData.forEach(mainNavItem => {
//     mainNavItem.sideNavItems?.forEach(sideNavItem => {
//       if (sideNavItem.nestedSideNavItems) {
//         allItems.push(...sideNavItem.nestedSideNavItems);
//       }
//     });
//   });

//   return allItems;
// };

// // Toggle the `active` state of a nav item by ID
// export const toggleMainNavItemActive = (id: string): NavData => {
//   return navData.map(item => {
//     if (item._id === id) {
//       return { ...item, active: !item.active };
//     }

//     // Also check sideNavItems
//     if (item.sideNavItems) {
//       const updatedSideNavItems = item.sideNavItems.map(sideNavItems => {
//         if (sideNavItems._id === id) {
//           return { ...sideNavItems, active: !sideNavItems.active };
//         }

//         // Check nestedSideNavItems
//         if (sideNavItems.nestedSideNavItems) {
//           const updatedSideNavItems = sideNavItems.nestedSideNavItems.map(nestedSideNavItem => {
//             if (nestedSideNavItem._id === id) {
//               return { ...nestedSideNavItem, active: !nestedSideNavItem.active };
//             }
//             return nestedSideNavItem;
//           });

//           return { ...sideNavItems, nestedSideNavItems: updatedSideNavItems };
//         }

//         return sideNavItems;
//       });

//       return { ...item, sideNavItems: updatedSideNavItems };
//     }

//     return item;
//   });
// };
