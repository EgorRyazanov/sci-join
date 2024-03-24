import { RouteProps } from 'react-router-dom';
import { LoginPage } from 'pages/LoginPage';
import { MainPage } from 'pages/MainPage';
import { CatalogPage } from 'pages/CatalogPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoutes {
  Main = 'Main',
  Login = 'Login',
  Catalog = 'Catalog',
  About = 'About',
  Tasks = 'Tasks',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/main',
  [AppRoutes.Login]: '/login',
  [AppRoutes.Catalog]: '/catalog',
  [AppRoutes.About]: '/about',
  [AppRoutes.Tasks]: '/tasks',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.Main]: {
    path: RoutePath.Main,
    element: <MainPage />,
    authOnly: true,
  },
  [AppRoutes.Login]: {
    path: RoutePath.Login,
    element: <LoginPage />,
    authOnly: false,
  },
  [AppRoutes.Catalog]: {
    path: `${RoutePath.Catalog}`,
    element: <CatalogPage />,
  },
  [AppRoutes.About]: {
    path: `${RoutePath.About}`,
    element: <div>123</div>,
  },
  [AppRoutes.Tasks]: {
    path: `${RoutePath.Tasks}`,
    element: <div>123</div>,
  },
};
