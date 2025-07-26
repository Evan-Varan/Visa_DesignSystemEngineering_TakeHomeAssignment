import {
  autoUpdate,
  FloatingFocusManager,
  offset,
  useClick,
  useFloating,
  useInteractions,
  useDismiss,
} from '@floating-ui/react';
import {
  VisaAccountLow,
  VisaChevronDownTiny,
  VisaChevronUpTiny,
  VisaCloseTiny,
  VisaMenuLow,
} from '@visa/nova-icons-react';
import {
  Avatar,
  Badge,
  Button,
  Divider,
  DropdownButton,
  DropdownMenu,
  Input,
  InputContainer,
  Link,
  Listbox,
  ListboxItem,
  Nav,
  NavAppName,
  Surface,
  Tab,
  TabSuffix,
  Tabs,
  Typography,
  Utility,
  UtilityFragment,
  VisaLogo,
} from '@visa/nova-react';
import { type CSSProperties, useRef, useState } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'active-element-horizontal-nav';

const accountSubItems = [
  {
    tabLabel: 'Login',
    id: `${id}-account-sub-item-0`,
  },
  {
    tabLabel: 'Signup',
    id: `${id}-account-sub-item-1`,
  },
];

const label3SubItems = [
  {
    tabLabel: 'Tutorial',
    id: `${id}-label-3-sub-item-0`,
    href: './horizontal-navigation',
  },
  {
    tabLabel: 'Documentation',
    id: `${id}-label-3-sub-item-1`,
    href: './horizontal-navigation',
  },
];

export const NavBar = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [mobileAccountMenuOpen, setMobileAccountMenuOpen] = useState(false);
  const [mobileLabel3MenuOpen, setMobileLabel3MenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [label3Open, setLabel3Open] = useState(false);

  // For dropdown menus in the horizontal nav, we use floating UI for
  // -opening
  // -positioning
  // -dismissing

  // floating-ui setup for the account dropdown
  const {
    context: accountFloatingContext,
    floatingStyles: accountFloatingStyles,
    refs: accountFloatingRefs,
  } = useFloating({
    middleware: [offset(2)],
    open: accountMenuOpen,
    onOpenChange: setAccountMenuOpen,
    placement: 'bottom-end',
    whileElementsMounted: autoUpdate,
  });
  const clickAccountRef = useClick(accountFloatingContext);
  const dismissAccountMenu = useDismiss(accountFloatingContext);
  const { getReferenceProps: getAccountReferenceProps, getFloatingProps: getAccountFloatingProps } = useInteractions([
    clickAccountRef,
    dismissAccountMenu,
  ]);

  // floating-ui setup for the label3 tab dropdown
  const {
    context: label3FloatingContext,
    floatingStyles: label3FloatingStyles,
    refs: label3FloatingRefs,
  } = useFloating({
    middleware: [offset(2)],
    open: label3Open,
    onOpenChange: setLabel3Open,
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
  });
  const clickLabel3Ref = useClick(label3FloatingContext);
  const dismissLabel3Menu = useDismiss(label3FloatingContext);
  const { getReferenceProps: getLabel3ReferenceProps, getFloatingProps: getLabel3FloatingProps } = useInteractions([
    clickLabel3Ref,
    dismissLabel3Menu,
  ]);

  const onToggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <Link skipLink href="#content">
        Skip to content
      </Link>
      <UtilityFragment vJustifyContent="between">
        <Nav id={id} orientation="horizontal" tag="header">
          <UtilityFragment vContainerHide="desktop">
            <DropdownButton
              aria-controls={`${id}-mobile-menu`}
              aria-expanded={mobileMenuOpen ? 'true' : 'false'}
              aria-label="open menu"
              buttonSize="large"
              colorScheme="tertiary"
              iconButton
              id={`${id}-mobile-menu-button`}
              onClick={onToggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <VisaCloseTiny />
              ) : (
                <VisaMenuLow />
              )}
            </DropdownButton>
          </UtilityFragment>
          <UtilityFragment vFlex vGap={16}>
            <RouterLink
              aria-label="Visa Application Name Home"
              to="/build"
              id={`${id}-home-link`}
              style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
            >
              <VisaLogo />
              <NavAppName>
                <Utility
                  vContainerHide="xs"
                  element={<Typography variant="headline-3">Design Assistant</Typography>}
                />
              </NavAppName>
            </RouterLink>
          </UtilityFragment>
          <UtilityFragment vFlex vJustifyContent="end" vFlexGrow vMarginLeft="auto" vContainerHide="mobile">
            <nav aria-label="Label for horizontal example with active element">
              <UtilityFragment vGap={4}>
                <Tabs>
                  <Tab>
                    <Button
                      aria-current={location.pathname === '/build' ? 'page' : undefined}
                      buttonSize="large"
                      colorScheme="tertiary"
                      element={<RouterLink to="/build">Build</RouterLink>}
                    />
                  </Tab>
                  <Tab>
                    <Button
                      aria-current={location.pathname === '/savedsnippets' ? 'page' : undefined}
                      buttonSize="large"
                      colorScheme="tertiary"
                      element={<RouterLink to="/savedsnippets">Saved Snippets</RouterLink>}
                    />
                  </Tab>
                  <Tab>
                    <DropdownButton
                      aria-expanded={label3Open}
                      aria-controls={label3Open ? `${id}-label-dropdown-menu` : undefined}
                      id={`${id}-label-dropdown-button`}
                      buttonSize="large"
                      colorScheme="tertiary"
                      ref={label3FloatingRefs.setReference}
                      {...getLabel3ReferenceProps()}
                    >
                      Help<TabSuffix element={label3Open ? <VisaChevronUpTiny /> : <VisaChevronDownTiny />} />
                    </DropdownButton>
                    {label3Open && (
                      <FloatingFocusManager
                        context={label3FloatingContext}
                        modal={false}
                        initialFocus={-1}
                        restoreFocus={true}
                      >
                        <DropdownMenu
                          id={`${id}-label-dropdown-menu`}
                          aria-hidden={!label3Open}
                          style={
                            {
                              inlineSize: '180px',
                              position: 'absolute',
                              ...label3FloatingStyles,
                              zIndex: 1,
                            } as CSSProperties
                          }
                          ref={label3FloatingRefs.setFloating}
                          {...getLabel3FloatingProps()}
                        >
                                                     <Listbox>
                             <li key={label3SubItems[0].id}>
                               <UtilityFragment vPaddingVertical={4} vPaddingHorizontal={8}>
                                                                   <Button
                                    colorScheme="tertiary"
                                    onClick={() => {
                                      localStorage.setItem('showTutorial', 'true');
                                      // Dispatch custom event for same-tab communication
                                      window.dispatchEvent(new CustomEvent('localStorageChange', {
                                        detail: { key: 'showTutorial', value: 'true' }
                                      }));
                                      navigate('/build');
                                    }}
                                  >
                                   Tutorial
                                 </Button>
                               </UtilityFragment>
                             </li>
                             <li key={label3SubItems[1].id}>
                               <UtilityFragment vPaddingVertical={4} vPaddingHorizontal={8}>
                                 <Button
                                   colorScheme="tertiary"
                                   element={
                                     <a
                                       href="https://github.com/Evan-Varan/Visa_DesignSystemEngineering_TakeHomeAssignment"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                     >
                                       Documentation
                                     </a>
                                   }
                                 />
                               </UtilityFragment>
                             </li>
                           </Listbox>
                        </DropdownMenu>
                      </FloatingFocusManager>
                    )}
                  </Tab>
                </Tabs>
              </UtilityFragment>
            </nav>
          </UtilityFragment>
          <Utility vFlex vGap={8} vMarginLeft={8}>
            <UtilityFragment vContainerHide="mobile">
              <Tab tag="div">
                <DropdownButton
                  aria-expanded={accountMenuOpen}
                  aria-controls={accountMenuOpen ? `${id}-account-menu` : undefined}
                  aria-label="Alex Miller"
                  buttonSize="large"
                  colorScheme="tertiary"
                  element={<Avatar tag="button" />}
                  ref={accountFloatingRefs.setReference}
                  {...getAccountReferenceProps()}
                >
                  <VisaAccountLow />
                  <TabSuffix element={accountMenuOpen ? <VisaChevronUpTiny /> : <VisaChevronDownTiny />} />
                </DropdownButton>
                {accountMenuOpen && (
                  <FloatingFocusManager
                    context={accountFloatingContext}
                    modal={false}
                    initialFocus={-1}
                    restoreFocus={true}
                  >
                    <DropdownMenu
                      id={`${id}-account-menu`}
                      aria-hidden={!accountMenuOpen}
                      style={
                        {
                          inlineSize: '180px',
                          position: 'absolute',
                          ...accountFloatingStyles,
                          zIndex: 1,
                        } as CSSProperties
                      }
                      ref={accountFloatingRefs.setFloating}
                      {...getAccountFloatingProps()}
                    >
                      <Listbox>
                        {accountSubItems.map(accountSubItem => (
                          <UtilityFragment key={accountSubItem.id}>
                            <li>
                              <UtilityFragment vPaddingVertical={4} vPaddingHorizontal={8}>
                                <ListboxItem tag="a">
                                  {accountSubItem.tabLabel}
                                </ListboxItem>
                              </UtilityFragment>
                            </li>
                          </UtilityFragment>
                        ))}
                      </Listbox>
                    </DropdownMenu>
                  </FloatingFocusManager>
                )}
              </Tab>
            </UtilityFragment>
          </Utility>
        </Nav>
      </UtilityFragment>
      <UtilityFragment vContainerHide="desktop" vHide={!mobileMenuOpen}>
        <Nav
          aria-label="Label for horizontal example with active element"
          aria-hidden={!mobileMenuOpen}
          id={`${id}-mobile-menu`}
          orientation="vertical"
        >
          <Tabs orientation="vertical">
            <Tab>
              <Button
                aria-current={location.pathname === '/build' ? 'page' : undefined}
                buttonSize="large"
                colorScheme="tertiary"
                element={<RouterLink to="/build">Build</RouterLink>}
              />
            </Tab>
            <Tab>
              <Button
                aria-current={location.pathname === '/savedsnippets' ? 'page' : undefined}
                buttonSize="large"
                colorScheme="tertiary"
                element={<RouterLink to="/build">Saved Snippets</RouterLink>}
              />
            </Tab>

            <Tab tag="div">
              <Button
                aria-expanded={mobileLabel3MenuOpen}
                aria-controls={mobileLabel3MenuOpen ? `${id}-mobile-help-sub-menu` : undefined}
                id={`${id}-mobile-menu-help-dropdown-button`}
                buttonSize="large"
                colorScheme="tertiary"
                onClick={() => setMobileLabel3MenuOpen(!mobileLabel3MenuOpen)}
              >
                Help
                <TabSuffix element={mobileLabel3MenuOpen ? <VisaChevronUpTiny /> : <VisaChevronDownTiny />} />
              </Button>

              {mobileLabel3MenuOpen && (
                <Tabs orientation="vertical" id={`${id}-mobile-help-sub-menu`}>
                  <Tab>
                                         <Button
                       colorScheme="tertiary"
                       onClick={() => {
                         localStorage.setItem('showTutorial', 'true');
                         // Dispatch custom event for same-tab communication
                         window.dispatchEvent(new CustomEvent('localStorageChange', {
                           detail: { key: 'showTutorial', value: 'true' }
                         }));
                         navigate('/build');
                         setMobileMenuOpen(false);
                       }}
                     >
                      Tutorial
                    </Button>
                  </Tab>
                  <Tab>
                    <Button
                      colorScheme="tertiary"
                      element={
                        <a
                          href="https://github.com/Evan-Varan/Visa_DesignSystemEngineering_TakeHomeAssignment"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Documentation
                        </a>
                      }
                    />
                  </Tab>
                </Tabs>
              )}
            </Tab>
            <Divider dividerType="decorative"></Divider>
            <Tab tag="div">
              <Button
                aria-expanded={mobileAccountMenuOpen}
                aria-controls={`${id}-mobile-account-sub-menu`}
                aria-label="Alex Miller"
                buttonSize="large"
                colorScheme="tertiary"
                onClick={() => setMobileAccountMenuOpen(!mobileAccountMenuOpen)}
              >
                <VisaAccountLow />
                Alex Miller
                <TabSuffix element={mobileAccountMenuOpen ? <VisaChevronUpTiny /> : <VisaChevronDownTiny />} />
              </Button>
              {mobileAccountMenuOpen && (
                <Tabs orientation="vertical" id={`${id}-mobile-account-sub-menu`}>
                  {accountSubItems.map(accountSubItem => (
                    <Tab key={accountSubItem.id} id={accountSubItem.id}>
                      <Button
                        colorScheme="tertiary"
                      >
                        {accountSubItem.tabLabel}
                      </Button>
                    </Tab>
                  ))}
                </Tabs>
              )}
            </Tab>
          </Tabs>
        </Nav>
      </UtilityFragment>
    </div>
  );
};