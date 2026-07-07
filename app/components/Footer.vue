<script setup lang="tsx">
import { Button } from "@/components/ui/button";

const runtimeConfig = useRuntimeConfig();

type ButtonData =
	| {
		type: "text";
		text: string;
	}
	| {
		type: "link";
		text: string;
		to: string;
	};

type FooterSection = {
	name: string;
	buttons: ButtonData[];
};

const FOOTER_DATA: FooterSection[] = [
	{
		name: "Contacts",
		buttons: [
			{
				type: "link",
				to: "https://discord.com/users/597360430830059520",
				text: "Discord",
			},
			{
				type: "link",
				to: "https://t.me/khaomi",
				text: "Telegram",
			},
		],
	},
	{
		name: "Social",
		buttons: [
			{
				type: "link",
				to: "https://bsky.app/profile/khaomi.bsky.social",
				text: "Bluesky",
			},
			{
				type: "link",
				to: "https://twitter.com/KhaomiAvali",
				text: "Twitter",
			},
		],
	},
	{
		name: "Other",
		buttons: [
			{
				type: "link",
				to: "mailto:me+website@khaomi.dev",
				text: "Mail",
			},
			{
				type: "link",
				to: "https://linktr.ee/Khaomi",
				text: "Linktree",
			},
		],
	},
];
</script>

<template>
	<div class="flex flex-col h-full">
		<!-- The button -->
		<div class="flex grow justify-center">
			<!-- prose lg:prose-l  -->
			<div v-for="section in FOOTER_DATA" class="flex flex-col mx-4">
				<span class="px-2">
					{{ section.name }}
				</span>
				<div v-for="button in section.buttons" class="pb-2">
					<!-- <MyButton :data="button" /> -->
					<span v-if="button.type === 'text'">{{ button.text }}</span>
					<Button v-else-if="button.type === 'link'" variant="link" as-child>
						<NuxtLink :to="button.to">{{ button.text }}</NuxtLink>
					</Button>
					<div v-else />
				</div>
			</div>
		</div>
		<!-- The text at the bottom -->
		<div class="flex justify-center items-center">
			<span>Website made with ❤️ by Khaomi</span>
			<span class="pl-3">|</span>
			<div>
				<div v-if="runtimeConfig.public.isStaging" class="pl-3">
					Staging
				</div>
				<Button variant="link" as-child v-else>
					<NuxtLink
						:to="(runtimeConfig.public.commit ? runtimeConfig.public.repository + '/commit/' + runtimeConfig.public.commit : runtimeConfig.repository) as string">
						{{ "Commit " + (runtimeConfig.public.commit ?? "unknown") }}
					</NuxtLink>
				</Button>
			</div>
		</div>
	</div>
</template>