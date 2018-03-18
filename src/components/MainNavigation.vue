<template>
    <div class="main-navigation-wrapper" :class="{ 'is-active': navigationIsActive }">
        <header>
            <h2>UCLM</h2>
        </header>

        <nav class="main-navigation">
            <ul>
                <li class="main-navigation-item">
                    <router-link to="/"><i class="fa fa-home"></i>Home</router-link>
                </li>

                <li class="main-navigation-item">
                    <router-link to="/components"><i class="far fa-list-alt"></i>Components</router-link>
                </li>

                <li class="main-navigation-item">
                    <router-link to="/start-theme"><i class="fas fa-cloud-download-alt"></i>Start Theme</router-link>
                </li>

                <li class="main-navigation-item">
                    <router-link to="/documentation"><i class="fas fa-book"></i>Documentation</router-link>
                </li>
            </ul>
        </nav>

        <footer>
            <div class="contacts">
                <ul>
                    <li>
                        <a href="https://github.com/Nepsha1986"><i class="fab fa-github"></i> Alex Nepsha</a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        props: ['navigationIsActive']
    }
</script>

<style lang="scss">
    .main-navigation-wrapper {
        display: flex;
        flex-flow: column wrap;
        position: fixed;
        height: 100%;
        width: 300px;
        top: 0;
        left: -300px;
        background: #2b3f53;
        transition: .25s;

        .main-navigation {
            padding: 3rem 0;
        }

        a {
            color: #fff;

        }

        .main-navigation-item {
            margin-bottom: 7px;

            svg {
                margin-right: 7px;
            }

            a {
                position: relative;
                left: 0;
                transition: .3s;

                &:hover {
                    text-decoration: none;
                    text-shadow: 0 0 3px #fff;
                }
            }

            .router-link-exact-active {
                left: -7px;
                text-shadow: 0 0 3px #fff;
            }
        }

        ul {
            list-style: none;
        }

        &.is-active {
            left: 0;
        }

        header {
            text-align: center;
            padding: 1rem;
            color: #fff;
            border-bottom: 2px solid #ababab;

            h2 {
                margin-bottom: 0;
            }
        }

        footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            left: 0;
            border-top: 2px solid #ababab;
            padding: 1rem 0;

            ul {
                margin-bottom: 0;
            }
        }
    }
</style>