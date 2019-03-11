# Dev-Agit

## Intro
It is a kind of development tool like Agit to assist developers, designers and team leaders.  

We want to quantify the development contents and implement the following functions for more secure, highly efficient development.

* Resource Management
* Schedule Management
* Real-time update
* Various charts
* Workflow
* Web Push
* chatting
* message

As we practice this project, we expect to be familiar with React, Mobx, Scss, socket.io, and D3.

## Development Environment
Dev-Aigt created by react-create-app.

* React
* Mobx
* Scss

## Useage
```code
-- clone repository
git clone https://github.com/LeadJockey/project-dev-agit

-- move on your directory
npm i 

-- edit hosts file
sudo vi /etc/hosts

-- add localhost alias ( for goole login : must need domain name / not IP)
    0.0.0.0       local.dev.agit.com 
(or 127.0.0.1     local.dev.agit.com)

-- start dev server
npm start
```

## netlify
`https://zealous-volhard-b5692f.netlify.com`

## Directory Structure
```code
  public
  src
    + api         // for Data refining
    + assets      // scss styling
    + components  // components
    + languages   // static text 
    + layouts     // loyout components
    + routes      // routers, page compoents
    + stores      // actions, extends api methods
    + util        // functional utils
```

## Conventions
* css naming : underscore case
* component > return wrap element classname : comp_{component's name}
* git commit massage : (CREATE | UPDATE | REMOVE | FIX | TEST) + (fileName | componentName | functionName)

## References
* [dev-agit git repository](https://github.com/LeadJockey/project-dev-agit)
* [font icon :themify](https://themify.me/themify-icons)
* [anitmation/chart : d3 docs](https://github.com/d3/d3/wiki)
* [authentication : react-google-login](https://www.npmjs.com/package/react-google-login)


