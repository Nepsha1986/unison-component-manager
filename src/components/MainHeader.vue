<template>
    <header class="main-header">
        <div class="container-fluid">
            <div v-if="!navigationIsActive" class="mobile-btn" @click="$emit('onClickNavBtn')">
                <i class="fas fa-bars"></i>
            </div>

            <div class="logo">
                <h1><router-link to="/">UCLM</router-link></h1>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                navIsVisible: false
            }
        },

        props: [ 'navigationIsActive']
    }
</script>

<style lang="scss">
    .main-header {
        background: #007bff;
        color: #fff;

        .container-fluid {
            padding: 1rem 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        h1 {
            margin-bottom: 0;
            line-height: 1em;

            a {
                color: #fff;
                transition: .3s;

                &:hover {
                    text-decoration: none;
                    text-shadow: 0 0 3px #fff;
                }

                &:after {
                  display: none !important;
                }
            }
        }

        .fa-bars {
            width: 32px;
            height: 32px;
        }

        .mobile-btn {
            cursor: pointer;
        }
    }
</style>
