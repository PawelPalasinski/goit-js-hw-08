function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,p=Math.min,v=function(){return l.Date.now()};function y(e,t,n){var i,o,r,u,f,a,c=0,l=!1,d=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(w,t),l?g(e):u}function h(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-c>=r}function w(){var e=v();if(h(e))return T(e);f=setTimeout(w,function(e){var n=t-(e-a);return d?p(n,r-(e-c)):n}(e))}function T(e){return f=void 0,y&&i?g(e):(i=o=void 0,u)}function x(){var e=v(),n=h(e);if(i=arguments,o=this,a=e,n){if(void 0===f)return j(a);if(d)return f=setTimeout(w,t),g(a)}return void 0===f&&(f=setTimeout(w,t)),u}return t=b(t)||0,m(n)&&(l=!!n.leading,r=(d="maxWait"in n)?s(b(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=o=f=void 0},x.flush=function(){return void 0===f?u:T(v())},x}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};document.querySelector(".feedback-form").addEventListener("input",e(t)(setLocalRecords,500));document.querySelector('[name="email"]'),document.querySelector('[name="message"]');
//# sourceMappingURL=03-feedback.bad038a3.js.map