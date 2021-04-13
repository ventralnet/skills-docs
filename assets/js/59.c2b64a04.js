(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{460:function(t,e,i){"use strict";i.r(e);var s=i(43),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"projects"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#projects"}},[t._v("#")]),t._v(" Projects")]),t._v(" "),i("p",[t._v("A Project is an overall container that represents the skills ruleset for a single application with gamified training.\nProject's administrator(s) manage skill definitions, subjects, levels, dependencies and other attributes that make up an application's training profile.")]),t._v(" "),i("p",[t._v("Creating a project is simple, all you need is a name. While the project id is required, it will be automatically generated (you can optionally override the generated id).")]),t._v(" "),i("p",[t._v("A Project is composed of Subjects which are made up of Skills and a single skill defines a training unit within the gamification framework.\nOnce the project is created you have an empty canvas on which to compose and manage your application's training profile.\nGenerally the next step is to create a number of Subjects and then start constructing Skill definitions within those Subjects.")]),t._v(" "),i("p",[t._v("The Dashboard user that creates a project is automatically granted the role of administrator of that project. Project administrators enjoy the following benefits:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Explanation")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("RouterLink",{attrs:{to:"/dashboard/user-guide/subjects.html"}},[t._v("Subjects")])],1),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Add, edit or remove Subjects")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("RouterLink",{attrs:{to:"/dashboard/user-guide/skills.html"}},[t._v("Skills")])],1),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Add, edit or remove Skill definitions")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("RouterLink",{attrs:{to:"/dashboard/user-guide/access-management.html"}},[t._v("Access Management")])],1),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Assign or remove Project's administrators")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("RouterLink",{attrs:{to:"/dashboard/user-guide/badges.html"}},[t._v("Badges")])],1),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Add, edit or remove Project's Badges")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("RouterLink",{attrs:{to:"/dashboard/user-guide/levels.html"}},[t._v("Levels")])],1),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Customize number of Levels and their attributes")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("RouterLink",{attrs:{to:"/dashboard/user-guide/dependencies.html"}},[t._v("Dependencies")])],1),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Specify the order of Skills completion. For example Skill A must be completed before Skill B can be attempted")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("a",{attrs:{href:"/dashboard/user-guide/cross-project-deps.htm"}},[t._v("Cross-project Dependencies")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Create and manage Skill dependencies across multiple Projects which practically equates to cross-application Skills")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Stats")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Charts and graph. These are page specific - Project, Subject, Badge, and User will have stats specifically for those pages")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("RouterLink",{attrs:{to:"/dashboard/user-guide/projects.html#settings"}},[t._v("Settings")])],1),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Project level settings")])])])]),t._v(" "),i("h2",{attrs:{id:"settings"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),i("p",[t._v("To manage and view project-wide settings navigate to "),i("code",[t._v("Project -> Settings")]),t._v(". The following project-level settings are available:")]),t._v(" "),i("h4",{attrs:{id:"setting-production-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-production-mode"}},[t._v("#")]),t._v(" Setting: Production Mode "),i("since",{attrs:{project:"skills-service",version:"1.4.0"}})],1),t._v(" "),i("p",[t._v("Enabling "),i("code",[t._v("Production Mode")]),t._v(" signals to the SkillTree platform that the project is fully operational.")]),t._v(" "),i("p",[t._v("Switching the mode to "),i("code",[t._v("true")]),t._v(" will:")]),t._v(" "),i("ul",[i("li",[t._v("Make this project visible in the "),i("code",[t._v("Progress and Ranking")]),t._v(" page for all SkillTree users")])]),t._v(" "),i("h4",{attrs:{id:"setting-use-points-for-levels"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-use-points-for-levels"}},[t._v("#")]),t._v(" Setting: Use Points For Levels")]),t._v(" "),i("p",[i("code",[t._v("Use Points For Levels")]),t._v(" - switch between two level management strategies:")]),t._v(" "),i("ol",[i("li",[t._v("Percentage based - levels are calculated based on configured percentages of total available points (ex. Level 1 = 10% of total points)")]),t._v(" "),i("li",[t._v("Point based - project admins specify start and end point values for each level")])]),t._v(" "),i("p",[t._v("By default the Percentage based strategy is configured, changing the "),i("code",[t._v("Use Points For Levels")]),t._v(" setting to "),i("code",[t._v("true")]),t._v(" enables Point Based explicit level point management. To learn more please see the "),i("RouterLink",{attrs:{to:"/dashboard/user-guide/levels.html"}},[t._v("Levels")]),t._v(" section.")],1),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("p",[t._v("You must define at least 100 points for a project before switching to point-based levels management")])]),t._v(" "),i("h4",{attrs:{id:"setting-root-help-url"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-root-help-url"}},[t._v("#")]),t._v(" Setting: Root Help Url")]),t._v(" "),i("p",[t._v("Skill definition's "),i("code",[t._v("Help Url/Path")]),t._v(" will be treated relative to this "),i("code",[t._v("Root Help Url")]),t._v(". For example, if")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("Root Help Url")]),t._v(" =  "),i("code",[t._v("http://www.myHelpDocs.com")])]),t._v(" "),i("li",[t._v("and a Skill definition's "),i("code",[t._v("Help Url")]),t._v(" = "),i("code",[t._v("/important/article")])])]),t._v(" "),i("p",[t._v("then the client display will concatenate "),i("code",[t._v("Root Help Url")]),t._v(" and  "),i("code",[t._v("Help Url")]),t._v(" to produce "),i("code",[t._v("http://www.myHelpDocs.com/important/article")]),t._v(".")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("If a Skill's "),i("code",[t._v("Help Url")]),t._v(" starts with "),i("code",[t._v("http")]),t._v(" or "),i("code",[t._v("https")]),t._v(" then "),i("code",[t._v("Root Help Url")]),t._v(" will NOT be utilized.")])]),t._v(" "),i("p",[t._v("If a Skill's "),i("code",[t._v("Help Url")]),t._v(" is blank then no url will be displayed even if "),i("code",[t._v("Root Help Url")]),t._v(" is configured.\nIn other words "),i("code",[t._v("Root Help Url")]),t._v(" only works in conjunction with a Skill's "),i("code",[t._v("Help Url")]),t._v(".")]),t._v(" "),i("h4",{attrs:{id:"setting-self-report-default"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-self-report-default"}},[t._v("#")]),t._v(" Setting: Self Report Default "),i("since",{attrs:{project:"skills-service",version:"1.4.0"}})],1),t._v(" "),i("p",[t._v("By default, Self Reporting is disabled when creating or modifying a skill.\nIf your project primarily consists of Self Reported skills, enabling Self Report Default will result in\nthe selected Self Report Approval type being the default for any skills created after this point")]),t._v(" "),i("p",[t._v("Please visit "),i("RouterLink",{attrs:{to:"/dashboard/user-guide/self-reporting.html"}},[t._v("Self Report")]),t._v(" section to learn further.")],1)])}),[],!1,null,null,null);e.default=a.exports}}]);