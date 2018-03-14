<template>
    <main class="start-theme-page">
        <div class="container">
            <div class="row">
                <div class="col-12 pb-3 pt-3">
                    <h1>Start Theme</h1>

                    <div class="col-12 pt-5 pb-5">
                        <StartThemeBlock/>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import UnysonComponentsList from '../components/UnysonComponentsList'
    import StartThemeBlock from '../components/StartThemeBlock'

    export default {
        components: {
            UnysonComponentsList, StartThemeBlock
        }
    }
</script>
