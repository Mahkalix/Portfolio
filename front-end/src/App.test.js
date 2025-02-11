import { render, screen } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "./components/ThemeSwitch";
import { MemoryRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(
    <ThemeProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </ThemeProvider>
  );

  // Recherchez l'élément par son contenu HTML
  const linkElement = screen.getByText(/learn react/i, { selector: "a" });

  expect(linkElement).toBeInTheDocument();
});
