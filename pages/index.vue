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
        <div class="my-8 flex justify-center">
            <h1 class="text-3xl text-primary">
                Your one stop solution for all things tech.
            </h1>
        </div>
        <section class="flex justify-center lg:px-20">
            <p>
                Hi, my name is Marco. I am a software engineer and I love to build things. I am passionate about
                technology and I love to share my knowledge with others. I created this website to share my projects
                and
                ideas with you. I hope you find it useful and inspiring. Enjoy!
            </p>
        </section>
        <section class="my-8 flex justify-center lg:px-20">
            <div>
                <h2 class="mb-2 text-2xl text-primary">
                    Past and current Projects
                </h2>
                <div class="flex flex-col items-center gap-5 md:flex-row">
                    <a
                        href="https://github.com/enubia/ghost-chat" target="_blank" rel="noopener noreferrer"
                        class="hover:shadow-lg"
                    >
                        <Card>
                            <CardHeader>
                                <div class="flex justify-center">
                                    <img src="/images/ghostchat.png" alt="Ghost Chat" class="size-40">
                                </div>
                            </CardHeader>
                            <CardContent>
                                <h3 class="font-semibold">
                                    Ghost Chat
                                </h3>
                                <p>
                                    A standalone, multiplatform Twitch.tv chat as overlay on windowed/windowed
                                    fullscreen
                                    applications.
                                </p>
                            </CardContent>
                            <CardFooter />
                        </Card>
                    </a>
                    <a
                        href="https://donate-gifts.com" target="_blank" rel="noopener noreferrer"
                        class="hover:shadow-lg"
                    >
                        <Card>
                            <CardHeader>
                                <div class="flex justify-center">
                                    <img src="/images/donategifts.png" alt="DonateGifts" class="size-40">
                                </div>
                            </CardHeader>
                            <CardContent>
                                <h3 class="font-semibold">
                                    DonateGifts
                                </h3>
                                <p>
                                    A standalone, multiplatform Twitch.tv chat as overlay on windowed/windowed
                                    fullscreen
                                    applications.
                                </p>
                            </CardContent>
                            <CardFooter />
                        </Card>
                    </a>
                </div>
                <div class="mt-5 flex flex-col items-center gap-5 md:flex-row">
                    <a
                        href="https://fitness-elite.eu" target="_blank" rel="noopener noreferrer"
                        class="hover:shadow-lg"
                    >
                        <Card>
                            <CardHeader>
                                <div class="flex justify-center">
                                    <img src="/images/fitness-elite.webp" alt="Fitness Elite" class="w-full">
                                </div>
                            </CardHeader>
                            <CardContent>
                                <h3 class="font-semibold">
                                    Fitness Elite
                                </h3>
                                <p>
                                    UNLEASH YOUR FULL POTENTIAL
                                    WITH THE ALL IN ONE COACHING
                                    ”ELITE EVOLUTION”
                                </p>
                            </CardContent>
                            <CardFooter />
                        </Card>
                    </a>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="justify-center p-4 text-center md:flex">
            <p>Lets get in touch:</p>
            <a href="mailto:musterlabs@mailbox.org" class="ml-2 text-primary">musterlabs[at]mailbox.org</a>
        </div>
        <div class="mb-4 text-center md:mb-0">
            <p>
                &copy; {{ new Date().getFullYear() }} Musterlabs. All rights reserved.
            </p>
            <a href="https://github.com/enubia" target="_blank" rel="noopener noreferrer">
                <Icon name="mdi:github" class="size-10 text-secondary hover:text-primary" />
            </a>
            <a href="https://www.linkedin.com/in/marco-schuster-37b70a140/" target="_blank" rel="noopener noreferrer">
                <Icon name="mdi:linkedin" class="size-10 text-secondary hover:text-primary" />
            </a>
        </div>
    </footer>
</template>

<style scoped></style>
