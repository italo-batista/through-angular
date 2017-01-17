/**
 * Created by italohmb on 17/01/17.
 */

var app = angular.module("myApp", []);


/**
app.config(function($stateProvider, $urlRouterProvider, $cssProvider) {

    $urlRouterProvider
        .when('', '/')

        .when(/(\/(?:[a-z]+_)+[a-z]{2})\/?$/, function($match) {
            return $match[1] + '/requisitos'
        })

        .otherwise('/404')

    $stateProvider
        .state('home', {
            url: '/',
            css: 'app/views/home.css',
            templateUrl: 'app/views/home.html'
        })

        .state('equipe', {
            url: '/equipe',
            css: 'app/views/curso.css',
            templateUrl: 'app/views/equipe.html',
            controller: 'equipe'
        })

        .state('blog', {
            url: '/blog?post',
            params: { color: null, page: 1 },
            css: 'app/views/blog.css',
            templateUrl: 'app/views/blog.html',
            controller: 'blog'
        })

        .state('not-found', {
            url: '/404',
            css: 'app/views/not-found.css',
            templateUrl: 'app/views/not-found.html'
        })

    angular.extend($cssProvider.defaults, {
        persist: true,
        preload: true
    })
});
 */
