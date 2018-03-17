<template>
    <header class="main-header">
        <div class="container">
            <div class="logo">
                <h1><router-link to="/">UCLM</router-link></h1>
            </div>

            <div class="nav">
                <ul class="top-nav">
                    <li class="top-nav-item">
                        <router-link to="/">Home</router-link>
                    </li>

                    <li class="top-nav-item">
                        <router-link to="/components">Components</router-link>
                    </li>

                    <li class="top-nav-item">
                        <router-link to="/start-theme">Start Theme</router-link>
                    </li>

                    <li class="top-nav-item">
                        <router-link to="/documentation">Documentation</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    .main-header {
        background: #007bff;
        color: #fff;

        .container  {
            padding: 1rem 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        a {
            color: #fff;

            &:hover {
                text-decoration: none;
            }
        }

        .router-link-active {
            &.router-link-exact-active {
                &:after {
                    display: block;
                    content: '';
                    height: 2px;
                    margin: 0 auto;
                    background: #fff;
                }
            }
        }

        h1 {
            a {
                &:after {
                  display: none !important;
                }
            }
        }

        .top-nav {
            margin: 0;
            padding: 0;
        }

        .top-nav-item {
            display: inline-block;

            &:not(:last-child) {
                margin-right: 2rem;
            }
        }
    }
</style>
