<template>
    <main class="documentation-page">
        <div class="container">
            <div class="row">
                <div class="col-12 pt-3 pb-3">
                    <div class="content-part pb-2 pt-5">
                        <h2 class="mb-4 text-uppercase">Introduction</h2>

                        <h3>About project</h3>
                        <p>
                            Unyson Components Library Manager(UCLM) - is a tool for web developers, that allows to create websites
                            using CMS <a href="https://wordpress.org/" target="_blank">WordPress</a> and <a href="http://unyson.io/" target="_blank">Unyson Framework</a> qualitatively, easy and fast.
                        </p>

                        <p>Current project - is just a manager of Unyson Page Builder components which are placed in
                            <a href="https://github.com/unyson-framework-components">GitHub repository</a>.</p>

                        <p>Next, the documentation will describe Workflow in more detail. It suggests the most convenient development of a website with
                            using Wordpress, Unison Framework, Unison Based Start Theme and Unison Components Library</p>
                    </div>

                    <div class="content-part pb-2 pt-2">
                        <h2 class="mb-4 text-uppercase" >Getting started</h2>
                        <blockquote class="blockquote">
                            This guide assumes intermediate level knowledge of HTML, CSS, Wordpress, PHP and JavaScript.
                            If you haven’t - grasp the basics then come back!
                        </blockquote>

                        <h4>1.Installing WordPress</h4>
                        <p>First step is to install WordPress. All requirements and full guide of how to do it, you can
                            find following <a href="https://codex.wordpress.org/Installing_WordPress">WordPress official documentation</a>.
                        </p>

                        <h4>2.Download and Activate "Unyson Based Starter Theme"</h4>
                        <p>
                            Go to <router-link to="/start-theme">Unyson Based Start Theme Page</router-link> and download archive with theme.
                            After that you have to install and activate theme.
                        </p>

                        <h4>3.Compile assets</h4>
                        <p>
                            Go to theme folder and run <code>npm install</code> to install all required dependencies.
                            If you've never used NPM before, please read official documentation.
                        </p>

                        <p>After all packages have been installed, run <code>npm run production</code> in your console to compile assets.</p>

                        <p>In development mode you can use <code>npm run dev</code> or <code>npm run watch</code>.
                            All available scripts you can find in <strong>package.json</strong> file in the root of the theme.
                        </p>

                        <h4>5.Install Unyson Framework and activate Visual Builder</h4>
                        <p>
                            The easiest (recommended) way to install the framework, is through the ‘Plugins’ menu:
                            Search for plugin named <strong>Unyson</strong> and click the Install button.
                            More information of Unyson Framework installation you can find on
                            <a href="http://manual.unyson.io/en/latest/index.html#content">Unyson Framework official
                            website.</a>
                            After activation of Unyson Framework you have to go to 'Unyson' tab in admin panel and
                            download and activate <strong>Page Builder</strong>.
                        </p>

                        <h4>6.Choose and activate components</h4>
                        <p>
                            After you've followed steps 1-5, you can start to extend your website by downloading new
                            components(blocks, sections, banners, etc) from Unyson Components Library. To do that you have to go to
                            <router-link to="/components">Components Page</router-link> and download all the components
                            you need on your website and unzip them in <code>unison-based-starter-theme/framework-customizations/extensions/shortcodes/shortcodes/</code> folder.
                            After that run <code>npm run prod</code> command for production or <code>npm run dev</code>
                             for developement mode in the root of Unyson based start theme. This commands will compile
                            all *.scss and *.js files of all components to a single *.css file and *.js file.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

