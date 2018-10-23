var baseUrl = document.head.baseURI.replace(window.location.origin, '');

document.body.setAttribute('ng-app', 'UxLibrary')
document.body.setAttribute('ng-controller', 'Main as main')

angular.module('UxLibrary', ['ui.router']);

angular.module('UxLibrary')
  .value('baseUrl', baseUrl)
  .config(config)
  .run(run)
  .provider('router', router)
  .controller('Main', Main);

function config($locationProvider, $urlRouterProvider, routerProvider) {
  $locationProvider.html5Mode(true)
  // $locationProvider.html5Mode({ enabled: true, requireBase: false });
  // $locationProvider.hashPrefix('!');
  // $urlRouterProvider.otherwise('/home');
  routerProvider.setCollectionUrl('/ux-library/api/master');
}
function run($templateCache, $stateRegistry, $state, $rootScope, router) {
  router.setUpRoutes().then(function(collection) {
    // collection.sort(dynamicSortMultiple('hierarchy', 'index'));

    collection.sort(dynamicSort('hierarchy'));

    collection.map(function(page) {
      // page.url = '/ux-library' + state.url;

      $templateCache.put(page.url, page.template);

      if (!$stateRegistry.get(page.text)) {
        $stateRegistry.register(page);
      }
    })

    var pageId = window.location.pathname.replace('/ux-library/','').replace('/','_') || 'home';
    // $rootScope.startState = $stateRegistry.get(pageId);
    $state.go($stateRegistry.get(pageId));
  });
}
function router() {
  var urlCollection;

  this.$get = function($http) {
    return {
      setUpRoutes: function() {
        return $http.get(urlCollection).then(function(result) {
          return result.data;
        });
      }
    }
  }

  this.setCollectionUrl = function(url) {
    urlCollection = url;
  }
}
function Main($rootScope, $scope, $stateRegistry, $state, router, baseUrl) {
  var vm = this;
  vm.navigation = [];
  vm.subPage = {};
  vm.releases = [{text:'2.3.4',location:'/2.3.4/'},{text:'5.6.7',location:'/5.6.7/'}]
  // vm.startState = {};
  vm.currentTopLevel = '';
  vm.state = $state;
  router.setUpRoutes().then(function(collection) {
    var states = vm.state.get();
    states.shift();
    /*vm.startState = $rootScope.startState;
    if (vm.startState && vm.startState.url) {
      vm.currentTopLevel = vm.startState.url.split('/')[1];
    }*/

    states.map(function(state) {
      state.url = baseUrl + state.url.substr(1);
      state.location = state.url;
    });

    var pages = arrToObj(states)[0].children;
    pages.map(function(item) {
      item.index = item.index || 50;
      item.url = item.url || item.children.filter(function(item) { return item.url; })[0].url;
      return item;
    })
    pages.sort(dynamicSort('index'));

    console.log(pages)
    vm.navigation = pages;
    /*vm.navigation.map(function(item) {
      var itemC = JSON.stringify(item);
      var arr = [JSON.parse(itemC)];
      if(item.children.length) {
        item.children = arr.concat(item.children);
        // item.children.push( JSON.parse(itemC) );
      }
    })*/
  });
}
function arrToObj(array) {
  /*var pages = [
    {url:'RootFolder',name:'root'},
    {url:'RootFolder/FolderA',name:'fA'},
    {url:'RootFolder/FolderA/FolderB',name:'fB'}
  ]*/

  var arr = []
  array.map(function(page) {
    var s = page.url.substr(1).split('/')
    var a = arr
    while(s.length){
      var i = s.splice(0, 1)[0];
      //arr.find(function(s){ s.path == i })
      var item = s.length ? {} : page;
      item.path = i;
      item.text = item.text || item.path;
      item.name = item.name || item.path;
      item.children = [];
      //a.push(item)
      var b = a.find(function(s){ return s.path == i });
      if(b && b.children) {
        a = b.children;
      } else {
        a.push(item);
        a = item.children;
      }
      // console.log(i)
    }
  })

  return arr;
}
function compare(a,b) {
  if (a.index < b.index)
    return -1;
  if (a.index > b.index)
    return 1;
  return 0;
}
function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a,b) {
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}
function dynamicSortMultiple() {
  /*
   * save the arguments object as it will be overwritten
   * note that arguments object is an array-like object
   * consisting of the names of the properties to sort by
   */
  var props = arguments;
  return function (obj1, obj2) {
    var i = 0, result = 0, numberOfProperties = props.length;
    /* try getting a different result from 0 (equal)
     * as long as we have extra properties to compare
     */
    while(result === 0 && i < numberOfProperties) {
      result = dynamicSort(props[i])(obj1, obj2);
      i++;
    }
    return result;
  }
}
function setCurrent() {
  // We use this to delay setting the active attribute
  // As well as being able to find the dome node.
  return {
    restrict : 'A',
    link: function(scope, element, attrs) {
      setTimeout(function() {
        // element[0].setAttribute('active', scope.active);
        var navItem = element[0].querySelector('a[href="/ux-library' + (scope.$parent.main.startState || {}).url + '"]')
        console.log(scope.$parent.main.subPage)
        if (navItem) {
          navItem.parentNode.active = true;
          scope.$parent.main.subPage = navItem.parentNode.children.map(function(item) { return item.active })[0] || navItem.parentNode.children[0];
        }
      });
    }
  };
}