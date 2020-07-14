(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{382:function(e,t,a){"use strict";a.r(t);var n=a(43),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installation-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-modes"}},[e._v("#")]),e._v(" Installation Modes")]),e._v(" "),a("p",[e._v("The Skill Tree dashboard application supports two separate modes of authentication.  The dashboard can be configured for password based authentication, "),a("em",[e._v("or")]),e._v(", PKI based authentication.")]),e._v(" "),a("h2",{attrs:{id:"password-auth-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#password-auth-mode"}},[e._v("#")]),e._v(" Password Auth Mode")]),e._v(" "),a("p",[e._v('When configured for password based authentication, users will need to manually create a Skill Tree account by clicking on the "Sign Up" link on the main login page.  After creating an account, users can login using the username and password that was used when creating the account.')]),e._v(" "),a("p",[e._v("Password Auth Mode is enabled by default, or can be explicitly enabled by setting the following property:")]),e._v(" "),a("p",[a("code",[e._v("skills.authorization.authMode=FORM")])]),e._v(" "),a("h3",{attrs:{id:"oauth-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oauth-support"}},[e._v("#")]),e._v(" OAuth Support")]),e._v(" "),a("p",[e._v("When using Password Auth Mode, the dashboard can also support OAuth2 based authentication.  Currently, OAuth2 is only supported for Google and GitHub user accounts.  Google and/or GitHub login buttons get automatically added to the Login page when configured.  To configure, you will need a client ID and client Secret credentials.  These credentials can be created and managed through the providers OAuth management pages found here: "),a("a",{attrs:{href:"https://console.developers.google.com/apis/credentials",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Once the client ID and secret are setup, they are enabled by adding the following configuration to the application.yml file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  security:\n    oauth2:\n      client:\n        registration:\n          google:\n            client-id: <Google client id here>\n            client-secret: <Google client secret here>\n            redirectUriTemplate: 'http://localhost:8080/{action}/oauth2/code/{registrationId}'\n            iconClass: fab fa-google\n          github:\n            client-id: <GitHub client id here>\n            client-secret: <GitHub client secret here>\n            redirectUriTemplate: 'http://localhost:8080/{action}/oauth2/code/{registrationId}'\n            iconClass: fab fa-github\n")])])]),a("p",[e._v("Note: Replace localhost:8080 with the actual hostname and port where the Skill Tree dashboard is running.")]),e._v(" "),a("p",[e._v("Excluding either one of the Google or GitHub configuration sections will prevent the respective OAuth login button from being added to the Login page.")]),e._v(" "),a("h2",{attrs:{id:"pki-auth-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pki-auth-mode"}},[e._v("#")]),e._v(" PKI Auth Mode")]),e._v(" "),a("p",[e._v("When configured for PKI based authentication, the user's browser must be setup with a personal PKI certificate and that certificate must be issued by a Certificate Authority trusted in the dashboard application's truststore.")]),e._v(" "),a("p",[e._v("To enable PKI Auth Mode, set the following configuration property:\n"),a("code",[e._v("skills.authorization.authMode=PKI")])]),e._v(" "),a("p",[e._v('Additionally, the dashboard must be configured with an external "User Info Service".  The User Info Service will need to provide REST based endpoints that can return user information for the client certificate\'s Distinguished Name (DN).  The User Info Service is configured by adding the following configuration properties:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('skills.authorization.userInfoUri=http://localhost:9090/userInfo?dn={dn}"\nskills.authorization.userQueryUri=http://localhost:9090/userQuery?query={query}"\nskills.authorization.userInfoHealthCheckUri=http://localhost:9090/actuator/health\n')])])]),a("p",[e._v("Note: Replace localhost:9090 with the actual hostname and port where the user info service is running.")]),e._v(" "),a("p",[e._v("The userInfoUri endpoint must return valid JSON with the following properties for a given user's DN:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("    String firstName\n    String lastName\n    String nickname\n    String email\n    String username\n    String usernameForDisplay\n    String userDn\n")])])]),a("p",[e._v("The userQueryUri must retun a list of the above JSON objects for user DN's that meet the query criteria.")]),e._v(" "),a("p",[e._v("The userInfoHealthCheckUri endpoint should return the following JSON object:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"UP"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);