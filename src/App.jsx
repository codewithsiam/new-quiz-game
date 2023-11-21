import ErrorBoundary from '@/ErrorBoundary';
import { AuthProvider } from '@/contexts/AuthContext';
import AppRouter from '@/routes/AppRouter';
import GlobalStyles from '@/styles/GlobalStyles';
import { useThemeContext } from '@/contexts/ThemeContext';

function App() {
  const { currentTheme } = useThemeContext();
  return (
    <ErrorBoundary>
      <AuthProvider>
        <GlobalStyles theme={currentTheme}/>
        <AppRouter />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
