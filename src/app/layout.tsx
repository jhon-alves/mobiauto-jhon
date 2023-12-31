'use client'
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from '@/helpers/store';
import theme from '../theme';
import Head from './head';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head />
      <body className={roboto.className}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Layout>
              {children}
            </Layout>
          </ThemeProvider>
        </Provider>         
      </body>
    </html>
  )
}
