(() => {
  var e = {
      702: (e, n) => {
        var t, i, o;
        !(function (r) {
          if ('undefined' != typeof window) {
            var a,
              s = 0,
              d = !1,
              u = !1,
              c = 'message'.length,
              f = '[iFrameSizer]',
              l = f.length,
              m = null,
              g = window.requestAnimationFrame,
              h = {
                max: 1,
                scroll: 1,
                bodyScroll: 1,
                documentElementScroll: 1,
              },
              p = {},
              w = null,
              b = {
                autoResize: !0,
                bodyBackground: null,
                bodyMargin: null,
                bodyMarginV1: 8,
                bodyPadding: null,
                checkOrigin: !0,
                inPageLinks: !1,
                enablePublicMethods: !0,
                heightCalculationMethod: 'bodyOffset',
                id: 'iFrameResizer',
                interval: 32,
                log: !1,
                maxHeight: 1 / 0,
                maxWidth: 1 / 0,
                minHeight: 0,
                minWidth: 0,
                mouseEvents: !0,
                resizeFrom: 'parent',
                scrolling: !1,
                sizeHeight: !0,
                sizeWidth: !1,
                warningTimeout: 5e3,
                tolerance: 0,
                widthCalculationMethod: 'scroll',
                onClose: function () {
                  return !0;
                },
                onClosed: function () {},
                onInit: function () {},
                onMessage: function () {
                  O('onMessage function not defined');
                },
                onMouseEnter: function () {},
                onMouseLeave: function () {},
                onResized: function () {},
                onScroll: function () {
                  return !0;
                },
              },
              y = {};
            window.jQuery &&
              ((a = window.jQuery).fn
                ? a.fn.iFrameResize ||
                  (a.fn.iFrameResize = function (e) {
                    return this.filter('iframe')
                      .each(function (n, t) {
                        q(t, e);
                      })
                      .end();
                  })
                : z('', 'Unable to bind to jQuery, it is not fully loaded.')),
              (i = []),
              (o = 'function' == typeof (t = X) ? t.apply(n, i) : t) === r ||
                (e.exports = o),
              (window.iFrameResize = window.iFrameResize || X());
          }
          function v() {
            return (
              window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver
            );
          }
          function x(e, n, t) {
            e.addEventListener(n, t, !1);
          }
          function M(e, n, t) {
            e.removeEventListener(n, t, !1);
          }
          function I(e) {
            return (
              f +
              '[' +
              (function (e) {
                var n = 'Host page: ' + e;
                return (
                  window.top !== window.self &&
                    (n =
                      window.parentIFrame && window.parentIFrame.getId
                        ? window.parentIFrame.getId() + ': ' + e
                        : 'Nested host page: ' + e),
                  n
                );
              })(e) +
              ']'
            );
          }
          function k(e) {
            return p[e] ? p[e].log : d;
          }
          function F(e, n) {
            R('log', e, n, k(e));
          }
          function z(e, n) {
            R('info', e, n, k(e));
          }
          function O(e, n) {
            R('warn', e, n, !0);
          }
          function R(e, n, t, i) {
            !0 === i &&
              'object' == typeof window.console &&
              console[e](I(n), t);
          }
          function E(e) {
            function n() {
              o('Height'),
                o('Width'),
                A(
                  function () {
                    P(N), S(q), h('onResized', N);
                  },
                  N,
                  'init'
                );
            }
            function t(e) {
              return 'border-box' !== e.boxSizing
                ? 0
                : (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) +
                    (e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0);
            }
            function i(e) {
              return 'border-box' !== e.boxSizing
                ? 0
                : (e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0) +
                    (e.borderBottomWidth
                      ? parseInt(e.borderBottomWidth, 10)
                      : 0);
            }
            function o(e) {
              var n = Number(p[q]['max' + e]),
                t = Number(p[q]['min' + e]),
                i = e.toLowerCase(),
                o = Number(N[i]);
              F(q, 'Checking ' + i + ' is in range ' + t + '-' + n),
                o < t && ((o = t), F(q, 'Set ' + i + ' to min value')),
                o > n && ((o = n), F(q, 'Set ' + i + ' to max value')),
                (N[i] = '' + o);
            }
            function r(e) {
              return E.substr(E.indexOf(':') + c + e);
            }
            function a(e, n) {
              var t, i, o;
              (t = function () {
                var t, i;
                L(
                  'Send Page Info',
                  'pageInfo:' +
                    ((t = document.body.getBoundingClientRect()),
                    (i = N.iframe.getBoundingClientRect()),
                    JSON.stringify({
                      iframeHeight: i.height,
                      iframeWidth: i.width,
                      clientHeight: Math.max(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0
                      ),
                      clientWidth: Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0
                      ),
                      offsetTop: parseInt(i.top - t.top, 10),
                      offsetLeft: parseInt(i.left - t.left, 10),
                      scrollTop: window.pageYOffset,
                      scrollLeft: window.pageXOffset,
                      documentHeight: document.documentElement.clientHeight,
                      documentWidth: document.documentElement.clientWidth,
                      windowHeight: window.innerHeight,
                      windowWidth: window.innerWidth,
                    })),
                  e,
                  n
                );
              }),
                (i = 32),
                y[(o = n)] ||
                  (y[o] = setTimeout(function () {
                    (y[o] = null), t();
                  }, i));
            }
            function s(e) {
              var n = e.getBoundingClientRect();
              return (
                C(q),
                {
                  x: Math.floor(Number(n.left) + Number(m.x)),
                  y: Math.floor(Number(n.top) + Number(m.y)),
                }
              );
            }
            function d(e) {
              var n = e ? s(N.iframe) : { x: 0, y: 0 },
                t = { x: Number(N.width) + n.x, y: Number(N.height) + n.y };
              F(
                q,
                'Reposition requested from iFrame (offset x:' +
                  n.x +
                  ' y:' +
                  n.y +
                  ')'
              ),
                window.top !== window.self
                  ? window.parentIFrame
                    ? window.parentIFrame['scrollTo' + (e ? 'Offset' : '')](
                        t.x,
                        t.y
                      )
                    : O(
                        q,
                        'Unable to scroll to requested position, window.parentIFrame not found'
                      )
                  : ((m = t), u(), F(q, '--'));
            }
            function u() {
              !1 !== h('onScroll', m) ? S(q) : H();
            }
            function g(e) {
              var n = {};
              if (0 === Number(N.width) && 0 === Number(N.height)) {
                var t = r(9).split(':');
                n = { x: t[1], y: t[0] };
              } else n = { x: N.width, y: N.height };
              h(e, {
                iframe: N.iframe,
                screenX: Number(n.x),
                screenY: Number(n.y),
                type: N.type,
              });
            }
            function h(e, n) {
              return T(q, e, n);
            }
            var w,
              b,
              v,
              I,
              k,
              R,
              E = e.data,
              N = {},
              q = null;
            '[iFrameResizerChild]Ready' === E
              ? (function () {
                  for (var e in p)
                    L('iFrame requested init', B(e), p[e].iframe, e);
                })()
              : f === ('' + E).substr(0, l) && E.substr(l).split(':')[0] in p
              ? ((v = E.substr(l).split(':')),
                (I = v[1] ? parseInt(v[1], 10) : 0),
                (k = p[v[0]] && p[v[0]].iframe),
                (R = getComputedStyle(k)),
                (N = {
                  iframe: k,
                  id: v[0],
                  height: I + t(R) + i(R),
                  width: v[2],
                  type: v[3],
                }),
                (q = N.id),
                p[q] && (p[q].loaded = !0),
                (b = N.type in { true: 1, false: 1, undefined: 1 }) &&
                  F(q, 'Ignoring init message from meta parent page'),
                !b &&
                  (function (e) {
                    var n = !0;
                    return (
                      p[e] ||
                        ((n = !1),
                        O(
                          N.type +
                            ' No settings for ' +
                            e +
                            '. Message was: ' +
                            E
                        )),
                      n
                    );
                  })(q) &&
                  (F(q, 'Received: ' + E),
                  (w = !0),
                  null === N.iframe &&
                    (O(q, 'IFrame (' + N.id + ') not found'), (w = !1)),
                  w &&
                    (function () {
                      var n,
                        t = e.origin,
                        i = p[q] && p[q].checkOrigin;
                      if (
                        i &&
                        '' + t != 'null' &&
                        !(i.constructor === Array
                          ? (function () {
                              var e = 0,
                                n = !1;
                              for (
                                F(
                                  q,
                                  'Checking connection is from allowed list of origins: ' +
                                    i
                                );
                                e < i.length;
                                e++
                              )
                                if (i[e] === t) {
                                  n = !0;
                                  break;
                                }
                              return n;
                            })()
                          : ((n = p[q] && p[q].remoteHost),
                            F(q, 'Checking connection is from: ' + n),
                            t === n))
                      )
                        throw new Error(
                          'Unexpected message received from: ' +
                            t +
                            ' for ' +
                            N.iframe.id +
                            '. Message was: ' +
                            e.data +
                            '. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.'
                        );
                      return !0;
                    })() &&
                    (function () {
                      switch (
                        (p[q] && p[q].firstRun && p[q] && (p[q].firstRun = !1),
                        N.type)
                      ) {
                        case 'close':
                          W(N.iframe);
                          break;
                        case 'message':
                          (c = r(6)),
                            F(
                              q,
                              'onMessage passed: {iframe: ' +
                                N.iframe.id +
                                ', message: ' +
                                c +
                                '}'
                            ),
                            h('onMessage', {
                              iframe: N.iframe,
                              message: JSON.parse(c),
                            }),
                            F(q, '--');
                          break;
                        case 'mouseenter':
                          g('onMouseEnter');
                          break;
                        case 'mouseleave':
                          g('onMouseLeave');
                          break;
                        case 'autoResize':
                          p[q].autoResize = JSON.parse(r(9));
                          break;
                        case 'scrollTo':
                          d(!1);
                          break;
                        case 'scrollToOffset':
                          d(!0);
                          break;
                        case 'pageInfo':
                          a(p[q] && p[q].iframe, q),
                            (function () {
                              function e(e, i) {
                                function o() {
                                  p[t] ? a(p[t].iframe, t) : n();
                                }
                                ['scroll', 'resize'].forEach(function (n) {
                                  F(t, e + n + ' listener for sendPageInfo'),
                                    i(window, n, o);
                                });
                              }
                              function n() {
                                e('Remove ', M);
                              }
                              var t = q;
                              e('Add ', x), p[t] && (p[t].stopPageInfo = n);
                            })();
                          break;
                        case 'pageInfoStop':
                          p[q] &&
                            p[q].stopPageInfo &&
                            (p[q].stopPageInfo(), delete p[q].stopPageInfo);
                          break;
                        case 'inPageLink':
                          (t = r(9).split('#')[1] || ''),
                            (i = decodeURIComponent(t)),
                            (o =
                              document.getElementById(i) ||
                              document.getElementsByName(i)[0])
                              ? ((e = s(o)),
                                F(
                                  q,
                                  'Moving to in page link (#' +
                                    t +
                                    ') at x: ' +
                                    e.x +
                                    ' y: ' +
                                    e.y
                                ),
                                (m = { x: e.x, y: e.y }),
                                u(),
                                F(q, '--'))
                              : window.top !== window.self
                              ? window.parentIFrame
                                ? window.parentIFrame.moveToAnchor(t)
                                : F(
                                    q,
                                    'In page link #' +
                                      t +
                                      ' not found and window.parentIFrame not found'
                                  )
                              : F(q, 'In page link #' + t + ' not found');
                          break;
                        case 'reset':
                          j(N);
                          break;
                        case 'init':
                          n(), h('onInit', N.iframe);
                          break;
                        default:
                          0 === Number(N.width) && 0 === Number(N.height)
                            ? O(
                                'Unsupported message received (' +
                                  N.type +
                                  '), this is likely due to the iframe containing a later version of iframe-resizer than the parent page'
                              )
                            : n();
                      }
                      var e, t, i, o, c;
                    })()))
              : z(q, 'Ignored: ' + E);
          }
          function T(e, n, t) {
            var i = null,
              o = null;
            if (p[e]) {
              if ('function' != typeof (i = p[e][n]))
                throw new TypeError(
                  n + ' on iFrame[' + e + '] is not a function'
                );
              o = i(t);
            }
            return o;
          }
          function N(e) {
            var n = e.id;
            delete p[n];
          }
          function W(e) {
            var n = e.id;
            if (!1 !== T(n, 'onClose', n)) {
              F(n, 'Removing iFrame: ' + n);
              try {
                e.parentNode && e.parentNode.removeChild(e);
              } catch (e) {
                O(e);
              }
              T(n, 'onClosed', n), F(n, '--'), N(e);
            } else F(n, 'Close iframe cancelled by onClose event');
          }
          function C(e) {
            null === m &&
              F(
                e,
                'Get page position: ' +
                  (m = {
                    x:
                      window.pageXOffset !== r
                        ? window.pageXOffset
                        : document.documentElement.scrollLeft,
                    y:
                      window.pageYOffset !== r
                        ? window.pageYOffset
                        : document.documentElement.scrollTop,
                  }).x +
                  ',' +
                  m.y
              );
          }
          function S(e) {
            null !== m &&
              (window.scrollTo(m.x, m.y),
              F(e, 'Set page position: ' + m.x + ',' + m.y),
              H());
          }
          function H() {
            m = null;
          }
          function j(e) {
            F(
              e.id,
              'Size reset requested by ' +
                ('init' === e.type ? 'host page' : 'iFrame')
            ),
              C(e.id),
              A(
                function () {
                  P(e), L('reset', 'reset', e.iframe, e.id);
                },
                e,
                'reset'
              );
          }
          function P(e) {
            function n(n) {
              u ||
                '0' !== e[n] ||
                ((u = !0),
                F(i, 'Hidden iFrame detected, creating visibility listener'),
                (function () {
                  function e() {
                    function e(e) {
                      function n(n) {
                        return '0px' === (p[e] && p[e].iframe.style[n]);
                      }
                      function t(e) {
                        return null !== e.offsetParent;
                      }
                      p[e] &&
                        t(p[e].iframe) &&
                        (n('height') || n('width')) &&
                        L('Visibility change', 'resize', p[e].iframe, e);
                    }
                    Object.keys(p).forEach(function (n) {
                      e(n);
                    });
                  }
                  function n(n) {
                    F(
                      'window',
                      'Mutation observed: ' + n[0].target + ' ' + n[0].type
                    ),
                      V(e, 16);
                  }
                  function t() {
                    var e = document.querySelector('body'),
                      t = {
                        attributes: !0,
                        attributeOldValue: !1,
                        characterData: !0,
                        characterDataOldValue: !1,
                        childList: !0,
                        subtree: !0,
                      };
                    new i(n).observe(e, t);
                  }
                  var i = v();
                  i && t();
                })());
            }
            function t(t) {
              !(function (n) {
                e.id
                  ? ((e.iframe.style[n] = e[n] + 'px'),
                    F(
                      e.id,
                      'IFrame (' + i + ') ' + n + ' set to ' + e[n] + 'px'
                    ))
                  : F('undefined', 'messageData id not set');
              })(t),
                n(t);
            }
            var i = e.iframe.id;
            p[i] &&
              (p[i].sizeHeight && t('height'), p[i].sizeWidth && t('width'));
          }
          function A(e, n, t) {
            t !== n.type && g && !window.jasmine
              ? (F(n.id, 'Requesting animation frame'), g(e))
              : e();
          }
          function L(e, n, t, i, o) {
            var r,
              a = !1;
            (i = i || t.id),
              p[i] &&
                (t && 'contentWindow' in t && null !== t.contentWindow
                  ? ((r = p[i] && p[i].targetOrigin),
                    F(
                      i,
                      '[' +
                        e +
                        '] Sending msg to iframe[' +
                        i +
                        '] (' +
                        n +
                        ') targetOrigin: ' +
                        r
                    ),
                    t.contentWindow.postMessage(f + n, r))
                  : O(i, '[' + e + '] IFrame(' + i + ') not found'),
                o &&
                  p[i] &&
                  p[i].warningTimeout &&
                  (p[i].msgTimeout = setTimeout(function () {
                    !p[i] ||
                      p[i].loaded ||
                      a ||
                      ((a = !0),
                      O(
                        i,
                        'IFrame has not responded within ' +
                          p[i].warningTimeout / 1e3 +
                          ' seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning.'
                      ));
                  }, p[i].warningTimeout)));
          }
          function B(e) {
            return (
              e +
              ':' +
              p[e].bodyMarginV1 +
              ':' +
              p[e].sizeWidth +
              ':' +
              p[e].log +
              ':' +
              p[e].interval +
              ':' +
              p[e].enablePublicMethods +
              ':' +
              p[e].autoResize +
              ':' +
              p[e].bodyMargin +
              ':' +
              p[e].heightCalculationMethod +
              ':' +
              p[e].bodyBackground +
              ':' +
              p[e].bodyPadding +
              ':' +
              p[e].tolerance +
              ':' +
              p[e].inPageLinks +
              ':' +
              p[e].resizeFrom +
              ':' +
              p[e].widthCalculationMethod +
              ':' +
              p[e].mouseEvents
            );
          }
          function q(e, n) {
            function t(e) {
              var n = e.split('Callback');
              if (2 === n.length) {
                var t = 'on' + n[0].charAt(0).toUpperCase() + n[0].slice(1);
                (this[t] = this[e]),
                  delete this[e],
                  O(
                    a,
                    "Deprecated: '" +
                      e +
                      "' has been renamed '" +
                      t +
                      "'. The old method will be removed in the next major version."
                  );
              }
            }
            var i,
              o,
              a = (function (t) {
                var i;
                return (
                  '' === t &&
                    ((e.id =
                      ((i = (n && n.id) || b.id + s++),
                      null !== document.getElementById(i) && (i += s++),
                      (t = i))),
                    (d = (n || {}).log),
                    F(t, 'Added missing iframe ID: ' + t + ' (' + e.src + ')')),
                  t
                );
              })(e.id);
            a in p && 'iFrameResizer' in e
              ? O(a, 'Ignored iFrame, already setup.')
              : (!(function (n) {
                  var i;
                  (n = n || {}),
                    (p[a] = {
                      firstRun: !0,
                      iframe: e,
                      remoteHost:
                        e.src && e.src.split('/').slice(0, 3).join('/'),
                    }),
                    (function (e) {
                      if ('object' != typeof e)
                        throw new TypeError('Options is not an object');
                    })(n),
                    Object.keys(n).forEach(t, n),
                    (function (e) {
                      for (var n in b)
                        Object.prototype.hasOwnProperty.call(b, n) &&
                          (p[a][n] = Object.prototype.hasOwnProperty.call(e, n)
                            ? e[n]
                            : b[n]);
                    })(n),
                    p[a] &&
                      (p[a].targetOrigin =
                        !0 === p[a].checkOrigin
                          ? '' === (i = p[a].remoteHost) ||
                            null !==
                              i.match(/^(about:blank|javascript:|file:\/\/)/)
                            ? '*'
                            : i
                          : '*');
                })(n),
                (function () {
                  switch (
                    (F(
                      a,
                      'IFrame scrolling ' +
                        (p[a] && p[a].scrolling ? 'enabled' : 'disabled') +
                        ' for ' +
                        a
                    ),
                    (e.style.overflow =
                      !1 === (p[a] && p[a].scrolling) ? 'hidden' : 'auto'),
                    p[a] && p[a].scrolling)
                  ) {
                    case 'omit':
                      break;
                    case !0:
                      e.scrolling = 'yes';
                      break;
                    case !1:
                      e.scrolling = 'no';
                      break;
                    default:
                      e.scrolling = p[a] ? p[a].scrolling : 'no';
                  }
                })(),
                (function () {
                  function n(n) {
                    var t = p[a][n];
                    1 / 0 !== t &&
                      0 !== t &&
                      ((e.style[n] = 'number' == typeof t ? t + 'px' : t),
                      F(a, 'Set ' + n + ' = ' + e.style[n]));
                  }
                  function t(e) {
                    if (p[a]['min' + e] > p[a]['max' + e])
                      throw new Error(
                        'Value for min' + e + ' can not be greater than max' + e
                      );
                  }
                  t('Height'),
                    t('Width'),
                    n('maxHeight'),
                    n('minHeight'),
                    n('maxWidth'),
                    n('minWidth');
                })(),
                ('number' != typeof (p[a] && p[a].bodyMargin) &&
                  '0' !== (p[a] && p[a].bodyMargin)) ||
                  ((p[a].bodyMarginV1 = p[a].bodyMargin),
                  (p[a].bodyMargin = p[a].bodyMargin + 'px')),
                (i = B(a)),
                (o = v()) &&
                  (function (n) {
                    e.parentNode &&
                      new n(function (n) {
                        n.forEach(function (n) {
                          Array.prototype.slice
                            .call(n.removedNodes)
                            .forEach(function (n) {
                              n === e && W(e);
                            });
                        });
                      }).observe(e.parentNode, { childList: !0 });
                  })(o),
                x(e, 'load', function () {
                  var n, t;
                  L('iFrame.onload', i, e, r, !0),
                    (n = p[a] && p[a].firstRun),
                    (t = p[a] && p[a].heightCalculationMethod in h),
                    !n &&
                      t &&
                      j({ iframe: e, height: 0, width: 0, type: 'init' });
                }),
                L('init', i, e, r, !0),
                p[a] &&
                  (p[a].iframe.iFrameResizer = {
                    close: W.bind(null, p[a].iframe),
                    removeListeners: N.bind(null, p[a].iframe),
                    resize: L.bind(
                      null,
                      'Window resize',
                      'resize',
                      p[a].iframe
                    ),
                    moveToAnchor: function (e) {
                      L('Move to anchor', 'moveToAnchor:' + e, p[a].iframe, a);
                    },
                    sendMessage: function (e) {
                      L(
                        'Send Message',
                        'message:' + (e = JSON.stringify(e)),
                        p[a].iframe,
                        a
                      );
                    },
                  }));
          }
          function V(e, n) {
            null === w &&
              (w = setTimeout(function () {
                (w = null), e();
              }, n));
          }
          function U() {
            'hidden' !== document.visibilityState &&
              (F('document', 'Trigger event: Visiblity change'),
              V(function () {
                D('Tab Visable', 'resize');
              }, 16));
          }
          function D(e, n) {
            Object.keys(p).forEach(function (t) {
              (function (e) {
                return (
                  p[e] &&
                  'parent' === p[e].resizeFrom &&
                  p[e].autoResize &&
                  !p[e].firstRun
                );
              })(t) && L(e, n, p[t].iframe, t);
            });
          }
          function J() {
            x(window, 'message', E),
              x(window, 'resize', function () {
                var e;
                F('window', 'Trigger event: ' + (e = 'resize')),
                  V(function () {
                    D('Window ' + e, 'resize');
                  }, 16);
              }),
              x(document, 'visibilitychange', U),
              x(document, '-webkit-visibilitychange', U);
          }
          function X() {
            function e(e, t) {
              t &&
                (!(function () {
                  if (!t.tagName)
                    throw new TypeError('Object is not a valid DOM element');
                  if ('IFRAME' !== t.tagName.toUpperCase())
                    throw new TypeError(
                      'Expected <IFRAME> tag, found <' + t.tagName + '>'
                    );
                })(),
                q(t, e),
                n.push(t));
            }
            var n;
            return (
              (function () {
                var e,
                  n = ['moz', 'webkit', 'o', 'ms'];
                for (e = 0; e < n.length && !g; e += 1)
                  g = window[n[e] + 'RequestAnimationFrame'];
                g
                  ? (g = g.bind(window))
                  : F('setup', 'RequestAnimationFrame not supported');
              })(),
              J(),
              function (t, i) {
                switch (
                  ((n = []),
                  (function (e) {
                    e &&
                      e.enablePublicMethods &&
                      O(
                        'enablePublicMethods option has been removed, public methods are now always available in the iFrame'
                      );
                  })(t),
                  typeof i)
                ) {
                  case 'undefined':
                  case 'string':
                    Array.prototype.forEach.call(
                      document.querySelectorAll(i || 'iframe'),
                      e.bind(r, t)
                    );
                    break;
                  case 'object':
                    e(t, i);
                    break;
                  default:
                    throw new TypeError(
                      'Unexpected data type (' + typeof i + ')'
                    );
                }
                return n;
              }
            );
          }
        })();
      },
    },
    n = {};
  function t(i) {
    var o = n[i];
    if (void 0 !== o) return o.exports;
    var r = (n[i] = { exports: {} });
    return e[i](r, r.exports, t), r.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var i in n)
        t.o(n, i) &&
          !t.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: n[i] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      'use strict';
      var e = t(702);
      t.n(e)()(
        { heightCalculationMethod: 'taggedElement' },
        '[plausible-embed]'
      );
    })();
})();
