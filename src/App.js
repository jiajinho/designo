import styled from 'styled-components';
import L from 'leaflet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useMediaPredicate } from 'react-media-hook';
import { ToastContainer } from 'react-toastify';

import { viewport, theme, css } from './common/config.json';
import hardString from './common/hard-string';
import MediaContext from './common/MediaContext';
import TileLayerContext from './common/TileLayerContext';
import Header from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer';
import Home from './components/home/Home';
import NotFound from './components/not-found/NotFound';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Design from './components/design/Design';
import Locations from './components/locations/Locations';

const Root = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

function App() {

  const _viewport = {
    isTablet: useMediaPredicate(`(min-width: ${viewport.min.tablet})`),
    isLaptop: useMediaPredicate(`(min-width: ${viewport.min.laptop})`),
    isDesktop: useMediaPredicate(`(min-width: ${viewport.min.desktop})`)
  }

  const tileLayers = [];
  for (let i = 0; i < hardString.locations.length; i++) {
    tileLayers.push(
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
    );
  }

  return (
    <Root style={{
      '--theme-primary-peach': theme.primary.peach,
      '--theme-primary-dark': theme.primary.dark,
      '--theme-primary-light': theme.primary.light,

      '--theme-secondary-peach': theme.secondary.peach,
      '--theme-secondary-dark': theme.secondary.dark,
      '--theme-secondary-light': theme.secondary.light,

      '--horizontal-gap': css.window.horizontalGap.mobile,
      '--horizontal-gap-laptop': css.window.horizontalGap.laptop,

      '--vertical-gap': css.window.verticalGap.mobile,
      '--media-object-gap': css.window.mediaObjectGap,
      '--design-link-gap': css.window.designLinkGap,
      '--design-card-gap': css.window.designCardGap,
      '--border-radius': css.window.borderRadius,
      '--bubble-px': `${css.window.bubblePx}px`
    }}>
      <ToastContainer
        position="bottom-center"
        pauseOnHover
        autoClose={4000}
      />

      <MediaContext.Provider value={_viewport}>
        <TileLayerContext.Provider value={tileLayers}>
          <BrowserRouter>

            <Header />

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/contact">
                <Contact />
              </Route>

              <Route path="/locations">
                <Locations />
              </Route>

              <Route path="/web">
                <Design type="web" />
              </Route>

              <Route path="/app">
                <Design type="app" />
              </Route>

              <Route path="/graphic">
                <Design type="graphic" />
              </Route>

              <Route>
                <NotFound />
              </Route>
            </Switch>

            <Footer />


          </BrowserRouter>
        </TileLayerContext.Provider>
      </MediaContext.Provider>
    </Root >
  )
}

export default App;
