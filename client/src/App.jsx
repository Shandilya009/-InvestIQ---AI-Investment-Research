import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;