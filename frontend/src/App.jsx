import { Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { AppBar } from './components/AppBar';

import AuthView from './views/AuthView/AuthView.jsx';
import TransactionsView from './views';
import { ReportView } from './views';

export const App = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });

  return (
    <>
      {(isMobile || isTablet || isDesktop) &&
        <>
          <AppBar />

          <Routes>
            <Route exact path="/" element={<AuthView />} />
            <Route exact path="/transaction" element={<TransactionsView />} />
            <Route exact path="/report" element={<ReportView />} />
          </Routes>
        </>
      }
    </>
  );
};
