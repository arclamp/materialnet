(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{145:function(e,t){e.exports="varying vec4 vColor;\nattribute float size;\nuniform float zoom;\nattribute float selected;\nvarying vec4 edgeColor;\nattribute float focus;\nattribute float hidden;\nvarying float _hidden;\n\nvoid main() {\n  gl_PointSize = zoom * 0.5 * size;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  vColor = selected > 0.5 ? vec4(1.0, 1.0, 0.0, focus) : vec4(color, focus);\n  edgeColor = vec4(0.0, 0.0, 0.0, focus);\n  _hidden = hidden;\n}\n"},146:function(e,t){e.exports="varying vec4 vColor;\nvarying vec4 edgeColor;\nvarying float _hidden;\n\nvoid main() {\n  float f = length(gl_PointCoord - vec2(0.5, 0.5));\n  if (_hidden > 0.0 || f > 0.5) {\n    discard;\n  } else if (f > 0.4) {\n    gl_FragColor = edgeColor;\n  } else {\n    gl_FragColor = vColor;\n  }\n}\n"},147:function(e,t){e.exports="attribute float focus;\nvarying float attenuate;\nattribute float hidden;\nvarying float _hidden;\n\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  attenuate = focus;\n  _hidden = hidden;\n}\n"},148:function(e,t){e.exports="uniform float opacity;\nuniform float night;\nvarying float attenuate;\nvarying float _hidden;\n\nvoid main() {\n  if (_hidden > 0.0) {\n    discard;\n  }\n  gl_FragColor = night > 0.0 ? vec4(1.0, 1.0, 1.0, attenuate * opacity) : vec4(0.0, 0.0, 0.0, attenuate * opacity);\n}\n"},149:function(e,t,n){e.exports=n.p+"static/media/logo.89378f99.svg"},5443:function(e,t,n){e.exports=n(5628)},5448:function(e,t,n){},5623:function(e,t,n){},5626:function(e,t,n){var a={"./u9hv9ptx.entry.js":[5635,8],"./u9hv9ptx.sc.entry.js":[5636,9]};function i(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}i.keys=function(){return Object.keys(a)},i.id=5626,e.exports=i},5627:function(e,t,n){var a={"./56hngwe8.entry.js":[5643,16],"./56hngwe8.sc.entry.js":[5644,17],"./cixjba28.entry.js":[5645,19],"./cixjba28.sc.entry.js":[5646,20],"./ev9ubn2w.entry.js":[5647,21],"./ev9ubn2w.sc.entry.js":[5648,22],"./gbpyknum.entry.js":[5649,23],"./gbpyknum.sc.entry.js":[5650,24],"./gvvbtjih.entry.js":[5651,25],"./gvvbtjih.sc.entry.js":[5652,26],"./merxf92y.entry.js":[5653,27],"./merxf92y.sc.entry.js":[5654,28],"./owbwhwu9.entry.js":[5655,29],"./owbwhwu9.sc.entry.js":[5656,30]};function i(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}i.keys=function(){return Object.keys(a)},i.id=5627,e.exports=i},5628:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(19),r=n.n(o),s=(n(5448),n(17)),l=n(18),c=n(21),u=n(20),d=n(22),h=n(55),g=n.n(h),m=n(2),v=n(84),p=n(137);var f=n(138),y=function(e){var t=e.onChange,n=e.params,a=e.digits,o=e.children;return i.a.createElement("div",{style:{display:"flex",alignItems:"center",width:"100%"}},i.a.createElement("div",null,n.value.toFixed(Number.isInteger(a)?a:3)),i.a.createElement("div",{style:{flexGrow:1,paddingRight:16,paddingLeft:16}},i.a.createElement(f.a,Object.assign({},e,{value:n.value,min:n.min,max:n.max,step:n.step,onChange:function(e,n){t(n)}}))),o)},b=n(140),E=n(155),C=n(141),k=n.n(C),w=n(142),x=n.n(w),j=n(143),O=n.n(j),S=n(5661),P=n(30),z=n.n(P),N=n(54),D=n.n(N),V=n(43),F=n.n(V),_=n(53),M=n.n(_),L=n(25);function B(e){var t=e.classes,n=e.inputRef,a=void 0===n?function(){}:n,o=e.ref,r=Object(E.a)(e,["classes","inputRef","ref"]);return i.a.createElement(M.a,Object.assign({fullWidth:!0,InputProps:{inputRef:function(e){o(e),a(e)},classes:{input:t.input}}},r))}function G(e,t){var n=t.query,a=t.isHighlighted,o=k()(e.label,n),r=x()(e.label,o);return i.a.createElement(F.a,{selected:a,component:"div"},i.a.createElement("div",null,r.map(function(e,t){return e.highlight?i.a.createElement("span",{key:String(t),style:{fontWeight:500}},e.text):i.a.createElement("strong",{key:String(t),style:{fontWeight:300}},e.text)})))}var W=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={suggestions:[]},n.handleSuggestionsFetchRequested=function(e){var t=e.value;n.setState({suggestions:n.getSuggestions(t)})},n.handleSuggestionsClearRequested=function(){n.setState({suggestions:[]})},n.handleChange=function(e){return function(t,a){var i=a.newValue;n.setState(Object(b.a)({},e,i))}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"getSuggestions",value:function(e){var t=Object(S.a)(e.trim()).toLowerCase(),n=t.length,a=this.props.maxItems,i=0;return 0===n?[]:this.props.options.filter(function(e){if(i>=a)return!1;var n=e.label.toLowerCase().includes(t);return n&&(i+=1),n})}},{key:"getSuggestionValue",value:function(e){return e.label}},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.onChange,o=t.value,r=t.maxItems,s={renderInputComponent:B,suggestions:this.state.suggestions,onSuggestionsFetchRequested:this.handleSuggestionsFetchRequested,onSuggestionsClearRequested:this.handleSuggestionsClearRequested,getSuggestionValue:this.getSuggestionValue,renderSuggestion:G};return i.a.createElement("div",{className:n.root},i.a.createElement(O.a,Object.assign({},s,{inputProps:{classes:n,placeholder:"Search (e.g. NaCl)",value:o,onChange:a,inputRef:function(t){e.popperNode=t}},theme:{container:n.container,suggestionsContainerOpen:n.suggestionsContainerOpen,suggestionsList:n.suggestionsList,suggestion:n.suggestion},renderSuggestionsContainer:function(t){return i.a.createElement(D.a,{anchorEl:e.popperNode,open:Boolean(t.children),placement:"bottom-start"},i.a.createElement(z.a,Object.assign({square:!0},t.containerProps,{style:{width:e.popperNode?e.popperNode.clientWidth:null,height:"15rem",overflowY:"scroll"}}),t.children,t.children&&t.children.props.items.length===r&&i.a.createElement(F.a,{disabled:!0},"...")))}})))}}]),t}(i.a.Component),A=Object(L.withStyles)(function(e){return{root:{flexGrow:1},container:{position:"relative"},suggestionsContainerOpen:{position:"absolute",zIndex:1,marginTop:e.spacing.unit,left:0,right:0},suggestion:{display:"block"},suggestionsList:{margin:0,padding:0,listStyleType:"none"}}})(W),I=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.degree,a=e.discovery,o=e.formationEnergy,r=e.synthesisProbability,s=e.clusCoeff,l=e.eigenCent,c=e.degCent,u=e.shortestPath,d=e.degNeigh,h=e.onClear,g=null===a;return i.a.createElement(m.c,null,i.a.createElement(m.e,{title:"".concat(t," (").concat(g?"undiscovered":a,")"),action:i.a.createElement(m.b,{onClick:h},"Clear selection")}),i.a.createElement(m.d,null,i.a.createElement(m.r,{gutterBottom:!0,variant:"title"},"Material Properties"),i.a.createElement("div",null,i.a.createElement(m.r,{gutterBottom:!0,variant:"subheading",color:"textSecondary"},"Derived materials"),i.a.createElement(m.r,{paragraph:!0},n)),o&&i.a.createElement("div",null,i.a.createElement(m.r,{gutterBottom:!0,variant:"subheading",color:"textSecondary"},"Formation energy"),i.a.createElement(m.r,{paragraph:!0},o.toFixed(3)," eV/atom")),g&&r&&i.a.createElement("div",null,i.a.createElement(m.r,{gutterBottom:!0,variant:"subheading",color:"textSecondary"},"Synthesis probability"),i.a.createElement(m.r,{paragraph:!0},(100*r).toFixed(1),"%")),i.a.createElement(m.r,{gutterBottom:!0,variant:"title"},"Network Properties"),s&&i.a.createElement("div",null,i.a.createElement(m.r,{gutterBottom:!0,variant:"subheading",color:"textSecondary"},"Clustering coefficient"),i.a.createElement(m.r,{paragraph:!0},s.toFixed(3))),l&&i.a.createElement("div",null,i.a.createElement(m.r,{gutterBottom:!0,variant:"subheading",color:"textSecondary"},"Eigenvector centrality"),i.a.createElement(m.r,{paragraph:!0},l.toFixed(3))),c&&i.a.createElement("div",null,i.a.createElement(m.r,{gutterBottom:!0,variant:"subheading",color:"textSecondary"},"Degree centrality"),i.a.createElement(m.r,{paragraph:!0},c.toFixed(3))),u&&i.a.createElement("div",null,i.a.createElement(m.r,{gutterBottom:!0,variant:"subheading",color:"textSecondary"},"Shortest path"),i.a.createElement(m.r,{paragraph:!0},u.toFixed(3))),d&&i.a.createElement("div",null,i.a.createElement(m.r,{gutterBottom:!0,variant:"subheading",color:"textSecondary"},"Degree neighborhood"),i.a.createElement(m.r,{paragraph:!0},d.toFixed(3)))))}}]),t}(a.Component);function U(e,t){return e.length<t.length?-1:e.length>t.length?1:function(e,t){return e<t?-1:e>t?1:0}(e,t)}var R=n(85),Y=n(151),q=n(152),H=n(8),T=n(15),X=n(145),Z=n.n(X),J=n(146),$=n.n(J),K=n(147),Q=n.n(K),ee=n(148),te=n.n(ee),ne=function(){function e(t){var n=this,a=t.el,i=t.dp;Object(s.a)(this,e);var o=a.clientWidth,r=a.clientHeight;this.width=o,this.height=r,this.parent=a,this.scene=new T.h,this.scene.background=new T.b(16777215),this.camera=new T.e(-o/2,o/2,r/2,-r/2,-1,1),this.raycaster=new T.g,this.threshold=6,this.raycaster.params.Points.threshold=this.threshold,this.mouse=new T.j,this.pixel=new T.j,this.expansion=1,this.attenuation=.02,this.renderer=new T.l({antialias:!0}),this.el=this.renderer.domElement,Object(R.a)(a).append(function(){return n.el}),this.initScene(i)}return Object(l.a)(e,[{key:"initScene",value:function(e){var t=this;this.dp=e;var n=[],a=[],i=[];this.linkIndex={};for(var o=0;o<this.dp.edgeCount();o++){var r=this.dp.edgePosition(o);n.push(r[0].x,r[0].y,-.1),n.push(r[1].x,r[1].y,-.1),a.push(1,1),i.push(0,0)}this.edgeGeom=new T.a,this.edgeGeom.addAttribute("position",new T.c(n,3).setDynamic(!0)),this.edgeGeom.addAttribute("focus",new T.c(a,1).setDynamic(!0)),this.edgeGeom.addAttribute("hidden",new T.c(i,1).setDynamic(!0)),this.edgeGeom.computeBoundingSphere(),this.lineMaterial=new T.i({uniforms:{opacity:{value:.05},night:{value:0}},vertexShader:Q.a,fragmentShader:te.a}),this.lineMaterial.transparent=!0,this.lines=new T.d(this.edgeGeom,this.lineMaterial),this._linksVisible=!0,this.scene.add(this.lines),this.cmap=Object(Y.a)(q.a).domain([1945,2015]),n.length=0,a.length=0,i.length=0;var s=[],l=[],c=[];this.index={},this.dp.nodeNames().forEach(function(e){var o,r=t.dp.nodePosition(e);n.push(r.x,r.y,0),t.index[e]=n.length/3-1;var u=t.dp.nodeProperty(e,"discovery");o=null!==u?Object(H.a)(t.cmap(u)):Object(H.a)("#de2d26"),s.push(o.r/255,o.g/255,o.b/255),l.push(10),c.push(0),a.push(1),i.push(0)}),this.selected=null,this.geometry=new T.a,this.geometry.addAttribute("position",new T.c(n,3).setDynamic(!0)),this.geometry.addAttribute("color",new T.c(s,3).setDynamic(!0)),this.geometry.addAttribute("size",new T.c(l,1).setDynamic(!0)),this.geometry.addAttribute("selected",new T.c(c,1).setDynamic(!0)),this.geometry.addAttribute("focus",new T.c(a,1).setDynamic(!0)),this.geometry.addAttribute("hidden",new T.c(i,1).setDynamic(!0)),this.geometry.computeBoundingSphere(),this.material=new T.i({vertexColors:T.k,uniforms:{color:new T.b(1,0,0),zoom:{value:this.zoom}},vertexShader:Z.a,fragmentShader:$.a}),this.material.transparent=!0,this.points=new T.f(this.geometry,this.material),this.scene.add(this.points),this.setDegreeSize(2017,"normal"),this.resize()}},{key:"clear",value:function(){this.scene.remove.apply(this.scene,this.scene.children)}},{key:"resize",value:function(){var e=this.width=this.parent.clientWidth,t=this.height=this.parent.clientHeight;this.renderer.setSize(e,t);var n=.5*(this.camera.left+this.camera.right);this.camera.left=n-e/2,this.camera.right=n+e/2,this.camera.updateProjectionMatrix(),this.render()}},{key:"linksVisible",value:function(e){this._linksVisible=e,this.lines.visible=this._linksVisible}},{key:"setNightMode",value:function(e){e?(this.scene.background.setRGB(0,0,0),this.lineMaterial.uniforms.night.value=1):(this.scene.background.setRGB(1,1,1),this.lineMaterial.uniforms.night.value=0)}},{key:"setLinkOpacity",value:function(e){this.lineMaterial.uniforms.opacity.value=e}},{key:"setConstSize",value:function(e){this.degreeSize=!1;for(var t=0;t<this.geometry.attributes.size.array.length;t++)this.setSize(t,e);this.updateSize()}},{key:"setDegreeSize",value:function(e,t){var n=this;this.degreeSize=!0;var a=this.dp.nodeDegrees(e);this.dp.nodeNames().forEach(function(e,i){var o=a[e];if("normal"===t)n.setSize(i,10+Math.sqrt(o));else if("large"===t)n.setSize(i,10+Math.sqrt(Math.sqrt(o*o*o)));else if("huge"===t)n.setSize(i,10+o);else{if("none"!==t)throw new Error("bad level option: ".concat(t));n.setConstSize(10)}}),this.updateSize()}},{key:"setConstColor",value:function(e,t,n){for(var a=0;a<this.geometry.attributes.size.array.length;a++)this.setColor(a,e,t,n);this.updateColor()}},{key:"setDiscoveryColor",value:function(){var e=this;this.undiscoveredColor=!1,this.dp.nodeNames().forEach(function(t,n){var a,i=e.dp.nodeProperty(t,"discovery");a=null!==i?Object(H.a)(e.cmap(i)):Object(H.a)("#de2d26"),e.setColor(n,a.r/255,a.g/255,a.b/255)}),this.updateColor()}},{key:"setBooleanColor",value:function(){var e=this;this.undiscoveredColor=!1,this.dp.nodeNames().forEach(function(t,n){var a=e.dp.nodeExists(t)?Object(H.a)("rgb(81,96,204)"):Object(H.a)("#de2d26");e.setColor(n,a.r/255,a.g/255,a.b/255)}),this.updateColor()}},{key:"setUndiscoveredColor",value:function(e){var t=this;this.undiscoveredColor=!0,this.dp.nodeNames().forEach(function(n,a){var i=t.dp.nodeExists(n)&&t.dp.nodeProperty(n,"discovery")<=e?Object(H.a)("rgb(81,96,204)"):Object(H.a)("#de2d26");t.setColor(a,i.r/255,i.g/255,i.b/255)}),this.updateColor()}},{key:"setColorYear",value:function(e){this.undiscoveredColor&&this.setUndiscoveredColor(e)}},{key:"on",value:function(e,t){Object(R.a)(this.el).on(e,t.bind(this))}},{key:"pick",value:function(e){var t=e.x,n=e.y,a=this.parent.getBoundingClientRect(),i=t-a.left,o=n-a.top;this.mouse.x=i/this.parent.clientWidth*2-1,this.mouse.y=-(o/this.parent.clientHeight*2-1),this.raycaster.setFromCamera(this.mouse,this.camera);var r=this.raycaster.intersectObject(this.points);if(0===r.length)return null;var s=r[0];if(s.index>=this.dp.nodeNames())return null;var l=this.dp.nodeNames()[s.index];return this.pickName(l)}},{key:"pickName",value:function(e){return this.index.hasOwnProperty(e)?{name:e,degree:this.dp.nodeProperty(e,"degree"),discovery:this.dp.nodeProperty(e,"discovery"),formationEnergy:this.dp.nodeProperty(e,"formation_energy"),synthesisProbability:this.dp.nodeProperty(e,"synthesis_probability"),clusCoeff:this.dp.nodeProperty(e,"clus_coeff"),eigenCent:this.dp.nodeProperty(e,"eigen_cent"),degCent:this.dp.nodeProperty(e,"deg_cent"),shortestPath:this.dp.nodeProperty(e,"shortest_path"),degNeigh:this.dp.nodeProperty(e,"deg_neigh")}:null}},{key:"setColor",value:function(e,t,n,a){var i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];this.geometry.attributes.color.array[3*e+0]=t,this.geometry.attributes.color.array[3*e+1]=n,this.geometry.attributes.color.array[3*e+2]=a,i&&this.updateColor()}},{key:"updateColor",value:function(){this.geometry.attributes.color.needsUpdate=!0}},{key:"getPosition",value:function(e){var t=this.geometry.attributes.position.array;return new T.j(t[3*e+0],t[3*e+1])}},{key:"setPosition",value:function(e,t,n){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.geometry.attributes.position.array[3*e+0]=t,this.geometry.attributes.position.array[3*e+1]=n,a&&this.updatePosition()}},{key:"updatePosition",value:function(){this.geometry.attributes.position.needsUpdate=!0}},{key:"setFocus",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.geometry.attributes.focus.array[e]=t?1:this.attenuation,n&&this.updateFocus()}},{key:"updateFocus",value:function(){this.geometry.attributes.focus.needsUpdate=!0}},{key:"getEdgePosition",value:function(e,t){var n=this.edgeGeom.attributes.position.array;return new T.j(n[3*(2*e+t)+0],n[3*(2*e+t)+1])}},{key:"setEdgePosition",value:function(e,t,n,a){var i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];this.edgeGeom.attributes.position.array[3*(2*e+t)+0]=n,this.edgeGeom.attributes.position.array[3*(2*e+t)+1]=a,i&&this.updateEdgePosition()}},{key:"updateEdgePosition",value:function(){this.edgeGeom.attributes.position.needsUpdate=!0}},{key:"setEdgeFocus",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.edgeGeom.attributes.focus.array[2*e+0]=t?1:this.attenuation,this.edgeGeom.attributes.focus.array[2*e+1]=t?1:this.attenuation,n&&this.updateEdgeFocus()}},{key:"updateEdgeFocus",value:function(){this.edgeGeom.attributes.focus.needsUpdate=!0}},{key:"setSize",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.geometry.attributes.size.array[e]=t,n&&this.updateSize()}},{key:"updateSize",value:function(){this.geometry.attributes.size.needsUpdate=!0}},{key:"select",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];null!==this.selected&&(this.geometry.attributes.selected.array[this.selected]=0),this.selected=this.index[e],this.geometry.attributes.selected.array[this.selected]=1,this.geometry.attributes.selected.needsUpdate=!0;var n=this.geometry.attributes.position.array[3*this.selected+0],a=this.geometry.attributes.position.array[3*this.selected+1];t&&this.setCamera(n,a)}},{key:"unselect",value:function(){this.geometry.attributes.selected.array[this.selected]=0,this.geometry.attributes.selected.needsUpdate=!0,this.selected=null}},{key:"focus",value:function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.geometry.attributes.focus.count,a=0;a<n;a++)this.setFocus(a,!1,!1);var i=this.index[e];if(this.setFocus(i,!0,!1),t){for(var o=0;o<this.dp.edgeCount();o++){var r=this.dp.edgeNodes(o),s=null;r[0]===e?s=r[1]:r[1]===e&&(s=r[0]),s?(this.setEdgeFocus(o,!0,!1),this.setFocus(this.index[s],!0,!1)):this.setEdgeFocus(o,!1,!1)}this.updateEdgeFocus()}this.updateFocus()}},{key:"unfocus",value:function(){for(var e=this.geometry.attributes.focus.count,t=0;t<e;t++)this.setFocus(t,!0,!1);for(var n=0;n<this.dp.edgeCount();n++)this.setEdgeFocus(n,!0,!1);this.updateFocus(),this.updateEdgeFocus()}},{key:"display",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];console.log("NAME",e),e&&""!==e.trim()?(this.select(e,t),this.focus(e)):this.undisplay()}},{key:"undisplay",value:function(){this.unselect(),this.unfocus()}},{key:"hideAfter",value:function(e){var t=this,n=e<2016?this.dp.nodeNames().filter(function(n){var a=t.dp.nodeProperty(n,"discovery")||2016;return!t.dp.nodeExists(n)||a>e}):[];this.hideNodes([]),this.hideNodes(n)}},{key:"hideNodes",value:function(e){var t=this;this.dp.nodeNames().forEach(function(e){return t.hideNode(e,!1,!1)}),e.forEach(function(e){return t.hideNode(e,!0,!1)}),this.updateHideNode();for(var n=new Set(e),a=0;a<this.dp.edgeCount();a++){var i=this.dp.edgeNodes(a);this.hideEdge(a,n.has(i[0])||n.has(i[1]),!1)}this.updateHideEdge()}},{key:"hideNode",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.geometry.attributes.hidden.array[this.index[e]]=t,n&&this.updateHideNode()}},{key:"updateHideNode",value:function(){this.geometry.attributes.hidden.needsUpdate=!0}},{key:"hideEdge",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.edgeGeom.attributes.hidden.array[2*e+0]=t,this.edgeGeom.attributes.hidden.array[2*e+1]=t,n&&this.updateHideEdge()}},{key:"updateHideEdge",value:function(){this.edgeGeom.attributes.hidden.needsUpdate=!0}},{key:"center",value:function(){for(var e=this.geometry.attributes.selected.count,t=0,n=0,a=0;a<e;a++){var i=this.getPosition(a);t+=i.x,n+=i.y}t/=e,n/=e;for(var o=0;o<e;o++){var r=this.getPosition(o);this.setPosition(o,r.x-t,r.y-n,!1)}this.updatePosition();for(var s=0;s<this.dp.edgeCount();s++){var l=this.getEdgePosition(s,0);this.setEdgePosition(s,0,l.x-t,l.y-n,!1);var c=this.getEdgePosition(s,1);this.setEdgePosition(s,1,c.x-t,c.y-n,!1)}this.updateEdgePosition()}},{key:"expand",value:function(e){var t=e/this.expansion;this.expansion=e;for(var n=this.geometry.attributes.selected.count,a=0;a<n;a++){var i=this.getPosition(a);this.setPosition(a,i.x*t,i.y*t,!1)}this.updatePosition();for(var o=0;o<this.dp.edgeCount();o++){var r=this.getEdgePosition(o,0);this.setEdgePosition(o,0,r.x*t,r.y*t,!1);var s=this.getEdgePosition(o,1);this.setEdgePosition(o,1,s.x*t,s.y*t,!1)}this.updateEdgePosition()}},{key:"moveCamera",value:function(e,t){this.camera.left-=e/this.camera.zoom,this.camera.right-=e/this.camera.zoom,this.camera.top+=t/this.camera.zoom,this.camera.bottom+=t/this.camera.zoom,this.camera.updateProjectionMatrix()}},{key:"setCamera",value:function(e,t){this.camera.left=e-this.width/2,this.camera.right=e+this.width/2,this.camera.bottom=t-this.height/2,this.camera.top=t+this.height/2,this.camera.updateProjectionMatrix()}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"zoom",get:function(){return this.camera.zoom},set:function(e){this.camera.zoom=e,this.camera.updateProjectionMatrix(),this.material.uniforms.zoom.value=e,this.raycaster.params.Points.threshold=this.threshold}}]),e}();var ae=function(e){function t(e,n){var a;Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this))).nodes=e,a.edges=n;var i=function(e){var t={},n=0;e.forEach(function(e){e.forEach(function(e){t.hasOwnProperty(e)||(t[e]=n++)})});var a=e.map(function(e){return e.map(function(e){return t[e]})});return{nodeIndex:t,edgeIndex:a}}(n);a._nodeIndex=i.nodeIndex,a.edgeIndex=i.edgeIndex,a._names=Object.keys(a.nodes);var o=a._names.indexOf("value");return o>-1&&(a._names=a._names.slice(0,o).concat(a._names.slice(o+1))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"edgeCount",value:function(){return this.edges.length}},{key:"edgePosition",value:function(e){var t=this.edges[e],n=[this.nodes[t[0]],this.nodes[t[1]]];return void 0!==n[0]&&void 0!==n[1]||(console.log(e),console.log(t),console.log(n)),n}},{key:"edgeNodes",value:function(e){return this.edges[e]}},{key:"nodeNames",value:function(){return this._names}},{key:"nodePosition",value:function(e){var t=this.nodes[e];return{x:t.x,y:t.y}}},{key:"nodeDegrees",value:function(e){var t=this,n={},a=function(a,i){n.hasOwnProperty(a)||(n[a]=0);var o=t.nodeProperty(i,"discovery")||2016;t.nodeExists(i)&&o<=e&&n[a]++};return this.edges.forEach(function(e){a(e[0],e[1]),a(e[1],e[0])}),n}},{key:"nodeIndex",value:function(e){return this._nodeIndex[e]}},{key:"nodeProperty",value:function(e,t){return this.nodes[e][t]}},{key:"nodeExists",value:function(e){return null!==this.nodes[e].discovery}}]),t}(function e(){Object(s.a)(this,e),console.log("hi")}),ie=n(86);function oe(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(a){Object.entries(t).forEach(function(t){var n=Object(ie.a)(t,2),i=n[0],o=n[1],r=a?a.addEventListener:e.removeEventListener;"function"!==typeof o||r(i,o)}),a&&Object.entries(n).forEach(function(e){var t=Object(ie.a)(e,2),n=t[0],i=t[1];a[n]=i}),e=a}}var re=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).dragging={status:!1,start:{x:0,y:0}},n.onValueChanged=function(e,t){t in n.props&&n.props.update&&n.props.update(e,t),t in n.sceneSetters&&n.sceneSetters[t](e)},n.onVisZoom=function(e){e.preventDefault();var t=e.deltaY>0?-1:1;n.onValueChanged(n.props.zoom.value+t,"zoom")},n.onVisClick=function(e){if(!n.dragging.status){var t=n.scene.pick({x:e.clientX,y:e.clientY});t&&n.selectNode(t)}},n.onVisDrag=function(e){e.preventDefault(),n.dragging.status=!0,n.dragging.start={x:e.clientX,y:e.clientY};var t=n.props.showLinks.value;t&&n.scene.linksVisible(!1);var a=function(e){n.onDrag(e)};window.addEventListener("mousemove",a),window.addEventListener("mouseup",function e(){window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",e),t&&n.scene.linksVisible(!0),setTimeout(function(){n.dragging.status=!1},50)})},n.toggleAutoplay=function(){var e=n.props.year,t=e.interval,a=!e.play;e.play&&e.interval&&(clearInterval(e.interval),t=null),e.play||(t=setInterval(function(){var e=n.props.year,t=e.value+1;e.value===e.max&&(t=e.min),n.onValueChanged(t,"year")},1e3)),n.props.setPlayState(a,t)},n.onDrag=function(e){if(n.dragging.status){var t=e.clientX-n.dragging.start.x,a=e.clientY-n.dragging.start.y;n.scene.moveCamera(t,a),n.dragging.start={x:e.clientX,y:e.clientY}}},n.onClearSelection=function(){n.scene.undisplay(),n.onValueChanged(null,"selected"),n.onValueChanged(null,"structure")},n.sceneSetters={zoom:function(e){n.scene.zoom=.125*Math.pow(1.06,e)},spacing:function(e){n.scene.expand(e)},year:function(e){n.scene.hideAfter(e),"none"!==n.props.size.value&&n.scene.setDegreeSize(n.props.year.value,n.props.size.value)},opacity:function(e){n.scene.setLinkOpacity(e)},search:function(e){var t=n.scene.pickName(e);t?(n.scene.display(e,!0),n.selectNode(t)):(n.scene.undisplay(),n.onValueChanged(null,"selected"),n.onValueChanged(null,"structure"))},showLinks:function(e){n.scene.linksVisible(e)},nightMode:function(e){n.scene.setNightMode(e)},size:function(e){n.scene.setDegreeSize(n.props.year.value,e)},color:function(e){switch(e){case"boolean":n.scene.setBooleanColor();break;case"discovery":n.scene.setDiscoveryColor();break;case"undiscovered":n.scene.setUndiscoveredColor(n.props.colorYear.value);break;default:throw new Error("impossible colormap option: ".concat(e))}},colorYear:function(e){switch(n.props.color.value){case"boolean":n.scene.setBooleanColor();break;case"discovery":n.scene.setDiscoveryColor();break;case"undiscovered":n.scene.setUndiscoveredColor(e);break;default:throw new Error("impossible colormap option: ".concat(e))}}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.edges,a=t.nodes;this.data=new ae(a,n),this.searchOptions=this.data.nodeNames().slice().sort(U).map(function(e){return{label:e}}),this.scene=new ne({el:this.visElement,dp:this.data}),this.setDefaults();window.requestAnimationFrame(function t(n){e.scene.render(),window.requestAnimationFrame(t)}),this.ro=new p.a(function(){e.scene.resize()}),this.ro.observe(this.visElement)}},{key:"componentWillUnmount",value:function(){this.ro&&this.ro.unobserve(this.visElement)}},{key:"setDefaults",value:function(){for(var e in this.props){var t=this.props[e].value;this.onValueChanged(t,e)}}},{key:"selectNode",value:function(e){var t,n=this,a=this.props.selected.value?this.props.selected.value.name:"";(e.name===a?(this.scene.undisplay(),e=null):this.scene.display(e.name),this.onValueChanged(e,"selected"),this.onValueChanged(null,"structure"),e)&&(t=e.name,fetch("sample-data/structures/".concat(t,".cjson")).then(function(e){return e.json()})).then(function(e){n.onValueChanged(e,"structure")})}},{key:"render",value:function(){var e=this,t=this.props,n=t.dataset,a=t.zoom,o=t.spacing,r=t.opacity,s=t.year,l=t.search,c=t.size,u=t.color,d=t.colorYear,h=t.showLinks,g=t.nightMode,p=t.selected,f=t.structure,b=t.nodes,E=t.edges;this.datasetName!==this.props.dataset.value&&(console.log("DATA CHANGED"),this.scene&&(this.scene.clear(),this.data=new ae(b,E),this.scene.initScene(this.data),this.setDefaults())),this.datasetName=this.props.dataset.value;return i.a.createElement("div",null,i.a.createElement(m.l,null,i.a.createElement(m.o,null,i.a.createElement(m.p,null,i.a.createElement(m.n,null,"Dataset"))),i.a.createElement(m.m,null,i.a.createElement(m.p,null,i.a.createElement(m.n,null,i.a.createElement(m.g,{fullWidth:!0},i.a.createElement(m.k,{value:n.value,onChange:function(t){e.onValueChanged(t.target.value,"dataset")}},n.options.map(function(e){return i.a.createElement(m.i,{key:e.value,value:e.value},e.label)})))))),i.a.createElement(m.o,null,i.a.createElement(m.p,null,i.a.createElement(m.n,null,"Zoom"),i.a.createElement(m.n,null,"Link opacity / display"),i.a.createElement(m.n,null,"Node spacing"),i.a.createElement(m.n,null,"Discovered before"))),i.a.createElement(m.m,null,i.a.createElement(m.p,null,i.a.createElement(m.n,null,i.a.createElement(m.g,{fullWidth:!0},i.a.createElement(y,{params:a,onChange:function(t){e.onValueChanged(t,"zoom")}}))),i.a.createElement(m.n,null,i.a.createElement(m.g,{fullWidth:!0},i.a.createElement(y,{disabled:!h.value,params:r,onChange:function(t){e.onValueChanged(t,"opacity")}},i.a.createElement(m.f,{checked:h.value,onChange:function(t,n){e.onValueChanged(n,"showLinks")}})))),i.a.createElement(m.n,null,i.a.createElement(m.g,{fullWidth:!0},i.a.createElement(y,{params:o,onChange:function(t){e.onValueChanged(t,"spacing")}}))),i.a.createElement(m.n,null,i.a.createElement(m.g,{fullWidth:!0},i.a.createElement(y,{params:s,onChange:function(t){e.onValueChanged(t,"year")},digits:0},i.a.createElement(m.h,{onClick:this.toggleAutoplay},s.play?i.a.createElement(v.a,null):i.a.createElement(v.b,null))))))),i.a.createElement(m.o,null,i.a.createElement(m.p,null,i.a.createElement(m.n,null,"Search"),i.a.createElement(m.n,null,"Node size"),i.a.createElement(m.n,null,"Node color"),i.a.createElement(m.n,null,"Color year"))),i.a.createElement(m.m,null,i.a.createElement(m.p,null,i.a.createElement(m.n,null,i.a.createElement(m.g,{fullWidth:!0},i.a.createElement(A,{options:this.searchOptions,value:l.value,maxItems:20,onChange:function(t,n){e.onValueChanged(n.newValue,"search")}}))),i.a.createElement(m.n,null,i.a.createElement(m.g,{fullWidth:!0},i.a.createElement(m.k,{value:c.value,onChange:function(t){e.onValueChanged(t.target.value,"size")}},c.options.map(function(e){return i.a.createElement(m.i,{key:e.value,value:e.value},e.label)})))),i.a.createElement(m.n,null,i.a.createElement(m.g,{fullWidth:!0},i.a.createElement(m.k,{value:u.value,onChange:function(t){e.onValueChanged(t.target.value,"color")}},u.options.map(function(e){return i.a.createElement(m.i,{key:e.value,value:e.value},e.label)})))),i.a.createElement(m.n,null,i.a.createElement(m.g,{fullWidth:!0},i.a.createElement(y,{params:d,onChange:function(t){e.onValueChanged(t,"colorYear")},disabled:"undiscovered"!==u.value,digits:0}))))),i.a.createElement(m.o,null,i.a.createElement(m.p,null,i.a.createElement(m.n,null,"Night Mode ",i.a.createElement(m.f,{checked:g.value,onChange:function(t,n){e.onValueChanged(n,"nightMode")}}))))),i.a.createElement(m.j,{style:{width:"100%",height:"40rem",marginTop:"2rem",marginBottom:"2rem"}},i.a.createElement("split-me",{n:2,sizes:"0.6, 0.4",ref:oe({slotResized:function(){e.onValueChanged(a.value,"zoom")}})},i.a.createElement("div",{slot:0,style:{width:"100%",height:"100%"},ref:function(t){e.visElement=t},draggable:!0,onDragStart:this.onVisDrag,onWheel:this.onVisZoom,onClick:this.onVisClick}),i.a.createElement("oc-molecule",{slot:1,ref:oe({},{cjson:f.value})}))),p.value&&i.a.createElement(I,Object.assign({},p.value,{onClear:this.onClearSelection})))}}]),t}(a.Component),se=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).update=function(e,t){if(n.state)if("dataset"===t){var a="sample-data/".concat(e,".json");fetch(a).then(function(e){return e.json()}).then(function(a){n.setState(function(n){return n[t].value=e,n.nodes=a.nodes,n.edges=a.edges,n})})}else t in n.state&&n.setState(function(n){return n[t].value=e,n})},n.setPlayState=function(e,t){n.setState(function(n,a){return n.year.play=e,n.year.interval=t,n})},n.state={nodes:null,edges:null,dataset:{value:"precise",options:[{label:"Precise",value:"precise"},{label:"Sample 1",value:"sample1"},{label:"Sample 2",value:"sample2"}]},zoom:{value:40,min:0,max:100},spacing:{value:1,min:.1,max:10},opacity:{value:.01,min:0,max:.1,step:.001},year:{value:2016,min:1945,max:2016,step:1,play:!1,interval:null},search:{value:""},color:{value:"discovery",options:[{label:"None",value:"none"},{label:"Year of discovery",value:"discovery"},{label:"Discovered/Hypothetical",value:"boolean"},{label:"Discovered/Undiscovered",value:"undiscovered"}]},colorYear:{value:2016,min:1945,max:2016,step:1},size:{value:"normal",options:[{label:"None",value:"none"},{label:"Degree",value:"normal"},{label:"Degree - Large",value:"large"},{label:"Degree - Huge",value:"huge"}]},showLinks:{value:!1},nightMode:{value:!1},selected:{value:null},structure:{value:null}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.update("precise","dataset")}},{key:"render",value:function(){var e=this.state,t=e.nodes,n=e.edges,a=e.zoom,o=e.dataset,r=e.spacing,s=e.opacity,l=e.year,c=e.search,u=e.size,d=e.color,h=e.colorYear,g=e.showLinks,m=e.nightMode,v=e.selected,p=e.structure;return t&&n?i.a.createElement(re,{update:this.update,setPlayState:this.setPlayState,nodes:t,edges:n,dataset:o,zoom:a,spacing:r,opacity:s,year:l,search:c,size:u,color:d,colorYear:h,showLinks:g,nightMode:m,selected:v,structure:p}):null}}]),t}(a.Component),le=n(149),ce=n.n(le),ue=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,{color:"default",position:"static"},i.a.createElement(m.q,null,i.a.createElement(m.b,{color:"inherit","aria-label":"Logo",style:{marginRight:9}},i.a.createElement("img",{className:"logo",src:ce.a,alt:"logo"})),i.a.createElement(m.r,{variant:"h5",color:"inherit",noWrap:!0},"MaterialNet"),i.a.createElement("div",{style:{flex:1}})))}}]),t}(a.Component),de=(n(5623),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(g.a,null),i.a.createElement(ue,null),i.a.createElement("div",{className:"content"},i.a.createElement(se,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=n(153),ge=n(154);Object(he.a)(window),Object(ge.a)(window),r.a.render(i.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5443,31,18]]]);
//# sourceMappingURL=main.339e9da8.chunk.js.map