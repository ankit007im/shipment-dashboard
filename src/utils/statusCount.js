export default function array_count_values(e) {
  var t = {},
    n = "",
    r = "";
  var i = function (e) {
    var t = typeof e;
    t = t.toLowerCase();
    if (t === "object") {
      t = "array";
    }
    return t;
  };
  var s = function (e) {
    switch (typeof e) {
      case "number":
        if (Math.floor(e) !== e) {
          return;
        }
      case "string":
        if (e in this && this.hasOwnProperty(e)) {
          ++this[e];
        } else {
          this[e] = 1;
        }
    }
  };
  r = i(e);
  if (r === "array") {
    for (n in e) {
      if (e.hasOwnProperty(n)) {
        s.call(t, e[n]);
      }
    }
  }
  return t;
}
