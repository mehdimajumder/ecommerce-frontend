import { useState } from "react";
import styles from "./MainNav.module.css";
import { Link, useNavigate } from "react-router-dom";
import navData, {
  type MainNavItems,
  type SideNavItems,
} from "../navData/NavData";
import {
  ShoppingBag,
  Heart,
  User,
  Search,
  TextAlignJustify,
  X,
} from "lucide-react";

const MainNav = () => {
  const navigate = useNavigate();
  
  // === Desktop State ===
  const [showPanel, setShowPanel] = useState(false);
  const [hidePanel, setHidePanel] = useState(false);

  const [showNested, setShowNested] = useState(false);
  const [hideNested, setHideNested] = useState(false);
  

  const [activeSideItems, setActiveSideItems] = useState<SideNavItems[] | null>(
    null
  );
  const [nestedItems, setNestedItems] = useState<
    SideNavItems["nestedSideNavItems"] | null
  >(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  
  
  
   // === Desktop Handler Logic ===
  const handleMainNavClick = (link: string) => {
    setShowPanel(false);
    setActiveSideItems(null);
    setShowNested(false);

    navigate(link);
    window.location.reload(); // full page reload
  };

  const handleMouseEnter = (sideItems: SideNavItems[] | undefined) => {
    setActiveSideItems(sideItems || null);
    setShowPanel(true);
    setShowNested(false);
  };

  const handleMouseLeave = () => {
    setHidePanel(true);
    setShowNested(false);
    setHideNested(true);

    setTimeout(() => {
      setShowPanel(false);
      setHidePanel(false);
      setHideNested(false);
    }, 300);
  };

  const handleSideItemClick = (item: SideNavItems) => {
    if (item.nestedSideNavItems) {
      setNestedItems(item.nestedSideNavItems);
      setShowNested(true);
    }
  };




  return (
    <>
      {/* === HEADER === */}
      <header className={styles.container} aria-label="Main site header">
        <div className={styles.leftSection}>
          {/* === LOGO === */}
          <div className={styles.logo}>
            <Link to="/" aria-label="Go to homepage">
              Logo
            </Link>
          </div>

          {/* === MAIN NAVIGATION === */}
          <nav className={styles.mainNav} aria-label="Main navigation menu">
            <ul>
              {navData.map((nav: MainNavItems) => (
                <li key={nav._id} className={styles.mainNavItem}>
                  <button
                    aria-label={nav.name}
                    aria-haspopup="true"
                    aria-expanded={showPanel}
                    aria-controls="side-panel"
                    onMouseEnter={() => handleMouseEnter(nav.sideNavItems)}
                    onClick={() => handleMainNavClick(nav.link)}
                    className={styles.mainNavItemButton}
                  >
                    {nav.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* === USER ICONS === */}
        <nav
          className={styles.userIcons}
          aria-label="User account and tools navigation"
        >
          <button aria-label="Search">
            <Search />
          </button>
          <button aria-label="User account">
            <User />
          </button>
          <button aria-label="Wishlist">
            <Heart />
          </button>
          <button aria-label="Shopping bag">
            <ShoppingBag />
          </button>
          <button
            className={styles.menuIcon}
            aria-label="Open mobile menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <TextAlignJustify />
          </button>
        </nav>
      </header>

      {/* === DESKTOP OVERLAY === */}
      {(showPanel || hidePanel) && (
        <div className={styles.overlay} onMouseLeave={handleMouseLeave} />
      )}

      {/* === SIDE NAVIGATION === */}
      <aside
        className={`${styles.sideNav} ${
          showPanel && !hidePanel ? styles.open : ""
        }`}
        onMouseLeave={handleMouseLeave}
        aria-label="Submenu panel"
      >
        <ul>
          {activeSideItems?.map((item) => (
            <li key={item._id} className={styles.sideNavItem}>
              <button
                aria-label={item.name}
                aria-haspopup="true"
                aria-expanded={showNested}
                aria-controls="nested-panel"
                onClick={() => handleSideItemClick(item)}
                className={styles.sideNavItemButton}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* === NESTED SIDE NAVIGATION === */}
      {showNested && (
        <aside
          className={`${styles.nestedSideNav} ${
            showNested && !hideNested ? styles.open : ""
          }`}
          aria-label="Nested submenu"
        >
          <button
            className={styles.closeNested}
            onClick={() => setShowNested(false)}
            aria-label="Close nested menu"
          >
            <X />
          </button>
          <ul>
            {nestedItems?.map((nested) => (
              <li key={nested._id}>
                <Link
                  to={nested.link}
                  aria-label={`Go to ${nested.name}`}
                  className={styles.nestedSideNavLink}
                >
                  {nested.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}


    </>
  );
};

export default MainNav;
