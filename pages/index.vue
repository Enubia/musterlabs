<script lang="ts" setup>
useSeoMeta({
    title: 'musterlabs | Home',
    description: 'musterlabs - Home Page',
});

const icons = [
    {
        name: 'mdi:language-typescript',
        color: '#3178c6',
        text: 'Typescript',
        link: 'https://www.typescriptlang.org/',
    },
    {
        name: 'mdi:vuejs',
        color: '#42b883',
        text: 'Vue.js',
        link: 'https://vuejs.org/',
    },
    {
        name: 'mdi:react',
        color: '#61dafb',
        text: 'React',
        link: 'https://reactjs.org/',
    },
    {
        name: 'mdi:nodejs',
        color: '#42b883',
        text: 'Node.js',
        link: 'https://nodejs.org/',
    },
    {
        name: 'simple-icons:pug',
        color: '#a86454',
        text: 'Pug.js',
        link: 'https://pugjs.org/',
    },
    {
        name: 'simple-icons:mongodb',
        color: '#47a248',
        text: 'MongoDB',
        link: 'https://www.mongodb.com/',
    },
    {
        name: 'simple-icons:postgresql',
        color: '#336791',
        text: 'PostgreSQL',
        link: 'https://www.postgresql.org/',
    },
    {
        name: 'simple-icons:docker',
        color: '#2496ed',
        text: 'Docker',
        link: 'https://www.docker.com/',
    },
];
</script>

<template>
    <header>
        <div class="flex justify-center p-8">
            <img src="/assets/svg/musterlabs-logo.svg" alt="Hero Image">
        </div>
    </header>
    <main class="container">
        <section class="my-10 lg:my-20 lg:px-40">
            <h1>
                Hi, I'm Marco.
            </h1>
            <p>
                I'm a passionate software developer with a strong focus on web development.
                I love to create and build things that are useful and make a difference.
            </p>
        </section>
        <section class="my-8 lg:px-40">
            <h2 class="mb-2 text-2xl text-primary">
                Technologies I'm familiar with
            </h2>
            <div class="mt-3 flex flex-wrap items-center justify-center gap-4">
                <a v-for="{ name, color, text, link } in icons" :key="text" :href="link" target="_blank" class="flex items-center gap-1 hover:cursor-pointer">
                    <Icon :name="name" class="size-10" :style="`color: ${color}`" />
                    <span>{{ text }}</span>
                </a>
            </div>
        </section>
        <section class="my-8 lg:px-40">
            <h2 class="mb-2 text-2xl text-primary">
                Projects
            </h2>
            <div class="flex flex-col items-center gap-5 md:flex-row">
                <a
                    href="https://github.com/enubia/ghost-chat" target="_blank" rel="noopener noreferrer"
                    class=" md:w-1/2"
                >
                    <Card class="border-none bg-background hover:shadow-lg">
                        <CardHeader />
                        <CardContent>
                            <h3 class="font-semibold">
                                Ghost Chat
                            </h3>
                            <p>
                                A standalone, multi platform Twitch.tv chat as overlay for windowed- and windowed-fullscreen applications.
                            </p>
                        </CardContent>
                    </Card>
                </a>
                <a href="https://github.com/donategifts" target="_blank" rel="noopener noreferrer" class="md:w-1/2">
                    <Card class="border-none bg-background hover:shadow-lg">
                        <CardHeader />
                        <CardContent>
                            <h3 class="font-semibold">
                                DonateGifts
                            </h3>
                            <p>
                                Holiday gifts and school supplies for children in foster care and emergency shelters.
                            </p>
                        </CardContent>
                    </Card>
                </a>
            </div>
        </section>
    </main>
    <footer class=" text-muted-foreground">
        <div class="justify-center p-4 text-center md:flex">
            <p>Lets get in touch:</p>
            <span class="ml-2 text-primary">musterlabs[at]mailbox.org</span>
        </div>
        <div class="mb-4 text-center md:mb-0">
            <p>
                2024 - PRESENT &copy; Musterlabs
            </p>
            <div class="mt-4 flex items-center justify-center gap-3">
                <div class="underline underline-offset-[12px] hover:cursor-pointer hover:text-primary">
                    <a href="https://github.com/enubia" target="_blank" rel="noopener noreferrer">
                        <Icon name="mdi:github" class="size-10" />
                        <span>GitHub</span>
                    </a>
                </div>
                <div class="underline underline-offset-[12px] hover:cursor-pointer hover:text-primary">
                    <a
                        href="https://www.linkedin.com/in/marco-schuster-37b70a140/" target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon name="mdi:linkedin" class="size-10" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped></style>
