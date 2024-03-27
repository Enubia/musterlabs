<script setup lang="ts">
useSeoMeta({
    author: 'Marco Schuster',
    ogTitle: 'musterlabs | WebDev for everyone',
    ogDescription: 'I build websites and web applications for everyone.',
    ogImage: '/images/musterlabs-logo.png',
    ogUrl: 'https://musterlabs.dev',
    twitterTitle: 'musterlabs | WebDev for everyone',
    twitterDescription: 'I build websites and web applications for everyone.',
    twitterImage: '/images/musterlabs-logo.png',
    twitterCard: 'summary_large_image',
});

useHead({
    htmlAttrs: {
        lang: 'en',
    },
    link: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico',
        },
    ],
});
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
