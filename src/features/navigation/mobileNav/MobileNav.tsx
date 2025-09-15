
  // // === New Mobile State ===
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [mobileActiveSide, setMobileActiveSide] = useState<string | null>(null);
  // const [mobileActiveNested, setMobileActiveNested] = useState<string | null>(null);

//   // === Mobile Handler Logic ===
//   const handleMobileMainNavClick = (nav: MainNavItems) => {
//   if (mobileActiveSide === nav._id) {
//     // Collapse if already open
//     setMobileActiveSide(null);
//     setMobileActiveNested(null);
//   } else {
//     // Open corresponding side menu
//     setMobileActiveSide(nav._id);
//     setMobileActiveNested(null); // reset nested when switching
//   }
// };

// const handleMobileSideItemClick = (item: SideNavItems) => {
//   if (mobileActiveNested === item._id) {
//     // Collapse if already open
//     setMobileActiveNested(null);
//   } else {
//     setMobileActiveNested(item._id);
//   }
// };

// const handleMobileLinkClick = (link: string) => {
//   setIsMobileMenuOpen(false);
//   setMobileActiveSide(null);
//   setMobileActiveNested(null);
//   navigate(link);
// };



<>
      {/* === MOBILE MENU OVERLAY === */}
      {isMobileMenuOpen && (
        <div
          className={styles.mobileOverlay}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* === MOBILE MENU PANEL === */}
<aside
  className={`${styles.mobilePanel} ${
    isMobileMenuOpen ? styles.open : ""
  }`}
  aria-label="Mobile navigation"
  role="dialog"
  aria-modal="true"
>
  {/* Close Button */}
  <button
    className={styles.closeMobile}
    onClick={() => setIsMobileMenuOpen(false)}
    aria-label="Close mobile menu"
  >
    <X />
  </button>

  {/* MAIN NAV */}
  <ul className={styles.mainNav}>
    {navData.map((nav) => (
      <li key={nav._id} className={styles.mainNavItem}>
        <button
          className={styles.mainNavButton}
          aria-label={nav.name}
          aria-haspopup="true"
          aria-expanded={mobileActiveSide === nav._id}
          aria-controls={`mobile-side-panel-${nav._id}`}
          onClick={() => handleMobileMainNavClick(nav)}
        >
          {nav.name}
        </button>

        {/* === SIDE PANEL === */}
        {mobileActiveSide === nav._id && (
          <ul
            id={`mobile-side-panel-${nav._id}`}
            className={styles.sidePanel}
            aria-label={`${nav.name} sub menu`}
          >
            {nav.sideNavItems?.map((item) => (
              <li key={item._id} className={styles.sideNavItem}>
                <button
                  className={styles.sideNavButton}
                  aria-label={item.name}
                  aria-haspopup="true"
                  aria-expanded={mobileActiveNested === item._id}
                  aria-controls={`mobile-nested-panel-${item._id}`}
                  onClick={() => handleMobileSideItemClick(item)}
                >
                  {item.name}
                </button>

                {/* === NESTED PANEL === */}
                {mobileActiveNested === item._id && (
                  <ul
                    id={`mobile-nested-panel-${item._id}`}
                    className={styles.nestedPanel}
                    aria-label={`${item.name} nested links`}
                  >
                    {item.nestedItems?.map((nested) => (
                      <li key={nested._id} className={styles.nestedNavItem}>
                        <Link
                          to={nested.link}
                          className={styles.nestedNavLink}
                          aria-label={`Go to ${nested.name}`}
                          onClick={() => setIsMobileMenuOpen(false)} // close menu on navigation
                        >
                          {nested.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
</aside>

</>