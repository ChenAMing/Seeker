import type { Config } from 'tailwindcss'

import { addDynamicIconSelectors } from '@iconify/tailwind'

export default {
    content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            boxShadow: {
                light: '0px 4px 8px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
                solid: '0px 1px 3px 1px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.2)',
            },
            height: {
                '100vh': '100vh',
            },
            width: {
                '100vw': '100vw',
            },
            colors: {
                /*
                 * Surface
                 */
                sur: 'var(--color-sur)',
                'on-sur': 'var(--color-on-sur)',
                'sur-var': 'var(--color-sur-var)',
                'on-sur-var': 'var(--color-on-sur-var)',
                /*
                 * Component
                 */
                pri: 'var(--color-pri)',
                'on-pri': 'var(--color-on-pri)',
                sec: 'var(--color-sec)',
                'on-sec': 'var(--color-on-sec)',
                err: 'var(--color-err)',
                'on-err': 'var(--color-on-err)',
                /*
                 * Container
                 */
                'ctr-pri': 'var(--color-ctr-pri)',
                'on-ctr-pri': 'var(--color-on-ctr-pri)',
                'ctr-sec': 'var(--color-ctr-sec)',
                'on-ctr-sec': 'var(--color-on-ctr-sec)',
                /*
                 * Outline
                 */
                otl: 'var(--color-otl)',
                /*
                 * Mask
                 */
                'mask-less': 'var(--color-mask-less)',
                mask: 'var(--color-mask)',
                'mask-more': 'var(--color-mask-more)',
            },
        },
    },
    plugins: [addDynamicIconSelectors()],
} satisfies Config
