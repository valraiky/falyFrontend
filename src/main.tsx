import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient,QueryClientProvider } from 'react-query';
import './index.css';
import { Elements } from '@stripe/react-stripe-js';
import { Router } from './route/Router.tsx';
import { loadStripe } from '@stripe/stripe-js';

const queryClient = new QueryClient()
export const Key_Publique = "pk_test_51QVywrIYKqcDkZ7p9VnMNn5Tgw7CDHlrgOpMZ87vGlKYARBTjvltoxQrX9rRfV68lKzGv3fr77ibSoyRD4gLZozU00cn6zzPMj"

const stripePromise = loadStripe(Key_Publique);

const router = createBrowserRouter(Router);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider >
    </Elements>
  </React.StrictMode>
);
