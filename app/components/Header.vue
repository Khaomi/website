<script setup lang="ts">
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from '@/components/ui/navigation-menu'

const colorMode = useColorMode();

const COLOR_LIST = ["system", "dark", "light"];

const TO_TITLE = (str: string) => { const s = str.split(""); return s[0]?.toUpperCase() + s.slice(1).join("") }
</script>

<template>
    <NavigationMenu :viewport="false">
        <div class="w-1/8">
            <NavigationMenuList>
            </NavigationMenuList>
        </div>
        <div class="grow">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <NuxtLink to="/">Home</NuxtLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <NuxtLink to="/project">Project</NuxtLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <NuxtLink to="/gallery">Gallery</NuxtLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </div>
        <div class="w-1/8">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Theme: {{ TO_TITLE(colorMode.preference) }}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul class="grid w-[200px] gap-4">
                            <li>
                                <NavigationMenuLink as-child v-for="value in COLOR_LIST">
                                    <button v-on:click="colorMode.preference = value">{{ TO_TITLE(value) }}</button>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </div>
    </NavigationMenu>
</template>