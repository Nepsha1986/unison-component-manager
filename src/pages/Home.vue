<template>
    <main class="homepage">
        <div class="jumbotrone">
            <div class="container pb-3 pt-3">
                <div class="row align-items-center justify-content-center mb-5">
                    <div class="col-md-4 text-center mb-3">
                            <i class="fab fa-wordpress"></i>
                    </div>

                    <div class="col-md-2 mb-3">
                        <i class="fas fa-plus"></i>
                    </div>

                    <div class="col-md-6 text-center">
                        <h2 class="info-text">Unyson Framework,<br>Start Theme<br>&<br>Components Manager</h2>
                    </div>
                </div>

                <div class="row">
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

<style lang="scss" >
    .homepage {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .jumbotrone {
        overflow: hidden;
        background-size: cover;

        .fa-wordpress {
            max-width:250px;
            width: 100%;
            height: auto;
            color: #656769;

            @media (min-width: 768px) {
                max-width:350px;
            }
        }

        .fa-plus {
            width: 100%;
            max-height: 60px;
            height: auto;
            color: #656769;
        }

        .info-text {
            font-size: 1.8rem;
            text-align: center;
            color: #17a2b8;
            display: inline-block;

            @media (min-width: 992px) {
                font-size: 2.8rem;
            }
        }
    }
</style>