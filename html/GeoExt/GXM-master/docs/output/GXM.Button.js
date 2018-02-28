Ext.data.JsonP.GXM_Button({"mixins":[],"code_type":"ext_define","html_meta":{},"meta":{},"files":[{"filename":"Button.js","href":"Button.html#GXM-Button"}],"members":{"method":[{"meta":{"private":true},"owner":"GXM.Button","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{"private":true},"owner":"GXM.Button","name":"applyPressed","id":"method-applyPressed","tagname":"method"},{"meta":{},"owner":"GXM.Button","name":"getExclusiveGroupMembers","id":"method-getExclusiveGroupMembers","tagname":"method"},{"meta":{"private":true},"owner":"GXM.Button","name":"initialize","id":"method-initialize","tagname":"method"},{"meta":{"private":true},"owner":"GXM.Button","name":"onCtrlActivate","id":"method-onCtrlActivate","tagname":"method"},{"meta":{"private":true},"owner":"GXM.Button","name":"onCtrlDeactivate","id":"method-onCtrlDeactivate","tagname":"method"},{"meta":{"private":true},"owner":"GXM.Button","name":"pHandler","id":"method-pHandler","tagname":"method"}],"event":[],"property":[{"meta":{"private":true},"owner":"GXM.Button","name":"autoadded","id":"property-autoadded","tagname":"property"},{"meta":{},"owner":"GXM.Button","name":"olMap","id":"property-olMap","tagname":"property"},{"meta":{"private":true},"owner":"GXM.Button","name":"togllePressCls","id":"property-togllePressCls","tagname":"property"},{"meta":{"private":true},"owner":"GXM.Button","name":"uHandler","id":"property-uHandler","tagname":"property"},{"meta":{"private":true},"owner":"GXM.Button","name":"uScope","id":"property-uScope","tagname":"property"}],"css_var":[],"css_mixin":[],"cfg":[{"meta":{},"owner":"GXM.Button","name":"control","id":"cfg-control","tagname":"cfg"},{"meta":{},"owner":"GXM.Button","name":"exclusiveGroup","id":"cfg-exclusiveGroup","tagname":"cfg"},{"meta":{},"owner":"GXM.Button","name":"map","id":"cfg-map","tagname":"cfg"},{"meta":{},"owner":"GXM.Button","name":"pressed","id":"cfg-pressed","tagname":"cfg"}]},"mixedInto":[],"aliases":{"widget":["gxm_button"]},"superclasses":["Ext.Button"],"component":false,"requires":["GXM.version"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Button<div class='subclass '><strong>GXM.Button</strong></div></div><h4>Requires</h4><div class='dependency'>GXM.version</div><h4>Files</h4><div class='dependency'><a href='source/Button.html#GXM-Button' target='_blank'>Button.js</a></div></pre><div class='doc-contents'><p>The class that is used to construct a GXM Button.</p>\n\n<p>Sample code to create a <a href=\"#!/api/GXM.Button\" rel=\"GXM.Button\" class=\"docClass\">GXM.Button</a> that controls zooms in:</p>\n\n<p>create the <a href=\"#!/api/GXM.Button\" rel=\"GXM.Button\" class=\"docClass\">GXM.Button</a>:</p>\n\n<pre><code>var btnZoomIn = Ext.create('<a href=\"#!/api/GXM.Button\" rel=\"GXM.Button\" class=\"docClass\">GXM.Button</a>', {\n    control: new OpenLayers.Control.ZoomIn(),\n    map: gxmMap,\n    iconCls: 'add',\n    iconMask: true,\n    handler: function(){\n        // implement Ext.Button handlers as usual\n    }\n });\n</code></pre>\n\n<p>The <a href=\"#!/api/GXM.Button\" rel=\"GXM.Button\" class=\"docClass\">GXM.Button</a> can be used e.g. in a toolbar that is docked to a panel:</p>\n\n<pre><code> Ext.create('Ext.Panel', {\n     items: [{\n         xtype: 'toolbar',\n         docked: 'top',\n         items: [\n            btnZoomIn\n         ]\n     }]\n });\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-control' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.Button'>GXM.Button</span><br/><a href='source/Button.html#GXM-Button-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.Button-cfg-control' class='name expandable'>control</a><span> : OpenLayers.Control</span></div><div class='description'><div class='short'>The control instance that this button shall work on. ...</div><div class='long'><p>The control instance that this button shall work on.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-exclusiveGroup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.Button'>GXM.Button</span><br/><a href='source/Button.html#GXM-Button-cfg-exclusiveGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.Button-cfg-exclusiveGroup' class='name expandable'>exclusiveGroup</a><span> : String</span></div><div class='description'><div class='short'>An identifier for the exclusive group of GXM-Buttons that\n this button belongs to. ...</div><div class='long'><p>An identifier for the exclusive group of GXM-Buttons that\n this button belongs to. This can be used to press/unpress buttons that\n would otherwise compete with each other.</p>\n\n<p> An example would be the buttons to control the digitizing of geometries\n on the map where you would have a <a href=\"#!/api/GXM.Button\" rel=\"GXM.Button\" class=\"docClass\">GXM.Button</a> for points, linestrings and\n polygons. When these buttons share the same <code>exclusiveGroup</code> the pressed\n state will be managed automatically.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-map' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.Button'>GXM.Button</span><br/><a href='source/Button.html#GXM-Button-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.Button-cfg-map' class='name expandable'>map</a><span> : <a href=\"#!/api/GXM.Map\" rel=\"GXM.Map\" class=\"docClass\">GXM.Map</a></span></div><div class='description'><div class='short'>The GXM Map component this button belongs to. ...</div><div class='long'><p>The GXM Map component this button belongs to. Might be used to\n derive the corresponding OpenLayers Map object.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-pressed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.Button'>GXM.Button</span><br/><a href='source/Button.html#GXM-Button-cfg-pressed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.Button-cfg-pressed' class='name expandable'>pressed</a><span> : Boolean</span></div><div class='description'><div class='short'>Boolean The initial state of this button. ...</div><div class='long'><p><code>Boolean</code> The initial state of this button.</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-autoadded' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.Button'>GXM.Button</span><br/><a href='source/Button.html#GXM-Button-property-autoadded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.Button-property-autoadded' class='name expandable'>autoadded</a><span> : Boolean</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>When a button instance is created with a control that did\n not belong to a map already we add it to the configured map. ...</div><div class='long'><p>When a button instance is created with a control that did\n not belong to a map already we add it to the configured map. That also\n means that we are responsible for removing said control from the map in\n the case that this button is destroyed. This property tracks whether we\n added the control to a map.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-olMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.Button'>GXM.Button</span><br/><a href='source/Button.html#GXM-Button-property-olMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.Button-property-olMap' class='name expandable'>olMap</a><span> : OpenLayers.Map</span></div><div class='description'><div class='short'>The reference to the related OpenLayers Map object. ...</div><div class='long'><p>The reference to the related OpenLayers Map object.\n This is for readonly use. To pass a map object to this class use the\n :attr:<code>map</code> config option.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-togllePressCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.Button'>GXM.Button</span><br/><a href='source/Button.html#GXM-Button-property-togllePressCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.Button-property-togllePressCls' class='name not-expandable'>togllePressCls</a><span> : String</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'><p>The CSS class name the button has in case of beeing pressed.</p>\n</div><div class='long'><p>The CSS class name the button has in case of beeing pressed.</p>\n</div></div></div><div id='property-uHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.Button'>GXM.Button</span><br/><a href='source/Button.html#GXM-Button-property-uHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.Button-property-uHandler' class='name expandable'>uHandler</a><span> : Function</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>The user-defined handler-method to invoke as handler for the button. ...</div><div class='long'><p>The user-defined handler-method to invoke as handler for the button.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-uScope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.Button'>GXM.Button</span><br/><a href='source/Button.html#GXM-Button-property-uScope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.Button-property-uScope' class='name expandable'>uScope</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>The scope the user-defined button handler method shall be executed in. ...</div><div class='long'><p>The scope the user-defined button handler method shall be executed in.</p>\n<p>Defaults to: <code>null</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.Button'>GXM.Button</span><br/><a href='source/Button.html#GXM-Button-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GXM.Button-method-constructor' class='name expandable'>GXM.Button</a>( <span class='pre'>Object config</span> ) : Object<strong class='private signature'>private</strong></div><div class='description'><div class='short'>The constructor function ...</div><div class='long'><p>The constructor function</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyPressed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.Button'>GXM.Button</span><br/><a href='source/Button.html#GXM-Button-method-applyPressed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.Button-method-applyPressed' class='name expandable'>applyPressed</a>( <span class='pre'>Object newPressedVal</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Intersects the :func:setPressed function. ...</div><div class='long'><p>Intersects the :func:<code>setPressed</code> function. Adds the corresponding CSS class.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newPressedVal</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getExclusiveGroupMembers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.Button'>GXM.Button</span><br/><a href='source/Button.html#GXM-Button-method-getExclusiveGroupMembers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.Button-method-getExclusiveGroupMembers' class='name expandable'>getExclusiveGroupMembers</a>( <span class='pre'></span> ) : <a href=\"#!/api/GXM.Button\" rel=\"GXM.Button\" class=\"docClass\">GXM.Button</a>[]</div><div class='description'><div class='short'>Returns an array of all members of the :attr:exclusiveGroup that this\n Button belongs to. ...</div><div class='long'><p>Returns an array of all members of the :attr:<code>exclusiveGroup</code> that this\n Button belongs to.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GXM.Button\" rel=\"GXM.Button\" class=\"docClass\">GXM.Button</a>[]</span><div class='sub-desc'><p>An array of all members of the :attr:<code>exclusiveGroup</code>\n that this Button belongs to.</p>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.Button'>GXM.Button</span><br/><a href='source/Button.html#GXM-Button-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.Button-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Initializes the Component. ...</div><div class='long'><p>Initializes the Component.</p>\n</div></div></div><div id='method-onCtrlActivate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.Button'>GXM.Button</span><br/><a href='source/Button.html#GXM-Button-method-onCtrlActivate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.Button-method-onCtrlActivate' class='name expandable'>onCtrlActivate</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Called when the configured control is activated. ...</div><div class='long'><p>Called when the configured control is activated. Handles the\n deactivation of the other OpenLayers.Controls and the updating of the\n visual states (removal of <code>pressedCls</code>), but only when using a\n segmented button and an exclusiveGroup</p>\n</div></div></div><div id='method-onCtrlDeactivate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.Button'>GXM.Button</span><br/><a href='source/Button.html#GXM-Button-method-onCtrlDeactivate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.Button-method-onCtrlDeactivate' class='name expandable'>onCtrlDeactivate</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Called on control deactivation. ...</div><div class='long'><p>Called on control deactivation. Removes this button's <code>pressedCls</code>,\n but only when using a segmented button and an exclusiveGroup</p>\n</div></div></div><div id='method-pHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.Button'>GXM.Button</span><br/><a href='source/Button.html#GXM-Button-method-pHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.Button-method-pHandler' class='name expandable'>pHandler</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>The auto-defined handler-method to invoke as handler for\n the button. ...</div><div class='long'><p>The auto-defined handler-method to invoke as handler for\n the button. Handles the activation/deactivation or triggering of the\n configured OpenLayers.Control.</p>\n</div></div></div></div></div></div></div>","extends":"Ext.Button","name":"GXM.Button","alternateClassNames":[],"inheritdoc":null,"tagname":"class","singleton":false,"uses":[],"inheritable":false,"id":"class-GXM.Button","statics":{"method":[],"property":[],"event":[],"css_var":[],"css_mixin":[],"cfg":[]},"subclasses":[]});