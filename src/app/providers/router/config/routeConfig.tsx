import { RouteProps } from 'react-router-dom';
import { LoginPage } from 'pages/LoginPage';
import { CatalogPage } from 'pages/CatalogPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ForbiddenPage } from 'pages/ForbiddenPage';
import { Role } from 'entities/User/model/types/roles';
import { OnboardingPage } from 'pages/OnboardingPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    hasLayout?: boolean;
    roles?: Role[];
};

export enum AppRoutes {
    Login = 'Login',
    Catalog = 'Catalog',
    About = 'About',
    Tasks = 'Tasks',
    NotFound = 'NotFound',
    Fobidden = 'Forbidden',
    Onboarding = 'Onboarding',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Login]: '/login',
    [AppRoutes.Catalog]: '/catalog',
    [AppRoutes.About]: '/about',
    [AppRoutes.Tasks]: '/tasks',
    [AppRoutes.Fobidden]: '/forbidden',
    [AppRoutes.Onboarding]: '/onboarding',
    [AppRoutes.NotFound]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.Login]: {
        path: RoutePath.Login,
        element: <LoginPage />,
        authOnly: false,
    },
    [AppRoutes.Catalog]: {
        path: `${RoutePath.Catalog}`,
        element: <CatalogPage />,
        hasLayout: true,
        authOnly: true,
    },
    [AppRoutes.About]: {
        path: `${RoutePath.About}`,
        element: <div>About</div>,
        hasLayout: true,
        authOnly: true,
    },
    [AppRoutes.Tasks]: {
        path: `${RoutePath.Tasks}`,
        element: <div>Tasks</div>,
        hasLayout: true,
        authOnly: true,
    },
    [AppRoutes.Fobidden]: {
        path: `${RoutePath.Forbidden}`,
        element: <ForbiddenPage />,
        hasLayout: true,
        authOnly: true,
    },
    [AppRoutes.Onboarding]: {
        path: `${RoutePath.Onboarding}`,
        element: <OnboardingPage />,
        authOnly: true,
        hasLayout: false,
    },
    [AppRoutes.NotFound]: {
        path: `${RoutePath.NotFound}`,
        element: <NotFoundPage />,
        authOnly: true,
        hasLayout: true,
    },
};