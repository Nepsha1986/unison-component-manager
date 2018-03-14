<template>
    <main class="components-page">
        <div class="container">
            <div class="row">
                <div class="col-12 pt-5 pb-5">
                    <UnysonComponentsList/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import UnysonComponentsList from '../components/UnysonComponentsList'

    export default {
        components: {
            UnysonComponentsList
        }
    }
</script>