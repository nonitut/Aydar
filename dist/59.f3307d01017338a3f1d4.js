(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[59,13,60],{964:function(t,e,r){"use strict";var o,a,n,s,i,c,p=r(351);e.Z=(a={},n="template-common-alert",s=(0,p.f)(o||(i=["\n\t<%\n\t\tvar categories = {\n\t\t\t'type-duplicate':\t\t\t\t'category-upgrade',\n\t\t\t'type-create':\t\t\t\t\t'category-upgrade',\n\t\t\t'type-export-pdf':\t\t\t\t'category-upgrade',\n\t\t\t'type-export-code':\t\t\t\t'category-upgrade',\n\t\t\t'type-more-pages':\t\t\t\t'category-upgrade',\n\t\t\t'type-upload-fonts':\t\t\t'category-upgrade',\n\t\t\t'type-custom-seo':\t\t\t\t'category-upgrade',\n\t\t\t'type-custom-sharing':\t\t\t'category-upgrade',\n\t\t\t'type-code-injection':\t\t\t'category-upgrade',\n\t\t\t'type-widget-shots':\t\t\t'category-upgrade',\n\t\t\t'type-publish-noemail':\t\t\t'category-confirm-email',\n\t\t\t'type-publish-limit':\t\t\t'category-upgrade',\n\t\t\t'type-publish-ecommerce':\t\t\t'category-upgrade',\n\t\t\t'type-switch-desktop-create':\t'category-mobile',\n\t\t\t'type-switch-desktop-continue':\t'category-mobile',\n\t\t\t'type-browsers':\t\t\t\t'category-browsers',\n\t\t\t'type-browsers-viewer':\t\t\t\t'category-browsers',\n\t\t\t'type-shared-failed':\t\t\t'category-shared-failed',\n\t\t\t'type-shared-unlock-page':\t\t'category-shared-unlock-page',\n\t\t};\n\n\t\tvar headers = {\n\t\t\t'category-upgrade':\t\t\t'',\n\t\t\t'category-upgrade-skip':\t'Push the Limits',\n\t\t\t'category-browsers':\t\t'Browser Support',\n\t\t\t'category-shared-failed':\t'Sorry, something<br/>went wrong.',\n\t\t\t'category-confirm-email':\t'Account Activation',\n\t\t};\n\n\t\tvar pricingUrl = readymagHost + \"/pricing\";\n\n\t\tvar texts = {\n\t\t\t'type-duplicate':\t\t\t\t'To duplicate this project you need to upgrade your account. You can find out more about our subscription plans <a href=' + pricingUrl + ' class=\"learn-more\">here</a>.',\n\t\t\t'type-create':\t\t\t\t\t'To create more projects you need to upgrade your account. You can find out more about our subscription plans <a href=' + pricingUrl + ' class=\"learn-more\">here</a>.',\n\t\t\t'type-publish-noemail':\t\t\t'Please verify your email address<br />to publish this project.',\n\t\t\t'type-publish-limit':\t\t\t'Please upgrade your account<br />to publish more than one project.',\n\t\t\t'type-publish-ecommerce': 'Please upgrade your account<br />to publish project with ecommerce.',\n\t\t\t'type-export-pdf':\t\t\t\t'Please upgrade your account<br/>to export the project to PDF.<br/><a href=' + pricingUrl + ' class=\"learn-more\">See the pricing</a>.',\n\t\t\t'type-export-code':\t\t\t\t'Please upgrade your account<br/>in order to export the source<br/>code of your projects.<br/><a href=' + pricingUrl + ' class=\"learn-more\">See the pricing</a>.',\n\t\t\t'type-more-pages':\t\t\t\t'Please upgrade your account<br/>to create more pages.<br><a href=' + pricingUrl + ' class=\"learn-more\">See the pricing</a>.',\n\t\t\t'type-custom-seo':\t\t\t\t'Please upgrade your account<br/> to customize SEO parameters.<br/><a href=' + pricingUrl + ' class=\"learn-more\">See the pricing</a>.',\n\t\t\t'type-custom-sharing':\t\t\t'Please upgrade your account<br/>to customize social sharing info.<br/><a href=' + pricingUrl + ' class=\"learn-more\">See the pricing</a>.',\n\t\t\t'type-code-injection':\t\t\t'Please upgrade your account to<br/>make custom code work after<br/>you publish the project.<br/><a href=' + pricingUrl + ' class=\"learn-more\">See the pricing</a>.',\n\t\t\t'type-widget-shots':\t\t\t'Please upgrade your account to<br/>make Shots widget work after<br/>you publish the project.<br/><a href=' + pricingUrl + ' class=\"learn-more\">See the pricing</a>.',\n\t\t\t'type-browsers':\t\t\t\t'Sorry, our Editor doesn’t support Internet Explorer. This may change in the future, but for now please use Chrome, Firefox or Safari.',\n\t\t\t'type-browsers-viewer':\t\t\t'This site can't be displayed in Internet Explorer. Please switch to <a href=\"https://support.apple.com/en-jo/HT204416\">Safari</a>, <a href=\"https://www.google.com/chrome/\">Google Chrome</a>, <a href=\"https://www.mozilla.org/en-US/firefox/new/\">Firefox</a>, or <a href=\"https://www.microsoft.com/en-us/windows/microsoft-edge\">Microsoft Edge</a>.',\n\t\t\t'type-switch-desktop-create':\t'To create a project, please use your laptop or desktop computer.',\n\t\t\t'type-switch-desktop-continue':\t'To continue, please use your laptop or desktop computer.',\n\t\t\t'type-shared-failed':\t\t\t'Please contact <a href=\"mailto:support@readymag.com\" class=\"learn-more\">support</a>.',\n\t\t\t'type-upload-fonts':\t\t\t'Please upgrade your account<br/>to upload your own fonts.<br/><a href=' + pricingUrl + ' class=\"learn-more\">See the pricing</a>.',\n\t\t};\n\n\t\tvar buttons = {\n\t\t\t'category-upgrade':\t\t\t\t'<a href=\"/settings#change-plan\" class=\"button main upgrade\">Upgrade</a><div class=\"cancel-wrapper\">or ' + (['type-code-injection', 'type-widget-shots'].includes(opts.type) ? '<span class=\"button cancel\" data-type=\"skip\">Skip</span>' : '<span class=\"button cancel\">Cancel</span>') + '</div>',\n\t\t\t'category-browsers':\t\t\t'<div class=\"button main ok\">Okay</div>',\n\t\t\t'category-mobile':\t\t\t\t'<div class=\"button main ok\">Okay</div>',\n\t\t\t'category-shared-failed':\t\t'<div class=\"button close\">Close</div>',\n\t\t\t'category-shared-unlock-page':\t'<div class=\"button ok\">Ok</div>',\n\t\t\t'category-confirm-email':\t\t'<div  class=\"button main resend\">Resend</div><div class=\"cancel-wrapper\">or <span class=\"button cancel\">Cancel</span></div>',\n\t\t};\n\n\t\tvar category = categories[opts.type]\n\t\tvar header = headers[category]\n\t\tvar text = texts[opts.type] || opts.text\n\t\tvar button = buttons[category]\n\n\t\tif (opts.is_contributor) {\n\t\t\ttext = 'Please upgrade owner’s account<br/>to be able to use this feature.'\n\t\t\tbutton = '<a href=\"mailto:' + opts.owner_email + '\" class=\"contact-link\">Contact owner</a><div class=\"cancel-wrapper\">' + (['type-code-injection', 'type-widget-shots'].includes(opts.type) ? 'or <span class=\"button cancel\" data-type=\"skip\">Skip</span>' : '<span class=\"button cancel\">Cancel</span>') + '</div>'\n\t\t}\n\n\t%>\n\n\t<div class=\"alert-popup <%=category%>\">\n\t\t<div class=\"panel-wrapper\">\n\t\t\t<div class=\"center-table\">\n\t\t\t\t<div class=\"center-cell\">\n\t\t\t\t\t<div class=\"panel\">\n\n\t\t\t\t\t\t<%=(header ? '<div class=\"header\">' + header + '</div>' : '')%>\n\n\t\t\t\t\t\t<div class=\"icon\" <%=(opts.icon ? 'style=\"background-image:url(' + opts.icon + ')\"' : \"\")%>><div class=\"icon-inner\"></div></div>\n\n\t\t\t\t\t\t<%=(text ? '<div class=\"text\">' + text + '</div>' : '')%>\n\n\t\t\t\t\t\t<%=(opts.type == 'type-browsers-viewer' ? '<div class=\"icon additional\"></div>' : '')%>\n\n\t\t\t\t\t\t<%=(button ? '<div class=\"buttons\">' + button + '</div>' : '')%>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n"],(c=["\n\t<%\n\t\tvar categories = {\n\t\t\t'type-duplicate':\t\t\t\t'category-upgrade',\n\t\t\t'type-create':\t\t\t\t\t'category-upgrade',\n\t\t\t'type-export-pdf':\t\t\t\t'category-upgrade',\n\t\t\t'type-export-code':\t\t\t\t'category-upgrade',\n\t\t\t'type-more-pages':\t\t\t\t'category-upgrade',\n\t\t\t'type-upload-fonts':\t\t\t'category-upgrade',\n\t\t\t'type-custom-seo':\t\t\t\t'category-upgrade',\n\t\t\t'type-custom-sharing':\t\t\t'category-upgrade',\n\t\t\t'type-code-injection':\t\t\t'category-upgrade',\n\t\t\t'type-widget-shots':\t\t\t'category-upgrade',\n\t\t\t'type-publish-noemail':\t\t\t'category-confirm-email',\n\t\t\t'type-publish-limit':\t\t\t'category-upgrade',\n\t\t\t'type-publish-ecommerce':\t\t\t'category-upgrade',\n\t\t\t'type-switch-desktop-create':\t'category-mobile',\n\t\t\t'type-switch-desktop-continue':\t'category-mobile',\n\t\t\t'type-browsers':\t\t\t\t'category-browsers',\n\t\t\t'type-browsers-viewer':\t\t\t\t'category-browsers',\n\t\t\t'type-shared-failed':\t\t\t'category-shared-failed',\n\t\t\t'type-shared-unlock-page':\t\t'category-shared-unlock-page',\n\t\t};\n\n\t\tvar headers = {\n\t\t\t'category-upgrade':\t\t\t'',\n\t\t\t'category-upgrade-skip':\t'Push the Limits',\n\t\t\t'category-browsers':\t\t'Browser Support',\n\t\t\t'category-shared-failed':\t'Sorry, something<br/>went wrong.',\n\t\t\t'category-confirm-email':\t'Account Activation',\n\t\t};\n\n\t\tvar pricingUrl = readymagHost + \"/pricing\";\n\n\t\tvar texts = {\n\t\t\t'type-duplicate':\t\t\t\t'To duplicate this project you need to upgrade your account. You can find out more about our subscription plans <a href=' + pricingUrl + ' class=\"learn-more\">here</a>.',\n\t\t\t'type-create':\t\t\t\t\t'To create more projects you need to upgrade your account. You can find out more about our subscription plans <a href=' + pricingUrl + ' class=\"learn-more\">here</a>.',\n\t\t\t'type-publish-noemail':\t\t\t'Please verify your email address<br />to publish this project.',\n\t\t\t'type-publish-limit':\t\t\t'Please upgrade your account<br />to publish more than one project.',\n\t\t\t'type-publish-ecommerce': 'Please upgrade your account<br />to publish project with ecommerce.',\n\t\t\t'type-export-pdf':\t\t\t\t'Please upgrade your account<br/>to export the project to PDF.<br/><a href=' + pricingUrl + ' class=\"learn-more\">See the pricing</a>.',\n\t\t\t'type-export-code':\t\t\t\t'Please upgrade your account<br/>in order to export the source<br/>code of your projects.<br/><a href=' + pricingUrl + ' class=\"learn-more\">See the pricing</a>.',\n\t\t\t'type-more-pages':\t\t\t\t'Please upgrade your account<br/>to create more pages.<br><a href=' + pricingUrl + ' class=\"learn-more\">See the pricing</a>.',\n\t\t\t'type-custom-seo':\t\t\t\t'Please upgrade your account<br/> to customize SEO parameters.<br/><a href=' + pricingUrl + ' class=\"learn-more\">See the pricing</a>.',\n\t\t\t'type-custom-sharing':\t\t\t'Please upgrade your account<br/>to customize social sharing info.<br/><a href=' + pricingUrl + ' class=\"learn-more\">See the pricing</a>.',\n\t\t\t'type-code-injection':\t\t\t'Please upgrade your account to<br/>make custom code work after<br/>you publish the project.<br/><a href=' + pricingUrl + ' class=\"learn-more\">See the pricing</a>.',\n\t\t\t'type-widget-shots':\t\t\t'Please upgrade your account to<br/>make Shots widget work after<br/>you publish the project.<br/><a href=' + pricingUrl + ' class=\"learn-more\">See the pricing</a>.',\n\t\t\t'type-browsers':\t\t\t\t'Sorry, our Editor doesn’t support Internet Explorer. This may change in the future, but for now please use Chrome, Firefox or Safari.',\n\t\t\t'type-browsers-viewer':\t\t\t'This site can\\'t be displayed in Internet Explorer. Please switch to <a href=\"https://support.apple.com/en-jo/HT204416\">Safari</a>, <a href=\"https://www.google.com/chrome/\">Google Chrome</a>, <a href=\"https://www.mozilla.org/en-US/firefox/new/\">Firefox</a>, or <a href=\"https://www.microsoft.com/en-us/windows/microsoft-edge\">Microsoft Edge</a>.',\n\t\t\t'type-switch-desktop-create':\t'To create a project, please use your laptop or desktop computer.',\n\t\t\t'type-switch-desktop-continue':\t'To continue, please use your laptop or desktop computer.',\n\t\t\t'type-shared-failed':\t\t\t'Please contact <a href=\"mailto:support@readymag.com\" class=\"learn-more\">support</a>.',\n\t\t\t'type-upload-fonts':\t\t\t'Please upgrade your account<br/>to upload your own fonts.<br/><a href=' + pricingUrl + ' class=\"learn-more\">See the pricing</a>.',\n\t\t};\n\n\t\tvar buttons = {\n\t\t\t'category-upgrade':\t\t\t\t'<a href=\"/settings#change-plan\" class=\"button main upgrade\">Upgrade</a><div class=\"cancel-wrapper\">or ' + (['type-code-injection', 'type-widget-shots'].includes(opts.type) ? '<span class=\"button cancel\" data-type=\"skip\">Skip</span>' : '<span class=\"button cancel\">Cancel</span>') + '</div>',\n\t\t\t'category-browsers':\t\t\t'<div class=\"button main ok\">Okay</div>',\n\t\t\t'category-mobile':\t\t\t\t'<div class=\"button main ok\">Okay</div>',\n\t\t\t'category-shared-failed':\t\t'<div class=\"button close\">Close</div>',\n\t\t\t'category-shared-unlock-page':\t'<div class=\"button ok\">Ok</div>',\n\t\t\t'category-confirm-email':\t\t'<div  class=\"button main resend\">Resend</div><div class=\"cancel-wrapper\">or <span class=\"button cancel\">Cancel</span></div>',\n\t\t};\n\n\t\tvar category = categories[opts.type]\n\t\tvar header = headers[category]\n\t\tvar text = texts[opts.type] || opts.text\n\t\tvar button = buttons[category]\n\n\t\tif (opts.is_contributor) {\n\t\t\ttext = 'Please upgrade owner’s account<br/>to be able to use this feature.'\n\t\t\tbutton = '<a href=\"mailto:' + opts.owner_email + '\" class=\"contact-link\">Contact owner</a><div class=\"cancel-wrapper\">' + (['type-code-injection', 'type-widget-shots'].includes(opts.type) ? 'or <span class=\"button cancel\" data-type=\"skip\">Skip</span>' : '<span class=\"button cancel\">Cancel</span>') + '</div>'\n\t\t}\n\n\t%>\n\n\t<div class=\"alert-popup <%=category%>\">\n\t\t<div class=\"panel-wrapper\">\n\t\t\t<div class=\"center-table\">\n\t\t\t\t<div class=\"center-cell\">\n\t\t\t\t\t<div class=\"panel\">\n\n\t\t\t\t\t\t<%=(header ? '<div class=\"header\">' + header + '</div>' : '')%>\n\n\t\t\t\t\t\t<div class=\"icon\" <%=(opts.icon ? 'style=\"background-image:url(' + opts.icon + ')\"' : \"\")%>><div class=\"icon-inner\"></div></div>\n\n\t\t\t\t\t\t<%=(text ? '<div class=\"text\">' + text + '</div>' : '')%>\n\n\t\t\t\t\t\t<%=(opts.type == 'type-browsers-viewer' ? '<div class=\"icon additional\"></div>' : '')%>\n\n\t\t\t\t\t\t<%=(button ? '<div class=\"buttons\">' + button + '</div>' : '')%>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n"])||(c=i.slice(0)),o=Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(c)}})))),n in a?Object.defineProperty(a,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[n]=s,a)},963:function(t,e,r){"use strict";r.r(e);var o=r(312),a=r(336),n=r.n(a),s=r(321),i=r(964),c=r(308),p=n().View.extend({template:i.Z["template-common-alert"],events:{"click .button":"onButtonClick",click:"hideOnBgClick","click .button.upgrade":"upgrade","click .button.cancel":"hide","click .button.close":"hide","click .button.ok":"hide","click .contact-link":"hide","click .button.resend":"resendConfirmationEmail"},initialize:function(t){s.Z.bindAll(this),s.Z.extend(this,t),this.opts=this.opts||{},this.router=this.router||RM.homepageRouter||RM.collectorRouter||RM.constructorRouter,this.router&&this.router.analytics&&this.router.analytics.sendEvent("Alert Show",{label:this.alert_source,_alert_source:this.alert_source})},render:function(){this.setElement((0,o.ZP)(this.template({opts:this.opts,readymagHost:c.Z.readymag_host}))),this.$parent&&(this.$parent instanceof Element&&(this.$parent=(0,o.ZP)(this.$parent)),this.$parent.append(this.$el).addClass("visible")),s.Z.delay(s.Z.bind((function(){this.$el.addClass("show")}),this),50),(0,o.ZP)("body").on("keyup",this.onBodyKeyUp),RM.common.disableShortcuts.alert=!0},hide:function(){delete RM.common.disableShortcuts.alert,(0,o.ZP)("body").off("keyup",this.onBodyKeyUp),this.$el.removeClass("show").addClass("hide"),s.Z.delay(s.Z.bind((function(){this.remove(),this.$parent&&this.$parent.removeClass("visible")}),this),400),this.trigger("hide",{lastButtonClicked:this.lastButtonClicked})},upgrade:function(t){Modernizr.sessionstorage&&window.sessionStorage.setItem("rm.accountUpgradeReturnUrl",window.location.pathname),this.router&&this.router.analytics&&this.router.analytics.sendEvent("Alert Upgrade",{label:this.alert_source,_alert_source:this.alert_source}),2==t.which||t.metaKey||t.ctrlKey||this.router&&this.router==RM.collectorRouter&&(this.hide(),this.router.navigate("/settings#change-plan",{trigger:!0}),t.preventDefault())},onBodyKeyUp:function(t){27==t.keyCode&&(t.stopPropagation(),t.preventDefault(),this.hide())},hideOnBgClick:function(t){(0,o.ZP)(t.target).closest(".panel").length||this.hide()},resendConfirmationEmail:function(){o.ZP.get("/auth/confirm/resend"),this.hide()},onButtonClick:function(t){var e=(0,o.ZP)(t.currentTarget).attr("data-type");this.lastButtonClicked=e}});e.default=p},1509:function(t,e,r){"use strict";r.r(e);var o=r(312),a=r(321),n=r(308),s=r(963),i=r(323),c=r(339),p=function(t){if(a.Z.bindAll(this),a.Z.extend(this,t),!RM.common.magCreationInProgress)if(this.analytics=this.router&&this.router.analytics,this.router?this.router==RM.viewerRouter?this.routerName="viewer":this.router==RM.collectorRouter?this.routerName="collector":this.router==RM.homepageRouter?this.routerName="homepage":this.router==RM.constructorRouter?this.routerName="constructor":this.routerName="unknown":this.routerName="error",this.analytics&&!this.noCreateRequestTracking&&this.analytics.sendEvent("Create Mag Request"),i.Z.isDesktop)if(Modernizr.msie||Modernizr.msie11)this.showIEPopupWarning();else if(this.me){var e="function"==typeof this.me.get?this.me.get("permissions"):this.me.permissions;this.skipPermissionsCheck||e&&e.can_create_mag?this.innerCreateMag():this.showCreatePopupWarning()}else this.showJoinForm();else this.showMobilePopupWarning()};p.prototype.innerCreateMag=function(){var t={};this.analytics&&this.analytics.sendEvent("Create Mag"),this.currentFolderId&&(t.folder=this.currentFolderId),this.sharedUser&&(t.user=this.sharedUser),RM.common.magCreationInProgress=!0,o.ZP.ajax({url:n.Z.readymag_auth_host+(this.templateID?"/api/magFromTemplate/"+this.templateID:"/api/mag/"),type:"POST",data:t,success:a.Z.bind((function(t){"function"==typeof this.success&&this.success(),RM.common.magCreationInProgress=!1,window.location.href=n.Z.readymag_auth_host+"/edit/"+t.num_id+"/contents/"}),this),error:a.Z.bind((function(){if("function"==typeof this.error&&this.error(),RM.common.magCreationInProgress=!1,console.log(arguments),alert("Creating project problem. Contact tech support, please: "+n.Z.SUPPORT_MAIL),this.me){var t="function"==typeof this.me.get?this.me.get("uri"):this.me.uri;t&&(window.location.href=n.Z.readymag_auth_host+"/"+t)}}),this)})},p.prototype.showCreatePopupWarning=function(){s.default&&new s.default({$parent:(0,o.ZP)("body > .popups"),router:this.router,opts:{type:"type-create"},alert_source:"create mag"}).render()},p.prototype.showMobilePopupWarning=function(){s.default&&new s.default({$parent:(0,o.ZP)("body > .popups"),router:this.router,opts:{type:"type-switch-desktop-create"},alert_source:"create mag mobile"}).render()},p.prototype.showIEPopupWarning=function(){s.default&&new s.default({$parent:(0,o.ZP)("body > .popups"),router:this.router,opts:{type:"type-browsers"}}).render()},p.prototype.showJoinForm=function(){c.default.saveJoinData(),window.location.href="".concat(n.Z.readymag_host,"/auth/join").concat(this.templateID?"?template="+this.templateID:"")},e.default=p}}]);