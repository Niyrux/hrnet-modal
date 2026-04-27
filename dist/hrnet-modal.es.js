import { jsx as r, jsxs as c } from "react/jsx-runtime";
import { useEffect as u } from "react";
function l({ open: d, onClose: e, children: t, closeLabel: o = "OK", style: n }) {
  return u(() => {
    if (!d) return;
    const i = (a) => {
      a.key === "Escape" && e();
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [d, e]), d ? /* @__PURE__ */ r(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      onClick: e,
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "grid",
        placeItems: "center",
        padding: 16,
        zIndex: 1e3,
        ...n == null ? void 0 : n.overlay
      },
      children: /* @__PURE__ */ c(
        "div",
        {
          onClick: (i) => i.stopPropagation(),
          style: {
            background: "#fff",
            borderRadius: 12,
            padding: 24,
            width: "min(420px, 100%)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            ...n == null ? void 0 : n.content
          },
          children: [
            t,
            /* @__PURE__ */ r("div", { style: { marginTop: 16, display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ r("button", { type: "button", onClick: e, children: o }) })
          ]
        }
      )
    }
  ) : null;
}
export {
  l as Modal,
  l as default
};
