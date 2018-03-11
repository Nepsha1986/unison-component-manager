<template>
    <div class="components-list">
        <h2 class="mb-3">Components List</h2>

        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center mb-1" v-for="component in components">
                {{ component.name }}

                <div class="btn-wrap">
                    <a class="btn btn-info" :href="component.html_url" target="_blank">More info</a>
                    <a class="btn btn-primary" :href="'https://github.com/unyson-framework-components/'+ component.name + '/archive/master.zip' " download>Download</a>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                components: []
            }
        },

        beforeCreate() {
            axios.get('https://api.github.com/users/unyson-framework-components/repos').then( response => {
                this.components = response.data;
                console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });

        }
    }
</script>

<style>
</style>
