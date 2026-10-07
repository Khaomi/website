<script setup lang="ts">
const socialLinks = [
  { name: "Discord", url: "https://discord.com/users/597360430830059520" },
  { name: "Telegram", url: "https://t.me/khaomi" },
  { name: "Bluesky", url: "https://bsky.app/profile/khaomi.bsky.social" },
  { name: "X", url: "https://x.com/KhaomiAvali" },
  { name: "Linktree", url: "https://linktr.ee/Khaomi" },
];
</script>

<template>
  <main class="m-0 flex h-screen items-center justify-center p-0">
    <article
      class="group/card flex w-full max-w-md flex-none flex-col gap-6 overflow-hidden rounded-xl bg-card py-6 text-sm text-card-foreground shadow-xs ring-1 ring-foreground/10 sm:max-w-lg md:max-w-xl lg:max-w-2xl"
    >
      <header
        class="group/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-6"
      >
        <h1 class="font-heading text-base leading-normal font-medium">
          Khaomi
        </h1>
      </header>
      <section class="px-6">
        <div class="flex gap-3">
          <img
            src="/khaomi.png"
            width="128"
            height="128"
            alt="Khaomi"
            class="rounded-md object-cover"
          />
          <div class="flex flex-col">
            <div>An Avali currently residing on Earth, in Thailand</div>
            <p>Website is HEAVILY WIP</p>
          </div>
        </div>
      </section>
      <footer class="flex items-center rounded-b-xl px-6">
        <ul class="flex gap-3">
          <li v-for="link in socialLinks" :key="link.name">
            <a
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500 transition-colors hover:text-blue-700"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </footer>
    </article>
  </main>
</template>
