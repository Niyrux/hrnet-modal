import K, { useEffect as ee } from "react";
var w = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function re() {
  if ($) return E;
  $ = 1;
  var s = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function c(i, o, l) {
    var f = null;
    if (l !== void 0 && (f = "" + l), o.key !== void 0 && (f = "" + o.key), "key" in o) {
      l = {};
      for (var m in o)
        m !== "key" && (l[m] = o[m]);
    } else l = o;
    return o = l.ref, {
      $$typeof: s,
      type: i,
      key: f,
      ref: o !== void 0 ? o : null,
      props: l
    };
  }
  return E.Fragment = u, E.jsx = c, E.jsxs = c, E;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function te() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && function() {
    function s(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === H ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case R:
          return "Fragment";
        case U:
          return "Profiler";
        case W:
          return "StrictMode";
        case G:
          return "Suspense";
        case J:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case V:
            return e.displayName || "Context";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case q:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return r = e.displayName || null, r !== null ? r : s(e.type) || "Memo";
          case T:
            r = e._payload, e = e._init;
            try {
              return s(e(r));
            } catch {
            }
        }
      return null;
    }
    function u(e) {
      return "" + e;
    }
    function c(e) {
      try {
        u(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), u(e);
      }
    }
    function i(e) {
      if (e === R) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === T)
        return "<...>";
      try {
        var r = s(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (P.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function t() {
        h || (h = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function D() {
      var e = s(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function L(e, r, t, n, p, g) {
      var a = t.ref;
      return e = {
        $$typeof: y,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: D
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: p
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: g
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function A(e, r, t, n, p, g) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (Z(a)) {
            for (n = 0; n < a.length; n++)
              S(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(a);
      if (P.call(r, "key")) {
        a = s(e);
        var d = Object.keys(r).filter(function(Q) {
          return Q !== "key";
        });
        n = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", I[a + n] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          d,
          a
        ), I[a + n] = !0);
      }
      if (a = null, t !== void 0 && (c(t), a = "" + t), f(r) && (c(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var O in r)
          O !== "key" && (t[O] = r[O]);
      } else t = r;
      return a && m(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), L(
        e,
        a,
        t,
        o(),
        p,
        g
      );
    }
    function S(e) {
      j(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === T && (e._payload.status === "fulfilled" ? j(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function j(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    var b = K, y = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), V = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), k = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, Z = Array.isArray, x = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var h, N = {}, C = b.react_stack_bottom_frame.bind(
      b,
      l
    )(), Y = x(i(l)), I = {};
    _.Fragment = R, _.jsx = function(e, r, t) {
      var n = 1e4 > k.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : C,
        n ? x(i(e)) : Y
      );
    }, _.jsxs = function(e, r, t) {
      var n = 1e4 > k.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : C,
        n ? x(i(e)) : Y
      );
    };
  }()), _;
}
process.env.NODE_ENV === "production" ? w.exports = re() : w.exports = te();
var v = w.exports;
function ae({ open: s, onClose: u, children: c, closeLabel: i = "OK", style: o }) {
  return ee(() => {
    if (!s) return;
    const l = (f) => {
      f.key === "Escape" && u();
    };
    return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
  }, [s, u]), s ? /* @__PURE__ */ v.jsx(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      onClick: u,
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "grid",
        placeItems: "center",
        padding: 16,
        zIndex: 1e3,
        ...o == null ? void 0 : o.overlay
      },
      children: /* @__PURE__ */ v.jsxs(
        "div",
        {
          onClick: (l) => l.stopPropagation(),
          style: {
            background: "#fff",
            borderRadius: 12,
            padding: 24,
            width: "min(420px, 100%)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            ...o == null ? void 0 : o.content
          },
          children: [
            c,
            /* @__PURE__ */ v.jsx("div", { style: { marginTop: 16, display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ v.jsx("button", { type: "button", onClick: u, children: i }) })
          ]
        }
      )
    }
  ) : null;
}
export {
  ae as Modal,
  ae as default
};
