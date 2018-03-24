<template>
    <div id="app">
        <div class="wrap" :class="{ 'shifted': navigationIsActive }">
            <MainHeader
                    :navigationIsActive="navigationIsActive"
                    @onClickNavBtn = "toggleNavigation"
            />
            <router-view></router-view>
            <MainFooter/>
        </div>

        <MainNavigation
                :navigationIsActive="navigationIsActive"
                @onClickNavBtn = "toggleNavigation"
        />
    </div>
</template>

<script>
    import MainHeader from './components/MainHeader.vue'
    import MainFooter from './components/MainFooter.vue'
    import MainNavigation from './components/MainNavigation.vue'
    import router from './router'

    export default {
        name: 'App',

        data() {
            return {
                navigationIsActive: false
            }
        },

        components: {
            MainHeader, MainFooter, MainNavigation
        },

        methods: {
            toggleNavigation() {
                this.navigationIsActive == false ? this.navigationIsActive = true : this.navigationIsActive = false;
            },

            closeNavigation() {
                this.navigationIsActive = false;
            }
        },

        beforeCreate(){
            let self = this;

            router.afterEach(function () {
                self.closeNavigation();
            })
        }
    }
</script>

<style lang="scss">
    body {
        overflow-x: hidden;
    }
    
    main {
        min-height: calc(100vh - 128px);
    }

    .wrap {
        position: relative;
        left: 0;
        transition: .25s;

        &.shifted {
            left: 300px;
        }
    }
</style>
