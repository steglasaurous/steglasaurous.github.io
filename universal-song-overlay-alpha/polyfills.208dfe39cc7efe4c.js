"use strict";(self.webpackChunkuniversal_song_overlay=self.webpackChunkuniversal_song_overlay||[]).push([[429],{565:(Wt,zn,Kn)=>{class Lg extends Error{constructor(e){super(`No translation found for ${Xl(e)}.`),this.parsedMessage=e,this.type="MissingTranslationError"}}const Uo=function(s,...e){if(Uo.translate){const n=Uo.translate(s,e);s=n[0],e=n[1]}let t=Yl(s[0],s.raw[0]);for(let n=1;n<s.length;n++)t+=e[n-1]+Yl(s[n],s.raw[n]);return t};function Yl(s,e){return":"===e.charAt(0)?s.substring(function Kl(s,e){for(let t=1,n=1;t<s.length;t++,n++)if("\\"===e[n])n++;else if(":"===s[t])return t;throw new Error(`Unterminated $localize metadata block in "${e}".`)}(s,e)+1):s}(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)().$localize=Uo,Kn(583)},583:()=>{!function(d){const v=d.performance;function x(fe){v&&v.mark&&v.mark(fe)}function _(fe,q){v&&v.measure&&v.measure(fe,q)}x("Zone");const S=d.__Zone_symbol_prefix||"__zone_symbol__";function A(fe){return S+fe}const H=!0===d[A("forceDuplicateZoneCheck")];if(d.Zone){if(H||"function"!=typeof d.Zone.__symbol__)throw new Error("Zone already loaded.");return d.Zone}let U=(()=>{class fe{constructor(h,m){this._parent=h,this._name=m?m.name||"unnamed":"<root>",this._properties=m&&m.properties||{},this._zoneDelegate=new Q(this,this._parent&&this._parent._zoneDelegate,m)}static assertZonePatched(){if(d.Promise!==Je.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let h=fe.current;for(;h.parent;)h=h.parent;return h}static get current(){return Re.zone}static get currentTask(){return Fe}static __load_patch(h,m,X=!1){if(Je.hasOwnProperty(h)){if(!X&&H)throw Error("Already loaded patch: "+h)}else if(!d["__Zone_disable_"+h]){const ne="Zone:"+h;x(ne),Je[h]=m(d,fe,Le),_(ne,ne)}}get parent(){return this._parent}get name(){return this._name}get(h){const m=this.getZoneWith(h);if(m)return m._properties[h]}getZoneWith(h){let m=this;for(;m;){if(m._properties.hasOwnProperty(h))return m;m=m._parent}return null}fork(h){if(!h)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,h)}wrap(h,m){if("function"!=typeof h)throw new Error("Expecting function got: "+h);const X=this._zoneDelegate.intercept(this,h,m),ne=this;return function(){return ne.runGuarded(X,this,arguments,m)}}run(h,m,X,ne){Re={parent:Re,zone:this};try{return this._zoneDelegate.invoke(this,h,m,X,ne)}finally{Re=Re.parent}}runGuarded(h,m=null,X,ne){Re={parent:Re,zone:this};try{try{return this._zoneDelegate.invoke(this,h,m,X,ne)}catch(F){if(this._zoneDelegate.handleError(this,F))throw F}}finally{Re=Re.parent}}runTask(h,m,X){if(h.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(h.zone||Be).name+"; Execution: "+this.name+")");if(h.state===K&&(h.type===Qe||h.type===te))return;const ne=h.state!=G;ne&&h._transitionTo(G,le),h.runCount++;const F=Fe;Fe=h,Re={parent:Re,zone:this};try{h.type==te&&h.data&&!h.data.isPeriodic&&(h.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,h,m,X)}catch(I){if(this._zoneDelegate.handleError(this,I))throw I}}finally{h.state!==K&&h.state!==L&&(h.type==Qe||h.data&&h.data.isPeriodic?ne&&h._transitionTo(le,G):(h.runCount=0,this._updateTaskCount(h,-1),ne&&h._transitionTo(K,G,K))),Re=Re.parent,Fe=F}}scheduleTask(h){if(h.zone&&h.zone!==this){let X=this;for(;X;){if(X===h.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${h.zone.name}`);X=X.parent}}h._transitionTo(xe,K);const m=[];h._zoneDelegates=m,h._zone=this;try{h=this._zoneDelegate.scheduleTask(this,h)}catch(X){throw h._transitionTo(L,xe,K),this._zoneDelegate.handleError(this,X),X}return h._zoneDelegates===m&&this._updateTaskCount(h,1),h.state==xe&&h._transitionTo(le,xe),h}scheduleMicroTask(h,m,X,ne){return this.scheduleTask(new z(J,h,m,X,ne,void 0))}scheduleMacroTask(h,m,X,ne,F){return this.scheduleTask(new z(te,h,m,X,ne,F))}scheduleEventTask(h,m,X,ne,F){return this.scheduleTask(new z(Qe,h,m,X,ne,F))}cancelTask(h){if(h.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(h.zone||Be).name+"; Execution: "+this.name+")");h._transitionTo(Ce,le,G);try{this._zoneDelegate.cancelTask(this,h)}catch(m){throw h._transitionTo(L,Ce),this._zoneDelegate.handleError(this,m),m}return this._updateTaskCount(h,-1),h._transitionTo(K,Ce),h.runCount=0,h}_updateTaskCount(h,m){const X=h._zoneDelegates;-1==m&&(h._zoneDelegates=null);for(let ne=0;ne<X.length;ne++)X[ne]._updateTaskCount(h.type,m)}}return fe.__symbol__=A,fe})();const $={name:"",onHasTask:(fe,q,h,m)=>fe.hasTask(h,m),onScheduleTask:(fe,q,h,m)=>fe.scheduleTask(h,m),onInvokeTask:(fe,q,h,m,X,ne)=>fe.invokeTask(h,m,X,ne),onCancelTask:(fe,q,h,m)=>fe.cancelTask(h,m)};class Q{constructor(q,h,m){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=q,this._parentDelegate=h,this._forkZS=m&&(m&&m.onFork?m:h._forkZS),this._forkDlgt=m&&(m.onFork?h:h._forkDlgt),this._forkCurrZone=m&&(m.onFork?this.zone:h._forkCurrZone),this._interceptZS=m&&(m.onIntercept?m:h._interceptZS),this._interceptDlgt=m&&(m.onIntercept?h:h._interceptDlgt),this._interceptCurrZone=m&&(m.onIntercept?this.zone:h._interceptCurrZone),this._invokeZS=m&&(m.onInvoke?m:h._invokeZS),this._invokeDlgt=m&&(m.onInvoke?h:h._invokeDlgt),this._invokeCurrZone=m&&(m.onInvoke?this.zone:h._invokeCurrZone),this._handleErrorZS=m&&(m.onHandleError?m:h._handleErrorZS),this._handleErrorDlgt=m&&(m.onHandleError?h:h._handleErrorDlgt),this._handleErrorCurrZone=m&&(m.onHandleError?this.zone:h._handleErrorCurrZone),this._scheduleTaskZS=m&&(m.onScheduleTask?m:h._scheduleTaskZS),this._scheduleTaskDlgt=m&&(m.onScheduleTask?h:h._scheduleTaskDlgt),this._scheduleTaskCurrZone=m&&(m.onScheduleTask?this.zone:h._scheduleTaskCurrZone),this._invokeTaskZS=m&&(m.onInvokeTask?m:h._invokeTaskZS),this._invokeTaskDlgt=m&&(m.onInvokeTask?h:h._invokeTaskDlgt),this._invokeTaskCurrZone=m&&(m.onInvokeTask?this.zone:h._invokeTaskCurrZone),this._cancelTaskZS=m&&(m.onCancelTask?m:h._cancelTaskZS),this._cancelTaskDlgt=m&&(m.onCancelTask?h:h._cancelTaskDlgt),this._cancelTaskCurrZone=m&&(m.onCancelTask?this.zone:h._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const X=m&&m.onHasTask;(X||h&&h._hasTaskZS)&&(this._hasTaskZS=X?m:$,this._hasTaskDlgt=h,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=q,m.onScheduleTask||(this._scheduleTaskZS=$,this._scheduleTaskDlgt=h,this._scheduleTaskCurrZone=this.zone),m.onInvokeTask||(this._invokeTaskZS=$,this._invokeTaskDlgt=h,this._invokeTaskCurrZone=this.zone),m.onCancelTask||(this._cancelTaskZS=$,this._cancelTaskDlgt=h,this._cancelTaskCurrZone=this.zone))}fork(q,h){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,q,h):new U(q,h)}intercept(q,h,m){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,q,h,m):h}invoke(q,h,m,X,ne){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,q,h,m,X,ne):h.apply(m,X)}handleError(q,h){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,q,h)}scheduleTask(q,h){let m=h;if(this._scheduleTaskZS)this._hasTaskZS&&m._zoneDelegates.push(this._hasTaskDlgtOwner),m=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,q,h),m||(m=h);else if(h.scheduleFn)h.scheduleFn(h);else{if(h.type!=J)throw new Error("Task is missing scheduleFn.");ie(h)}return m}invokeTask(q,h,m,X){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,q,h,m,X):h.callback.apply(m,X)}cancelTask(q,h){let m;if(this._cancelTaskZS)m=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,q,h);else{if(!h.cancelFn)throw Error("Task is not cancelable");m=h.cancelFn(h)}return m}hasTask(q,h){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,q,h)}catch(m){this.handleError(q,m)}}_updateTaskCount(q,h){const m=this._taskCounts,X=m[q],ne=m[q]=X+h;if(ne<0)throw new Error("More tasks executed then were scheduled.");0!=X&&0!=ne||this.hasTask(this.zone,{microTask:m.microTask>0,macroTask:m.macroTask>0,eventTask:m.eventTask>0,change:q})}}class z{constructor(q,h,m,X,ne,F){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=q,this.source=h,this.data=X,this.scheduleFn=ne,this.cancelFn=F,!m)throw new Error("callback is not defined");this.callback=m;const I=this;this.invoke=q===Qe&&X&&X.useG?z.invokeTask:function(){return z.invokeTask.call(d,I,this,arguments)}}static invokeTask(q,h,m){q||(q=this),be++;try{return q.runCount++,q.zone.runTask(q,h,m)}finally{1==be&&M(),be--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(K,xe)}_transitionTo(q,h,m){if(this._state!==h&&this._state!==m)throw new Error(`${this.type} '${this.source}': can not transition to '${q}', expecting state '${h}'${m?" or '"+m+"'":""}, was '${this._state}'.`);this._state=q,q==K&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const Ee=A("setTimeout"),ue=A("Promise"),re=A("then");let Ke,De=[],we=!1;function ke(fe){if(Ke||d[ue]&&(Ke=d[ue].resolve(0)),Ke){let q=Ke[re];q||(q=Ke.then),q.call(Ke,fe)}else d[Ee](fe,0)}function ie(fe){0===be&&0===De.length&&ke(M),fe&&De.push(fe)}function M(){if(!we){for(we=!0;De.length;){const fe=De;De=[];for(let q=0;q<fe.length;q++){const h=fe[q];try{h.zone.runTask(h,null,null)}catch(m){Le.onUnhandledError(m)}}}Le.microtaskDrainDone(),we=!1}}const Be={name:"NO ZONE"},K="notScheduled",xe="scheduling",le="scheduled",G="running",Ce="canceling",L="unknown",J="microTask",te="macroTask",Qe="eventTask",Je={},Le={symbol:A,currentZoneFrame:()=>Re,onUnhandledError:T,microtaskDrainDone:T,scheduleMicroTask:ie,showUncaughtError:()=>!U[A("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:T,patchMethod:()=>T,bindArguments:()=>[],patchThen:()=>T,patchMacroTask:()=>T,patchEventPrototype:()=>T,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>T,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>T,wrapWithCurrentZone:()=>T,filterProperties:()=>[],attachOriginToPatched:()=>T,_redefineProperty:()=>T,patchCallbacks:()=>T,nativeScheduleMicroTask:ke};let Re={parent:null,zone:new U(null,null)},Fe=null,be=0;function T(){}_("Zone","Zone"),d.Zone=U}(typeof window<"u"&&window||typeof self<"u"&&self||global);const Wt=Object.getOwnPropertyDescriptor,zn=Object.defineProperty,Kn=Object.getPrototypeOf,$e=Object.create,gt=Array.prototype.slice,bn="addEventListener",In="removeEventListener",xs=Zone.__symbol__(bn),Zn=Zone.__symbol__(In),vt="true",ee="false",cn=Zone.__symbol__("");function pn(d,v){return Zone.current.wrap(d,v)}function Dn(d,v,x,_,S){return Zone.current.scheduleMacroTask(d,v,x,_,S)}const _e=Zone.__symbol__,Et=typeof window<"u",Nt=Et?window:void 0,He=Et&&Nt||"object"==typeof self&&self||global;function Ts(d,v){for(let x=d.length-1;x>=0;x--)"function"==typeof d[x]&&(d[x]=pn(d[x],v+"_"+x));return d}function ct(d){return!d||!1!==d.writable&&!("function"==typeof d.get&&typeof d.set>"u")}const Xn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,hn=!("nw"in He)&&typeof He.process<"u"&&"[object process]"==={}.toString.call(He.process),Cs=!hn&&!Xn&&!(!Et||!Nt.HTMLElement),he=typeof He.process<"u"&&"[object process]"==={}.toString.call(He.process)&&!Xn&&!(!Et||!Nt.HTMLElement),We={},lr=function(d){if(!(d=d||He.event))return;let v=We[d.type];v||(v=We[d.type]=_e("ON_PROPERTY"+d.type));const x=this||d.target||He,_=x[v];let S;if(Cs&&x===Nt&&"error"===d.type){const A=d;S=_&&_.call(this,A.message,A.filename,A.lineno,A.colno,A.error),!0===S&&d.preventDefault()}else S=_&&_.apply(this,arguments),null!=S&&!S&&d.preventDefault();return S};function cr(d,v,x){let _=Wt(d,v);if(!_&&x&&Wt(x,v)&&(_={enumerable:!0,configurable:!0}),!_||!_.configurable)return;const S=_e("on"+v+"patched");if(d.hasOwnProperty(S)&&d[S])return;delete _.writable,delete _.value;const A=_.get,H=_.set,U=v.slice(2);let $=We[U];$||($=We[U]=_e("ON_PROPERTY"+U)),_.set=function(Q){let z=this;!z&&d===He&&(z=He),z&&("function"==typeof z[$]&&z.removeEventListener(U,lr),H&&H.call(z,null),z[$]=Q,"function"==typeof Q&&z.addEventListener(U,lr,!1))},_.get=function(){let Q=this;if(!Q&&d===He&&(Q=He),!Q)return null;const z=Q[$];if(z)return z;if(A){let Ee=A.call(this);if(Ee)return _.set.call(this,Ee),"function"==typeof Q.removeAttribute&&Q.removeAttribute(v),Ee}return null},zn(d,v,_),d[S]=!0}function pr(d,v,x){if(v)for(let _=0;_<v.length;_++)cr(d,"on"+v[_],x);else{const _=[];for(const S in d)"on"==S.slice(0,2)&&_.push(S);for(let S=0;S<_.length;S++)cr(d,_[S],x)}}const st=_e("originalInstance");function Yn(d){const v=He[d];if(!v)return;He[_e(d)]=v,He[d]=function(){const S=Ts(arguments,d);switch(S.length){case 0:this[st]=new v;break;case 1:this[st]=new v(S[0]);break;case 2:this[st]=new v(S[0],S[1]);break;case 3:this[st]=new v(S[0],S[1],S[2]);break;case 4:this[st]=new v(S[0],S[1],S[2],S[3]);break;default:throw new Error("Arg list too long.")}},kt(He[d],v);const x=new v(function(){});let _;for(_ in x)"XMLHttpRequest"===d&&"responseBlob"===_||function(S){"function"==typeof x[S]?He[d].prototype[S]=function(){return this[st][S].apply(this[st],arguments)}:zn(He[d].prototype,S,{set:function(A){"function"==typeof A?(this[st][S]=pn(A,d+"."+S),kt(this[st][S],A)):this[st][S]=A},get:function(){return this[st][S]}})}(_);for(_ in v)"prototype"!==_&&v.hasOwnProperty(_)&&(He[d][_]=v[_])}function Pt(d,v,x){let _=d;for(;_&&!_.hasOwnProperty(v);)_=Kn(_);!_&&d[v]&&(_=d);const S=_e(v);let A=null;if(_&&(!(A=_[S])||!_.hasOwnProperty(S))&&(A=_[S]=_[v],ct(_&&Wt(_,v)))){const U=x(A,S,v);_[v]=function(){return U(this,arguments)},kt(_[v],A)}return A}function pi(d,v,x){let _=null;function S(A){const H=A.data;return H.args[H.cbIdx]=function(){A.invoke.apply(this,arguments)},_.apply(H.target,H.args),A}_=Pt(d,v,A=>function(H,U){const $=x(H,U);return $.cbIdx>=0&&"function"==typeof U[$.cbIdx]?Dn($.name,U[$.cbIdx],$,S):A.apply(H,U)})}function kt(d,v){d[_e("OriginalDelegate")]=v}let hr=!1,Qn=!1;function Jn(){if(hr)return Qn;hr=!0;try{const d=Nt.navigator.userAgent;(-1!==d.indexOf("MSIE ")||-1!==d.indexOf("Trident/")||-1!==d.indexOf("Edge/"))&&(Qn=!0)}catch{}return Qn}Zone.__load_patch("ZoneAwarePromise",(d,v,x)=>{const _=Object.getOwnPropertyDescriptor,S=Object.defineProperty,H=x.symbol,U=[],$=!0===d[H("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],Q=H("Promise"),z=H("then");x.onUnhandledError=I=>{if(x.showUncaughtError()){const N=I&&I.rejection;N?console.error("Unhandled Promise rejection:",N instanceof Error?N.message:N,"; Zone:",I.zone.name,"; Task:",I.task&&I.task.source,"; Value:",N,N instanceof Error?N.stack:void 0):console.error(I)}},x.microtaskDrainDone=()=>{for(;U.length;){const I=U.shift();try{I.zone.runGuarded(()=>{throw I.throwOriginal?I.rejection:I})}catch(N){re(N)}}};const ue=H("unhandledPromiseRejectionHandler");function re(I){x.onUnhandledError(I);try{const N=v[ue];"function"==typeof N&&N.call(this,I)}catch{}}function De(I){return I&&I.then}function we(I){return I}function Ke(I){return h.reject(I)}const ke=H("state"),ie=H("value"),M=H("finally"),Be=H("parentPromiseValue"),K=H("parentPromiseState"),le=null,G=!0,Ce=!1;function J(I,N){return w=>{try{Le(I,N,w)}catch(D){Le(I,!1,D)}}}const te=function(){let I=!1;return function(w){return function(){I||(I=!0,w.apply(null,arguments))}}},Je=H("currentTaskTrace");function Le(I,N,w){const D=te();if(I===w)throw new TypeError("Promise resolved with itself");if(I[ke]===le){let j=null;try{("object"==typeof w||"function"==typeof w)&&(j=w&&w.then)}catch(Y){return D(()=>{Le(I,!1,Y)})(),I}if(N!==Ce&&w instanceof h&&w.hasOwnProperty(ke)&&w.hasOwnProperty(ie)&&w[ke]!==le)Fe(w),Le(I,w[ke],w[ie]);else if(N!==Ce&&"function"==typeof j)try{j.call(w,D(J(I,N)),D(J(I,!1)))}catch(Y){D(()=>{Le(I,!1,Y)})()}else{I[ke]=N;const Y=I[ie];if(I[ie]=w,I[M]===M&&N===G&&(I[ke]=I[K],I[ie]=I[Be]),N===Ce&&w instanceof Error){const R=v.currentTask&&v.currentTask.data&&v.currentTask.data.__creationTrace__;R&&S(w,Je,{configurable:!0,enumerable:!1,writable:!0,value:R})}for(let R=0;R<Y.length;)be(I,Y[R++],Y[R++],Y[R++],Y[R++]);if(0==Y.length&&N==Ce){I[ke]=0;let R=w;try{throw new Error("Uncaught (in promise): "+function A(I){return I&&I.toString===Object.prototype.toString?(I.constructor&&I.constructor.name||"")+": "+JSON.stringify(I):I?I.toString():Object.prototype.toString.call(I)}(w)+(w&&w.stack?"\n"+w.stack:""))}catch(oe){R=oe}$&&(R.throwOriginal=!0),R.rejection=w,R.promise=I,R.zone=v.current,R.task=v.currentTask,U.push(R),x.scheduleMicroTask()}}}return I}const Re=H("rejectionHandledHandler");function Fe(I){if(0===I[ke]){try{const N=v[Re];N&&"function"==typeof N&&N.call(this,{rejection:I[ie],promise:I})}catch{}I[ke]=Ce;for(let N=0;N<U.length;N++)I===U[N].promise&&U.splice(N,1)}}function be(I,N,w,D,j){Fe(I);const Y=I[ke],R=Y?"function"==typeof D?D:we:"function"==typeof j?j:Ke;N.scheduleMicroTask("Promise.then",()=>{try{const oe=I[ie],ae=!!w&&M===w[M];ae&&(w[Be]=oe,w[K]=Y);const se=N.run(R,void 0,ae&&R!==Ke&&R!==we?[]:[oe]);Le(w,!0,se)}catch(oe){Le(w,!1,oe)}},w)}const fe=function(){},q=d.AggregateError;class h{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(N){return Le(new this(null),G,N)}static reject(N){return Le(new this(null),Ce,N)}static any(N){if(!N||"function"!=typeof N[Symbol.iterator])return Promise.reject(new q([],"All promises were rejected"));const w=[];let D=0;try{for(let R of N)D++,w.push(h.resolve(R))}catch{return Promise.reject(new q([],"All promises were rejected"))}if(0===D)return Promise.reject(new q([],"All promises were rejected"));let j=!1;const Y=[];return new h((R,oe)=>{for(let ae=0;ae<w.length;ae++)w[ae].then(se=>{j||(j=!0,R(se))},se=>{Y.push(se),D--,0===D&&(j=!0,oe(new q(Y,"All promises were rejected")))})})}static race(N){let w,D,j=new this((oe,ae)=>{w=oe,D=ae});function Y(oe){w(oe)}function R(oe){D(oe)}for(let oe of N)De(oe)||(oe=this.resolve(oe)),oe.then(Y,R);return j}static all(N){return h.allWithCallback(N)}static allSettled(N){return(this&&this.prototype instanceof h?this:h).allWithCallback(N,{thenCallback:D=>({status:"fulfilled",value:D}),errorCallback:D=>({status:"rejected",reason:D})})}static allWithCallback(N,w){let D,j,Y=new this((se,Se)=>{D=se,j=Se}),R=2,oe=0;const ae=[];for(let se of N){De(se)||(se=this.resolve(se));const Se=oe;try{se.then(Ae=>{ae[Se]=w?w.thenCallback(Ae):Ae,R--,0===R&&D(ae)},Ae=>{w?(ae[Se]=w.errorCallback(Ae),R--,0===R&&D(ae)):j(Ae)})}catch(Ae){j(Ae)}R++,oe++}return R-=2,0===R&&D(ae),Y}constructor(N){const w=this;if(!(w instanceof h))throw new Error("Must be an instanceof Promise.");w[ke]=le,w[ie]=[];try{const D=te();N&&N(D(J(w,G)),D(J(w,Ce)))}catch(D){Le(w,!1,D)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return h}then(N,w){var D;let j=null===(D=this.constructor)||void 0===D?void 0:D[Symbol.species];(!j||"function"!=typeof j)&&(j=this.constructor||h);const Y=new j(fe),R=v.current;return this[ke]==le?this[ie].push(R,Y,N,w):be(this,R,Y,N,w),Y}catch(N){return this.then(null,N)}finally(N){var w;let D=null===(w=this.constructor)||void 0===w?void 0:w[Symbol.species];(!D||"function"!=typeof D)&&(D=h);const j=new D(fe);j[M]=M;const Y=v.current;return this[ke]==le?this[ie].push(Y,j,N,N):be(this,Y,j,N,N),j}}h.resolve=h.resolve,h.reject=h.reject,h.race=h.race,h.all=h.all;const m=d[Q]=d.Promise;d.Promise=h;const X=H("thenPatched");function ne(I){const N=I.prototype,w=_(N,"then");if(w&&(!1===w.writable||!w.configurable))return;const D=N.then;N[z]=D,I.prototype.then=function(j,Y){return new h((oe,ae)=>{D.call(this,oe,ae)}).then(j,Y)},I[X]=!0}return x.patchThen=ne,m&&(ne(m),Pt(d,"fetch",I=>function F(I){return function(N,w){let D=I.apply(N,w);if(D instanceof h)return D;let j=D.constructor;return j[X]||ne(j),D}}(I))),Promise[v.__symbol__("uncaughtPromiseErrors")]=U,h}),Zone.__load_patch("toString",d=>{const v=Function.prototype.toString,x=_e("OriginalDelegate"),_=_e("Promise"),S=_e("Error"),A=function(){if("function"==typeof this){const Q=this[x];if(Q)return"function"==typeof Q?v.call(Q):Object.prototype.toString.call(Q);if(this===Promise){const z=d[_];if(z)return v.call(z)}if(this===Error){const z=d[S];if(z)return v.call(z)}}return v.call(this)};A[x]=v,Function.prototype.toString=A;const H=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":H.call(this)}});let Nn=!1;if(typeof window<"u")try{const d=Object.defineProperty({},"passive",{get:function(){Nn=!0}});window.addEventListener("test",d,d),window.removeEventListener("test",d,d)}catch{Nn=!1}const As={useG:!0},it={},dr={},Gt=new RegExp("^"+cn+"(\\w+)(true|false)$"),fr=_e("propagationStopped");function mr(d,v){const x=(v?v(d):d)+ee,_=(v?v(d):d)+vt,S=cn+x,A=cn+_;it[d]={},it[d][ee]=S,it[d][vt]=A}function dn(d,v,x,_){const S=_&&_.add||bn,A=_&&_.rm||In,H=_&&_.listeners||"eventListeners",U=_&&_.rmAll||"removeAllListeners",$=_e(S),Q="."+S+":",ue=function(ie,M,Be){if(ie.isRemoved)return;const K=ie.callback;let xe;"object"==typeof K&&K.handleEvent&&(ie.callback=G=>K.handleEvent(G),ie.originalDelegate=K);try{ie.invoke(ie,M,[Be])}catch(G){xe=G}const le=ie.options;return le&&"object"==typeof le&&le.once&&M[A].call(M,Be.type,ie.originalDelegate?ie.originalDelegate:ie.callback,le),xe};function re(ie,M,Be){if(!(M=M||d.event))return;const K=ie||M.target||d,xe=K[it[M.type][Be?vt:ee]];if(xe){const le=[];if(1===xe.length){const G=ue(xe[0],K,M);G&&le.push(G)}else{const G=xe.slice();for(let Ce=0;Ce<G.length&&(!M||!0!==M[fr]);Ce++){const L=ue(G[Ce],K,M);L&&le.push(L)}}if(1===le.length)throw le[0];for(let G=0;G<le.length;G++){const Ce=le[G];v.nativeScheduleMicroTask(()=>{throw Ce})}}}const De=function(ie){return re(this,ie,!1)},we=function(ie){return re(this,ie,!0)};function Ke(ie,M){if(!ie)return!1;let Be=!0;M&&void 0!==M.useG&&(Be=M.useG);const K=M&&M.vh;let xe=!0;M&&void 0!==M.chkDup&&(xe=M.chkDup);let le=!1;M&&void 0!==M.rt&&(le=M.rt);let G=ie;for(;G&&!G.hasOwnProperty(S);)G=Kn(G);if(!G&&ie[S]&&(G=ie),!G||G[$])return!1;const Ce=M&&M.eventNameToString,L={},J=G[$]=G[S],te=G[_e(A)]=G[A],Qe=G[_e(H)]=G[H],Je=G[_e(U)]=G[U];let Le;function Re(w,D){return!Nn&&"object"==typeof w&&w?!!w.capture:Nn&&D?"boolean"==typeof w?{capture:w,passive:!0}:w?"object"==typeof w&&!1!==w.passive?Object.assign(Object.assign({},w),{passive:!0}):w:{passive:!0}:w}M&&M.prepend&&(Le=G[_e(M.prepend)]=G[M.prepend]);const h=Be?function(w){if(!L.isExisting)return J.call(L.target,L.eventName,L.capture?we:De,L.options)}:function(w){return J.call(L.target,L.eventName,w.invoke,L.options)},m=Be?function(w){if(!w.isRemoved){const D=it[w.eventName];let j;D&&(j=D[w.capture?vt:ee]);const Y=j&&w.target[j];if(Y)for(let R=0;R<Y.length;R++)if(Y[R]===w){Y.splice(R,1),w.isRemoved=!0,0===Y.length&&(w.allRemoved=!0,w.target[j]=null);break}}if(w.allRemoved)return te.call(w.target,w.eventName,w.capture?we:De,w.options)}:function(w){return te.call(w.target,w.eventName,w.invoke,w.options)},ne=M&&M.diff?M.diff:function(w,D){const j=typeof D;return"function"===j&&w.callback===D||"object"===j&&w.originalDelegate===D},F=Zone[_e("UNPATCHED_EVENTS")],I=d[_e("PASSIVE_EVENTS")],N=function(w,D,j,Y,R=!1,oe=!1){return function(){const ae=this||d;let se=arguments[0];M&&M.transferEventName&&(se=M.transferEventName(se));let Se=arguments[1];if(!Se)return w.apply(this,arguments);if(hn&&"uncaughtException"===se)return w.apply(this,arguments);let Ae=!1;if("function"!=typeof Se){if(!Se.handleEvent)return w.apply(this,arguments);Ae=!0}if(K&&!K(w,Se,ae,arguments))return;const Lt=Nn&&!!I&&-1!==I.indexOf(se),xt=Re(arguments[2],Lt);if(F)for(let yt=0;yt<F.length;yt++)if(se===F[yt])return Lt?w.call(ae,se,Se,xt):w.apply(this,arguments);const ss=!!xt&&("boolean"==typeof xt||xt.capture),Pn=!(!xt||"object"!=typeof xt)&&xt.once,vi=Zone.current;let Ds=it[se];Ds||(mr(se,Ce),Ds=it[se]);const rs=Ds[ss?vt:ee];let is,zt=ae[rs],mn=!1;if(zt){if(mn=!0,xe)for(let yt=0;yt<zt.length;yt++)if(ne(zt[yt],Se))return}else zt=ae[rs]=[];const kn=ae.constructor.name,Ln=dr[kn];Ln&&(is=Ln[se]),is||(is=kn+D+(Ce?Ce(se):se)),L.options=xt,Pn&&(L.options.once=!1),L.target=ae,L.capture=ss,L.eventName=se,L.isExisting=mn;const Ue=Be?As:void 0;Ue&&(Ue.taskData=L);const rt=vi.scheduleEventTask(is,Se,Ue,j,Y);return L.target=null,Ue&&(Ue.taskData=null),Pn&&(xt.once=!0),!Nn&&"boolean"==typeof rt.options||(rt.options=xt),rt.target=ae,rt.capture=ss,rt.eventName=se,Ae&&(rt.originalDelegate=Se),oe?zt.unshift(rt):zt.push(rt),R?ae:void 0}};return G[S]=N(J,Q,h,m,le),Le&&(G.prependListener=N(Le,".prependListener:",function(w){return Le.call(L.target,L.eventName,w.invoke,L.options)},m,le,!0)),G[A]=function(){const w=this||d;let D=arguments[0];M&&M.transferEventName&&(D=M.transferEventName(D));const j=arguments[2],Y=!!j&&("boolean"==typeof j||j.capture),R=arguments[1];if(!R)return te.apply(this,arguments);if(K&&!K(te,R,w,arguments))return;const oe=it[D];let ae;oe&&(ae=oe[Y?vt:ee]);const se=ae&&w[ae];if(se)for(let Se=0;Se<se.length;Se++){const Ae=se[Se];if(ne(Ae,R))return se.splice(Se,1),Ae.isRemoved=!0,0===se.length&&(Ae.allRemoved=!0,w[ae]=null,"string"==typeof D)&&(w[cn+"ON_PROPERTY"+D]=null),Ae.zone.cancelTask(Ae),le?w:void 0}return te.apply(this,arguments)},G[H]=function(){const w=this||d;let D=arguments[0];M&&M.transferEventName&&(D=M.transferEventName(D));const j=[],Y=bs(w,Ce?Ce(D):D);for(let R=0;R<Y.length;R++){const oe=Y[R];j.push(oe.originalDelegate?oe.originalDelegate:oe.callback)}return j},G[U]=function(){const w=this||d;let D=arguments[0];if(D){M&&M.transferEventName&&(D=M.transferEventName(D));const j=it[D];if(j){const oe=w[j[ee]],ae=w[j[vt]];if(oe){const se=oe.slice();for(let Se=0;Se<se.length;Se++){const Ae=se[Se];this[A].call(this,D,Ae.originalDelegate?Ae.originalDelegate:Ae.callback,Ae.options)}}if(ae){const se=ae.slice();for(let Se=0;Se<se.length;Se++){const Ae=se[Se];this[A].call(this,D,Ae.originalDelegate?Ae.originalDelegate:Ae.callback,Ae.options)}}}}else{const j=Object.keys(w);for(let Y=0;Y<j.length;Y++){const oe=Gt.exec(j[Y]);let ae=oe&&oe[1];ae&&"removeListener"!==ae&&this[U].call(this,ae)}this[U].call(this,"removeListener")}if(le)return this},kt(G[S],J),kt(G[A],te),Je&&kt(G[U],Je),Qe&&kt(G[H],Qe),!0}let ke=[];for(let ie=0;ie<x.length;ie++)ke[ie]=Ke(x[ie],_);return ke}function bs(d,v){if(!v){const A=[];for(let H in d){const U=Gt.exec(H);let $=U&&U[1];if($&&(!v||$===v)){const Q=d[H];if(Q)for(let z=0;z<Q.length;z++)A.push(Q[z])}}return A}let x=it[v];x||(mr(v),x=it[v]);const _=d[x[ee]],S=d[x[vt]];return _?S?_.concat(S):_.slice():S?S.slice():[]}function di(d,v){const x=d.Event;x&&x.prototype&&v.patchMethod(x.prototype,"stopImmediatePropagation",_=>function(S,A){S[fr]=!0,_&&_.apply(S,A)})}function gr(d,v,x,_,S){const A=Zone.__symbol__(_);if(v[A])return;const H=v[A]=v[_];v[_]=function(U,$,Q){return $&&$.prototype&&S.forEach(function(z){const Ee=`${x}.${_}::`+z,ue=$.prototype;try{if(ue.hasOwnProperty(z)){const re=d.ObjectGetOwnPropertyDescriptor(ue,z);re&&re.value?(re.value=d.wrapWithCurrentZone(re.value,Ee),d._redefineProperty($.prototype,z,re)):ue[z]&&(ue[z]=d.wrapWithCurrentZone(ue[z],Ee))}else ue[z]&&(ue[z]=d.wrapWithCurrentZone(ue[z],Ee))}catch{}}),H.call(v,U,$,Q)},d.attachOriginToPatched(v[_],H)}function Is(d,v,x){if(!x||0===x.length)return v;const _=x.filter(A=>A.target===d);if(!_||0===_.length)return v;const S=_[0].ignoreProperties;return v.filter(A=>-1===S.indexOf(A))}function es(d,v,x,_){d&&pr(d,Is(d,v,x),_)}function ts(d){return Object.getOwnPropertyNames(d).filter(v=>v.startsWith("on")&&v.length>2).map(v=>v.substring(2))}Zone.__load_patch("util",(d,v,x)=>{const _=ts(d);x.patchOnProperties=pr,x.patchMethod=Pt,x.bindArguments=Ts,x.patchMacroTask=pi;const S=v.__symbol__("BLACK_LISTED_EVENTS"),A=v.__symbol__("UNPATCHED_EVENTS");d[A]&&(d[S]=d[A]),d[S]&&(v[S]=v[A]=d[S]),x.patchEventPrototype=di,x.patchEventTarget=dn,x.isIEOrEdge=Jn,x.ObjectDefineProperty=zn,x.ObjectGetOwnPropertyDescriptor=Wt,x.ObjectCreate=$e,x.ArraySlice=gt,x.patchClass=Yn,x.wrapWithCurrentZone=pn,x.filterProperties=Is,x.attachOriginToPatched=kt,x._redefineProperty=Object.defineProperty,x.patchCallbacks=gr,x.getGlobalObjects=()=>({globalSources:dr,zoneSymbolEventNames:it,eventNames:_,isBrowser:Cs,isMix:he,isNode:hn,TRUE_STR:vt,FALSE_STR:ee,ZONE_SYMBOL_PREFIX:cn,ADD_EVENT_LISTENER_STR:bn,REMOVE_EVENT_LISTENER_STR:In})});const ns=_e("zoneTask");function fn(d,v,x,_){let S=null,A=null;x+=_;const H={};function U(Q){const z=Q.data;return z.args[0]=function(){return Q.invoke.apply(this,arguments)},z.handleId=S.apply(d,z.args),Q}function $(Q){return A.call(d,Q.data.handleId)}S=Pt(d,v+=_,Q=>function(z,Ee){if("function"==typeof Ee[0]){const ue={isPeriodic:"Interval"===_,delay:"Timeout"===_||"Interval"===_?Ee[1]||0:void 0,args:Ee},re=Ee[0];Ee[0]=function(){try{return re.apply(this,arguments)}finally{ue.isPeriodic||("number"==typeof ue.handleId?delete H[ue.handleId]:ue.handleId&&(ue.handleId[ns]=null))}};const De=Dn(v,Ee[0],ue,U,$);if(!De)return De;const we=De.data.handleId;return"number"==typeof we?H[we]=De:we&&(we[ns]=De),we&&we.ref&&we.unref&&"function"==typeof we.ref&&"function"==typeof we.unref&&(De.ref=we.ref.bind(we),De.unref=we.unref.bind(we)),"number"==typeof we||we?we:De}return Q.apply(d,Ee)}),A=Pt(d,x,Q=>function(z,Ee){const ue=Ee[0];let re;"number"==typeof ue?re=H[ue]:(re=ue&&ue[ns],re||(re=ue)),re&&"string"==typeof re.type?"notScheduled"!==re.state&&(re.cancelFn&&re.data.isPeriodic||0===re.runCount)&&("number"==typeof ue?delete H[ue]:ue&&(ue[ns]=null),re.zone.cancelTask(re)):Q.apply(d,Ee)})}Zone.__load_patch("legacy",d=>{const v=d[Zone.__symbol__("legacyPatch")];v&&v()}),Zone.__load_patch("queueMicrotask",(d,v,x)=>{x.patchMethod(d,"queueMicrotask",_=>function(S,A){v.current.scheduleMicroTask("queueMicrotask",A[0])})}),Zone.__load_patch("timers",d=>{const v="set",x="clear";fn(d,v,x,"Timeout"),fn(d,v,x,"Interval"),fn(d,v,x,"Immediate")}),Zone.__load_patch("requestAnimationFrame",d=>{fn(d,"request","cancel","AnimationFrame"),fn(d,"mozRequest","mozCancel","AnimationFrame"),fn(d,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(d,v)=>{const x=["alert","prompt","confirm"];for(let _=0;_<x.length;_++)Pt(d,x[_],(A,H,U)=>function($,Q){return v.current.run(A,d,Q,U)})}),Zone.__load_patch("EventTarget",(d,v,x)=>{(function gi(d,v){v.patchEventPrototype(d,v)})(d,x),function mi(d,v){if(Zone[v.symbol("patchEventTarget")])return;const{eventNames:x,zoneSymbolEventNames:_,TRUE_STR:S,FALSE_STR:A,ZONE_SYMBOL_PREFIX:H}=v.getGlobalObjects();for(let $=0;$<x.length;$++){const Q=x[$],ue=H+(Q+A),re=H+(Q+S);_[Q]={},_[Q][A]=ue,_[Q][S]=re}const U=d.EventTarget;U&&U.prototype&&v.patchEventTarget(d,v,[U&&U.prototype])}(d,x);const _=d.XMLHttpRequestEventTarget;_&&_.prototype&&x.patchEventTarget(d,x,[_.prototype])}),Zone.__load_patch("MutationObserver",(d,v,x)=>{Yn("MutationObserver"),Yn("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(d,v,x)=>{Yn("IntersectionObserver")}),Zone.__load_patch("FileReader",(d,v,x)=>{Yn("FileReader")}),Zone.__load_patch("on_property",(d,v,x)=>{!function vr(d,v){if(hn&&!he||Zone[d.symbol("patchEvents")])return;const x=v.__Zone_ignore_on_properties;let _=[];if(Cs){const S=window;_=_.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const A=function hi(){try{const d=Nt.navigator.userAgent;if(-1!==d.indexOf("MSIE ")||-1!==d.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:S,ignoreProperties:["error"]}]:[];es(S,ts(S),x&&x.concat(A),Kn(S))}_=_.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let S=0;S<_.length;S++){const A=v[_[S]];A&&A.prototype&&es(A.prototype,ts(A.prototype),x)}}(x,d)}),Zone.__load_patch("customElements",(d,v,x)=>{!function fi(d,v){const{isBrowser:x,isMix:_}=v.getGlobalObjects();(x||_)&&d.customElements&&"customElements"in d&&v.patchCallbacks(v,d.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(d,x)}),Zone.__load_patch("XHR",(d,v)=>{!function $(Q){const z=Q.XMLHttpRequest;if(!z)return;const Ee=z.prototype;let re=Ee[xs],De=Ee[Zn];if(!re){const L=Q.XMLHttpRequestEventTarget;if(L){const J=L.prototype;re=J[xs],De=J[Zn]}}const we="readystatechange",Ke="scheduled";function ke(L){const J=L.data,te=J.target;te[A]=!1,te[U]=!1;const Qe=te[S];re||(re=te[xs],De=te[Zn]),Qe&&De.call(te,we,Qe);const Je=te[S]=()=>{if(te.readyState===te.DONE)if(!J.aborted&&te[A]&&L.state===Ke){const Re=te[v.__symbol__("loadfalse")];if(0!==te.status&&Re&&Re.length>0){const Fe=L.invoke;L.invoke=function(){const be=te[v.__symbol__("loadfalse")];for(let T=0;T<be.length;T++)be[T]===L&&be.splice(T,1);!J.aborted&&L.state===Ke&&Fe.call(L)},Re.push(L)}else L.invoke()}else!J.aborted&&!1===te[A]&&(te[U]=!0)};return re.call(te,we,Je),te[x]||(te[x]=L),G.apply(te,J.args),te[A]=!0,L}function ie(){}function M(L){const J=L.data;return J.aborted=!0,Ce.apply(J.target,J.args)}const Be=Pt(Ee,"open",()=>function(L,J){return L[_]=0==J[2],L[H]=J[1],Be.apply(L,J)}),xe=_e("fetchTaskAborting"),le=_e("fetchTaskScheduling"),G=Pt(Ee,"send",()=>function(L,J){if(!0===v.current[le]||L[_])return G.apply(L,J);{const te={target:L,url:L[H],isPeriodic:!1,args:J,aborted:!1},Qe=Dn("XMLHttpRequest.send",ie,te,ke,M);L&&!0===L[U]&&!te.aborted&&Qe.state===Ke&&Qe.invoke()}}),Ce=Pt(Ee,"abort",()=>function(L,J){const te=function ue(L){return L[x]}(L);if(te&&"string"==typeof te.type){if(null==te.cancelFn||te.data&&te.data.aborted)return;te.zone.cancelTask(te)}else if(!0===v.current[xe])return Ce.apply(L,J)})}(d);const x=_e("xhrTask"),_=_e("xhrSync"),S=_e("xhrListener"),A=_e("xhrScheduled"),H=_e("xhrURL"),U=_e("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",d=>{d.navigator&&d.navigator.geolocation&&function qe(d,v){const x=d.constructor.name;for(let _=0;_<v.length;_++){const S=v[_],A=d[S];if(A){if(!ct(Wt(d,S)))continue;d[S]=(U=>{const $=function(){return U.apply(this,Ts(arguments,x+"."+S))};return kt($,U),$})(A)}}}(d.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(d,v)=>{function x(_){return function(S){bs(d,_).forEach(H=>{const U=d.PromiseRejectionEvent;if(U){const $=new U(_,{promise:S.promise,reason:S.rejection});H.invoke($)}})}}d.PromiseRejectionEvent&&(v[_e("unhandledPromiseRejectionHandler")]=x("unhandledrejection"),v[_e("rejectionHandledHandler")]=x("rejectionhandled"))})}},Wt=>{Wt(Wt.s=565)}]);