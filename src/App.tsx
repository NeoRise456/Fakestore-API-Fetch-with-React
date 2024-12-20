import './App.css'

import { ThemeProvider } from "@/components/theme-provider"
import {ProductsPage} from "@/products/pages/ProductsPage.component.tsx";

function App() {

  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ProductsPage/>
      </ThemeProvider>
  )
}

export default App
