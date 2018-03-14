<template>
    <div class="main-footer">
        <div class="container">
            <p>I <i class="fas fa-heart"></i> <a href="http://unyson.io/" target="_blank">Unyson Framework</a></p>
        </div>
    </div>
</template>

<style lang="scss">
    .main-footer {
        padding-top: 1rem;
        padding-bottom: 1rem;
        color: #fff;
        background: #007bff;

        p {
            margin-bottom: 0;
        }

        a {
            color: inherit;

            &:hover {
                opacity: .7;
                text-decoration: none;
            }
        }

        .fa-heart {
            color: #d62a2a;
        }
    }
</style>