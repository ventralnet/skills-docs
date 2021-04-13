(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{383:function(e,t,i){e.exports=i.p+"assets/img/Screenshot_SkillsDisplay_SelfReport_20210403.efeed69c.png"},461:function(e,t,i){"use strict";i.r(t);var o=i(43),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"self-report"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#self-report"}},[e._v("#")]),e._v(" Self Report "),o("since",{attrs:{project:"skills-service",version:"1.4.0"}})],1),e._v(" "),o("p",[e._v("Self Report is a feature that empowers users to mark skills as completed directly in the SkillTree dashboard OR through the embedded Skills Display component.\nA project administrator can enable "),o("code",[e._v("Self Reporting")]),e._v(" for a skill, set of skills or even all the skills in a project.\nSkills that have been configured with Self Reporting expose an "),o("code",[e._v("I did it")]),e._v(" button, allowing users to self report completion of those skills.")]),e._v(" "),o("p",[e._v("There are two "),o("code",[e._v("Self report")]),e._v(" types available:")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("Honor System")]),e._v(" - points are awarded immediately")]),e._v(" "),o("li",[o("code",[e._v("Approval Queue")]),e._v(" - request goes into the project's approval queue; project administrators can approve or deny requests")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Project administrators can craft training profiles consisting of:")]),e._v(" "),o("ul",[o("li",[e._v("only self-reported skills "),o("em",[e._v("OR")])]),e._v(" "),o("li",[e._v("a mix of self-reported skills and skills that are reported programmatically "),o("em",[e._v("OR")])]),e._v(" "),o("li",[e._v("a project could have no self-reported skills at all")])])]),e._v(" "),o("h2",{attrs:{id:"configuring"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring"}},[e._v("#")]),e._v(" Configuring")]),e._v(" "),o("p",[e._v("Self reporting is enabled and configured for each skill individually.\nWhen creating or editing a skill")]),e._v(" "),o("ol",[o("li",[e._v("select "),o("code",[e._v("Self Reporting")]),e._v(" checkbox")]),e._v(" "),o("li",[e._v("then select "),o("code",[e._v("Self Reporting")]),e._v(" type ("),o("code",[e._v("Approval Queue")]),e._v(" or "),o("code",[e._v("Honor System")]),e._v(")")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("By default, Self Reporting is disabled when creating or modifying a skill.\nIf your project primarily consists of Self Reported skills then you can easily change the default by navigating to the "),o("code",[e._v("Project -> Settings")]),e._v(" tab.\nThere you can enable Self Reporting and select its default type for all the skills that will be created after that point.")])]),e._v(" "),o("p",[e._v("Please see "),o("RouterLink",{attrs:{to:"/dashboard/user-guide/projects.html#setting-self-report-default"}},[e._v("Setting: Self Report Default")])],1),e._v(" "),o("h2",{attrs:{id:"skills-display"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#skills-display"}},[e._v("#")]),e._v(" Skills Display")]),e._v(" "),o("p",[e._v("Once Self Reporting is enabled for a skill, users will see an "),o("code",[e._v("I did it")]),e._v(" button on the Skills Display that will allow them to report the completion of that skill")]),e._v(" "),o("p",[o("img",{attrs:{src:i(383),alt:"img.png"}})]),e._v(" "),o("p",[e._v("Skills and Self Reporting can either be accessed")]),e._v(" "),o("ol",[o("li",[e._v("in the Skills Display component embedded within your application (via "),o("RouterLink",{attrs:{to:"/skills-client/#client-display-integration"}},[e._v("Client Libraries")]),e._v(") "),o("em",[e._v("OR")])],1),e._v(" "),o("li",[e._v("in the "),o("code",[e._v("Progress And Rankings")]),e._v(" display of the Dashboard\n"),o("ul",[o("li",[e._v("Navigate to "),o("code",[e._v("Project and Rankings")]),e._v(" then click on your project's card")]),e._v(" "),o("li",[e._v("Please note that the "),o("code",[e._v("Production Mode")]),e._v(" must be enabled for your project to be visible in the "),o("code",[e._v("Progress And Ranking")]),e._v(" view, please see "),o("RouterLink",{attrs:{to:"/dashboard/user-guide/projects.html#settings"}},[e._v("Setting: Production Mode")])],1)])])]),e._v(" "),o("h2",{attrs:{id:"approval-queue"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#approval-queue"}},[e._v("#")]),e._v(" Approval Queue")]),e._v(" "),o("p",[e._v("If a skill is configured with Self Reporting type of the "),o("code",[e._v("Approval Queue")]),e._v(" then points will not be awarded right away but rather go\nthrough the simple approval workflow:")]),e._v(" "),o("ol",[o("li",[e._v("User click "),o("code",[e._v("I did it")]),e._v(" button and requests points")]),e._v(" "),o("li",[e._v("Request appears on the project's Self Report page (see the Screenshot below)")]),e._v(" "),o("li",[e._v("Project administrator approves or reject requests")])]),e._v(" "),o("h3",{attrs:{id:"notifications"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#notifications"}},[e._v("#")]),e._v(" Notifications")]),e._v(" "),o("p",[e._v("SkillTree will send email base notifications to project's administrators when points are requested, approved or rejected.")]),e._v(" "),o("p",[e._v("Please note, depending on the installation mode, an email sometimes is not available for non-admin users,\nin that case an email notification will not be emitted. This is not an issue in the PKI or Oauth installation modes.\nTo learn more please visit "),o("RouterLink",{attrs:{to:"/dashboard/install-guide/installModes.html"}},[e._v("Installation Modes")]),e._v(" section.\nIf your organization is already running a centralized service then your POC would be able to answer that question.")],1),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("SkillTree "),o("RouterLink",{attrs:{to:"/dashboard/user-guide/users.html#root"}},[e._v("Root Admin")]),e._v(" must configure email notification settings before this feature can work.\nPlease visit the "),o("RouterLink",{attrs:{to:"/dashboard/user-guide/settings.html#email-notifications"}},[e._v("Email Notifications Settings")]),e._v(" to learn more.")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);