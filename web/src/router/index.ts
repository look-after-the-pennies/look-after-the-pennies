import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: false,
        title: 'Look After The Pennies',
        metaTags: [
          {
            name: 'twitter:title',
            content: 'Look After The Pennies',
          },
          {
            property: 'og:title',
            content: 'Look After The Pennies',
          },
          {
            name: 'description',
            content:
              'Look After The Pennies - An open source spend tracking, budgeting and financial planning application.',
          },
          {
            name: 'twitter:description',
            content:
              'Look After The Pennies - An open source spend tracking, budgeting and financial planning application.',
          },
          {
            property: 'og:description',
            content:
              'Look After The Pennies - An open source spend tracking, budgeting and financial planning application.',
          },
        ],
      },
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/ContactUs.vue'),
      meta: {
        requiresAuth: false,
        title: 'Look After The Pennies - Contact Us',
        metaTags: [
          {
            name: 'twitter:title',
            content: 'Look After The Pennies - Contact Us',
          },
          {
            property: 'og:title',
            content: 'Look After The Pennies - Contact Us',
          },
          {
            name: 'description',
            content: 'Contact details for Look After The Pennies.',
          },
          {
            name: 'twitter:description',
            content: 'Contact details for Look After The Pennies.',
          },
          {
            property: 'og:description',
            content: 'Contact details for Look After The Pennies.',
          },
        ],
      },
    },
    {
      path: '/open-organisation',
      name: 'open-organisation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/OpenOrganisation.vue'),
      meta: {
        requiresAuth: false,
        title: 'Look After The Pennies - An Open Organisation',
        metaTags: [
          {
            name: 'twitter:title',
            content: 'Look After The Pennies - An Open Organisation',
          },
          {
            property: 'og:title',
            content: 'Look After The Pennies - An Open Organisation',
          },
          {
            name: 'description',
            content:
              'Look After The Pennies is an open organisation building in public.',
          },
          {
            name: 'twitter:description',
            content:
              'Look After The Pennies is an open organisation building in public.',
          },
          {
            property: 'og:description',
            content:
              'Look After The Pennies is an open organisation building in public.',
          },
        ],
      },
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../pages/About.vue'),
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('../pages/Login.vue'),
    // },

    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../pages/PrivacyPolicy.vue'),
      meta: {
        requiresAuth: false,
        title: 'Look After The Pennies - Privacy Policy',
        metaTags: [
          {
            name: 'twitter:title',
            content: 'Look After The Pennies - Privacy Policy',
          },
          {
            property: 'og:title',
            content: 'Look After The Pennies - Privacy Policy',
          },
          {
            name: 'description',
            content: 'Privacy policy for Look After The Pennies.',
          },
          {
            name: 'twitter:description',
            content: 'Privacy policy for Look After The Pennies.',
          },
          {
            property: 'og:description',
            content: 'Privacy policy for Look After The Pennies.',
          },
        ],
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behaviour: 'smooth' };
    }
  },
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(
    (el) => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  // @ts-ignore
  nearestWithMeta.meta.metaTags

    .map((tagDef: any) => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag: any) => document.head.appendChild(tag));

  next();
});

export default router;
