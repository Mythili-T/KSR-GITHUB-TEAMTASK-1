(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8053,8575],{762587:e=>{function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,r,n,s){r=r||"&",n=n||"=";var o={};if("string"!=typeof e||0===e.length)return o;var a=/\+/g;e=e.split(r);var i=1e3;s&&"number"==typeof s.maxKeys&&(i=s.maxKeys);var l=e.length;i>0&&l>i&&(l=i);for(var c=0;c<l;++c){var u,h,d,p,f=e[c].replace(a,"%20"),m=f.indexOf(n);m>=0?(u=f.substr(0,m),h=f.substr(m+1)):(u=f,h=""),d=decodeURIComponent(u),p=decodeURIComponent(h),t(o,d)?Array.isArray(o[d])?o[d].push(p):o[d]=[o[d],p]:o[d]=p}return o}},712361:e=>{var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,r,n,s){return r=r||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map((function(s){var o=encodeURIComponent(t(s))+n;return Array.isArray(e[s])?e[s].map((function(e){return o+encodeURIComponent(t(e))})).join(r):o+encodeURIComponent(t(e[s]))})).join(r):s?encodeURIComponent(t(s))+n+encodeURIComponent(t(e)):""}},817673:(e,t,r)=>{t.decode=t.parse=r(762587),t.encode=t.stringify=r(712361)},52511:function(e,t,r){var n;e=r.nmd(e),function(s){t&&t.nodeType,e&&e.nodeType;var o="object"==typeof r.g&&r.g;o.global!==o&&o.window!==o&&o.self;var a,i=2147483647,l=36,c=/^xn--/,u=/[^\x20-\x7E]/,h=/[\x2E\u3002\uFF0E\uFF61]/g,d={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},p=Math.floor,f=String.fromCharCode;function m(e){throw RangeError(d[e])}function _(e,t){for(var r=e.length,n=[];r--;)n[r]=t(e[r]);return n}function g(e,t){var r=e.split("@"),n="";return r.length>1&&(n=r[0]+"@",e=r[1]),n+_((e=e.replace(h,".")).split("."),t).join(".")}function v(e){for(var t,r,n=[],s=0,o=e.length;s<o;)(t=e.charCodeAt(s++))>=55296&&t<=56319&&s<o?56320==(64512&(r=e.charCodeAt(s++)))?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),s--):n.push(t);return n}function b(e){return _(e,(function(e){var t="";return e>65535&&(t+=f((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=f(e)})).join("")}function y(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function k(e,t,r){var n=0;for(e=r?p(e/700):e>>1,e+=p(e/t);e>455;n+=l)e=p(e/35);return p(n+36*e/(e+38))}function I(e){var t,r,n,s,o,a,c,u,h,d,f,_=[],g=e.length,v=0,y=128,I=72;for((r=e.lastIndexOf("-"))<0&&(r=0),n=0;n<r;++n)e.charCodeAt(n)>=128&&m("not-basic"),_.push(e.charCodeAt(n));for(s=r>0?r+1:0;s<g;){for(o=v,a=1,c=l;s>=g&&m("invalid-input"),((u=(f=e.charCodeAt(s++))-48<10?f-22:f-65<26?f-65:f-97<26?f-97:l)>=l||u>p((i-v)/a))&&m("overflow"),v+=u*a,!(u<(h=c<=I?1:c>=I+26?26:c-I));c+=l)a>p(i/(d=l-h))&&m("overflow"),a*=d;I=k(v-o,t=_.length+1,0==o),p(v/t)>i-y&&m("overflow"),y+=p(v/t),v%=t,_.splice(v++,0,y)}return b(_)}function w(e){var t,r,n,s,o,a,c,u,h,d,_,g,b,I,w,x=[];for(g=(e=v(e)).length,t=128,r=0,o=72,a=0;a<g;++a)(_=e[a])<128&&x.push(f(_));for(n=s=x.length,s&&x.push("-");n<g;){for(c=i,a=0;a<g;++a)(_=e[a])>=t&&_<c&&(c=_);for(c-t>p((i-r)/(b=n+1))&&m("overflow"),r+=(c-t)*b,t=c,a=0;a<g;++a)if((_=e[a])<t&&++r>i&&m("overflow"),_==t){for(u=r,h=l;!(u<(d=h<=o?1:h>=o+26?26:h-o));h+=l)w=u-d,I=l-d,x.push(f(y(d+w%I,0))),u=p(w/I);x.push(f(y(u,0))),o=k(r,b,n==s),r=0,++n}++r,++t}return x.join("")}a={version:"1.3.2",ucs2:{decode:v,encode:b},decode:I,encode:w,toASCII:function(e){return g(e,(function(e){return u.test(e)?"xn--"+w(e):e}))},toUnicode:function(e){return g(e,(function(e){return c.test(e)?I(e.slice(4).toLowerCase()):e}))}},void 0===(n=function(){return a}.call(t,r,t,e))||(e.exports=n)}()},608575:(e,t,r)=>{var n=r(52511),s=r(762502);function o(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=b,t.resolve=function(e,t){return b(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?b(e,!1,!0).resolveObject(t):t},t.format=function(e){s.isString(e)&&(e=b(e));return e instanceof o?e.format():o.prototype.format.call(e)},t.Url=o;var a=/^([a-z0-9.+-]+:)/i,i=/:[0-9]*$/,l=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),u=["'"].concat(c),h=["%","/","?",";","#"].concat(u),d=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,f=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},_={javascript:!0,"javascript:":!0},g={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},v=r(817673);function b(e,t,r){if(e&&s.isObject(e)&&e instanceof o)return e;var n=new o;return n.parse(e,t,r),n}o.prototype.parse=function(e,t,r){if(!s.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var o=e.indexOf("?"),i=-1!==o&&o<e.indexOf("#")?"?":"#",c=e.split(i);c[0]=c[0].replace(/\\/g,"/");var b=e=c.join(i);if(b=b.trim(),!r&&1===e.split("#").length){var y=l.exec(b);if(y)return this.path=b,this.href=b,this.pathname=y[1],y[2]?(this.search=y[2],this.query=t?v.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var k=a.exec(b);if(k){var I=(k=k[0]).toLowerCase();this.protocol=I,b=b.substr(k.length)}if(r||k||b.match(/^\/\/[^@\/]+@[^@\/]+/)){var w="//"===b.substr(0,2);!w||k&&_[k]||(b=b.substr(2),this.slashes=!0)}if(!_[k]&&(w||k&&!g[k])){for(var x,A,R=-1,S=0;S<d.length;S++){-1!==(C=b.indexOf(d[S]))&&(-1===R||C<R)&&(R=C)}-1!==(A=-1===R?b.lastIndexOf("@"):b.lastIndexOf("@",R))&&(x=b.slice(0,A),b=b.slice(A+1),this.auth=decodeURIComponent(x)),R=-1;for(S=0;S<h.length;S++){var C;-1!==(C=b.indexOf(h[S]))&&(-1===R||C<R)&&(R=C)}-1===R&&(R=b.length),this.host=b.slice(0,R),b=b.slice(R),this.parseHost(),this.hostname=this.hostname||"";var O="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!O)for(var P=this.hostname.split(/\./),T=(S=0,P.length);S<T;S++){var j=P[S];if(j&&!j.match(p)){for(var U="",N=0,D=j.length;N<D;N++)j.charCodeAt(N)>127?U+="x":U+=j[N];if(!U.match(p)){var Z=P.slice(0,S),E=P.slice(S+1),F=j.match(f);F&&(Z.push(F[1]),E.unshift(F[2])),E.length&&(b="/"+E.join(".")+b),this.hostname=Z.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),O||(this.hostname=n.toASCII(this.hostname));var $=this.port?":"+this.port:"",q=this.hostname||"";this.host=q+$,this.href+=this.host,O&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==b[0]&&(b="/"+b))}if(!m[I])for(S=0,T=u.length;S<T;S++){var L=u[S];if(-1!==b.indexOf(L)){var M=encodeURIComponent(L);M===L&&(M=escape(L)),b=b.split(L).join(M)}}var G=b.indexOf("#");-1!==G&&(this.hash=b.substr(G),b=b.slice(0,G));var B=b.indexOf("?");if(-1!==B?(this.search=b.substr(B),this.query=b.substr(B+1),t&&(this.query=v.parse(this.query)),b=b.slice(0,B)):t&&(this.search="",this.query={}),b&&(this.pathname=b),g[I]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){$=this.pathname||"";var z=this.search||"";this.path=$+z}return this.href=this.format(),this},o.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",o=!1,a="";this.host?o=e+this.host:this.hostname&&(o=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&s.isObject(this.query)&&Object.keys(this.query).length&&(a=v.stringify(this.query));var i=this.search||a&&"?"+a||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||g[t])&&!1!==o?(o="//"+(o||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):o||(o=""),n&&"#"!==n.charAt(0)&&(n="#"+n),i&&"?"!==i.charAt(0)&&(i="?"+i),t+o+(r=r.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(i=i.replace("#","%23"))+n},o.prototype.resolve=function(e){return this.resolveObject(b(e,!1,!0)).format()},o.prototype.resolveObject=function(e){if(s.isString(e)){var t=new o;t.parse(e,!1,!0),e=t}for(var r=new o,n=Object.keys(this),a=0;a<n.length;a++){var i=n[a];r[i]=this[i]}if(r.hash=e.hash,""===e.href)return r.href=r.format(),r;if(e.slashes&&!e.protocol){for(var l=Object.keys(e),c=0;c<l.length;c++){var u=l[c];"protocol"!==u&&(r[u]=e[u])}return g[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){if(!g[e.protocol]){for(var h=Object.keys(e),d=0;d<h.length;d++){var p=h[d];r[p]=e[p]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||_[e.protocol])r.pathname=e.pathname;else{for(var f=(e.pathname||"").split("/");f.length&&!(e.host=f.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==f[0]&&f.unshift(""),f.length<2&&f.unshift(""),r.pathname=f.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var m=r.pathname||"",v=r.search||"";r.path=m+v}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var b=r.pathname&&"/"===r.pathname.charAt(0),y=e.host||e.pathname&&"/"===e.pathname.charAt(0),k=y||b||r.host&&e.pathname,I=k,w=r.pathname&&r.pathname.split("/")||[],x=(f=e.pathname&&e.pathname.split("/")||[],r.protocol&&!g[r.protocol]);if(x&&(r.hostname="",r.port=null,r.host&&(""===w[0]?w[0]=r.host:w.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===f[0]?f[0]=e.host:f.unshift(e.host)),e.host=null),k=k&&(""===f[0]||""===w[0])),y)r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,w=f;else if(f.length)w||(w=[]),w.pop(),w=w.concat(f),r.search=e.search,r.query=e.query;else if(!s.isNullOrUndefined(e.search)){if(x)r.hostname=r.host=w.shift(),(O=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=O.shift(),r.host=r.hostname=O.shift());return r.search=e.search,r.query=e.query,s.isNull(r.pathname)&&s.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!w.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var A=w.slice(-1)[0],R=(r.host||e.host||w.length>1)&&("."===A||".."===A)||""===A,S=0,C=w.length;C>=0;C--)"."===(A=w[C])?w.splice(C,1):".."===A?(w.splice(C,1),S++):S&&(w.splice(C,1),S--);if(!k&&!I)for(;S--;S)w.unshift("..");!k||""===w[0]||w[0]&&"/"===w[0].charAt(0)||w.unshift(""),R&&"/"!==w.join("/").substr(-1)&&w.push("");var O,P=""===w[0]||w[0]&&"/"===w[0].charAt(0);x&&(r.hostname=r.host=P?"":w.length?w.shift():"",(O=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=O.shift(),r.host=r.hostname=O.shift()));return(k=k||r.host&&w.length)&&!P&&w.unshift(""),w.length?r.pathname=w.join("/"):(r.pathname=null,r.path=null),s.isNull(r.pathname)&&s.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},o.prototype.parseHost=function(){var e=this.host,t=i.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},762502:e=>{e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},397066:(e,t,r)=>{r.d(t,{b:()=>u,h:()=>h});var n=r(983722),s=r(768559),o=r(43760),a=r(966113),i=r(619937),l=r(48714),c=r(366284);const u=({href:e,pinId:t,pin:r,location:o,auxData:u},h)=>{if(r&&r.is_promoted){var d,p;const y=(0,s.Z)(r,o),k=(0,l.nS)({url:e,pinId:t,csrId:null,clientTrackingParams:y,auxData:u}),I=(0,n.Z)();if((0,c.G6)(null!==(d=null==I?void 0:I.userAgent.browserName)&&void 0!==d?d:"")){var f,m;const{group:n}=null!==(f=null==I?void 0:I.experimentsClient.checkExperiment("m10n_event_conversion_measurement"))&&void 0!==f?f:{};let s=null!=I&&null!==(m=I.userAgent)&&void 0!==m&&m.browserVersion?I.userAgent.browserVersion:"0.0";if(s=parseFloat(s.split(".")[0]+"."+s.split(".")[1]),void 0!==r.campaign_id&&s>=14.1&&["enabled_safari"].includes(n)){var _;const n=r.attribution_source_id?((e,t,r)=>{const n=document.createElement("a");return n.setAttribute("href",t),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener nofollow noreferrer"),n.style.cursor="pointer",n.style.display="block",n.setAttribute(i.$N.ATTRIBUTION_SOURCE_ID,e),n.setAttribute(i.$N.ATTRIBUTE_DESTINATION,r),n.setAttribute(i.$N.ATTRIBUTE_ON,r),n.click(),e})(r.attribution_source_id,k,e):((e,t,r)=>{const n=document.createElement("a");n.setAttribute("href",t),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener nofollow noreferrer"),n.style.cursor="pointer",n.style.display="block";const s=""+(e%32*8+Math.floor(((new Date).getTime()-16409952e5)/864e5)%8);return n.setAttribute(i.$N.ATTRIBUTION_SOURCE_ID,s),n.setAttribute(i.$N.ATTRIBUTE_DESTINATION,r),n.setAttribute(i.$N.ATTRIBUTE_ON,r),n.click(),s})(null!==(_=r.pin_promotion_id)&&void 0!==_?_:0,k,e);return h({event_type:101,clientTrackingParams:y,object_id_str:t||"",aux_data:{pin_id:t||"",click_measurement_ppid:r.pin_promotion_id||"",click_measurement_campaign_id:r.campaign_id||"",is_pcm:!0,attribution_source_id:n,page_url:e}}),!0}}else if((0,c.i7)(null!==(p=null==I?void 0:I.userAgent.browserName)&&void 0!==p?p:"")){var g,v;const{group:n}=null!==(g=null==I?void 0:I.experimentsClient.checkExperiment("m10n_event_conversion_measurement_chrome"))&&void 0!==g?g:{},s=null!=I&&null!==(v=I.userAgent)&&void 0!==v&&v.browserVersion?parseInt(I.userAgent.browserVersion.split(".")[0],10):0;if(void 0!==r.attribution_source_id&&s>=101&&["enabled"].includes(n)){var b;const n=((e,t,r)=>{const n=new URL(`${a.Z.settings.CANONICAL_MAIN_URL}/attribution_source/`);n.searchParams.set(i.NR.ATTRIBUTION_SOURCE_EVENT_ID,e),n.searchParams.set(i.NR.ATTRIBUTION_DESTINATION,r),n.searchParams.set(i.NR.ATTRIBUTION_EXPIRY,""+i.uV);const s=document.createElement("a");return s.setAttribute("href",t),s.setAttribute("target","_blank"),s.setAttribute("rel","noopener nofollow noreferrer"),s.style.cursor="pointer",s.style.display="block",s.setAttribute(i.NR.ATTRIBUTION_SOURCE,n.toString()),s.click(),e})(null!==(b=r.attribution_source_id)&&void 0!==b?b:"0",k,e);return h({event_type:101,clientTrackingParams:y,object_id_str:t||"",aux_data:{pin_id:t||"",click_measurement_ppid:r.pin_promotion_id||"",click_measurement_campaign_id:r.campaign_id||"",is_arapi:!0,attribution_source_id:n,page_url:e}}),!0}}}return!1},h=({href:e,pinId:t,pin:r,location:n,auxData:a},i)=>{if("undefined"!=typeof window&&window.Windows)(0,o.Z)({url:e,pinId:t,pin:r,location:n,auxData:a});else{if(u({href:e,pinId:t,pin:r,location:n,auxData:a},i))return;(0,l.Gj)({url:e,pinId:t,csrId:null,clientTrackingParams:(0,s.Z)(r,n),auxData:a})}}},768559:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(826067);const s=/\/today\/(article|best|trending)\/[\w-]+\/(\d+)/,o=/\/discover\/article\/[\w-]+\/(\d+)/,a=(e,t)=>t?e.substring(t.length).split("/")[0]:e,i=(e,t,r,i)=>{var l,c;if(!e)return"";let u="";const h=t.board&&t.board.url;switch(e){case"/":case"/homefeed/":return"UserHomefeedResource";case t.pinner&&`/${t.pinner.username}/pins/`:return"UserPinsResource";case t.pinner&&`/${t.pinner.username}/`:case/\/_activity\//.test(e)&&e:return"UserActivityPinsResource";case/\/_created\//.test(e)&&e:return t.story_pin_data_id?"UserStoryPinsFeedResource":"UserActivityPinsResource";case/\/_community\//.test(e)&&e:return"UserDiscoveredPinsResource";case/\/_shop\//.test(e)&&e:return"StoreFrontFeedResource";case/\/_saved\//.test(e)&&e:return"BoardlessPinsResource";case t.pinner&&`/${t.pinner.username}/_shopping_list/`:return"ShoppingListFeedResource";case/\/visual-search\//.test(e)&&e:return"VisualLiveSearchResource";case/\/pin\//.test(e)&&e:u="/pin/";const d=a(e,u);if(t.id!==d)return t.call_to_create_source_pin_id?`ApiResource_callToCreatePins_${d}`:`RelatedPinFeedResource_${d}`;break;case/\/search\//.test(e)&&e:if(r){return`SearchResource_${((0,n.mB)(r,{shouldDecode:!1}).q||"").toLowerCase()}`}if(i)return`SearchResource_${encodeURIComponent(i.q||"").toLowerCase()}`;break;case o.test(e)&&e:return`ExploreArticleResource_${(null===(l=e.match(o))||void 0===l?void 0:l[2])||"unknown"}`;case/\/discover\/article\//.test(e)&&e:u="/discover/article/";return`ExploreArticleResource_${a(e,u)}`;case/\/categories\//.test(e)&&e:u="/categories/";return`CategoryFeedResource_${a(e,u)}`;case/\/discover\/topics\//.test(e)&&e:return"CategoryFeedResource";case/\/news_hub\//.test(e)&&e:u="/news_hub/";return`NewsHubDetailsResource_${a(e,u)}`;case/\/_tools\/more-ideas\//.test(e)&&e:return"BoardContentRecommendationResource";case/\/topics\//.test(e)&&e:u="/topics/";return`TopicFeedResource_${a(e,u)}`;case t.pinner&&`/${t.pinner.username}/products/`:return"StoreFrontFeedResource";case/\/source\//.test(e)&&e:u="/source/";return`DomainFeedResource_${a(e,u)}`;case/\/explore\//.test(e)&&e:u="/explore/";return`SearchResource_${a(e,u)}`;case h:case!!h&&/\/more_ideas\//.test(e)&&e:return"BoardFeedResource";case h&&e.indexOf(h)>-1&&e:return"BoardSectionPinsResource";case/\/following\//.test(e)&&e:return"FollowingFeedResource";case/\/brand_catalog\//.test(e)&&e:return"BrandCatalogFeedResource";case s.test(e)&&e:return`TodayArticleFeedResource_${(null===(c=e.match(s))||void 0===c?void 0:c[2])||"unknown"}`;case/\/today\//.test(e):return"TodayTabResource";case/\story_feed\//.test(e)&&e:if(r){const{feed_type:e,request_params:t}=(0,n.mB)(r);return`StoryFeedResource_${e}_${t}`}break;case/\/your-shop\//.test(e)&&e:return"PersonalBoutiqueResource"}return""},l=(e,t,r)=>{if(!e||!e.tracking_params||!t)return;if(!e.tracking_params_map)return`${e.tracking_params}~0`;const{pathname:n,search:s,query:o}=t,a=i(n,e,s,o),l=e.tracking_params_map||{},c=Object.keys(l);let u;if((n||"").startsWith("/pin/")){const e=c.find((e=>"PinResource"!==e));u=e?l[e]:l.PinResource}else u=l[a];let h;if(!u&&r&&r.length){const t=(e=>{let t=null==e?void 0:e.pathname;return t?(t.match(/\/search\//)&&null!=e&&e.search&&(t+=e.search),t.toLowerCase()):""})(r[r.length-1].location);h=i(t,e,s,o),u=l[h]}return u||(u=`${e.tracking_params||""}~0`),u}},48714:(e,t,r)=>{r.d(t,{nS:()=>k,iw:()=>w,gV:()=>b,G3:()=>x,lI:()=>A,Gj:()=>I,Jd:()=>v,$3:()=>y});var n=r(231486),s=r(56641),o=r(768559),a=r(250059);const i=e=>"string"!=typeof e&&e?e.state:null;var l=r(643913),c=r(547239),u=r(508847),h=r(102500),d=r(43760),p=r(579164),f=r(307640),m=r(397066),_=r(623568),g=r(226198);const v=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},b=({isOffsiteUrl:e,event:t})=>!e&&(t.metaKey||t.ctrlKey),y=({location:e,pin:t,surface:r})=>!(0,_.jL)(t)&&(({location:e,pinId:t,surface:r})=>{const n=Boolean(r),s=f.ZF.includes(r),o=e.pathname.includes(t);return n&&!s||o})({location:e,pinId:t.id,surface:r}),k=e=>{const t=Math.round(1e3*Math.random())+"",r=Math.round(1e3*Math.random())+"";n.t8((0,g.GS)(t),r);const s=`${t}-${r}`,{queryParams:o,url:a}=e;let i={token:s,url:a};if(!o){const{pinId:t,csrId:r,clientTrackingParams:n,auxData:s}=e;i={...i,pin:null!=t?t:void 0,csr:r&&!t?r:void 0,client_tracking_params:n,aux_data:s?JSON.stringify(s):void 0}}o&&(i={...i,...o});return`/offsite/?${(0,l.Z)(i)}`},I=e=>{(0,s.Z)(k(e),!0)},w=async({isMounted:e,pin:t,location:r,spamCheckCallback:n,href:s})=>{const a=await(0,h.Z)({check_only:!0,client_tracking_params:(0,o.Z)(t,r),pin_id:null==t?void 0:t.id,url:s}).callGet({showError:!1});if(!a.resource_response.error&&e){const e=a.resource_response.data||{},{message:t,redirect_status:r,url:s}=e;n({blocked:["blocked","suspicious","porn"].includes(r),message:t,redirectStatus:r,sanitized_url:s})}},x=({event:e,onHistoryChange:t,href:r,history:n,target:o})=>{const l=(0,a.Z)(r),h=i(r),d=(0,c.Z)(l);d===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===o?(0,s.Z)(l,"blank"===o):n&&d===p.Z.SAME_ORIGIN&&(n.push((0,u.Z)({url:l}),null!=h?h:{}),t&&t({event:e}))},A=({href:e,pinId:t,pin:r,location:n,auxData:s,spamCheck:a,queryParams:i},l,c)=>{"undefined"!=typeof window&&window.Windows?(0,d.Z)({url:e,pinId:t,pin:r,location:n,auxData:s}):r?(({spamCheck:e,auxData:t,location:r,pin:n,pinId:s,href:a},i,l)=>{if(null!=e&&e.blocked)null==l||l(e);else{if((0,m.b)({href:a,pinId:s,pin:n,location:r,auxData:t},i))return;I({url:a,pinId:s,csrId:null,clientTrackingParams:(0,o.Z)(n,r),auxData:t})}})({spamCheck:a,auxData:s,location:n,pin:r,pinId:t,href:e},l,c):I({url:e,pinId:t,queryParams:i})}},102500:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(6637);function s(e){return n.Z.create("ApiResource",{url:"/v3/offsite/",data:e})}},287072:(e,t,r)=>{r.d(t,{Z:()=>u,p:()=>h});var n=r(667294),s=r(250059),o=r(149230),a=r(407043),i=r(643074),l=r(48714),c=r(276775);function u(e){var t;const{externalData:r,href:u,onHistoryChange:h,target:d}=e,{logContextEvent:p}=(0,a.v)(),[f,m]=(0,n.useState)(null),[_,g]=(0,n.useState)(!1),v=(0,c.k6)(),b=(0,c.TH)(),y=(0,o.Z)({url:(0,s.Z)(u)}),{showWarning:k}=null!==(t=(0,i.s)())&&void 0!==t?t:{};return(0,n.useEffect)((()=>(g(!0),()=>{g(!1)})),[]),(0,n.useEffect)((()=>{y&&null!=r&&r.pin&&null===f&&_&&(0,l.$3)({location:b,pin:r.pin,surface:r.surface})&&(0,l.iw)({isMounted:_,pin:r.pin,location:b,spamCheckCallback:e=>m(e),href:(0,s.Z)(u)})}),[null==r?void 0:r.pin,null==r?void 0:r.surface,u,y,_,b,f]),({event:e})=>{var t;(0,l.gV)({isOffsiteUrl:y,event:e})||(e.preventDefault(),u&&(y||null!=r&&r.dangerouslyForceOffsiteUrl?(0,l.lI)({auxData:null==r?void 0:r.auxData,href:(0,s.Z)(u),pinId:null==r||null===(t=r.pin)||void 0===t?void 0:t.id,pin:null==r?void 0:r.pin,queryParams:null==r?void 0:r.queryParams,location:b,spamCheck:f},p,k):(0,l.G3)({event:e,href:u,history:v,onHistoryChange:h,target:"blank"===d?"blank":null})))}}const h=({children:e,...t})=>e({handleClick:u(t)})},250059:(e,t,r)=>{r.d(t,{Z:()=>n});const n=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},508847:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(567831);const s=(e,t)=>0===e.lastIndexOf(t,0),o=({url:e})=>{const t=(0,n.Z)("/");return s(e,t)?e.substr(t.length-1):e}},807609:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(411465),s=r(966476);const o=()=>{const e=(0,n.Z)(),t=(0,s.Z)();return e&&!t}},411465:(e,t,r)=>{r.d(t,{G:()=>i,Z:()=>l});var n=r(667294),s=r(276775),o=r(785893);const a=(0,n.createContext)(!0);function i({children:e}){const t=(0,s.TH)(),[r,i]=(0,n.useState)(!0),l=(0,n.useRef)(t);return(0,n.useEffect)((()=>{l.current!==t&&(l.current=t,i(!1))}),[t]),(0,o.jsx)(a.Provider,{value:r,children:e})}function l(){return(0,n.useContext)(a)}},43760:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(768559),s=r(102500),o=r(48714);function a({url:e,pinId:t,pin:r,location:a,auxData:i}){const l={check_only:!0,client_tracking_params:r?(0,n.Z)(r,a):void 0,pin_id:r?r.id:t,url:e,aux_data:JSON.stringify(i)};(0,s.Z)(l).callGet().then((s=>{if(s&&s.resource_response&&!s.resource_response.error){const{resource_response:e}=s,{redirect_status:t,url:r}=e.data;if(!["blocked","suspicious","porn"].includes(t)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){const e=new window.Windows.Foundation.Uri(r);window.Windows.System.Launcher.launchUriAsync(e)}return}}if(r){const s=(0,n.Z)(r,a);(0,o.Gj)({url:e,pinId:t,csrId:null,clientTrackingParams:s,auxData:i})}else(0,o.Gj)({url:e,pinId:t})}))}},307640:(e,t,r)=>{r.d(t,{UP:()=>i,Wv:()=>s,ZF:()=>n,zI:()=>o,zl:()=>a});const n=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],s=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],o=[...s,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],a=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],i=["BaseBoardPinGrid"]},643074:(e,t,r)=>{r.d(t,{Z:()=>g,s:()=>_});var n=r(667294),s=r(121151),o=r(966113),a=r(608575),i=r(898781),l=r(349700),c=r(883119),u=r(785893);const h=()=>{var e;const t=(0,i.ZP)(),{dismissWarning:r}=null!==(e=_())&&void 0!==e?e:{};return(0,u.jsx)(c.xu,{paddingX:3,children:(0,u.jsx)(c.zx,{fullWidth:!0,color:"red",onClick:r,text:t.bt("OK", "Okay", "Dismiss a modal stating that clicking through to a link has been blocked", undefined, true)})})},d=()=>{const e=(0,i.ZP)();return(0,u.jsx)(c.xv,{inline:!0,weight:"bold",children:(0,u.jsx)(c.rU,{target:"blank",href:o.Z.settings.POLICY_COMMUNITY_GUIDELINES_SPAM_AND_QUALITY,inline:!0,underline:"hover",children:e.bt("Learn more", "Learn more", "Link text leading to policy website", undefined, true)})})},p=({message:e,sanitized_url:t})=>{var r;const n=(0,i.ZP)(),{dismissWarning:o}=null!==(r=_())&&void 0!==r?r:{};return(0,u.jsx)(s.ZP,{accessibilityModalLabel:n.bt("We have blocked this link", "We have blocked this link", "Modal label when clicking a spammy link", undefined, true),onDismiss:o,heading:n.bt("Heads up!", "Heads up!", "Modal heading when clicking through to a link has been blocked", undefined, true),footer:(0,u.jsx)(h,{}),children:(0,u.jsxs)(c.xu,{padding:6,children:[(0,u.jsx)(c.xv,{children:(0,l.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,u.jsx)(d,{},"learnMoreLink")})}),(0,u.jsxs)(c.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,u.jsx)(c.xu,{marginEnd:3,children:(0,u.jsx)(c.JO,{accessibilityLabel:n.bt("Blocked link address", "Blocked link address", "Icon label preceding a block url", undefined, true),color:"error",icon:"report",inline:!0,size:24})}),(0,u.jsx)(c.xv,{inline:!0,lineClamp:1,weight:"bold",children:a.parse(t).hostname})]})]})})};var f=r(425288);const{Provider:m,useMaybeHook:_}=(0,f.Z)("SpammyClickthrough");function g({children:e}){const[t,r]=(0,n.useState)(null),s=(0,n.useCallback)((()=>{r(null)}),[r]),o=(0,n.useCallback)((e=>{r(e)}),[r]),a=(0,n.useMemo)((()=>({dismissWarning:s,showWarning:o})),[s,o]);return(0,u.jsxs)(m,{value:a,children:[t&&(0,u.jsx)(p,{...t}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/8053.en_GB-896061590d7fcd45.mjs.map