import{o as m,ai as T,E as re,aj as L,ak as E,al as te,t as d,ae as g,am as Pe,an as k,ao as S,ap as F,ag as b,r as C,u as H,aq as ie,ar as P,as as y,at as J,au as Oe,av as K,aw as Se,ax as D,p as V,ay as j,az as Fe,aA as X,aB as A,aC as De,aD as Ve,q as je}from"./index-18c01fc6.js";var Ae="\0",x="\0",ae="";class _{constructor(n={}){this._isDirected=m(n,"directed")?n.directed:!0,this._isMultigraph=m(n,"multigraph")?n.multigraph:!1,this._isCompound=m(n,"compound")?n.compound:!1,this._label=void 0,this._defaultNodeLabelFn=T(void 0),this._defaultEdgeLabelFn=T(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[x]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(n){return this._label=n,this}graph(){return this._label}setDefaultNodeLabel(n){return re(n)||(n=T(n)),this._defaultNodeLabelFn=n,this}nodeCount(){return this._nodeCount}nodes(){return L(this._nodes)}sources(){var n=this;return E(this.nodes(),function(r){return te(n._in[r])})}sinks(){var n=this;return E(this.nodes(),function(r){return te(n._out[r])})}setNodes(n,r){var t=arguments,i=this;return d(n,function(o){t.length>1?i.setNode(o,r):i.setNode(o)}),this}setNode(n,r){return m(this._nodes,n)?(arguments.length>1&&(this._nodes[n]=r),this):(this._nodes[n]=arguments.length>1?r:this._defaultNodeLabelFn(n),this._isCompound&&(this._parent[n]=x,this._children[n]={},this._children[x][n]=!0),this._in[n]={},this._preds[n]={},this._out[n]={},this._sucs[n]={},++this._nodeCount,this)}node(n){return this._nodes[n]}hasNode(n){return m(this._nodes,n)}removeNode(n){var r=this;if(m(this._nodes,n)){var t=function(i){r.removeEdge(r._edgeObjs[i])};delete this._nodes[n],this._isCompound&&(this._removeFromParentsChildList(n),delete this._parent[n],d(this.children(n),function(i){r.setParent(i)}),delete this._children[n]),d(L(this._in[n]),t),delete this._in[n],delete this._preds[n],d(L(this._out[n]),t),delete this._out[n],delete this._sucs[n],--this._nodeCount}return this}setParent(n,r){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(g(r))r=x;else{r+="";for(var t=r;!g(t);t=this.parent(t))if(t===n)throw new Error("Setting "+r+" as parent of "+n+" would create a cycle");this.setNode(r)}return this.setNode(n),this._removeFromParentsChildList(n),this._parent[n]=r,this._children[r][n]=!0,this}_removeFromParentsChildList(n){delete this._children[this._parent[n]][n]}parent(n){if(this._isCompound){var r=this._parent[n];if(r!==x)return r}}children(n){if(g(n)&&(n=x),this._isCompound){var r=this._children[n];if(r)return L(r)}else{if(n===x)return this.nodes();if(this.hasNode(n))return[]}}predecessors(n){var r=this._preds[n];if(r)return L(r)}successors(n){var r=this._sucs[n];if(r)return L(r)}neighbors(n){var r=this.predecessors(n);if(r)return Pe(r,this.successors(n))}isLeaf(n){var r;return this.isDirected()?r=this.successors(n):r=this.neighbors(n),r.length===0}filterNodes(n){var r=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});r.setGraph(this.graph());var t=this;d(this._nodes,function(a,s){n(s)&&r.setNode(s,a)}),d(this._edgeObjs,function(a){r.hasNode(a.v)&&r.hasNode(a.w)&&r.setEdge(a,t.edge(a))});var i={};function o(a){var s=t.parent(a);return s===void 0||r.hasNode(s)?(i[a]=s,s):s in i?i[s]:o(s)}return this._isCompound&&d(r.nodes(),function(a){r.setParent(a,o(a))}),r}setDefaultEdgeLabel(n){return re(n)||(n=T(n)),this._defaultEdgeLabelFn=n,this}edgeCount(){return this._edgeCount}edges(){return k(this._edgeObjs)}setPath(n,r){var t=this,i=arguments;return S(n,function(o,a){return i.length>1?t.setEdge(o,a,r):t.setEdge(o,a),a}),this}setEdge(){var n,r,t,i,o=!1,a=arguments[0];typeof a=="object"&&a!==null&&"v"in a?(n=a.v,r=a.w,t=a.name,arguments.length===2&&(i=arguments[1],o=!0)):(n=a,r=arguments[1],t=arguments[3],arguments.length>2&&(i=arguments[2],o=!0)),n=""+n,r=""+r,g(t)||(t=""+t);var s=M(this._isDirected,n,r,t);if(m(this._edgeLabels,s))return o&&(this._edgeLabels[s]=i),this;if(!g(t)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(n),this.setNode(r),this._edgeLabels[s]=o?i:this._defaultEdgeLabelFn(n,r,t);var u=Ge(this._isDirected,n,r,t);return n=u.v,r=u.w,Object.freeze(u),this._edgeObjs[s]=u,oe(this._preds[r],n),oe(this._sucs[n],r),this._in[r][s]=u,this._out[n][s]=u,this._edgeCount++,this}edge(n,r,t){var i=arguments.length===1?B(this._isDirected,arguments[0]):M(this._isDirected,n,r,t);return this._edgeLabels[i]}hasEdge(n,r,t){var i=arguments.length===1?B(this._isDirected,arguments[0]):M(this._isDirected,n,r,t);return m(this._edgeLabels,i)}removeEdge(n,r,t){var i=arguments.length===1?B(this._isDirected,arguments[0]):M(this._isDirected,n,r,t),o=this._edgeObjs[i];return o&&(n=o.v,r=o.w,delete this._edgeLabels[i],delete this._edgeObjs[i],se(this._preds[r],n),se(this._sucs[n],r),delete this._in[r][i],delete this._out[n][i],this._edgeCount--),this}inEdges(n,r){var t=this._in[n];if(t){var i=k(t);return r?E(i,function(o){return o.v===r}):i}}outEdges(n,r){var t=this._out[n];if(t){var i=k(t);return r?E(i,function(o){return o.w===r}):i}}nodeEdges(n,r){var t=this.inEdges(n,r);if(t)return t.concat(this.outEdges(n,r))}}_.prototype._nodeCount=0;_.prototype._edgeCount=0;function oe(e,n){e[n]?e[n]++:e[n]=1}function se(e,n){--e[n]||delete e[n]}function M(e,n,r,t){var i=""+n,o=""+r;if(!e&&i>o){var a=i;i=o,o=a}return i+ae+o+ae+(g(t)?Ae:t)}function Ge(e,n,r,t){var i=""+n,o=""+r;if(!e&&i>o){var a=i;i=o,o=a}var s={v:i,w:o};return t&&(s.name=t),s}function B(e,n){return M(e,n.v,n.w,n.name)}class Be{constructor(){var n={};n._next=n._prev=n,this._sentinel=n}dequeue(){var n=this._sentinel,r=n._prev;if(r!==n)return ue(r),r}enqueue(n){var r=this._sentinel;n._prev&&n._next&&ue(n),n._next=r._next,r._next._prev=n,r._next=n,n._prev=r}toString(){for(var n=[],r=this._sentinel,t=r._prev;t!==r;)n.push(JSON.stringify(t,Ye)),t=t._prev;return"["+n.join(", ")+"]"}}function ue(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function Ye(e,n){if(e!=="_next"&&e!=="_prev")return n}var qe=T(1);function $e(e,n){if(e.nodeCount()<=1)return[];var r=ze(e,n||qe),t=We(r.graph,r.buckets,r.zeroIdx);return F(b(t,function(i){return e.outEdges(i.v,i.w)}))}function We(e,n,r){for(var t=[],i=n[n.length-1],o=n[0],a;e.nodeCount();){for(;a=o.dequeue();)Y(e,n,r,a);for(;a=i.dequeue();)Y(e,n,r,a);if(e.nodeCount()){for(var s=n.length-2;s>0;--s)if(a=n[s].dequeue(),a){t=t.concat(Y(e,n,r,a,!0));break}}}return t}function Y(e,n,r,t,i){var o=i?[]:void 0;return d(e.inEdges(t.v),function(a){var s=e.edge(a),u=e.node(a.v);i&&o.push({v:a.v,w:a.w}),u.out-=s,U(n,r,u)}),d(e.outEdges(t.v),function(a){var s=e.edge(a),u=a.w,f=e.node(u);f.in-=s,U(n,r,f)}),e.removeNode(t.v),o}function ze(e,n){var r=new _,t=0,i=0;d(e.nodes(),function(s){r.setNode(s,{v:s,in:0,out:0})}),d(e.edges(),function(s){var u=r.edge(s.v,s.w)||0,f=n(s),h=u+f;r.setEdge(s.v,s.w,h),i=Math.max(i,r.node(s.v).out+=f),t=Math.max(t,r.node(s.w).in+=f)});var o=C(i+t+3).map(function(){return new Be}),a=t+1;return d(r.nodes(),function(s){U(o,a,r.node(s))}),{graph:r,buckets:o,zeroIdx:a}}function U(e,n,r){r.out?r.in?e[r.out-r.in+n].enqueue(r):e[e.length-1].enqueue(r):e[0].enqueue(r)}function Xe(e){var n=e.graph().acyclicer==="greedy"?$e(e,r(e)):Ue(e);d(n,function(t){var i=e.edge(t);e.removeEdge(t),i.forwardName=t.name,i.reversed=!0,e.setEdge(t.w,t.v,i,H("rev"))});function r(t){return function(i){return t.edge(i).weight}}}function Ue(e){var n=[],r={},t={};function i(o){m(t,o)||(t[o]=!0,r[o]=!0,d(e.outEdges(o),function(a){m(r,a.w)?n.push(a):i(a.w)}),delete r[o])}return d(e.nodes(),i),n}function He(e){d(e.edges(),function(n){var r=e.edge(n);if(r.reversed){e.removeEdge(n);var t=r.forwardName;delete r.reversed,delete r.forwardName,e.setEdge(n.w,n.v,r,t)}})}function I(e,n,r,t){var i;do i=H(t);while(e.hasNode(i));return r.dummy=n,e.setNode(i,r),i}function Je(e){var n=new _().setGraph(e.graph());return d(e.nodes(),function(r){n.setNode(r,e.node(r))}),d(e.edges(),function(r){var t=n.edge(r.v,r.w)||{weight:0,minlen:1},i=e.edge(r);n.setEdge(r.v,r.w,{weight:t.weight+i.weight,minlen:Math.max(t.minlen,i.minlen)})}),n}function we(e){var n=new _({multigraph:e.isMultigraph()}).setGraph(e.graph());return d(e.nodes(),function(r){e.children(r).length||n.setNode(r,e.node(r))}),d(e.edges(),function(r){n.setEdge(r,e.edge(r))}),n}function de(e,n){var r=e.x,t=e.y,i=n.x-r,o=n.y-t,a=e.width/2,s=e.height/2;if(!i&&!o)throw new Error("Not possible to find intersection inside of the rectangle");var u,f;return Math.abs(o)*a>Math.abs(i)*s?(o<0&&(s=-s),u=s*i/o,f=s):(i<0&&(a=-a),u=a,f=a*o/i),{x:r+u,y:t+f}}function G(e){var n=b(C(ge(e)+1),function(){return[]});return d(e.nodes(),function(r){var t=e.node(r),i=t.rank;g(i)||(n[i][t.order]=r)}),n}function Ke(e){var n=P(b(e.nodes(),function(r){return e.node(r).rank}));d(e.nodes(),function(r){var t=e.node(r);m(t,"rank")&&(t.rank-=n)})}function Qe(e){var n=P(b(e.nodes(),function(o){return e.node(o).rank})),r=[];d(e.nodes(),function(o){var a=e.node(o).rank-n;r[a]||(r[a]=[]),r[a].push(o)});var t=0,i=e.graph().nodeRankFactor;d(r,function(o,a){g(o)&&a%i!==0?--t:t&&d(o,function(s){e.node(s).rank+=t})})}function fe(e,n,r,t){var i={width:0,height:0};return arguments.length>=4&&(i.rank=r,i.order=t),I(e,"border",i,n)}function ge(e){return y(b(e.nodes(),function(n){var r=e.node(n).rank;if(!g(r))return r}))}function Ze(e,n){var r={lhs:[],rhs:[]};return d(e,function(t){n(t)?r.lhs.push(t):r.rhs.push(t)}),r}function en(e,n){var r=ie();try{return n()}finally{console.log(e+" time: "+(ie()-r)+"ms")}}function nn(e,n){return n()}function rn(e){function n(r){var t=e.children(r),i=e.node(r);if(t.length&&d(t,n),m(i,"minRank")){i.borderLeft=[],i.borderRight=[];for(var o=i.minRank,a=i.maxRank+1;o<a;++o)he(e,"borderLeft","_bl",r,i,o),he(e,"borderRight","_br",r,i,o)}}d(e.children(),n)}function he(e,n,r,t,i,o){var a={width:0,height:0,rank:o,borderType:n},s=i[n][o-1],u=I(e,"border",a,r);i[n][o]=u,e.setParent(u,t),s&&e.setEdge(s,u,{weight:1})}function tn(e){var n=e.graph().rankdir.toLowerCase();(n==="lr"||n==="rl")&&_e(e)}function an(e){var n=e.graph().rankdir.toLowerCase();(n==="bt"||n==="rl")&&on(e),(n==="lr"||n==="rl")&&(sn(e),_e(e))}function _e(e){d(e.nodes(),function(n){ce(e.node(n))}),d(e.edges(),function(n){ce(e.edge(n))})}function ce(e){var n=e.width;e.width=e.height,e.height=n}function on(e){d(e.nodes(),function(n){q(e.node(n))}),d(e.edges(),function(n){var r=e.edge(n);d(r.points,q),m(r,"y")&&q(r)})}function q(e){e.y=-e.y}function sn(e){d(e.nodes(),function(n){$(e.node(n))}),d(e.edges(),function(n){var r=e.edge(n);d(r.points,$),m(r,"x")&&$(r)})}function $(e){var n=e.x;e.x=e.y,e.y=n}function un(e){e.graph().dummyChains=[],d(e.edges(),function(n){dn(e,n)})}function dn(e,n){var r=n.v,t=e.node(r).rank,i=n.w,o=e.node(i).rank,a=n.name,s=e.edge(n),u=s.labelRank;if(o!==t+1){e.removeEdge(n);var f,h,c;for(c=0,++t;t<o;++c,++t)s.points=[],h={width:0,height:0,edgeLabel:s,edgeObj:n,rank:t},f=I(e,"edge",h,"_d"),t===u&&(h.width=s.width,h.height=s.height,h.dummy="edge-label",h.labelpos=s.labelpos),e.setEdge(r,f,{weight:s.weight},a),c===0&&e.graph().dummyChains.push(f),r=f;e.setEdge(r,i,{weight:s.weight},a)}}function fn(e){d(e.graph().dummyChains,function(n){var r=e.node(n),t=r.edgeLabel,i;for(e.setEdge(r.edgeObj,t);r.dummy;)i=e.successors(n)[0],e.removeNode(n),t.points.push({x:r.x,y:r.y}),r.dummy==="edge-label"&&(t.x=r.x,t.y=r.y,t.width=r.width,t.height=r.height),n=i,r=e.node(n)})}function Q(e){var n={};function r(t){var i=e.node(t);if(m(n,t))return i.rank;n[t]=!0;var o=P(b(e.outEdges(t),function(a){return r(a.w)-e.edge(a).minlen}));return(o===Number.POSITIVE_INFINITY||o===void 0||o===null)&&(o=0),i.rank=o}d(e.sources(),r)}function O(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}function Ee(e){var n=new _({directed:!1}),r=e.nodes()[0],t=e.nodeCount();n.setNode(r,{});for(var i,o;hn(n,e)<t;)i=cn(n,e),o=n.hasNode(i.v)?O(e,i):-O(e,i),ln(n,e,o);return n}function hn(e,n){function r(t){d(n.nodeEdges(t),function(i){var o=i.v,a=t===o?i.w:o;!e.hasNode(a)&&!O(n,i)&&(e.setNode(a,{}),e.setEdge(t,a,{}),r(a))})}return d(e.nodes(),r),e.nodeCount()}function cn(e,n){return J(n.edges(),function(r){if(e.hasNode(r.v)!==e.hasNode(r.w))return O(n,r)})}function ln(e,n,r){d(e.nodes(),function(t){n.node(t).rank+=r})}function vn(){}vn.prototype=new Error;function ke(e,n,r){Oe(n)||(n=[n]);var t=(e.isDirected()?e.successors:e.neighbors).bind(e),i=[],o={};return d(n,function(a){if(!e.hasNode(a))throw new Error("Graph does not have node: "+a);xe(e,a,r==="post",o,t,i)}),i}function xe(e,n,r,t,i,o){m(t,n)||(t[n]=!0,r||o.push(n),d(i(n),function(a){xe(e,a,r,t,i,o)}),r&&o.push(n))}function pn(e,n){return ke(e,n,"post")}function mn(e,n){return ke(e,n,"pre")}N.initLowLimValues=ee;N.initCutValues=Z;N.calcCutValue=ye;N.leaveEdge=Le;N.enterEdge=Ce;N.exchangeEdges=Ie;function N(e){e=Je(e),Q(e);var n=Ee(e);ee(n),Z(n,e);for(var r,t;r=Le(n);)t=Ce(n,e,r),Ie(n,e,r,t)}function Z(e,n){var r=pn(e,e.nodes());r=r.slice(0,r.length-1),d(r,function(t){bn(e,n,t)})}function bn(e,n,r){var t=e.node(r),i=t.parent;e.edge(r,i).cutvalue=ye(e,n,r)}function ye(e,n,r){var t=e.node(r),i=t.parent,o=!0,a=n.edge(r,i),s=0;return a||(o=!1,a=n.edge(i,r)),s=a.weight,d(n.nodeEdges(r),function(u){var f=u.v===r,h=f?u.w:u.v;if(h!==i){var c=f===o,l=n.edge(u).weight;if(s+=c?l:-l,gn(e,r,h)){var v=e.edge(r,h).cutvalue;s+=c?-v:v}}}),s}function ee(e,n){arguments.length<2&&(n=e.nodes()[0]),Ne(e,{},1,n)}function Ne(e,n,r,t,i){var o=r,a=e.node(t);return n[t]=!0,d(e.neighbors(t),function(s){m(n,s)||(r=Ne(e,n,r,s,t))}),a.low=o,a.lim=r++,i?a.parent=i:delete a.parent,r}function Le(e){return K(e.edges(),function(n){return e.edge(n).cutvalue<0})}function Ce(e,n,r){var t=r.v,i=r.w;n.hasEdge(t,i)||(t=r.w,i=r.v);var o=e.node(t),a=e.node(i),s=o,u=!1;o.lim>a.lim&&(s=a,u=!0);var f=E(n.edges(),function(h){return u===le(e,e.node(h.v),s)&&u!==le(e,e.node(h.w),s)});return J(f,function(h){return O(n,h)})}function Ie(e,n,r,t){var i=r.v,o=r.w;e.removeEdge(i,o),e.setEdge(t.v,t.w,{}),ee(e),Z(e,n),wn(e,n)}function wn(e,n){var r=K(e.nodes(),function(i){return!n.node(i).parent}),t=mn(e,r);t=t.slice(1),d(t,function(i){var o=e.node(i).parent,a=n.edge(i,o),s=!1;a||(a=n.edge(o,i),s=!0),n.node(i).rank=n.node(o).rank+(s?a.minlen:-a.minlen)})}function gn(e,n,r){return e.hasEdge(n,r)}function le(e,n,r){return r.low<=n.lim&&n.lim<=r.lim}function _n(e){switch(e.graph().ranker){case"network-simplex":ve(e);break;case"tight-tree":kn(e);break;case"longest-path":En(e);break;default:ve(e)}}var En=Q;function kn(e){Q(e),Ee(e)}function ve(e){N(e)}function xn(e){var n=I(e,"root",{},"_root"),r=yn(e),t=y(k(r))-1,i=2*t+1;e.graph().nestingRoot=n,d(e.edges(),function(a){e.edge(a).minlen*=i});var o=Nn(e)+1;d(e.children(),function(a){Re(e,n,i,o,t,r,a)}),e.graph().nodeRankFactor=i}function Re(e,n,r,t,i,o,a){var s=e.children(a);if(!s.length){a!==n&&e.setEdge(n,a,{weight:0,minlen:r});return}var u=fe(e,"_bt"),f=fe(e,"_bb"),h=e.node(a);e.setParent(u,a),h.borderTop=u,e.setParent(f,a),h.borderBottom=f,d(s,function(c){Re(e,n,r,t,i,o,c);var l=e.node(c),v=l.borderTop?l.borderTop:c,p=l.borderBottom?l.borderBottom:c,w=l.borderTop?t:2*t,R=v!==p?1:i-o[a]+1;e.setEdge(u,v,{weight:w,minlen:R,nestingEdge:!0}),e.setEdge(p,f,{weight:w,minlen:R,nestingEdge:!0})}),e.parent(a)||e.setEdge(n,u,{weight:0,minlen:i+o[a]})}function yn(e){var n={};function r(t,i){var o=e.children(t);o&&o.length&&d(o,function(a){r(a,i+1)}),n[t]=i}return d(e.children(),function(t){r(t,1)}),n}function Nn(e){return S(e.edges(),function(n,r){return n+e.edge(r).weight},0)}function Ln(e){var n=e.graph();e.removeNode(n.nestingRoot),delete n.nestingRoot,d(e.edges(),function(r){var t=e.edge(r);t.nestingEdge&&e.removeEdge(r)})}function Cn(e,n,r){var t={},i;d(r,function(o){for(var a=e.parent(o),s,u;a;){if(s=e.parent(a),s?(u=t[s],t[s]=a):(u=i,i=a),u&&u!==a){n.setEdge(u,a);return}a=s}})}function In(e,n,r){var t=Rn(e),i=new _({compound:!0}).setGraph({root:t}).setDefaultNodeLabel(function(o){return e.node(o)});return d(e.nodes(),function(o){var a=e.node(o),s=e.parent(o);(a.rank===n||a.minRank<=n&&n<=a.maxRank)&&(i.setNode(o),i.setParent(o,s||t),d(e[r](o),function(u){var f=u.v===o?u.w:u.v,h=i.edge(f,o),c=g(h)?0:h.weight;i.setEdge(f,o,{weight:e.edge(u).weight+c})}),m(a,"minRank")&&i.setNode(o,{borderLeft:a.borderLeft[n],borderRight:a.borderRight[n]}))}),i}function Rn(e){for(var n;e.hasNode(n=H("_root")););return n}function Tn(e,n){for(var r=0,t=1;t<n.length;++t)r+=Mn(e,n[t-1],n[t]);return r}function Mn(e,n,r){for(var t=Se(r,b(r,function(f,h){return h})),i=F(b(n,function(f){return D(b(e.outEdges(f),function(h){return{pos:t[h.w],weight:e.edge(h).weight}}),"pos")})),o=1;o<r.length;)o<<=1;var a=2*o-1;o-=1;var s=b(new Array(a),function(){return 0}),u=0;return d(i.forEach(function(f){var h=f.pos+o;s[h]+=f.weight;for(var c=0;h>0;)h%2&&(c+=s[h+1]),h=h-1>>1,s[h]+=f.weight;u+=f.weight*c})),u}function Pn(e){var n={},r=E(e.nodes(),function(s){return!e.children(s).length}),t=y(b(r,function(s){return e.node(s).rank})),i=b(C(t+1),function(){return[]});function o(s){if(!m(n,s)){n[s]=!0;var u=e.node(s);i[u.rank].push(s),d(e.successors(s),o)}}var a=D(r,function(s){return e.node(s).rank});return d(a,o),i}function On(e,n){return b(n,function(r){var t=e.inEdges(r);if(t.length){var i=S(t,function(o,a){var s=e.edge(a),u=e.node(a.v);return{sum:o.sum+s.weight*u.order,weight:o.weight+s.weight}},{sum:0,weight:0});return{v:r,barycenter:i.sum/i.weight,weight:i.weight}}else return{v:r}})}function Sn(e,n){var r={};d(e,function(i,o){var a=r[i.v]={indegree:0,in:[],out:[],vs:[i.v],i:o};g(i.barycenter)||(a.barycenter=i.barycenter,a.weight=i.weight)}),d(n.edges(),function(i){var o=r[i.v],a=r[i.w];!g(o)&&!g(a)&&(a.indegree++,o.out.push(r[i.w]))});var t=E(r,function(i){return!i.indegree});return Fn(t)}function Fn(e){var n=[];function r(o){return function(a){a.merged||(g(a.barycenter)||g(o.barycenter)||a.barycenter>=o.barycenter)&&Dn(o,a)}}function t(o){return function(a){a.in.push(o),--a.indegree===0&&e.push(a)}}for(;e.length;){var i=e.pop();n.push(i),d(i.in.reverse(),r(i)),d(i.out,t(i))}return b(E(n,function(o){return!o.merged}),function(o){return V(o,["vs","i","barycenter","weight"])})}function Dn(e,n){var r=0,t=0;e.weight&&(r+=e.barycenter*e.weight,t+=e.weight),n.weight&&(r+=n.barycenter*n.weight,t+=n.weight),e.vs=n.vs.concat(e.vs),e.barycenter=r/t,e.weight=t,e.i=Math.min(n.i,e.i),n.merged=!0}function Vn(e,n){var r=Ze(e,function(h){return m(h,"barycenter")}),t=r.lhs,i=D(r.rhs,function(h){return-h.i}),o=[],a=0,s=0,u=0;t.sort(jn(!!n)),u=pe(o,i,u),d(t,function(h){u+=h.vs.length,o.push(h.vs),a+=h.barycenter*h.weight,s+=h.weight,u=pe(o,i,u)});var f={vs:F(o)};return s&&(f.barycenter=a/s,f.weight=s),f}function pe(e,n,r){for(var t;n.length&&(t=j(n)).i<=r;)n.pop(),e.push(t.vs),r++;return r}function jn(e){return function(n,r){return n.barycenter<r.barycenter?-1:n.barycenter>r.barycenter?1:e?r.i-n.i:n.i-r.i}}function Te(e,n,r,t){var i=e.children(n),o=e.node(n),a=o?o.borderLeft:void 0,s=o?o.borderRight:void 0,u={};a&&(i=E(i,function(p){return p!==a&&p!==s}));var f=On(e,i);d(f,function(p){if(e.children(p.v).length){var w=Te(e,p.v,r,t);u[p.v]=w,m(w,"barycenter")&&Gn(p,w)}});var h=Sn(f,r);An(h,u);var c=Vn(h,t);if(a&&(c.vs=F([a,c.vs,s]),e.predecessors(a).length)){var l=e.node(e.predecessors(a)[0]),v=e.node(e.predecessors(s)[0]);m(c,"barycenter")||(c.barycenter=0,c.weight=0),c.barycenter=(c.barycenter*c.weight+l.order+v.order)/(c.weight+2),c.weight+=2}return c}function An(e,n){d(e,function(r){r.vs=F(r.vs.map(function(t){return n[t]?n[t].vs:t}))})}function Gn(e,n){g(e.barycenter)?(e.barycenter=n.barycenter,e.weight=n.weight):(e.barycenter=(e.barycenter*e.weight+n.barycenter*n.weight)/(e.weight+n.weight),e.weight+=n.weight)}function Bn(e){var n=ge(e),r=me(e,C(1,n+1),"inEdges"),t=me(e,C(n-1,-1,-1),"outEdges"),i=Pn(e);be(e,i);for(var o=Number.POSITIVE_INFINITY,a,s=0,u=0;u<4;++s,++u){Yn(s%2?r:t,s%4>=2),i=G(e);var f=Tn(e,i);f<o&&(u=0,a=Fe(i),o=f)}be(e,a)}function me(e,n,r){return b(n,function(t){return In(e,t,r)})}function Yn(e,n){var r=new _;d(e,function(t){var i=t.graph().root,o=Te(t,i,r,n);d(o.vs,function(a,s){t.node(a).order=s}),Cn(t,r,o.vs)})}function be(e,n){d(n,function(r){d(r,function(t,i){e.node(t).order=i})})}function qn(e){var n=Wn(e);d(e.graph().dummyChains,function(r){for(var t=e.node(r),i=t.edgeObj,o=$n(e,n,i.v,i.w),a=o.path,s=o.lca,u=0,f=a[u],h=!0;r!==i.w;){if(t=e.node(r),h){for(;(f=a[u])!==s&&e.node(f).maxRank<t.rank;)u++;f===s&&(h=!1)}if(!h){for(;u<a.length-1&&e.node(f=a[u+1]).minRank<=t.rank;)u++;f=a[u]}e.setParent(r,f),r=e.successors(r)[0]}})}function $n(e,n,r,t){var i=[],o=[],a=Math.min(n[r].low,n[t].low),s=Math.max(n[r].lim,n[t].lim),u,f;u=r;do u=e.parent(u),i.push(u);while(u&&(n[u].low>a||s>n[u].lim));for(f=u,u=t;(u=e.parent(u))!==f;)o.push(u);return{path:i.concat(o.reverse()),lca:f}}function Wn(e){var n={},r=0;function t(i){var o=r;d(e.children(i),t),n[i]={low:o,lim:r++}}return d(e.children(),t),n}function zn(e,n){var r={};function t(i,o){var a=0,s=0,u=i.length,f=j(o);return d(o,function(h,c){var l=Un(e,h),v=l?e.node(l).order:u;(l||h===f)&&(d(o.slice(s,c+1),function(p){d(e.predecessors(p),function(w){var R=e.node(w),ne=R.order;(ne<a||v<ne)&&!(R.dummy&&e.node(p).dummy)&&Me(r,w,p)})}),s=c+1,a=v)}),o}return S(n,t),r}function Xn(e,n){var r={};function t(o,a,s,u,f){var h;d(C(a,s),function(c){h=o[c],e.node(h).dummy&&d(e.predecessors(h),function(l){var v=e.node(l);v.dummy&&(v.order<u||v.order>f)&&Me(r,l,h)})})}function i(o,a){var s=-1,u,f=0;return d(a,function(h,c){if(e.node(h).dummy==="border"){var l=e.predecessors(h);l.length&&(u=e.node(l[0]).order,t(a,f,c,s,u),f=c,s=u)}t(a,f,a.length,u,o.length)}),a}return S(n,i),r}function Un(e,n){if(e.node(n).dummy)return K(e.predecessors(n),function(r){return e.node(r).dummy})}function Me(e,n,r){if(n>r){var t=n;n=r,r=t}var i=e[n];i||(e[n]=i={}),i[r]=!0}function Hn(e,n,r){if(n>r){var t=n;n=r,r=t}return m(e[n],r)}function Jn(e,n,r,t){var i={},o={},a={};return d(n,function(s){d(s,function(u,f){i[u]=u,o[u]=u,a[u]=f})}),d(n,function(s){var u=-1;d(s,function(f){var h=t(f);if(h.length){h=D(h,function(w){return a[w]});for(var c=(h.length-1)/2,l=Math.floor(c),v=Math.ceil(c);l<=v;++l){var p=h[l];o[f]===f&&u<a[p]&&!Hn(r,f,p)&&(o[p]=f,o[f]=i[f]=i[p],u=a[p])}}})}),{root:i,align:o}}function Kn(e,n,r,t,i){var o={},a=Qn(e,n,r,i),s=i?"borderLeft":"borderRight";function u(c,l){for(var v=a.nodes(),p=v.pop(),w={};p;)w[p]?c(p):(w[p]=!0,v.push(p),v=v.concat(l(p))),p=v.pop()}function f(c){o[c]=a.inEdges(c).reduce(function(l,v){return Math.max(l,o[v.v]+a.edge(v))},0)}function h(c){var l=a.outEdges(c).reduce(function(p,w){return Math.min(p,o[w.w]-a.edge(w))},Number.POSITIVE_INFINITY),v=e.node(c);l!==Number.POSITIVE_INFINITY&&v.borderType!==s&&(o[c]=Math.max(o[c],l))}return u(f,a.predecessors.bind(a)),u(h,a.successors.bind(a)),d(t,function(c){o[c]=o[r[c]]}),o}function Qn(e,n,r,t){var i=new _,o=e.graph(),a=tr(o.nodesep,o.edgesep,t);return d(n,function(s){var u;d(s,function(f){var h=r[f];if(i.setNode(h),u){var c=r[u],l=i.edge(c,h);i.setEdge(c,h,Math.max(a(e,f,u),l||0))}u=f})}),i}function Zn(e,n){return J(k(n),function(r){var t=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;return De(r,function(o,a){var s=ir(e,a)/2;t=Math.max(o+s,t),i=Math.min(o-s,i)}),t-i})}function er(e,n){var r=k(n),t=P(r),i=y(r);d(["u","d"],function(o){d(["l","r"],function(a){var s=o+a,u=e[s],f;if(u!==n){var h=k(u);f=a==="l"?t-P(h):i-y(h),f&&(e[s]=A(u,function(c){return c+f}))}})})}function nr(e,n){return A(e.ul,function(r,t){if(n)return e[n.toLowerCase()][t];var i=D(b(e,t));return(i[1]+i[2])/2})}function rr(e){var n=G(e),r=X(zn(e,n),Xn(e,n)),t={},i;d(["u","d"],function(a){i=a==="u"?n:k(n).reverse(),d(["l","r"],function(s){s==="r"&&(i=b(i,function(c){return k(c).reverse()}));var u=(a==="u"?e.predecessors:e.successors).bind(e),f=Jn(e,i,r,u),h=Kn(e,i,f.root,f.align,s==="r");s==="r"&&(h=A(h,function(c){return-c})),t[a+s]=h})});var o=Zn(e,t);return er(t,o),nr(t,e.graph().align)}function tr(e,n,r){return function(t,i,o){var a=t.node(i),s=t.node(o),u=0,f;if(u+=a.width/2,m(a,"labelpos"))switch(a.labelpos.toLowerCase()){case"l":f=-a.width/2;break;case"r":f=a.width/2;break}if(f&&(u+=r?f:-f),f=0,u+=(a.dummy?n:e)/2,u+=(s.dummy?n:e)/2,u+=s.width/2,m(s,"labelpos"))switch(s.labelpos.toLowerCase()){case"l":f=s.width/2;break;case"r":f=-s.width/2;break}return f&&(u+=r?f:-f),f=0,u}}function ir(e,n){return e.node(n).width}function ar(e){e=we(e),or(e),Ve(rr(e),function(n,r){e.node(r).x=n})}function or(e){var n=G(e),r=e.graph().ranksep,t=0;d(n,function(i){var o=y(b(i,function(a){return e.node(a).height}));d(i,function(a){e.node(a).y=t+o/2}),t+=o+r})}function Mr(e,n){var r=n&&n.debugTiming?en:nn;r("layout",function(){var t=r("  buildLayoutGraph",function(){return br(e)});r("  runLayout",function(){sr(t,r)}),r("  updateInputGraph",function(){ur(e,t)})})}function sr(e,n){n("    makeSpaceForEdgeLabels",function(){wr(e)}),n("    removeSelfEdges",function(){Cr(e)}),n("    acyclic",function(){Xe(e)}),n("    nestingGraph.run",function(){xn(e)}),n("    rank",function(){_n(we(e))}),n("    injectEdgeLabelProxies",function(){gr(e)}),n("    removeEmptyRanks",function(){Qe(e)}),n("    nestingGraph.cleanup",function(){Ln(e)}),n("    normalizeRanks",function(){Ke(e)}),n("    assignRankMinMax",function(){_r(e)}),n("    removeEdgeLabelProxies",function(){Er(e)}),n("    normalize.run",function(){un(e)}),n("    parentDummyChains",function(){qn(e)}),n("    addBorderSegments",function(){rn(e)}),n("    order",function(){Bn(e)}),n("    insertSelfEdges",function(){Ir(e)}),n("    adjustCoordinateSystem",function(){tn(e)}),n("    position",function(){ar(e)}),n("    positionSelfEdges",function(){Rr(e)}),n("    removeBorderNodes",function(){Lr(e)}),n("    normalize.undo",function(){fn(e)}),n("    fixupEdgeLabelCoords",function(){yr(e)}),n("    undoCoordinateSystem",function(){an(e)}),n("    translateGraph",function(){kr(e)}),n("    assignNodeIntersects",function(){xr(e)}),n("    reversePoints",function(){Nr(e)}),n("    acyclic.undo",function(){He(e)})}function ur(e,n){d(e.nodes(),function(r){var t=e.node(r),i=n.node(r);t&&(t.x=i.x,t.y=i.y,n.children(r).length&&(t.width=i.width,t.height=i.height))}),d(e.edges(),function(r){var t=e.edge(r),i=n.edge(r);t.points=i.points,m(i,"x")&&(t.x=i.x,t.y=i.y)}),e.graph().width=n.graph().width,e.graph().height=n.graph().height}var dr=["nodesep","edgesep","ranksep","marginx","marginy"],fr={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},hr=["acyclicer","ranker","rankdir","align"],cr=["width","height"],lr={width:0,height:0},vr=["minlen","weight","width","height","labeloffset"],pr={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},mr=["labelpos"];function br(e){var n=new _({multigraph:!0,compound:!0}),r=z(e.graph());return n.setGraph(X({},fr,W(r,dr),V(r,hr))),d(e.nodes(),function(t){var i=z(e.node(t));n.setNode(t,je(W(i,cr),lr)),n.setParent(t,e.parent(t))}),d(e.edges(),function(t){var i=z(e.edge(t));n.setEdge(t,X({},pr,W(i,vr),V(i,mr)))}),n}function wr(e){var n=e.graph();n.ranksep/=2,d(e.edges(),function(r){var t=e.edge(r);t.minlen*=2,t.labelpos.toLowerCase()!=="c"&&(n.rankdir==="TB"||n.rankdir==="BT"?t.width+=t.labeloffset:t.height+=t.labeloffset)})}function gr(e){d(e.edges(),function(n){var r=e.edge(n);if(r.width&&r.height){var t=e.node(n.v),i=e.node(n.w),o={rank:(i.rank-t.rank)/2+t.rank,e:n};I(e,"edge-proxy",o,"_ep")}})}function _r(e){var n=0;d(e.nodes(),function(r){var t=e.node(r);t.borderTop&&(t.minRank=e.node(t.borderTop).rank,t.maxRank=e.node(t.borderBottom).rank,n=y(n,t.maxRank))}),e.graph().maxRank=n}function Er(e){d(e.nodes(),function(n){var r=e.node(n);r.dummy==="edge-proxy"&&(e.edge(r.e).labelRank=r.rank,e.removeNode(n))})}function kr(e){var n=Number.POSITIVE_INFINITY,r=0,t=Number.POSITIVE_INFINITY,i=0,o=e.graph(),a=o.marginx||0,s=o.marginy||0;function u(f){var h=f.x,c=f.y,l=f.width,v=f.height;n=Math.min(n,h-l/2),r=Math.max(r,h+l/2),t=Math.min(t,c-v/2),i=Math.max(i,c+v/2)}d(e.nodes(),function(f){u(e.node(f))}),d(e.edges(),function(f){var h=e.edge(f);m(h,"x")&&u(h)}),n-=a,t-=s,d(e.nodes(),function(f){var h=e.node(f);h.x-=n,h.y-=t}),d(e.edges(),function(f){var h=e.edge(f);d(h.points,function(c){c.x-=n,c.y-=t}),m(h,"x")&&(h.x-=n),m(h,"y")&&(h.y-=t)}),o.width=r-n+a,o.height=i-t+s}function xr(e){d(e.edges(),function(n){var r=e.edge(n),t=e.node(n.v),i=e.node(n.w),o,a;r.points?(o=r.points[0],a=r.points[r.points.length-1]):(r.points=[],o=i,a=t),r.points.unshift(de(t,o)),r.points.push(de(i,a))})}function yr(e){d(e.edges(),function(n){var r=e.edge(n);if(m(r,"x"))switch((r.labelpos==="l"||r.labelpos==="r")&&(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset;break}})}function Nr(e){d(e.edges(),function(n){var r=e.edge(n);r.reversed&&r.points.reverse()})}function Lr(e){d(e.nodes(),function(n){if(e.children(n).length){var r=e.node(n),t=e.node(r.borderTop),i=e.node(r.borderBottom),o=e.node(j(r.borderLeft)),a=e.node(j(r.borderRight));r.width=Math.abs(a.x-o.x),r.height=Math.abs(i.y-t.y),r.x=o.x+r.width/2,r.y=t.y+r.height/2}}),d(e.nodes(),function(n){e.node(n).dummy==="border"&&e.removeNode(n)})}function Cr(e){d(e.edges(),function(n){if(n.v===n.w){var r=e.node(n.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e:n,label:e.edge(n)}),e.removeEdge(n)}})}function Ir(e){var n=G(e);d(n,function(r){var t=0;d(r,function(i,o){var a=e.node(i);a.order=o+t,d(a.selfEdges,function(s){I(e,"selfedge",{width:s.label.width,height:s.label.height,rank:a.rank,order:o+ ++t,e:s.e,label:s.label},"_se")}),delete a.selfEdges})})}function Rr(e){d(e.nodes(),function(n){var r=e.node(n);if(r.dummy==="selfedge"){var t=e.node(r.e.v),i=t.x+t.width/2,o=t.y,a=r.x-i,s=t.height/2;e.setEdge(r.e,r.label),e.removeNode(n),r.label.points=[{x:i+2*a/3,y:o-s},{x:i+5*a/6,y:o-s},{x:i+a,y:o},{x:i+5*a/6,y:o+s},{x:i+2*a/3,y:o+s}],r.label.x=r.x,r.label.y=r.y}})}function W(e,n){return A(V(e,n),Number)}function z(e){var n={};return d(e,function(r,t){n[t.toLowerCase()]=r}),n}export{_ as G,Mr as l};