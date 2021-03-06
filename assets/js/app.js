var menu = new Vue({
  el: '#menu',
  data: {
    menu:[
      {name:"Home", url:"index.html"},
      {name:"Calls", url:"#", children:[
       { name:"Call for Papers", url:"call-for-papers.html"},
       { name:"Graduate Colloquium", url:"graduate-colloquium.html"},
       { name:"Posters Track", url:"call-for-posters.html"},
       { name:"Student Design Competition", url:"student-design-competition.html"},
       { name:"Workshops and Tutorials", url:"workshops.html"},
      ]},
      {name:"Committees", url:"committees.html"},
      {name:"Speakers", url:"index.html"},
      {name:"Program", url:"index.html"},
      {name:"Registration", url:"index.html"},
      {name:"Venue", url:"venue.html"},
    ]
  },
  template: `
    <ul class="navbar-nav ml-auto" id="menu">
      <li class="dropdown nav-item" v-for="item in menu" v-cloak>
        <a v-if="item.children"  v-bind:['href']="item.url" class="dropdown-toggle nav-link" data-toggle="dropdown">
          {{ item.name }}
        </a>
        <a v-if="!item.children"  v-bind:['href']="item.url" class=" nav-link">
          {{ item.name }}
        </a>
        <div class="dropdown-menu dropdown-with-icons">
          <a v-for="subitem in item.children" v-bind:['href']="subitem.url" class="dropdown-item">
            {{subitem.name}}
          </a>
        </div>
      </li>
    </ul>`
  })

