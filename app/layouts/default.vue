<template>
    <div>
        <!-- Incase we want to add fixed bg or something that don't need p-1, so we put it here lmao -->
        <div class="flex flex-col min-h-screen min-w-screen p-2 ">
            <nav>
                <Header />
            </nav>
            <main class="grow">
                <slot />
            </main>
            <footer class="h-[8rem]">
                <Footer />
            </footer>
        </div>
    </div>
</template>
