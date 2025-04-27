import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import authRoute from './authRoute';
import othersRoute from './othersRoute';
import type { Routes } from '@/@types/routes';

// 1. Declare all lazy-loaded components at the top
const SingleMenuView = lazy(() => import('@/views/demo/SingleMenuView'));
const CollapseMenuItemView1 = lazy(() => import('@/views/demo/CollapseMenuItemView1'));
const CollapseMenuItemView2 = lazy(() => import('@/views/demo/CollapseMenuItemView2'));
const GroupSingleMenuItemView = lazy(() => import('@/views/demo/GroupSingleMenuItemView'));
const GroupCollapseMenuItemView1 = lazy(() => import('@/views/demo/GroupCollapseMenuItemView1'));
const GroupCollapseMenuItemView2 = lazy(() => import('@/views/demo/GroupCollapseMenuItemView2'));
const Home = lazy(() => import('@/views/Home'));

// 2. Define your routes after the components are declared

// Public routes
export const publicRoutes: RouteObject[] = [
  ...authRoute,
];

// Protected routes
export const protectedRoutes: RouteObject[] = [
  {
    path: '/single-menu-view',
    element: <SingleMenuView />,
  },
  {
    path: '/collapse-menu-item-view-1',
    element: <CollapseMenuItemView1 />,
  },
  {
    path: '/collapse-menu-item-view-2',
    element: <CollapseMenuItemView2 />,
  },
  {
    path: '/group-single-menu-item-view',
    element: <GroupSingleMenuItemView />,
  },
  {
    path: '/group-collapse-menu-item-view-1',
    element: <GroupCollapseMenuItemView1 />,
  },
  {
    path: '/group-collapse-menu-item-view-2',
    element: <GroupCollapseMenuItemView2 />,
  },
  {
    path: '/hello',
    element: <Home />,
  },
  ...othersRoute,
];
