import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from './Providers/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

export default router;
