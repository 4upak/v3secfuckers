import { createWebHistory, createRouter } from "vue-router";

import MainPage from "@/pages/MainPage";
import ContactPage from "@/pages/ContactPage";
import ArticlesPage from "@/pages/ArticlesPage";
import ExchangesPage from "@/pages/ExchangesPage";
import FaqPage from "@/pages/FaqPage";
import NewsPage from "@/pages/NewsPage";
import ExchangeDirectionPage from "@/pages/ExchangeDirectionPage";

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/contacts/',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/articles/',
    name: 'ArticlesPage',
    component: ArticlesPage
  },
  {
    path: '/faq/',
    name: 'FaqPage',
    component: FaqPage
  },
  {
    path: '/exchanges/',
    name: 'ExchangesPage',
    component: ExchangesPage
  },
  {
    path: '/news/',
    name: 'NewsPage',
    component: NewsPage
  },
  {
    path: '/rate/:from_code/:to_code/',
    name: 'ExchangePage',
    component: ExchangeDirectionPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
