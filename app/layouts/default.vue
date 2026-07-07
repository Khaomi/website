<template>
    <ColorScheme placeholder="dark" tag="div">
        <!-- Incase we want to add fixed bg or something that don't need p-1, so we put it here lmao -->
        <div class="flex flex-col min-h-screen min-w-screen p-2 ">
            <div>
                <Header />
            </div>
            <main class="grow">
                <slot />
            </main>
            <footer class="h-[8rem]">
                <Footer />
            </footer>
        </div>
    </ColorScheme>
</template>
