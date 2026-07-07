<template>
    <!-- Incase we want to add fixed bg or something that don't need p-1, so we put it here lmao -->
    <div class="flex flex-col min-h-screen min-w-screen p-3">
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
</template>
