<script setup lang="tsx">
const runtimeConfig = useRuntimeConfig();

type ButtonData = {
    type: "text",
    text: string
} | {
    type: "link",
    text: string,
    to: string,
};

type FooterSection = {
    name: string,
    buttons: ButtonData[]
}

const MyButton = ({ data: data }: { data: ButtonData }) => {
    switch (data.type) {
        case "text": {
            return <div>{data.text}</div>
        }
        case "link": {
            return <NuxtLink to={data.to}>{data.text}</NuxtLink>
        }
        default: {
            return <></>
        }
    }
}

const FOOTER_DATA: FooterSection[] =
    [
        {
            "name": "Contacts",
            "buttons": [
                {
                    "type": "link",
                    "to": "https://discord.com/users/597360430830059520",
                    "text": "Discord"
                },
                {
                    "type": "link",
                    "to": "https://t.me/khaomi",
                    "text": "Telegram"
                }
            ]
        },
        {
            "name": "Social",
            "buttons": [
                {
                    "type": "link",
                    "to": "https://bsky.app/profile/khaomi.bsky.social",
                    "text": "Bluesky"
                },
                {
                    "type": "link",
                    "to": "https://twitter.com/KhaomiAvali",
                    "text": "Twitter"
                },
            ]
        },
        {
            "name": "Other",
            "buttons": [
                {
                    "type": "link",
                    "to": "mailto:me+website@khaomi.dev",
                    "text": "Mail"
                },
                {
                    "type": "link",
                    "to": "https://linktr.ee/Khaomi",
                    "text": "Linktree"
                }
            ]
        }
    ] 
</script>

<template>
    <div class="flex flex-col h-full">
        <!-- The button -->
        <div class="flex grow justify-center">
            <div v-for="section in FOOTER_DATA" class="prose lg:prose-l flex flex-col mx-4">
                <h5>
                    {{ section.name }}
                </h5>
                <div v-for="button in section.buttons" class="pb-2">
                    <MyButton :data="button" />
                </div>
            </div>
        </div>
        <!-- The text at the bottom -->
        <div class="flex justify-center content-center">
            Website made with ❤️ by Khaomi |
            <div class="px-1">
                <div v-if="runtimeConfig.public.isStaging">
                    Staging
                </div>
                <NuxtLink v-else
                    :to="(runtimeConfig.public.commit ? runtimeConfig.public.repository + '/commit/' + runtimeConfig.public.commit : runtimeConfig.repository) as string">
                    {{ "Commit " + (runtimeConfig.public.commit ?? "unknown") }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>