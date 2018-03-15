<template>
    <main class="homepage">
        <div class="jumbotrone">
            <div class="container pb-3 pt-3">
                <div class="row align-items-center justify-content-center">
                    <div class="col-4">
                            <i class="fab fa-wordpress"></i>
                    </div>

                    <div class="col-1">
                        <i class="fas fa-plus"></i>
                    </div>

                    <div class="col-6">
                        <h2 class="info-text">Unyson Framework,<br>Start Theme<br>&<br>Components Manager</h2>
                    </div>

                    <div class="col-12 text-center">
                        <h3>Build your website fast and easy</h3>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                image: './assets/logo.png'
            }
        }
    }
</script>

<style lang="scss">
    .jumbotrone {
        height: 450px;
        overflow: hidden;
        background-size: cover;

        .fa-wordpress {
            width: 100%;
            height: auto;
            color: #656769;
        }

        .fa-plus {
            width: 100%;
            height: auto;
            color: #656769;
        }

        .info-text {
            text-align: center;
            font-size: 3.2rem;
            color: #17a2b8;
            display: inline-block;
        }
    }
</style>