import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/ScreensManagement',
			name: 'ScreensManagement',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/ScreensManagement.vue')
		},
		{
			path: '/Editor',
			name: 'Editor',
			component: () => import('@/views/Editor/index.vue')
		}
	]
});

export default router;
