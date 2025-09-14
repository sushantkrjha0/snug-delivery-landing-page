import { Inter, Roboto_Slab, DM_Sans, EB_Garamond } from "next/font/google";
import localFont from 'next/font/local'

export const inter = Inter({ 
    subsets: ["latin"] 
});

export const roboto_slab = Roboto_Slab({
    weight: ["500", "400", "600"],
    subsets: ["latin"]
})

export const dm_sans = DM_Sans({
    weight: ["400", "500", "600"],
    subsets: ["latin"]
})

export const eb_garamond = EB_Garamond({
    weight: ["400","500", "600"],
    subsets: ["latin"]
})

// Rosemartin font for headings
export const rosemartin = localFont({
    src: [
        {
            path: '../fonts/rosemartin.otf',
            weight: '400',
            style: 'normal',
        }
    ],
    variable: '--font-rosemartin'
})

// Neue Regrade font for body text and sub-headings
export const neue_regrade = localFont({
    src: [
        {
            path: '../fonts/Neue-Regrade-Regular-BF65af35d81f2ff.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/Neue-Regrade-Medium-BF65af35d843ed6.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/Neue-Regrade-Semibold-BF65af35d8354a8.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../fonts/Neue-Regrade-Bold-BF65af35d84e111.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/Neue-Regrade-Bold-Italic-BF65af35d85dafb.otf',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../fonts/Neue-Regrade-SemiBold-Italic-BF65af35d6f02e9.otf',
            weight: '600',
            style: 'italic',
        }
    ],
    variable: '--font-neue-regrade'
})