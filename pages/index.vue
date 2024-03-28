<script lang="ts" setup>
useSeoMeta({
    title: 'musterlabs | Home',
    description: 'musterlabs - Home Page',
});
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
                <div class="flex items-center gap-1">
                    <Icon name="mdi:language-typescript" class="size-10" style="color: #3178c6" />
                    <span>Typescript</span>
                </div>
                <div class="flex items-center gap-1">
                    <Icon name="mdi:vuejs" class="size-10" style="color: #42b883" />
                    <span>Vue.js</span>
                </div>
                <div class="flex items-center gap-1">
                    <Icon name="mdi:react" class="size-10" style="color: #61dafb" />
                    <span>React</span>
                </div>
                <div class="flex items-center gap-1">
                    <Icon name="mdi:nodejs" class="size-10" style="color: #42b883" />
                    <span>Node.js</span>
                </div>
                <div class="flex items-center gap-1">
                    <Icon name="simple-icons:pug" class="size-10 text-yellow-900" />
                    <span>Pug.js</span>
                </div>
                <div class="flex items-center gap-1">
                    <Icon name="simple-icons:mongodb" class="size-10" style="color: #47a248" />
                    <span>MongoDB</span>
                </div>
                <div class="flex items-center gap-1">
                    <Icon name="simple-icons:postgresql" class="size-10" style="color: #336791" />
                    <span>PostgreSQL</span>
                </div>
                <div class="flex items-center gap-1">
                    <Icon name="simple-icons:docker" class="size-10" style="color: #2496ed" />
                    <span>Docker</span>
                </div>
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
                <a href="https://donate-gifts.com" target="_blank" rel="noopener noreferrer" class="md:w-1/2">
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
            <!-- <div class="mt-5 flex flex-col items-center gap-5 md:flex-row">
                <a href="https://fitness-elite.eu" target="_blank" rel="noopener noreferrer" class="md:w-1/2">
                    <Card class="border-none bg-background hover:shadow-lg">
                        <CardHeader />
                        <CardContent>
                            <h3 class="font-semibold">
                                Fitness Elite
                            </h3>
                            <p>
                                Unleash your full potential
                                with the all in one coaching
                                ”ELITE EVOLUTION”
                            </p>
                        </CardContent>
                    </Card>
                </a>
            </div> -->
        </section>
    </main>
    <footer class=" text-muted-foreground">
        <div class="justify-center p-4 text-center md:flex">
            <p>Lets get in touch:</p>
            <a href="mailto:musterlabs@mailbox.org" class="ml-2 text-primary">musterlabs[at]mailbox.org</a>
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
