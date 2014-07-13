var PS = PS || {};
PS.Prelude = (function () {
    "use strict";
    var Unit = function (value0) {
        return {
            ctor: "Prelude.Unit", 
            values: [ value0 ]
        };
    };
    var LT = {
        ctor: "Prelude.LT", 
        values: [  ]
    };
    var GT = {
        ctor: "Prelude.GT", 
        values: [  ]
    };
    var EQ = {
        ctor: "Prelude.EQ", 
        values: [  ]
    };
    function cons(e) {  return function (l) {    return [e].concat(l);  };};
    function showStringImpl(s) {  return JSON.stringify(s);};
    function showNumberImpl(n) {  return n.toString();};
    function showArrayImpl (f) {  return function (xs) {    var ss = [];    for (var i = 0, l = xs.length; i < l; i++) {      ss[i] = f(xs[i]);    }    return '[' + ss.join(',') + ']';  };};
    function numAdd(n1) {  return function(n2) {    return n1 + n2;  };};
    function numSub(n1) {  return function(n2) {    return n1 - n2;  };};
    function numMul(n1) {  return function(n2) {    return n1 * n2;  };};
    function numDiv(n1) {  return function(n2) {    return n1 / n2;  };};
    function numMod(n1) {  return function(n2) {    return n1 % n2;  };};
    function numNegate(n) {  return -n;};
    function refEq(r1) {  return function(r2) {    return r1 === r2;  };};
    function refIneq(r1) {  return function(r2) {    return r1 !== r2;  };};
    function eqArrayImpl(f) {  return function(xs) {    return function(ys) {      if (xs.length !== ys.length) return false;      for (var i = 0; i < xs.length; i++) {        if (!f(xs[i])(ys[i])) return false;      }      return true;    };  };};
    function unsafeCompare(n1) {  return function(n2) {    return n1 < n2 ? LT : n1 > n2 ? GT : EQ;  };};
    function numShl(n1) {  return function(n2) {    return n1 << n2;  };};
    function numShr(n1) {  return function(n2) {    return n1 >> n2;  };};
    function numZshr(n1) {  return function(n2) {    return n1 >>> n2;  };};
    function numAnd(n1) {  return function(n2) {    return n1 & n2;  };};
    function numOr(n1) {  return function(n2) {    return n1 | n2;  };};
    function numXor(n1) {  return function(n2) {    return n1 ^ n2;  };};
    function numComplement(n) {  return ~n;};
    function boolAnd(b1) {  return function(b2) {    return b1 && b2;  };};
    function boolOr(b1) {  return function(b2) {    return b1 || b2;  };};
    function boolNot(b) {  return !b;};
    function concatString(s1) {  return function(s2) {    return s1 + s2;  };};
    var $bar$bar = function (dict) {
        return dict["||"];
    };
    var $bar = function (dict) {
        return dict["|"];
    };
    var $up = function (dict) {
        return dict["^"];
    };
    var $greater$greater$eq = function (dict) {
        return dict[">>="];
    };
    var $eq$eq = function (dict) {
        return dict["=="];
    };
    var $less$bar$greater = function (dict) {
        return dict["<|>"];
    };
    var $less$greater = function (dict) {
        return dict["<>"];
    };
    var $less$less$less = function (dict) {
        return dict["<<<"];
    };
    var $greater$greater$greater = function (__dict_Semigroupoid_0) {
        return function (f) {
            return function (g) {
                return $less$less$less(__dict_Semigroupoid_0)(g)(f);
            };
        };
    };
    var $less$times$greater = function (dict) {
        return dict["<*>"];
    };
    var $less$dollar$greater = function (dict) {
        return dict["<$>"];
    };
    var $colon = cons;
    var $div$eq = function (dict) {
        return dict["/="];
    };
    var $div = function (dict) {
        return dict["/"];
    };
    var $minus = function (dict) {
        return dict["-"];
    };
    var $plus$plus = function (__dict_Semigroup_1) {
        return $less$greater(__dict_Semigroup_1);
    };
    var $plus = function (dict) {
        return dict["+"];
    };
    var $times = function (dict) {
        return dict["*"];
    };
    var $amp$amp = function (dict) {
        return dict["&&"];
    };
    var $amp = function (dict) {
        return dict["&"];
    };
    var $percent = function (dict) {
        return dict["%"];
    };
    var $dollar = function (f) {
        return function (x) {
            return f(x);
        };
    };
    var $hash = function (x) {
        return function (f) {
            return f(x);
        };
    };
    var zshr = function (dict) {
        return dict.zshr;
    };
    var unit = Unit({});
    var shr = function (dict) {
        return dict.shr;
    };
    var showUnit = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_40) {
                return "Unit {}";
            }
        };
    };
    var showString = function (_) {
        return {
            "__superclasses": {}, 
            show: showStringImpl
        };
    };
    var showOrdering = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_48) {
                if (_48.ctor === "Prelude.LT") {
                    return "LT";
                };
                if (_48.ctor === "Prelude.GT") {
                    return "GT";
                };
                if (_48.ctor === "Prelude.EQ") {
                    return "EQ";
                };
                throw "Failed pattern match";
            }
        };
    };
    var showNumber = function (_) {
        return {
            "__superclasses": {}, 
            show: showNumberImpl
        };
    };
    var showBoolean = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_41) {
                if (_41) {
                    return "true";
                };
                if (!_41) {
                    return "false";
                };
                throw "Failed pattern match";
            }
        };
    };
    var show = function (dict) {
        return dict.show;
    };
    var showArray = function (__dict_Show_2) {
        return {
            "__superclasses": {}, 
            show: showArrayImpl(show(__dict_Show_2))
        };
    };
    var shl = function (dict) {
        return dict.shl;
    };
    var semigroupoidArr = function (_) {
        return {
            "__superclasses": {}, 
            "<<<": function (f) {
                return function (g) {
                    return function (x) {
                        return f(g(x));
                    };
                };
            }
        };
    };
    var semigroupUnit = function (_) {
        return {
            "__superclasses": {}, 
            "<>": function (_55) {
                return function (_56) {
                    return Unit({});
                };
            }
        };
    };
    var semigroupString = function (_) {
        return {
            "__superclasses": {}, 
            "<>": concatString
        };
    };
    var semigroupArr = function (__dict_Semigroup_3) {
        return {
            "__superclasses": {}, 
            "<>": function (f) {
                return function (g) {
                    return function (x) {
                        return $less$greater(__dict_Semigroup_3)(f(x))(g(x));
                    };
                };
            }
        };
    };
    var pure = function (dict) {
        return dict.pure;
    };
    var $$return = function (__dict_Monad_4) {
        return pure(__dict_Monad_4["__superclasses"]["Prelude.Applicative_0"]({}));
    };
    var numNumber = function (_) {
        return {
            "__superclasses": {}, 
            "+": numAdd, 
            "-": numSub, 
            "*": numMul, 
            "/": numDiv, 
            "%": numMod, 
            negate: numNegate
        };
    };
    var not = function (dict) {
        return dict.not;
    };
    var negate = function (dict) {
        return dict.negate;
    };
    var liftM1 = function (__dict_Monad_5) {
        return function (f) {
            return function (a) {
                return $greater$greater$eq(__dict_Monad_5["__superclasses"]["Prelude.Bind_1"]({}))(a)(function (_0) {
                    return $$return(__dict_Monad_5)(f(_0));
                });
            };
        };
    };
    var liftA1 = function (__dict_Applicative_6) {
        return function (f) {
            return function (a) {
                return $less$times$greater(__dict_Applicative_6["__superclasses"]["Prelude.Apply_0"]({}))(pure(__dict_Applicative_6)(f))(a);
            };
        };
    };
    var id = function (dict) {
        return dict.id;
    };
    var functorArr = function (_) {
        return {
            "__superclasses": {}, 
            "<$>": $less$less$less(semigroupoidArr({}))
        };
    };
    var flip = function (f) {
        return function (b) {
            return function (a) {
                return f(a)(b);
            };
        };
    };
    var eqUnit = function (_) {
        return {
            "__superclasses": {}, 
            "==": function (_42) {
                return function (_43) {
                    return true;
                };
            }, 
            "/=": function (_44) {
                return function (_45) {
                    return false;
                };
            }
        };
    };
    var ordUnit = function (_) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqUnit({});
                }
            }, 
            compare: function (_49) {
                return function (_50) {
                    return EQ;
                };
            }
        };
    };
    var eqString = function (_) {
        return {
            "__superclasses": {}, 
            "==": refEq, 
            "/=": refIneq
        };
    };
    var ordString = function (_) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqString({});
                }
            }, 
            compare: unsafeCompare
        };
    };
    var eqNumber = function (_) {
        return {
            "__superclasses": {}, 
            "==": refEq, 
            "/=": refIneq
        };
    };
    var ordNumber = function (_) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqNumber({});
                }
            }, 
            compare: unsafeCompare
        };
    };
    var eqBoolean = function (_) {
        return {
            "__superclasses": {}, 
            "==": refEq, 
            "/=": refIneq
        };
    };
    var ordBoolean = function (_) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqBoolean({});
                }
            }, 
            compare: function (_51) {
                return function (_52) {
                    if (!_51) {
                        if (!_52) {
                            return EQ;
                        };
                    };
                    if (!_51) {
                        if (_52) {
                            return LT;
                        };
                    };
                    if (_51) {
                        if (_52) {
                            return EQ;
                        };
                    };
                    if (_51) {
                        if (!_52) {
                            return GT;
                        };
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var empty = function (dict) {
        return dict.empty;
    };
    var $$const = function (_36) {
        return function (_37) {
            return _36;
        };
    };
    var $$void = function (__dict_Functor_8) {
        return function (fa) {
            return $less$dollar$greater(__dict_Functor_8)($$const(unit))(fa);
        };
    };
    var complement = function (dict) {
        return dict.complement;
    };
    var compare = function (dict) {
        return dict.compare;
    };
    var $less = function (__dict_Ord_10) {
        return function (a1) {
            return function (a2) {
                return (function (_277) {
                    if (_277.ctor === "Prelude.LT") {
                        return true;
                    };
                    return false;
                })(compare(__dict_Ord_10)(a1)(a2));
            };
        };
    };
    var $less$eq = function (__dict_Ord_11) {
        return function (a1) {
            return function (a2) {
                return (function (_278) {
                    if (_278.ctor === "Prelude.GT") {
                        return false;
                    };
                    return true;
                })(compare(__dict_Ord_11)(a1)(a2));
            };
        };
    };
    var $greater = function (__dict_Ord_12) {
        return function (a1) {
            return function (a2) {
                return (function (_279) {
                    if (_279.ctor === "Prelude.GT") {
                        return true;
                    };
                    return false;
                })(compare(__dict_Ord_12)(a1)(a2));
            };
        };
    };
    var $greater$eq = function (__dict_Ord_13) {
        return function (a1) {
            return function (a2) {
                return (function (_280) {
                    if (_280.ctor === "Prelude.LT") {
                        return false;
                    };
                    return true;
                })(compare(__dict_Ord_13)(a1)(a2));
            };
        };
    };
    var categoryArr = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroupoid_0": function (_) {
                    return semigroupoidArr({});
                }
            }, 
            id: function (x) {
                return x;
            }
        };
    };
    var boolLikeBoolean = function (_) {
        return {
            "__superclasses": {}, 
            "&&": boolAnd, 
            "||": boolOr, 
            not: boolNot
        };
    };
    var eqArray = function (__dict_Eq_7) {
        return {
            "__superclasses": {}, 
            "==": function (xs) {
                return function (ys) {
                    return eqArrayImpl($eq$eq(__dict_Eq_7))(xs)(ys);
                };
            }, 
            "/=": function (xs) {
                return function (ys) {
                    return not(boolLikeBoolean({}))($eq$eq(eqArray(__dict_Eq_7))(xs)(ys));
                };
            }
        };
    };
    var ordArray = function (__dict_Ord_9) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqArray(__dict_Ord_9["__superclasses"]["Prelude.Eq_0"]({}));
                }
            }, 
            compare: function (_53) {
                return function (_54) {
                    if (_53.length === 0) {
                        if (_54.length === 0) {
                            return EQ;
                        };
                    };
                    if (_53.length === 0) {
                        return LT;
                    };
                    if (_54.length === 0) {
                        return GT;
                    };
                    if (_53.length > 0) {
                        var _287 = _53.slice(1);
                        if (_54.length > 0) {
                            var _285 = _54.slice(1);
                            return (function (_283) {
                                if (_283.ctor === "Prelude.EQ") {
                                    return compare(ordArray(__dict_Ord_9))(_287)(_285);
                                };
                                return _283;
                            })(compare(__dict_Ord_9)(_53[0])(_54[0]));
                        };
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var eqOrdering = function (_) {
        return {
            "__superclasses": {}, 
            "==": function (_46) {
                return function (_47) {
                    if (_46.ctor === "Prelude.LT") {
                        if (_47.ctor === "Prelude.LT") {
                            return true;
                        };
                    };
                    if (_46.ctor === "Prelude.GT") {
                        if (_47.ctor === "Prelude.GT") {
                            return true;
                        };
                    };
                    if (_46.ctor === "Prelude.EQ") {
                        if (_47.ctor === "Prelude.EQ") {
                            return true;
                        };
                    };
                    return false;
                };
            }, 
            "/=": function (x) {
                return function (y) {
                    return not(boolLikeBoolean({}))($eq$eq(eqOrdering({}))(x)(y));
                };
            }
        };
    };
    var bitsNumber = function (_) {
        return {
            "__superclasses": {}, 
            "&": numAnd, 
            "|": numOr, 
            "^": numXor, 
            shl: numShl, 
            shr: numShr, 
            zshr: numZshr, 
            complement: numComplement
        };
    };
    var asTypeOf = function (_38) {
        return function (_39) {
            return _38;
        };
    };
    var applyArr = function (_) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorArr({});
                }
            }, 
            "<*>": function (f) {
                return function (g) {
                    return function (x) {
                        return f(x)(g(x));
                    };
                };
            }
        };
    };
    var bindArr = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyArr({});
                }
            }, 
            ">>=": function (m) {
                return function (f) {
                    return function (x) {
                        return f(m(x))(x);
                    };
                };
            }
        };
    };
    var applicativeArr = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyArr({});
                }
            }, 
            pure: $$const
        };
    };
    var monadArr = function (_) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeArr({});
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindArr({});
                }
            }
        };
    };
    var ap = function (__dict_Monad_14) {
        return function (f) {
            return function (a) {
                return $greater$greater$eq(__dict_Monad_14["__superclasses"]["Prelude.Bind_1"]({}))(f)(function (_2) {
                    return $greater$greater$eq(__dict_Monad_14["__superclasses"]["Prelude.Bind_1"]({}))(a)(function (_1) {
                        return $$return(__dict_Monad_14)(_2(_1));
                    });
                });
            };
        };
    };
    return {
        Unit: Unit, 
        LT: LT, 
        GT: GT, 
        EQ: EQ, 
        unit: unit, 
        "++": $plus$plus, 
        "<>": $less$greater, 
        not: not, 
        "||": $bar$bar, 
        "&&": $amp$amp, 
        complement: complement, 
        zshr: zshr, 
        shr: shr, 
        shl: shl, 
        "^": $up, 
        "|": $bar, 
        "&": $amp, 
        ">=": $greater$eq, 
        "<=": $less$eq, 
        ">": $greater, 
        "<": $less, 
        compare: compare, 
        refIneq: refIneq, 
        refEq: refEq, 
        "/=": $div$eq, 
        "==": $eq$eq, 
        negate: negate, 
        "%": $percent, 
        "/": $div, 
        "*": $times, 
        "-": $minus, 
        "+": $plus, 
        ap: ap, 
        liftM1: liftM1, 
        "return": $$return, 
        ">>=": $greater$greater$eq, 
        "<|>": $less$bar$greater, 
        empty: empty, 
        liftA1: liftA1, 
        pure: pure, 
        "<*>": $less$times$greater, 
        "void": $$void, 
        "<$>": $less$dollar$greater, 
        show: show, 
        cons: cons, 
        ":": $colon, 
        "#": $hash, 
        "$": $dollar, 
        id: id, 
        ">>>": $greater$greater$greater, 
        "<<<": $less$less$less, 
        asTypeOf: asTypeOf, 
        "const": $$const, 
        flip: flip, 
        semigroupoidArr: semigroupoidArr, 
        categoryArr: categoryArr, 
        showUnit: showUnit, 
        showString: showString, 
        showBoolean: showBoolean, 
        showNumber: showNumber, 
        showArray: showArray, 
        functorArr: functorArr, 
        applyArr: applyArr, 
        applicativeArr: applicativeArr, 
        bindArr: bindArr, 
        monadArr: monadArr, 
        numNumber: numNumber, 
        eqUnit: eqUnit, 
        eqString: eqString, 
        eqNumber: eqNumber, 
        eqBoolean: eqBoolean, 
        eqArray: eqArray, 
        eqOrdering: eqOrdering, 
        showOrdering: showOrdering, 
        ordUnit: ordUnit, 
        ordBoolean: ordBoolean, 
        ordNumber: ordNumber, 
        ordString: ordString, 
        ordArray: ordArray, 
        bitsNumber: bitsNumber, 
        boolLikeBoolean: boolLikeBoolean, 
        semigroupUnit: semigroupUnit, 
        semigroupString: semigroupString, 
        semigroupArr: semigroupArr
    };
})();
var PS = PS || {};
PS.Prelude_Unsafe = (function () {
    "use strict";
    function unsafeIndex(xs) {  return function(n) {    return xs[n];  };};
    return {
        unsafeIndex: unsafeIndex
    };
})();
var PS = PS || {};
PS.Data_String_Regex = (function () {
    "use strict";
    function regex(s1) {  return function(s2) {    return new RegExp(s1, s2);  };};
    function test(r) {  return function (s) {    return r.test(s);  };};
    function match(r) {  return function (s) {    return s.match(r);   };};
    function replace(r) {  return function(s1) {    return function(s2) {      return s2.replace(r, s1);    };  };};
    function replace$prime(r) {  return function(f) {    return function(s2) {      return s2.replace(r, function (match) {        return f(match)(Array.prototype.splice.call(arguments, 1, arguments.length - 3));      });    };  };};
    function search(r) {  return function (s) {    return s.search(r);  };};
    return {
        search: search, 
        "replace'": replace$prime, 
        replace: replace, 
        match: match, 
        test: test, 
        regex: regex
    };
})();
var PS = PS || {};
PS.Data_String = (function () {
    "use strict";
    function charAt(i) {  return function(s) {    return s.charAt(i);   };};
    function charCodeAt(i) {  return function(s) {    return s.charCodeAt(i);   };};
    function fromCharCode(n) {  return String.fromCharCode(n);};
    function indexOf(x) {  return function(s) {    return s.indexOf(x);  }; };
    function indexOf$prime(x) {  return function(startAt) {    return function(s) {      return s.indexOf(x, startAt);    };   }; };
    function lastIndexOf(x) {  return function(s) {    return s.lastIndexOf(x);  };};
    function lastIndexOf$prime(x) {  return function(startAt) {    return function(s) {      return s.lastIndexOf(x, startAt);    };   }; };
    function length(s) {  return s.length;};
    function localeCompare(s1) {  return function(s2) {    return s1.localeCompare(s2);  };};
    function replace(s1) {  return function(s2) {    return function(s3) {      return s3.replace(s1, s2);    };  };};
    function take(n) {  return function(s) {    return s.substr(0, n);  };};
    function drop(n) {  return function(s) {    return s.substr(n);  };};
    function split(sep) {  return function(s) {    return s.split(sep);  };};
    function toLower(s) {  return s.toLowerCase();};
    function toUpper(s) {  return s.toUpperCase();};
    function trim(s) {  return s.trim();};
    function joinWith (s) {  return function (xs) {    return xs.join(s);  };};
    return {
        joinWith: joinWith, 
        trim: trim, 
        toUpper: toUpper, 
        toLower: toLower, 
        split: split, 
        drop: drop, 
        take: take, 
        replace: replace, 
        localeCompare: localeCompare, 
        length: length, 
        "lastIndexOf'": lastIndexOf$prime, 
        lastIndexOf: lastIndexOf, 
        "indexOf'": indexOf$prime, 
        indexOf: indexOf, 
        fromCharCode: fromCharCode, 
        charCodeAt: charCodeAt, 
        charAt: charAt
    };
})();
var PS = PS || {};
PS.Data_Maybe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Nothing = {
        ctor: "Data.Maybe.Nothing", 
        values: [  ]
    };
    var Just = function (value0) {
        return {
            ctor: "Data.Maybe.Just", 
            values: [ value0 ]
        };
    };
    var showMaybe = function (__dict_Show_15) {
        return {
            "__superclasses": {}, 
            show: function (_68) {
                if (_68.ctor === "Data.Maybe.Just") {
                    return "Just (" + Prelude.show(__dict_Show_15)(_68.values[0]) + ")";
                };
                if (_68.ctor === "Data.Maybe.Nothing") {
                    return "Nothing";
                };
                throw "Failed pattern match";
            }
        };
    };
    var maybe = function (_57) {
        return function (_58) {
            return function (_59) {
                if (_59.ctor === "Data.Maybe.Nothing") {
                    return _57;
                };
                if (_59.ctor === "Data.Maybe.Just") {
                    return _58(_59.values[0]);
                };
                throw "Failed pattern match";
            };
        };
    };
    var isNothing = maybe(true)(Prelude["const"](false));
    var isJust = maybe(false)(Prelude["const"](true));
    var functorMaybe = function (_) {
        return {
            "__superclasses": {}, 
            "<$>": function (_60) {
                return function (_61) {
                    if (_61.ctor === "Data.Maybe.Just") {
                        return Just(_60(_61.values[0]));
                    };
                    return Nothing;
                };
            }
        };
    };
    var fromMaybe = function (a) {
        return maybe(a)(Prelude.id(Prelude.categoryArr({})));
    };
    var eqMaybe = function (__dict_Eq_17) {
        return {
            "__superclasses": {}, 
            "==": function (_69) {
                return function (_70) {
                    if (_69.ctor === "Data.Maybe.Nothing") {
                        if (_70.ctor === "Data.Maybe.Nothing") {
                            return true;
                        };
                    };
                    if (_69.ctor === "Data.Maybe.Just") {
                        if (_70.ctor === "Data.Maybe.Just") {
                            return Prelude["=="](__dict_Eq_17)(_69.values[0])(_70.values[0]);
                        };
                    };
                    return false;
                };
            }, 
            "/=": function (a) {
                return function (b) {
                    return !Prelude["=="](eqMaybe(__dict_Eq_17))(a)(b);
                };
            }
        };
    };
    var ordMaybe = function (__dict_Ord_16) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqMaybe(__dict_Ord_16["__superclasses"]["Prelude.Eq_0"]({}));
                }
            }, 
            compare: function (_71) {
                return function (_72) {
                    if (_71.ctor === "Data.Maybe.Just") {
                        if (_72.ctor === "Data.Maybe.Just") {
                            return Prelude.compare(__dict_Ord_16)(_71.values[0])(_72.values[0]);
                        };
                    };
                    if (_71.ctor === "Data.Maybe.Nothing") {
                        if (_72.ctor === "Data.Maybe.Nothing") {
                            return Prelude.EQ;
                        };
                    };
                    if (_71.ctor === "Data.Maybe.Nothing") {
                        return Prelude.LT;
                    };
                    if (_72.ctor === "Data.Maybe.Nothing") {
                        return Prelude.GT;
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var applyMaybe = function (_) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorMaybe({});
                }
            }, 
            "<*>": function (_62) {
                return function (_63) {
                    if (_62.ctor === "Data.Maybe.Just") {
                        return Prelude["<$>"](functorMaybe({}))(_62.values[0])(_63);
                    };
                    if (_62.ctor === "Data.Maybe.Nothing") {
                        return Nothing;
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var bindMaybe = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyMaybe({});
                }
            }, 
            ">>=": function (_66) {
                return function (_67) {
                    if (_66.ctor === "Data.Maybe.Just") {
                        return _67(_66.values[0]);
                    };
                    if (_66.ctor === "Data.Maybe.Nothing") {
                        return Nothing;
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var applicativeMaybe = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyMaybe({});
                }
            }, 
            pure: Just
        };
    };
    var monadMaybe = function (_) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeMaybe({});
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindMaybe({});
                }
            }
        };
    };
    var alternativeMaybe = function (_) {
        return {
            "__superclasses": {}, 
            empty: Nothing, 
            "<|>": function (_64) {
                return function (_65) {
                    if (_64.ctor === "Data.Maybe.Nothing") {
                        return _65;
                    };
                    return _64;
                };
            }
        };
    };
    return {
        Nothing: Nothing, 
        Just: Just, 
        isNothing: isNothing, 
        isJust: isJust, 
        fromMaybe: fromMaybe, 
        maybe: maybe, 
        functorMaybe: functorMaybe, 
        applyMaybe: applyMaybe, 
        applicativeMaybe: applicativeMaybe, 
        alternativeMaybe: alternativeMaybe, 
        bindMaybe: bindMaybe, 
        monadMaybe: monadMaybe, 
        showMaybe: showMaybe, 
        eqMaybe: eqMaybe, 
        ordMaybe: ordMaybe
    };
})();
var PS = PS || {};
PS.Data_Maybe_Unsafe = (function () {
    "use strict";
    var fromJust = function (_73) {
        if (_73.ctor === "Data.Maybe.Just") {
            return _73.values[0];
        };
        throw "Failed pattern match";
    };
    return {
        fromJust: fromJust
    };
})();
var PS = PS || {};
PS.Data_Function = (function () {
    "use strict";
    function mkFn0(f) {  return function() {    return f({});  };};
    function mkFn1(f) {  return function(a) {    return f(a);  };};
    function mkFn2(f) {  return function(a, b) {    return f(a)(b);  };};
    function mkFn3(f) {  return function(a, b, c) {    return f(a)(b)(c);  };};
    function mkFn4(f) {  return function(a, b, c, d) {    return f(a)(b)(c)(d);  };};
    function mkFn5(f) {  return function(a, b, c, d, e) {    return f(a)(b)(c)(d)(e);  };};
    function runFn0(f) {  return f();};
    function runFn1(f) {  return function(a) {    return f(a);  };};
    function runFn2(f) {  return function(a) {    return function(b) {      return f(a, b);    };  };};
    function runFn3(f) {  return function(a) {    return function(b) {      return function(c) {        return f(a, b, c);      };    };  };};
    function runFn4(f) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return f(a, b, c, d);        };      };    };  };};
    function runFn5(f) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return f(a, b, c, d, e);          };        };      };    };  };};
    var on = function (f) {
        return function (g) {
            return function (x) {
                return function (y) {
                    return f(g(x))(g(y));
                };
            };
        };
    };
    return {
        runFn5: runFn5, 
        runFn4: runFn4, 
        runFn3: runFn3, 
        runFn2: runFn2, 
        runFn1: runFn1, 
        runFn0: runFn0, 
        mkFn5: mkFn5, 
        mkFn4: mkFn4, 
        mkFn3: mkFn3, 
        mkFn2: mkFn2, 
        mkFn1: mkFn1, 
        mkFn0: mkFn0, 
        on: on
    };
})();
var PS = PS || {};
PS.Data_Eq = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Ref = function (value0) {
        return {
            ctor: "Data.Eq.Ref", 
            values: [ value0 ]
        };
    };
    var liftRef = function (_74) {
        return function (_75) {
            return function (_76) {
                return _74(_75.values[0])(_76.values[0]);
            };
        };
    };
    var eqRef = function (_) {
        return {
            "__superclasses": {}, 
            "==": liftRef(Prelude.refEq), 
            "/=": liftRef(Prelude.refIneq)
        };
    };
    return {
        Ref: Ref, 
        liftRef: liftRef, 
        eqRef: eqRef
    };
})();
var PS = PS || {};
PS.Data_Either = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Left = function (value0) {
        return {
            ctor: "Data.Either.Left", 
            values: [ value0 ]
        };
    };
    var Right = function (value0) {
        return {
            ctor: "Data.Either.Right", 
            values: [ value0 ]
        };
    };
    var showEither = function (__dict_Show_18) {
        return function (__dict_Show_19) {
            return {
                "__superclasses": {}, 
                show: function (_84) {
                    if (_84.ctor === "Data.Either.Left") {
                        return "Left (" + Prelude.show(__dict_Show_18)(_84.values[0]) + ")";
                    };
                    if (_84.ctor === "Data.Either.Right") {
                        return "Right (" + Prelude.show(__dict_Show_19)(_84.values[0]) + ")";
                    };
                    throw "Failed pattern match";
                }
            };
        };
    };
    var functorEither = function (_) {
        return {
            "__superclasses": {}, 
            "<$>": function (_80) {
                return function (_81) {
                    if (_81.ctor === "Data.Either.Left") {
                        return Left(_81.values[0]);
                    };
                    if (_81.ctor === "Data.Either.Right") {
                        return Right(_80(_81.values[0]));
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var eqEither = function (__dict_Eq_22) {
        return function (__dict_Eq_23) {
            return {
                "__superclasses": {}, 
                "==": function (_85) {
                    return function (_86) {
                        if (_85.ctor === "Data.Either.Left") {
                            if (_86.ctor === "Data.Either.Left") {
                                return Prelude["=="](__dict_Eq_22)(_85.values[0])(_86.values[0]);
                            };
                        };
                        if (_85.ctor === "Data.Either.Right") {
                            if (_86.ctor === "Data.Either.Right") {
                                return Prelude["=="](__dict_Eq_23)(_85.values[0])(_86.values[0]);
                            };
                        };
                        return false;
                    };
                }, 
                "/=": function (a) {
                    return function (b) {
                        return !Prelude["=="](eqEither(__dict_Eq_22)(__dict_Eq_23))(a)(b);
                    };
                }
            };
        };
    };
    var ordEither = function (__dict_Ord_20) {
        return function (__dict_Ord_21) {
            return {
                "__superclasses": {
                    "Prelude.Eq_0": function (_) {
                        return eqEither(__dict_Ord_20["__superclasses"]["Prelude.Eq_0"]({}))(__dict_Ord_21["__superclasses"]["Prelude.Eq_0"]({}));
                    }
                }, 
                compare: function (_87) {
                    return function (_88) {
                        if (_87.ctor === "Data.Either.Left") {
                            if (_88.ctor === "Data.Either.Left") {
                                return Prelude.compare(__dict_Ord_20)(_87.values[0])(_88.values[0]);
                            };
                        };
                        if (_87.ctor === "Data.Either.Right") {
                            if (_88.ctor === "Data.Either.Right") {
                                return Prelude.compare(__dict_Ord_21)(_87.values[0])(_88.values[0]);
                            };
                        };
                        if (_87.ctor === "Data.Either.Left") {
                            return Prelude.LT;
                        };
                        if (_88.ctor === "Data.Either.Left") {
                            return Prelude.GT;
                        };
                        throw "Failed pattern match";
                    };
                }
            };
        };
    };
    var either = function (_77) {
        return function (_78) {
            return function (_79) {
                if (_79.ctor === "Data.Either.Left") {
                    return _77(_79.values[0]);
                };
                if (_79.ctor === "Data.Either.Right") {
                    return _78(_79.values[0]);
                };
                throw "Failed pattern match";
            };
        };
    };
    var isLeft = either(Prelude["const"](true))(Prelude["const"](false));
    var isRight = either(Prelude["const"](false))(Prelude["const"](true));
    var applyEither = function (_) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorEither({});
                }
            }, 
            "<*>": function (_82) {
                return function (_83) {
                    if (_82.ctor === "Data.Either.Left") {
                        return Left(_82.values[0]);
                    };
                    if (_82.ctor === "Data.Either.Right") {
                        return Prelude["<$>"](functorEither({}))(_82.values[0])(_83);
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var bindEither = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyEither({});
                }
            }, 
            ">>=": either(function (e) {
                return function (_) {
                    return Left(e);
                };
            })(function (a) {
                return function (f) {
                    return f(a);
                };
            })
        };
    };
    var applicativeEither = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyEither({});
                }
            }, 
            pure: Right
        };
    };
    var monadEither = function (_) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeEither({});
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindEither({});
                }
            }
        };
    };
    return {
        Left: Left, 
        Right: Right, 
        isRight: isRight, 
        isLeft: isLeft, 
        either: either, 
        functorEither: functorEither, 
        applyEither: applyEither, 
        applicativeEither: applicativeEither, 
        bindEither: bindEither, 
        monadEither: monadEither, 
        showEither: showEither, 
        eqEither: eqEither, 
        ordEither: ordEither
    };
})();
var PS = PS || {};
PS.Data_Array = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Prelude_Unsafe = PS.Prelude_Unsafe;
    function snoc(l) {  return function (e) {    var l1 = l.slice();    l1.push(e);     return l1;  };};
    function length (xs) {  return xs.length;};
    function findIndex (f) {  return function (arr) {    for (var i = 0, l = arr.length; i < l; i++) {      if (f(arr[i])) {        return i;      }    }    return -1;  };};
    function findLastIndex (f) {  return function (arr) {    for (var i = arr.length - 1; i >= 0; i--) {      if (f(arr[i])) {        return i;      }    }    return -1;  };};
    function append (l1) {  return function (l2) {    return l1.concat(l2);  };};
    function concat (xss) {  var result = [];  for (var i = 0, l = xss.length; i < l; i++) {    result.push.apply(result, xss[i]);  }  return result;};
    function reverse (l) {  return l.slice().reverse();};
    function drop (n) {  return function (l) {    return l.slice(n);  };};
    function slice (s) {  return function (e) {    return function (l) {      return l.slice(s, e);    };  };};
    function insertAt (index) {  return function (a) {    return function (l) {      var l1 = l.slice();      l1.splice(index, 0, a);      return l1;    };   };};
    function deleteAt (index) {  return function (n) {    return function (l) {      var l1 = l.slice();      l1.splice(index, n);      return l1;    };   };};
    function updateAt (index) {  return function (a) {    return function (l) {      var i = ~~index;      if (i < 0 || i >= l.length) return l;      var l1 = l.slice();      l1[i] = a;      return l1;    };   };};
    function concatMap (f) {  return function (arr) {    var result = [];    for (var i = 0, l = arr.length; i < l; i++) {      Array.prototype.push.apply(result, f(arr[i]));    }    return result;  };};
    function map (f) {  return function (arr) {    var l = arr.length;    var result = new Array(l);    for (var i = 0; i < l; i++) {      result[i] = f(arr[i]);    }    return result;  };};
    function filter (f) {  return function (arr) {    var n = 0;    var result = [];    for (var i = 0, l = arr.length; i < l; i++) {      if (f(arr[i])) {        result[n++] = arr[i];      }    }    return result;  };};
    function range (start) {  return function (end) {    var i = ~~start, e = ~~end;    var step = i > e ? -1 : 1;    var result = [i], n = 1;    while (i !== e) {      i += step;      result[n++] = i;    }    return result;  };};
    function zipWith (f) {  return function (xs) {    return function (ys) {      var l = xs.length < ys.length ? xs.length : ys.length;      var result = new Array(l);      for (var i = 0; i < l; i++) {        result[i] = f(xs[i])(ys[i]);      }      return result;    };  };};
    function sortJS (f) {  return function (l) {    return l.slice().sort(function (x, y) {      return f(x)(y);    });  };};
    var $bang$bang = function (xs) {
        return function (n) {
            var isInt = function (n) {
                return n !== ~~n;
            };
            return n < 0 || n >= length(xs) || isInt(n) ? Data_Maybe.Nothing : Data_Maybe.Just(xs[n]);
        };
    };
    var take = function (n) {
        return slice(0)(n);
    };
    var tail = function (_91) {
        if (_91.length > 0) {
            var _358 = _91.slice(1);
            return Data_Maybe.Just(_358);
        };
        return Data_Maybe.Nothing;
    };
    var span = (function () {
        var go = function (__copy__107) {
            return function (__copy__108) {
                return function (__copy__109) {
                    var _107 = __copy__107;
                    var _108 = __copy__108;
                    var _109 = __copy__109;
                    tco: while (true) {
                        var acc = _107;
                        if (_109.length > 0) {
                            var _363 = _109.slice(1);
                            if (_108(_109[0])) {
                                var __tco__107 = Prelude[":"](_109[0])(acc);
                                var __tco__108 = _108;
                                _107 = __tco__107;
                                _108 = __tco__108;
                                _109 = _363;
                                continue tco;
                            };
                        };
                        return {
                            init: reverse(_107), 
                            rest: _109
                        };
                    };
                };
            };
        };
        return go([  ]);
    })();
    var sortBy = function (comp) {
        return function (xs) {
            var comp$prime = function (x) {
                return function (y) {
                    return (function (_364) {
                        if (_364.ctor === "Prelude.GT") {
                            return 1;
                        };
                        if (_364.ctor === "Prelude.EQ") {
                            return 0;
                        };
                        if (_364.ctor === "Prelude.LT") {
                            return -1;
                        };
                        throw "Failed pattern match";
                    })(comp(x)(y));
                };
            };
            return sortJS(comp$prime)(xs);
        };
    };
    var sort = function (__dict_Ord_24) {
        return function (xs) {
            return sortBy(Prelude.compare(__dict_Ord_24))(xs);
        };
    };
    var singleton = function (a) {
        return [ a ];
    };
    var semigroupArray = function (_) {
        return {
            "__superclasses": {}, 
            "<>": append
        };
    };
    var $$null = function (_93) {
        if (_93.length === 0) {
            return true;
        };
        return false;
    };
    var nubBy = function (_100) {
        return function (_101) {
            if (_101.length === 0) {
                return [  ];
            };
            if (_101.length > 0) {
                var _369 = _101.slice(1);
                return Prelude[":"](_101[0])(nubBy(_100)(filter(function (y) {
                    return !_100(_101[0])(y);
                })(_369)));
            };
            throw "Failed pattern match";
        };
    };
    var nub = function (__dict_Eq_25) {
        return nubBy(Prelude["=="](__dict_Eq_25));
    };
    var mapMaybe = function (f) {
        return concatMap(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Maybe.maybe([  ])(singleton))(f));
    };
    var last = function (__copy__90) {
        var _90 = __copy__90;
        tco: while (true) {
            if (_90.length > 0) {
                var _372 = _90.slice(1);
                if (_372.length === 0) {
                    return Data_Maybe.Just(_90[0]);
                };
            };
            if (_90.length > 0) {
                var _374 = _90.slice(1);
                _90 = _374;
                continue tco;
            };
            return Data_Maybe.Nothing;
        };
    };
    var intersectBy = function (_97) {
        return function (_98) {
            return function (_99) {
                if (_98.length === 0) {
                    return [  ];
                };
                if (_99.length === 0) {
                    return [  ];
                };
                var el = function (x) {
                    return findIndex(_97(x))(_99) >= 0;
                };
                return filter(el)(_98);
            };
        };
    };
    var intersect = function (__dict_Eq_26) {
        return intersectBy(Prelude["=="](__dict_Eq_26));
    };
    var init = function (_92) {
        if (_92.length === 0) {
            return Data_Maybe.Nothing;
        };
        return Data_Maybe.Just(slice(0)(length(_92) - 1)(_92));
    };
    var head = function (_89) {
        if (_89.length > 0) {
            var _381 = _89.slice(1);
            return Data_Maybe.Just(_89[0]);
        };
        return Data_Maybe.Nothing;
    };
    var groupBy = (function () {
        var go = function (__copy__104) {
            return function (__copy__105) {
                return function (__copy__106) {
                    var _104 = __copy__104;
                    var _105 = __copy__105;
                    var _106 = __copy__106;
                    tco: while (true) {
                        var acc = _104;
                        if (_106.length === 0) {
                            return reverse(acc);
                        };
                        if (_106.length > 0) {
                            var _386 = _106.slice(1);
                            var sp = span(_105(_106[0]))(_386);
                            var __tco__104 = Prelude[":"](Prelude[":"](_106[0])(sp.init))(_104);
                            var __tco__105 = _105;
                            _104 = __tco__104;
                            _105 = __tco__105;
                            _106 = sp.rest;
                            continue tco;
                        };
                        throw "Failed pattern match";
                    };
                };
            };
        };
        return go([  ]);
    })();
    var group = function (__dict_Eq_27) {
        return function (xs) {
            return groupBy(Prelude["=="](__dict_Eq_27))(xs);
        };
    };
    var group$prime = function (__dict_Ord_28) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(group(__dict_Ord_28["__superclasses"]["Prelude.Eq_0"]({})))(sort(__dict_Ord_28));
    };
    var functorArray = function (_) {
        return {
            "__superclasses": {}, 
            "<$>": map
        };
    };
    var elemLastIndex = function (__dict_Eq_29) {
        return function (x) {
            return findLastIndex(Prelude["=="](__dict_Eq_29)(x));
        };
    };
    var elemIndex = function (__dict_Eq_30) {
        return function (x) {
            return findIndex(Prelude["=="](__dict_Eq_30)(x));
        };
    };
    var deleteBy = function (_94) {
        return function (_95) {
            return function (_96) {
                if (_96.length === 0) {
                    return [  ];
                };
                return (function (_390) {
                    if (_390 < 0) {
                        return _96;
                    };
                    return deleteAt(_390)(1)(_96);
                })(findIndex(_94(_95))(_96));
            };
        };
    };
    var $$delete = function (__dict_Eq_31) {
        return deleteBy(Prelude["=="](__dict_Eq_31));
    };
    var $bslash$bslash = function (__dict_Eq_32) {
        return function (xs) {
            return function (ys) {
                var go = function (__copy__102) {
                    return function (__copy__103) {
                        var _102 = __copy__102;
                        var _103 = __copy__103;
                        tco: while (true) {
                            var xs = _102;
                            if (_103.length === 0) {
                                return xs;
                            };
                            if (_102.length === 0) {
                                return [  ];
                            };
                            if (_103.length > 0) {
                                var _394 = _103.slice(1);
                                var __tco__102 = $$delete(__dict_Eq_32)(_103[0])(_102);
                                _102 = __tco__102;
                                _103 = _394;
                                continue tco;
                            };
                            throw "Failed pattern match";
                        };
                    };
                };
                return go(xs)(ys);
            };
        };
    };
    var catMaybes = concatMap(Data_Maybe.maybe([  ])(singleton));
    var applicativeArray = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyArray({});
                }
            }, 
            pure: singleton
        };
    };
    var applyArray = function (_) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorArray({});
                }
            }, 
            "<*>": Prelude.ap(monadArray({}))
        };
    };
    var monadArray = function (_) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeArray({});
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindArray({});
                }
            }
        };
    };
    var bindArray = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyArray({});
                }
            }, 
            ">>=": Prelude.flip(concatMap)
        };
    };
    var alternativeArray = function (_) {
        return {
            "__superclasses": {}, 
            empty: [  ], 
            "<|>": append
        };
    };
    return {
        span: span, 
        groupBy: groupBy, 
        "group'": group$prime, 
        group: group, 
        sortBy: sortBy, 
        sort: sort, 
        nubBy: nubBy, 
        nub: nub, 
        zipWith: zipWith, 
        range: range, 
        filter: filter, 
        concatMap: concatMap, 
        intersect: intersect, 
        intersectBy: intersectBy, 
        "\\\\": $bslash$bslash, 
        "delete": $$delete, 
        deleteBy: deleteBy, 
        updateAt: updateAt, 
        deleteAt: deleteAt, 
        insertAt: insertAt, 
        take: take, 
        drop: drop, 
        reverse: reverse, 
        concat: concat, 
        append: append, 
        elemLastIndex: elemLastIndex, 
        elemIndex: elemIndex, 
        findLastIndex: findLastIndex, 
        findIndex: findIndex, 
        length: length, 
        catMaybes: catMaybes, 
        mapMaybe: mapMaybe, 
        map: map, 
        "null": $$null, 
        init: init, 
        tail: tail, 
        last: last, 
        head: head, 
        singleton: singleton, 
        snoc: snoc, 
        "!!": $bang$bang, 
        functorArray: functorArray, 
        applyArray: applyArray, 
        applicativeArray: applicativeArray, 
        bindArray: bindArray, 
        monadArray: monadArray, 
        semigroupArray: semigroupArray, 
        alternativeArray: alternativeArray
    };
})();
var PS = PS || {};
PS.Data_Array_Unsafe = (function () {
    "use strict";
    var Prelude_Unsafe = PS.Prelude_Unsafe;
    var Prelude = PS.Prelude;
    var Data_Array = PS.Data_Array;
    var Data_Maybe_Unsafe = PS.Data_Maybe_Unsafe;
    var tail = function (_111) {
        if (_111.length > 0) {
            var _397 = _111.slice(1);
            return _397;
        };
        throw "Failed pattern match";
    };
    var last = function (xs) {
        return xs[Data_Array.length(xs) - 1];
    };
    var init = Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Maybe_Unsafe.fromJust)(Data_Array.init);
    var head = function (_110) {
        if (_110.length > 0) {
            var _400 = _110.slice(1);
            return _110[0];
        };
        throw "Failed pattern match";
    };
    return {
        init: init, 
        last: last, 
        tail: tail, 
        head: head
    };
})();
var PS = PS || {};
PS.Data_Monoid = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Array = PS.Data_Array;
    var monoidUnit = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return Prelude.semigroupUnit({});
                }
            }, 
            mempty: Prelude.unit
        };
    };
    var monoidString = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return Prelude.semigroupString({});
                }
            }, 
            mempty: ""
        };
    };
    var monoidArray = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return Data_Array.semigroupArray({});
                }
            }, 
            mempty: [  ]
        };
    };
    var mempty = function (dict) {
        return dict.mempty;
    };
    return {
        mempty: mempty, 
        monoidString: monoidString, 
        monoidArray: monoidArray, 
        monoidUnit: monoidUnit
    };
})();
var PS = PS || {};
PS.Data_Monoid_All = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var All = function (value0) {
        return {
            ctor: "Data.Monoid.All.All", 
            values: [ value0 ]
        };
    };
    var showAll = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_117) {
                return "All (" + Prelude.show(Prelude.showBoolean({}))(_117.values[0]) + ")";
            }
        };
    };
    var semigroupAll = function (_) {
        return {
            "__superclasses": {}, 
            "<>": function (_118) {
                return function (_119) {
                    return All(_118.values[0] && _119.values[0]);
                };
            }
        };
    };
    var runAll = function (_112) {
        return _112.values[0];
    };
    var monoidAll = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return semigroupAll({});
                }
            }, 
            mempty: All(true)
        };
    };
    var eqAll = function (_) {
        return {
            "__superclasses": {}, 
            "==": function (_113) {
                return function (_114) {
                    return _113.values[0] === _114.values[0];
                };
            }, 
            "/=": function (_115) {
                return function (_116) {
                    return _115.values[0] !== _116.values[0];
                };
            }
        };
    };
    return {
        All: All, 
        runAll: runAll, 
        eqAll: eqAll, 
        showAll: showAll, 
        semigroupAll: semigroupAll, 
        monoidAll: monoidAll
    };
})();
var PS = PS || {};
PS.Data_Monoid_Any = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Any = function (value0) {
        return {
            ctor: "Data.Monoid.Any.Any", 
            values: [ value0 ]
        };
    };
    var showAny = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_125) {
                return "Any (" + Prelude.show(Prelude.showBoolean({}))(_125.values[0]) + ")";
            }
        };
    };
    var semigroupAny = function (_) {
        return {
            "__superclasses": {}, 
            "<>": function (_126) {
                return function (_127) {
                    return Any(_126.values[0] || _127.values[0]);
                };
            }
        };
    };
    var runAny = function (_120) {
        return _120.values[0];
    };
    var monoidAny = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return semigroupAny({});
                }
            }, 
            mempty: Any(false)
        };
    };
    var eqAny = function (_) {
        return {
            "__superclasses": {}, 
            "==": function (_121) {
                return function (_122) {
                    return _121.values[0] === _122.values[0];
                };
            }, 
            "/=": function (_123) {
                return function (_124) {
                    return _123.values[0] !== _124.values[0];
                };
            }
        };
    };
    return {
        Any: Any, 
        runAny: runAny, 
        eqAny: eqAny, 
        showAny: showAny, 
        semigroupAny: semigroupAny, 
        monoidAny: monoidAny
    };
})();
var PS = PS || {};
PS.Data_Monoid_Dual = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    var Dual = function (value0) {
        return {
            ctor: "Data.Monoid.Dual.Dual", 
            values: [ value0 ]
        };
    };
    var showDual = function (__dict_Show_33) {
        return {
            "__superclasses": {}, 
            show: function (_135) {
                return "Dual (" + Prelude.show(__dict_Show_33)(_135.values[0]) + ")";
            }
        };
    };
    var semigroupDual = function (__dict_Semigroup_34) {
        return {
            "__superclasses": {}, 
            "<>": function (_136) {
                return function (_137) {
                    return Dual(Prelude["<>"](__dict_Semigroup_34)(_137.values[0])(_136.values[0]));
                };
            }
        };
    };
    var runDual = function (_128) {
        return _128.values[0];
    };
    var monoidDual = function (__dict_Monoid_36) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return semigroupDual(__dict_Monoid_36["__superclasses"]["Prelude.Semigroup_0"]({}));
                }
            }, 
            mempty: Dual(Data_Monoid.mempty(__dict_Monoid_36))
        };
    };
    var eqDual = function (__dict_Eq_37) {
        return {
            "__superclasses": {}, 
            "==": function (_129) {
                return function (_130) {
                    return Prelude["=="](__dict_Eq_37)(_129.values[0])(_130.values[0]);
                };
            }, 
            "/=": function (_131) {
                return function (_132) {
                    return Prelude["/="](__dict_Eq_37)(_131.values[0])(_132.values[0]);
                };
            }
        };
    };
    var ordDual = function (__dict_Ord_35) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqDual(__dict_Ord_35["__superclasses"]["Prelude.Eq_0"]({}));
                }
            }, 
            compare: function (_133) {
                return function (_134) {
                    return Prelude.compare(__dict_Ord_35)(_133.values[0])(_134.values[0]);
                };
            }
        };
    };
    return {
        Dual: Dual, 
        runDual: runDual, 
        eqDual: eqDual, 
        ordDual: ordDual, 
        showDual: showDual, 
        semigroupDual: semigroupDual, 
        monoidDual: monoidDual
    };
})();
var PS = PS || {};
PS.Data_Monoid_Endo = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Endo = function (value0) {
        return {
            ctor: "Data.Monoid.Endo.Endo", 
            values: [ value0 ]
        };
    };
    var semigroupEndo = function (_) {
        return {
            "__superclasses": {}, 
            "<>": function (_139) {
                return function (_140) {
                    return Endo(Prelude["<<<"](Prelude.semigroupoidArr({}))(_139.values[0])(_140.values[0]));
                };
            }
        };
    };
    var runEndo = function (_138) {
        return _138.values[0];
    };
    var monoidEndo = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return semigroupEndo({});
                }
            }, 
            mempty: Endo(Prelude.id(Prelude.categoryArr({})))
        };
    };
    return {
        Endo: Endo, 
        runEndo: runEndo, 
        semigroupEndo: semigroupEndo, 
        monoidEndo: monoidEndo
    };
})();
var PS = PS || {};
PS.Data_Monoid_First = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var First = function (value0) {
        return {
            ctor: "Data.Monoid.First.First", 
            values: [ value0 ]
        };
    };
    var showFirst = function (__dict_Show_38) {
        return {
            "__superclasses": {}, 
            show: function (_148) {
                return "First (" + Prelude.show(Data_Maybe.showMaybe(__dict_Show_38))(_148.values[0]) + ")";
            }
        };
    };
    var semigroupFirst = function (_) {
        return {
            "__superclasses": {}, 
            "<>": function (_149) {
                return function (_150) {
                    if ((_149.values[0]).ctor === "Data.Maybe.Just") {
                        return _149;
                    };
                    return _150;
                };
            }
        };
    };
    var runFirst = function (_141) {
        return _141.values[0];
    };
    var monoidFirst = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return semigroupFirst({});
                }
            }, 
            mempty: First(Data_Maybe.Nothing)
        };
    };
    var eqFirst = function (__dict_Eq_40) {
        return {
            "__superclasses": {}, 
            "==": function (_142) {
                return function (_143) {
                    return Prelude["=="](Data_Maybe.eqMaybe(__dict_Eq_40))(_142.values[0])(_143.values[0]);
                };
            }, 
            "/=": function (_144) {
                return function (_145) {
                    return Prelude["/="](Data_Maybe.eqMaybe(__dict_Eq_40))(_144.values[0])(_145.values[0]);
                };
            }
        };
    };
    var ordFirst = function (__dict_Ord_39) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqFirst(__dict_Ord_39["__superclasses"]["Prelude.Eq_0"]({}));
                }
            }, 
            compare: function (_146) {
                return function (_147) {
                    return Prelude.compare(Data_Maybe.ordMaybe(__dict_Ord_39))(_146.values[0])(_147.values[0]);
                };
            }
        };
    };
    return {
        First: First, 
        runFirst: runFirst, 
        eqFirst: eqFirst, 
        ordFirst: ordFirst, 
        showFirst: showFirst, 
        semigroupFirst: semigroupFirst, 
        monoidFirst: monoidFirst
    };
})();
var PS = PS || {};
PS.Data_Monoid_Last = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Last = function (value0) {
        return {
            ctor: "Data.Monoid.Last.Last", 
            values: [ value0 ]
        };
    };
    var showLast = function (__dict_Show_41) {
        return {
            "__superclasses": {}, 
            show: function (_158) {
                return "Last (" + Prelude.show(Data_Maybe.showMaybe(__dict_Show_41))(_158.values[0]) + ")";
            }
        };
    };
    var semigroupLast = function (_) {
        return {
            "__superclasses": {}, 
            "<>": function (_159) {
                return function (_160) {
                    if ((_160.values[0]).ctor === "Data.Maybe.Just") {
                        return _160;
                    };
                    if ((_160.values[0]).ctor === "Data.Maybe.Nothing") {
                        return _159;
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var runLast = function (_151) {
        return _151.values[0];
    };
    var monoidLast = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return semigroupLast({});
                }
            }, 
            mempty: Last(Data_Maybe.Nothing)
        };
    };
    var eqLast = function (__dict_Eq_43) {
        return {
            "__superclasses": {}, 
            "==": function (_152) {
                return function (_153) {
                    return Prelude["=="](Data_Maybe.eqMaybe(__dict_Eq_43))(_152.values[0])(_153.values[0]);
                };
            }, 
            "/=": function (_154) {
                return function (_155) {
                    return Prelude["/="](Data_Maybe.eqMaybe(__dict_Eq_43))(_154.values[0])(_155.values[0]);
                };
            }
        };
    };
    var ordLast = function (__dict_Ord_42) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqLast(__dict_Ord_42["__superclasses"]["Prelude.Eq_0"]({}));
                }
            }, 
            compare: function (_156) {
                return function (_157) {
                    return Prelude.compare(Data_Maybe.ordMaybe(__dict_Ord_42))(_156.values[0])(_157.values[0]);
                };
            }
        };
    };
    return {
        Last: Last, 
        runLast: runLast, 
        eqLast: eqLast, 
        ordLast: ordLast, 
        showLast: showLast, 
        semigroupLast: semigroupLast, 
        monoidLast: monoidLast
    };
})();
var PS = PS || {};
PS.Data_Monoid_Product = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Product = function (value0) {
        return {
            ctor: "Data.Monoid.Product.Product", 
            values: [ value0 ]
        };
    };
    var showProduct = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_168) {
                return "Product (" + Prelude.show(Prelude.showNumber({}))(_168.values[0]) + ")";
            }
        };
    };
    var semigroupProduct = function (_) {
        return {
            "__superclasses": {}, 
            "<>": function (_169) {
                return function (_170) {
                    return Product(_169.values[0] * _170.values[0]);
                };
            }
        };
    };
    var runProduct = function (_161) {
        return _161.values[0];
    };
    var monoidProduct = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return semigroupProduct({});
                }
            }, 
            mempty: Product(1)
        };
    };
    var eqProduct = function (_) {
        return {
            "__superclasses": {}, 
            "==": function (_162) {
                return function (_163) {
                    return _162.values[0] === _163.values[0];
                };
            }, 
            "/=": function (_164) {
                return function (_165) {
                    return _164.values[0] !== _165.values[0];
                };
            }
        };
    };
    var ordProduct = function (_) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqProduct({});
                }
            }, 
            compare: function (_166) {
                return function (_167) {
                    return Prelude.compare(Prelude.ordNumber({}))(_166.values[0])(_167.values[0]);
                };
            }
        };
    };
    return {
        Product: Product, 
        runProduct: runProduct, 
        eqProduct: eqProduct, 
        ordProduct: ordProduct, 
        showProduct: showProduct, 
        semigroupProduct: semigroupProduct, 
        monoidProduct: monoidProduct
    };
})();
var PS = PS || {};
PS.Data_Monoid_Sum = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Sum = function (value0) {
        return {
            ctor: "Data.Monoid.Sum.Sum", 
            values: [ value0 ]
        };
    };
    var showSum = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_178) {
                return "Sum (" + Prelude.show(Prelude.showNumber({}))(_178.values[0]) + ")";
            }
        };
    };
    var semigroupSum = function (_) {
        return {
            "__superclasses": {}, 
            "<>": function (_179) {
                return function (_180) {
                    return Sum(_179.values[0] + _180.values[0]);
                };
            }
        };
    };
    var runSum = function (_171) {
        return _171.values[0];
    };
    var monoidSum = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return semigroupSum({});
                }
            }, 
            mempty: Sum(0)
        };
    };
    var eqSum = function (_) {
        return {
            "__superclasses": {}, 
            "==": function (_172) {
                return function (_173) {
                    return _172.values[0] === _173.values[0];
                };
            }, 
            "/=": function (_174) {
                return function (_175) {
                    return _174.values[0] !== _175.values[0];
                };
            }
        };
    };
    var ordSum = function (_) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqSum({});
                }
            }, 
            compare: function (_176) {
                return function (_177) {
                    return Prelude.compare(Prelude.ordNumber({}))(_176.values[0])(_177.values[0]);
                };
            }
        };
    };
    return {
        Sum: Sum, 
        runSum: runSum, 
        eqSum: eqSum, 
        ordSum: ordSum, 
        showSum: showSum, 
        semigroupSum: semigroupSum, 
        monoidSum: monoidSum
    };
})();
var PS = PS || {};
PS.Data_Tuple = (function () {
    "use strict";
    var Data_Array = PS.Data_Array;
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    var Tuple = function (value0) {
        return function (value1) {
            return {
                ctor: "Data.Tuple.Tuple", 
                values: [ value0, value1 ]
            };
        };
    };
    var zip = Data_Array.zipWith(Tuple);
    var unzip = function (_185) {
        if (_185.length > 0) {
            var _545 = _185.slice(1);
            return (function (_541) {
                return Tuple(Prelude[":"]((_185[0]).values[0])(_541.values[0]))(Prelude[":"]((_185[0]).values[1])(_541.values[1]));
            })(unzip(_545));
        };
        if (_185.length === 0) {
            return Tuple([  ])([  ]);
        };
        throw "Failed pattern match";
    };
    var uncurry = function (_183) {
        return function (_184) {
            return _183(_184.values[0])(_184.values[1]);
        };
    };
    var swap = function (_186) {
        return Tuple(_186.values[1])(_186.values[0]);
    };
    var snd = function (_182) {
        return _182.values[1];
    };
    var showTuple = function (__dict_Show_44) {
        return function (__dict_Show_45) {
            return {
                "__superclasses": {}, 
                show: function (_187) {
                    return "Tuple (" + Prelude.show(__dict_Show_44)(_187.values[0]) + ") (" + Prelude.show(__dict_Show_45)(_187.values[1]) + ")";
                }
            };
        };
    };
    var functorTuple = function (_) {
        return {
            "__superclasses": {}, 
            "<$>": function (_192) {
                return function (_193) {
                    return Tuple(_193.values[0])(_192(_193.values[1]));
                };
            }
        };
    };
    var fst = function (_181) {
        return _181.values[0];
    };
    var eqTuple = function (__dict_Eq_49) {
        return function (__dict_Eq_50) {
            return {
                "__superclasses": {}, 
                "==": function (_188) {
                    return function (_189) {
                        return Prelude["=="](__dict_Eq_49)(_188.values[0])(_189.values[0]) && Prelude["=="](__dict_Eq_50)(_188.values[1])(_189.values[1]);
                    };
                }, 
                "/=": function (t1) {
                    return function (t2) {
                        return !Prelude["=="](eqTuple(__dict_Eq_49)(__dict_Eq_50))(t1)(t2);
                    };
                }
            };
        };
    };
    var ordTuple = function (__dict_Ord_46) {
        return function (__dict_Ord_47) {
            return {
                "__superclasses": {
                    "Prelude.Eq_0": function (_) {
                        return eqTuple(__dict_Ord_46["__superclasses"]["Prelude.Eq_0"]({}))(__dict_Ord_47["__superclasses"]["Prelude.Eq_0"]({}));
                    }
                }, 
                compare: function (_190) {
                    return function (_191) {
                        return (function (_576) {
                            if (_576.ctor === "Prelude.EQ") {
                                return Prelude.compare(__dict_Ord_47)(_190.values[1])(_191.values[1]);
                            };
                            return _576;
                        })(Prelude.compare(__dict_Ord_46)(_190.values[0])(_191.values[0]));
                    };
                }
            };
        };
    };
    var curry = function (f) {
        return function (a) {
            return function (b) {
                return f(Tuple(a)(b));
            };
        };
    };
    var applyTuple = function (__dict_Semigroup_52) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorTuple({});
                }
            }, 
            "<*>": function (_194) {
                return function (_195) {
                    return Tuple(Prelude["<>"](__dict_Semigroup_52)(_194.values[0])(_195.values[0]))(_194.values[1](_195.values[1]));
                };
            }
        };
    };
    var bindTuple = function (__dict_Semigroup_51) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyTuple(__dict_Semigroup_51);
                }
            }, 
            ">>=": function (_196) {
                return function (_197) {
                    return (function (_589) {
                        return Tuple(Prelude["<>"](__dict_Semigroup_51)(_196.values[0])(_589.values[0]))(_589.values[1]);
                    })(_197(_196.values[1]));
                };
            }
        };
    };
    var applicativeTuple = function (__dict_Monoid_53) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyTuple(__dict_Monoid_53["__superclasses"]["Prelude.Semigroup_0"]({}));
                }
            }, 
            pure: Tuple(Data_Monoid.mempty(__dict_Monoid_53))
        };
    };
    var monadTuple = function (__dict_Monoid_48) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeTuple(__dict_Monoid_48);
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindTuple(__dict_Monoid_48["__superclasses"]["Prelude.Semigroup_0"]({}));
                }
            }
        };
    };
    return {
        Tuple: Tuple, 
        swap: swap, 
        unzip: unzip, 
        zip: zip, 
        uncurry: uncurry, 
        curry: curry, 
        snd: snd, 
        fst: fst, 
        showTuple: showTuple, 
        eqTuple: eqTuple, 
        ordTuple: ordTuple, 
        functorTuple: functorTuple, 
        applyTuple: applyTuple, 
        applicativeTuple: applicativeTuple, 
        bindTuple: bindTuple, 
        monadTuple: monadTuple
    };
})();
var PS = PS || {};
PS.Control_Monad_Trans = (function () {
    "use strict";
    var lift = function (dict) {
        return dict.lift;
    };
    return {
        lift: lift
    };
})();
var PS = PS || {};
PS.Control_Monad_Writer_Trans = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Monoid = PS.Data_Monoid;
    var WriterT = function (value0) {
        return {
            ctor: "Control.Monad.Writer.Trans.WriterT", 
            values: [ value0 ]
        };
    };
    var runWriterT = function (_199) {
        return _199.values[0];
    };
    var monadTransWriterT = function (__dict_Monoid_56) {
        return {
            "__superclasses": {}, 
            lift: function (__dict_Monad_57) {
                return function (m) {
                    return WriterT(Prelude[">>="](__dict_Monad_57["__superclasses"]["Prelude.Bind_1"]({}))(m)(function (_5) {
                        return Prelude["return"](__dict_Monad_57)(Data_Tuple.Tuple(_5)(Data_Monoid.mempty(__dict_Monoid_56)));
                    }));
                };
            }
        };
    };
    var mapWriterT = function (f) {
        return function (m) {
            return WriterT(f(runWriterT(m)));
        };
    };
    var liftCatchWriter = function ($$catch) {
        return function (m) {
            return function (h) {
                return WriterT($$catch(runWriterT(m))(function (e) {
                    return runWriterT(h(e));
                }));
            };
        };
    };
    var liftCallCCWriter = function (__dict_Monoid_58) {
        return function (callCC) {
            return function (f) {
                return WriterT(callCC(function (c) {
                    return runWriterT(f(function (a) {
                        return WriterT(c(Data_Tuple.Tuple(a)(Data_Monoid.mempty(__dict_Monoid_58))));
                    }));
                }));
            };
        };
    };
    var functorWriterT = function (__dict_Functor_59) {
        return {
            "__superclasses": {}, 
            "<$>": function (f) {
                return mapWriterT(Prelude["<$>"](__dict_Functor_59)(function (_198) {
                    return Data_Tuple.Tuple(f(_198.values[0]))(_198.values[1]);
                }));
            }
        };
    };
    var applyWriterT = function (__dict_Monoid_62) {
        return function (__dict_Functor_63) {
            return function (__dict_Applicative_64) {
                return {
                    "__superclasses": {
                        "Prelude.Functor_0": function (_) {
                            return functorWriterT(__dict_Functor_63);
                        }
                    }, 
                    "<*>": function (f) {
                        return function (v) {
                            return WriterT((function () {
                                var k = function (_200) {
                                    return function (_201) {
                                        return Data_Tuple.Tuple(_200.values[0](_201.values[0]))(Prelude["<>"](__dict_Monoid_62["__superclasses"]["Prelude.Semigroup_0"]({}))(_200.values[1])(_201.values[1]));
                                    };
                                };
                                return Prelude["<*>"](__dict_Applicative_64["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<$>"](__dict_Functor_63)(k)(runWriterT(f)))(runWriterT(v));
                            })());
                        };
                    }
                };
            };
        };
    };
    var bindWriterT = function (__dict_Monoid_60) {
        return function (__dict_Monad_61) {
            return {
                "__superclasses": {
                    "Prelude.Apply_0": function (_) {
                        return applyWriterT(__dict_Monoid_60)(((__dict_Monad_61["__superclasses"]["Prelude.Applicative_0"]({}))["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}))(__dict_Monad_61["__superclasses"]["Prelude.Applicative_0"]({}));
                    }
                }, 
                ">>=": function (m) {
                    return function (k) {
                        return WriterT(Prelude[">>="](__dict_Monad_61["__superclasses"]["Prelude.Bind_1"]({}))(runWriterT(m))(function (_4) {
                            return Prelude[">>="](__dict_Monad_61["__superclasses"]["Prelude.Bind_1"]({}))(runWriterT(k(_4.values[0])))(function (_3) {
                                return Prelude["return"](__dict_Monad_61)(Data_Tuple.Tuple(_3.values[0])(Prelude["<>"](__dict_Monoid_60["__superclasses"]["Prelude.Semigroup_0"]({}))(_4.values[1])(_3.values[1])));
                            });
                        }));
                    };
                }
            };
        };
    };
    var applicativeWriterT = function (__dict_Monoid_65) {
        return function (__dict_Functor_66) {
            return function (__dict_Applicative_67) {
                return {
                    "__superclasses": {
                        "Prelude.Apply_0": function (_) {
                            return applyWriterT(__dict_Monoid_65)(__dict_Functor_66)(__dict_Applicative_67);
                        }
                    }, 
                    pure: function (a) {
                        return WriterT(Prelude.pure(__dict_Applicative_67)(Data_Tuple.Tuple(a)(Data_Monoid.mempty(__dict_Monoid_65))));
                    }
                };
            };
        };
    };
    var monadWriterT = function (__dict_Monoid_54) {
        return function (__dict_Monad_55) {
            return {
                "__superclasses": {
                    "Prelude.Applicative_0": function (_) {
                        return applicativeWriterT(__dict_Monoid_54)(((__dict_Monad_55["__superclasses"]["Prelude.Applicative_0"]({}))["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}))(__dict_Monad_55["__superclasses"]["Prelude.Applicative_0"]({}));
                    }, 
                    "Prelude.Bind_1": function (_) {
                        return bindWriterT(__dict_Monoid_54)(__dict_Monad_55);
                    }
                }
            };
        };
    };
    var alternativeWriterT = function (__dict_Monoid_68) {
        return function (__dict_Alternative_69) {
            return {
                "__superclasses": {}, 
                empty: WriterT(Prelude.empty(__dict_Alternative_69)), 
                "<|>": function (m) {
                    return function (n) {
                        return WriterT(Prelude["<|>"](__dict_Alternative_69)(runWriterT(m))(runWriterT(n)));
                    };
                }
            };
        };
    };
    return {
        WriterT: WriterT, 
        liftCallCCWriter: liftCallCCWriter, 
        liftCatchWriter: liftCatchWriter, 
        mapWriterT: mapWriterT, 
        runWriterT: runWriterT, 
        functorWriterT: functorWriterT, 
        applyWriterT: applyWriterT, 
        applicativeWriterT: applicativeWriterT, 
        alternativeWriterT: alternativeWriterT, 
        bindWriterT: bindWriterT, 
        monadWriterT: monadWriterT, 
        monadTransWriterT: monadTransWriterT
    };
})();
var PS = PS || {};
PS.Control_Monad_State_Trans = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    var StateT = function (value0) {
        return {
            ctor: "Control.Monad.State.Trans.StateT", 
            values: [ value0 ]
        };
    };
    var runStateT = function (_204) {
        return _204.values[0];
    };
    var withStateT = function (f) {
        return function (s) {
            return StateT(Prelude["<<<"](Prelude.semigroupoidArr({}))(runStateT(s))(f));
        };
    };
    var monadTransStateT = function (_) {
        return {
            "__superclasses": {}, 
            lift: function (__dict_Monad_70) {
                return function (m) {
                    return StateT(function (s) {
                        return Prelude[">>="](__dict_Monad_70["__superclasses"]["Prelude.Bind_1"]({}))(m)(function (_7) {
                            return Prelude["return"](__dict_Monad_70)(Data_Tuple.Tuple(_7)(s));
                        });
                    });
                };
            }
        };
    };
    var mapStateT = function (f) {
        return function (m) {
            return StateT(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(runStateT(m)));
        };
    };
    var liftPassState = function (__dict_Monad_72) {
        return function (pass) {
            return function (m) {
                return StateT(function (s) {
                    return pass(Prelude[">>="](__dict_Monad_72["__superclasses"]["Prelude.Bind_1"]({}))(runStateT(m)(s))(function (_9) {
                        return Prelude["return"](__dict_Monad_72)(Data_Tuple.Tuple(Data_Tuple.Tuple((_9.values[0]).values[0])(_9.values[1]))((_9.values[0]).values[1]));
                    }));
                });
            };
        };
    };
    var liftListenState = function (__dict_Monad_73) {
        return function (listen) {
            return function (m) {
                return StateT(function (s) {
                    return Prelude[">>="](__dict_Monad_73["__superclasses"]["Prelude.Bind_1"]({}))(listen(runStateT(m)(s)))(function (_8) {
                        return Prelude["return"](__dict_Monad_73)(Data_Tuple.Tuple(Data_Tuple.Tuple((_8.values[0]).values[0])(_8.values[1]))((_8.values[0]).values[1]));
                    });
                });
            };
        };
    };
    var liftCatchState = function ($$catch) {
        return function (m) {
            return function (h) {
                return StateT(function (s) {
                    return $$catch(runStateT(m)(s))(function (e) {
                        return runStateT(h(e))(s);
                    });
                });
            };
        };
    };
    var liftCallCCState$prime = function (callCC) {
        return function (f) {
            return StateT(function (s) {
                return callCC(function (c) {
                    return runStateT(f(function (a) {
                        return StateT(function (s$prime) {
                            return c(Data_Tuple.Tuple(a)(s$prime));
                        });
                    }))(s);
                });
            });
        };
    };
    var liftCallCCState = function (callCC) {
        return function (f) {
            return StateT(function (s) {
                return callCC(function (c) {
                    return runStateT(f(function (a) {
                        return StateT(function (_) {
                            return c(Data_Tuple.Tuple(a)(s));
                        });
                    }))(s);
                });
            });
        };
    };
    var execStateT = function (__dict_Monad_75) {
        return function (m) {
            return function (s) {
                return Prelude[">>="](__dict_Monad_75["__superclasses"]["Prelude.Bind_1"]({}))(runStateT(m)(s))(function (_203) {
                    return Prelude["return"](__dict_Monad_75)(_203.values[1]);
                });
            };
        };
    };
    var evalStateT = function (__dict_Monad_76) {
        return function (m) {
            return function (s) {
                return Prelude[">>="](__dict_Monad_76["__superclasses"]["Prelude.Bind_1"]({}))(runStateT(m)(s))(function (_202) {
                    return Prelude["return"](__dict_Monad_76)(_202.values[0]);
                });
            };
        };
    };
    var applicativeStateT = function (__dict_Monad_79) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyStateT(__dict_Monad_79);
                }
            }, 
            pure: function (a) {
                return StateT(function (s) {
                    return Prelude["return"](__dict_Monad_79)(Data_Tuple.Tuple(a)(s));
                });
            }
        };
    };
    var applyStateT = function (__dict_Monad_78) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorStateT(__dict_Monad_78);
                }
            }, 
            "<*>": Prelude.ap(monadStateT(__dict_Monad_78))
        };
    };
    var functorStateT = function (__dict_Monad_74) {
        return {
            "__superclasses": {}, 
            "<$>": Prelude.liftM1(monadStateT(__dict_Monad_74))
        };
    };
    var monadStateT = function (__dict_Monad_71) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeStateT(__dict_Monad_71);
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindStateT(__dict_Monad_71);
                }
            }
        };
    };
    var bindStateT = function (__dict_Monad_77) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyStateT(__dict_Monad_77);
                }
            }, 
            ">>=": function (_205) {
                return function (_206) {
                    return StateT(function (s) {
                        return Prelude[">>="](__dict_Monad_77["__superclasses"]["Prelude.Bind_1"]({}))(_205.values[0](s))(function (_6) {
                            return runStateT(_206(_6.values[0]))(_6.values[1]);
                        });
                    });
                };
            }
        };
    };
    var alternativeStateT = function (__dict_Alternative_80) {
        return {
            "__superclasses": {}, 
            empty: StateT(function (_) {
                return Prelude.empty(__dict_Alternative_80);
            }), 
            "<|>": function (x) {
                return function (y) {
                    return StateT(function (s) {
                        return Prelude["<|>"](__dict_Alternative_80)(runStateT(x)(s))(runStateT(y)(s));
                    });
                };
            }
        };
    };
    return {
        StateT: StateT, 
        "liftCallCCState'": liftCallCCState$prime, 
        liftCallCCState: liftCallCCState, 
        liftPassState: liftPassState, 
        liftListenState: liftListenState, 
        liftCatchState: liftCatchState, 
        withStateT: withStateT, 
        mapStateT: mapStateT, 
        execStateT: execStateT, 
        evalStateT: evalStateT, 
        runStateT: runStateT, 
        functorStateT: functorStateT, 
        applyStateT: applyStateT, 
        applicativeStateT: applicativeStateT, 
        alternativeStateT: alternativeStateT, 
        bindStateT: bindStateT, 
        monadStateT: monadStateT, 
        monadTransStateT: monadTransStateT
    };
})();
var PS = PS || {};
PS.Control_Monad_Reader_Trans = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var ReaderT = function (value0) {
        return {
            ctor: "Control.Monad.Reader.Trans.ReaderT", 
            values: [ value0 ]
        };
    };
    var runReaderT = function (_207) {
        return _207.values[0];
    };
    var withReaderT = function (f) {
        return function (m) {
            return ReaderT(Prelude["<<<"](Prelude.semigroupoidArr({}))(runReaderT(m))(f));
        };
    };
    var mapReaderT = function (f) {
        return function (m) {
            return ReaderT(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(runReaderT(m)));
        };
    };
    var liftReaderT = function (m) {
        return ReaderT(Prelude["const"](m));
    };
    var monadTransReaderT = function (_) {
        return {
            "__superclasses": {}, 
            lift: function (__dict_Monad_82) {
                return liftReaderT;
            }
        };
    };
    var liftCatchReader = function ($$catch) {
        return function (m) {
            return function (h) {
                return ReaderT(function (r) {
                    return $$catch(runReaderT(m)(r))(function (e) {
                        return runReaderT(h(e))(r);
                    });
                });
            };
        };
    };
    var liftCallCCReader = function (callCC) {
        return function (f) {
            return ReaderT(function (r) {
                return callCC(function (c) {
                    return runReaderT(f(function (a) {
                        return ReaderT(Prelude["const"](c(a)));
                    }))(r);
                });
            });
        };
    };
    var functorReaderT = function (__dict_Functor_83) {
        return {
            "__superclasses": {}, 
            "<$>": function (f) {
                return mapReaderT(Prelude["<$>"](__dict_Functor_83)(f));
            }
        };
    };
    var applyReaderT = function (__dict_Applicative_85) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorReaderT((__dict_Applicative_85["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}));
                }
            }, 
            "<*>": function (f) {
                return function (v) {
                    return ReaderT(function (r) {
                        return Prelude["<*>"](__dict_Applicative_85["__superclasses"]["Prelude.Apply_0"]({}))(runReaderT(f)(r))(runReaderT(v)(r));
                    });
                };
            }
        };
    };
    var bindReaderT = function (__dict_Monad_84) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyReaderT(__dict_Monad_84["__superclasses"]["Prelude.Applicative_0"]({}));
                }
            }, 
            ">>=": function (m) {
                return function (k) {
                    return ReaderT(function (r) {
                        return Prelude[">>="](__dict_Monad_84["__superclasses"]["Prelude.Bind_1"]({}))(runReaderT(m)(r))(function (_10) {
                            return runReaderT(k(_10))(r);
                        });
                    });
                };
            }
        };
    };
    var applicativeReaderT = function (__dict_Applicative_86) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyReaderT(__dict_Applicative_86);
                }
            }, 
            pure: Prelude["<<<"](Prelude.semigroupoidArr({}))(liftReaderT)(Prelude.pure(__dict_Applicative_86))
        };
    };
    var monadReaderT = function (__dict_Monad_81) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeReaderT(__dict_Monad_81["__superclasses"]["Prelude.Applicative_0"]({}));
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindReaderT(__dict_Monad_81);
                }
            }
        };
    };
    var alternativeReaderT = function (__dict_Alternative_87) {
        return {
            "__superclasses": {}, 
            empty: liftReaderT(Prelude.empty(__dict_Alternative_87)), 
            "<|>": function (m) {
                return function (n) {
                    return ReaderT(function (r) {
                        return Prelude["<|>"](__dict_Alternative_87)(runReaderT(m)(r))(runReaderT(n)(r));
                    });
                };
            }
        };
    };
    return {
        ReaderT: ReaderT, 
        liftCallCCReader: liftCallCCReader, 
        liftCatchReader: liftCatchReader, 
        liftReaderT: liftReaderT, 
        mapReaderT: mapReaderT, 
        withReaderT: withReaderT, 
        runReaderT: runReaderT, 
        functorReaderT: functorReaderT, 
        applyReaderT: applyReaderT, 
        applicativeReaderT: applicativeReaderT, 
        alternativeReaderT: alternativeReaderT, 
        bindReaderT: bindReaderT, 
        monadReaderT: monadReaderT, 
        monadTransReaderT: monadTransReaderT
    };
})();
var PS = PS || {};
PS.Control_Monad_RWS_Trans = (function () {
    "use strict";
    var Data_Tuple = PS.Data_Tuple;
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    var RWST = function (value0) {
        return {
            ctor: "Control.Monad.RWS.Trans.RWST", 
            values: [ value0 ]
        };
    };
    var runRWST = function (_210) {
        return _210.values[0];
    };
    var withRWST = function (f) {
        return function (m) {
            return RWST(function (r) {
                return function (s) {
                    return Data_Tuple.uncurry(runRWST(m))(f(r)(s));
                };
            });
        };
    };
    var monadTransRWST = function (__dict_Monoid_88) {
        return {
            "__superclasses": {}, 
            lift: function (__dict_Monad_89) {
                return function (m) {
                    return RWST(function (_) {
                        return function (s) {
                            return Prelude[">>="](__dict_Monad_89["__superclasses"]["Prelude.Bind_1"]({}))(m)(function (a) {
                                return Prelude["return"](__dict_Monad_89)({
                                    state: s, 
                                    result: a, 
                                    log: Data_Monoid.mempty(__dict_Monoid_88)
                                });
                            });
                        };
                    });
                };
            }
        };
    };
    var mapRWST = function (f) {
        return function (m) {
            return RWST(function (r) {
                return function (s) {
                    return f(runRWST(m)(r)(s));
                };
            });
        };
    };
    var functorRWST = function (__dict_Functor_92) {
        return {
            "__superclasses": {}, 
            "<$>": function (f) {
                return function (m) {
                    return RWST(function (r) {
                        return function (s) {
                            return Prelude["<$>"](__dict_Functor_92)(function (see) {
                                var _642 = {};
                                for (var _643 in see) {
                                    if (see.hasOwnProperty(_643)) {
                                        _642[_643] = see[_643];
                                    };
                                };
                                _642.result = f(see.result);
                                return _642;
                            })(runRWST(m)(r)(s));
                        };
                    });
                };
            }
        };
    };
    var execRWST = function (__dict_Monad_93) {
        return function (m) {
            return function (r) {
                return function (s) {
                    return Prelude[">>="](__dict_Monad_93["__superclasses"]["Prelude.Bind_1"]({}))(runRWST(m)(r)(s))(function (see) {
                        return Prelude["return"](__dict_Monad_93)(Data_Tuple.Tuple(see.state)(see.log));
                    });
                };
            };
        };
    };
    var evalRWST = function (__dict_Monad_94) {
        return function (m) {
            return function (r) {
                return function (s) {
                    return Prelude[">>="](__dict_Monad_94["__superclasses"]["Prelude.Bind_1"]({}))(runRWST(m)(r)(s))(function (see) {
                        return Prelude["return"](__dict_Monad_94)(Data_Tuple.Tuple(see.result)(see.log));
                    });
                };
            };
        };
    };
    var applyRWST = function (__dict_Apply_97) {
        return function (__dict_Semigroup_98) {
            return {
                "__superclasses": {
                    "Prelude.Functor_0": function (_) {
                        return functorRWST(__dict_Apply_97["__superclasses"]["Prelude.Functor_0"]({}));
                    }
                }, 
                "<*>": function (f) {
                    return function (m) {
                        return RWST(function (r) {
                            return function (s) {
                                return Prelude["<*>"](__dict_Apply_97)(Prelude["<$>"](__dict_Apply_97["__superclasses"]["Prelude.Functor_0"]({}))(function (_208) {
                                    return function (see) {
                                        var _645 = {};
                                        for (var _646 in see) {
                                            if (see.hasOwnProperty(_646)) {
                                                _645[_646] = see[_646];
                                            };
                                        };
                                        _645.result = _208.result(see.result);
                                        _645.log = Prelude["<>"](__dict_Semigroup_98)(_208.log)(see.log);
                                        return _645;
                                    };
                                })(runRWST(f)(r)(s)))(runRWST(m)(r)(s));
                            };
                        });
                    };
                }
            };
        };
    };
    var bindRWST = function (__dict_Bind_95) {
        return function (__dict_Semigroup_96) {
            return {
                "__superclasses": {
                    "Prelude.Apply_0": function (_) {
                        return applyRWST(__dict_Bind_95["__superclasses"]["Prelude.Apply_0"]({}))(__dict_Semigroup_96);
                    }
                }, 
                ">>=": function (m) {
                    return function (f) {
                        return RWST(function (r) {
                            return function (s) {
                                return Prelude[">>="](__dict_Bind_95)(runRWST(m)(r)(s))(function (_209) {
                                    return Prelude["<$>"]((__dict_Bind_95["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}))(function (see$prime) {
                                        var _650 = {};
                                        for (var _651 in see$prime) {
                                            if (see$prime.hasOwnProperty(_651)) {
                                                _650[_651] = see$prime[_651];
                                            };
                                        };
                                        _650.log = Prelude["<>"](__dict_Semigroup_96)(_209.log)(see$prime.log);
                                        return _650;
                                    })(runRWST(f(_209.result))(r)(_209.state));
                                });
                            };
                        });
                    };
                }
            };
        };
    };
    var applicativeRWST = function (__dict_Applicative_99) {
        return function (__dict_Monoid_100) {
            return {
                "__superclasses": {
                    "Prelude.Apply_0": function (_) {
                        return applyRWST(__dict_Applicative_99["__superclasses"]["Prelude.Apply_0"]({}))(__dict_Monoid_100["__superclasses"]["Prelude.Semigroup_0"]({}));
                    }
                }, 
                pure: function (a) {
                    return RWST(function (_) {
                        return function (s) {
                            return Prelude.pure(__dict_Applicative_99)({
                                state: s, 
                                result: a, 
                                log: Data_Monoid.mempty(__dict_Monoid_100)
                            });
                        };
                    });
                }
            };
        };
    };
    var monadRWST = function (__dict_Monad_90) {
        return function (__dict_Monoid_91) {
            return {
                "__superclasses": {
                    "Prelude.Applicative_0": function (_) {
                        return applicativeRWST(__dict_Monad_90["__superclasses"]["Prelude.Applicative_0"]({}))(__dict_Monoid_91);
                    }, 
                    "Prelude.Bind_1": function (_) {
                        return bindRWST(__dict_Monad_90["__superclasses"]["Prelude.Bind_1"]({}))(__dict_Monoid_91["__superclasses"]["Prelude.Semigroup_0"]({}));
                    }
                }
            };
        };
    };
    return {
        RWST: RWST, 
        withRWST: withRWST, 
        mapRWST: mapRWST, 
        execRWST: execRWST, 
        evalRWST: evalRWST, 
        runRWST: runRWST, 
        functorRWST: functorRWST, 
        applyRWST: applyRWST, 
        bindRWST: bindRWST, 
        applicativeRWST: applicativeRWST, 
        monadRWST: monadRWST, 
        monadTransRWST: monadTransRWST
    };
})();
var PS = PS || {};
PS.Control_Monad_Identity = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Identity = function (value0) {
        return {
            ctor: "Control.Monad.Identity.Identity", 
            values: [ value0 ]
        };
    };
    var runIdentity = function (_211) {
        return _211.values[0];
    };
    var functorIdentity = function (_) {
        return {
            "__superclasses": {}, 
            "<$>": function (f) {
                return function (m) {
                    return Identity(f(runIdentity(m)));
                };
            }
        };
    };
    var applyIdentity = function (_) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorIdentity({});
                }
            }, 
            "<*>": function (_212) {
                return function (_213) {
                    return Identity(_212.values[0](_213.values[0]));
                };
            }
        };
    };
    var bindIdentity = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyIdentity({});
                }
            }, 
            ">>=": function (m) {
                return function (f) {
                    return f(runIdentity(m));
                };
            }
        };
    };
    var applicativeIdentity = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyIdentity({});
                }
            }, 
            pure: Identity
        };
    };
    var monadIdentity = function (_) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeIdentity({});
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindIdentity({});
                }
            }
        };
    };
    return {
        Identity: Identity, 
        runIdentity: runIdentity, 
        functorIdentity: functorIdentity, 
        applyIdentity: applyIdentity, 
        applicativeIdentity: applicativeIdentity, 
        bindIdentity: bindIdentity, 
        monadIdentity: monadIdentity
    };
})();
var PS = PS || {};
PS.Control_Monad_RWS = (function () {
    "use strict";
    var Control_Monad_RWS_Trans = PS.Control_Monad_RWS_Trans;
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Monoid = PS.Data_Monoid;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var writer = function (__dict_Applicative_101) {
        return function (_217) {
            return Control_Monad_RWS_Trans.RWST(function (_) {
                return function (s) {
                    return Prelude.pure(__dict_Applicative_101)({
                        state: s, 
                        result: _217.values[0], 
                        log: _217.values[1]
                    });
                };
            });
        };
    };
    var withRWS = Control_Monad_RWS_Trans.withRWST;
    var tell = function (__dict_Applicative_102) {
        return function (w) {
            return writer(__dict_Applicative_102)(Data_Tuple.Tuple(Prelude.unit)(w));
        };
    };
    var state = function (__dict_Applicative_103) {
        return function (__dict_Monoid_104) {
            return function (f) {
                return Control_Monad_RWS_Trans.RWST(function (_) {
                    return function (s) {
                        return (function (_664) {
                            return Prelude.pure(__dict_Applicative_103)({
                                state: _664.values[1], 
                                result: _664.values[0], 
                                log: Data_Monoid.mempty(__dict_Monoid_104)
                            });
                        })(f(s));
                    };
                });
            };
        };
    };
    var rws = function (f) {
        return Control_Monad_RWS_Trans.RWST(function (r) {
            return function (s) {
                return Prelude["return"](Control_Monad_Identity.monadIdentity({}))(f(r)(s));
            };
        });
    };
    var runRWS = function (m) {
        return function (r) {
            return function (s) {
                return Control_Monad_Identity.runIdentity(Control_Monad_RWS_Trans.runRWST(m)(r)(s));
            };
        };
    };
    var reader = function (__dict_Applicative_105) {
        return function (__dict_Monoid_106) {
            return function (f) {
                return Control_Monad_RWS_Trans.RWST(function (r) {
                    return function (s) {
                        return Prelude.pure(__dict_Applicative_105)({
                            state: s, 
                            result: f(r), 
                            log: Data_Monoid.mempty(__dict_Monoid_106)
                        });
                    };
                });
            };
        };
    };
    var put = function (__dict_Applicative_107) {
        return function (__dict_Monoid_108) {
            return function (s) {
                return state(__dict_Applicative_107)(__dict_Monoid_108)(function (_) {
                    return Data_Tuple.Tuple(Prelude.unit)(s);
                });
            };
        };
    };
    var pass = function (__dict_Monad_109) {
        return function (m) {
            return Control_Monad_RWS_Trans.RWST(function (r) {
                return function (s) {
                    return Prelude[">>="](__dict_Monad_109["__superclasses"]["Prelude.Bind_1"]({}))(Control_Monad_RWS_Trans.runRWST(m)(r)(s))(function (_215) {
                        return Prelude.pure(__dict_Monad_109["__superclasses"]["Prelude.Applicative_0"]({}))({
                            state: _215.state, 
                            result: _215.result.values[0], 
                            log: _215.result.values[1](_215.log)
                        });
                    });
                };
            });
        };
    };
    var modify = function (__dict_Applicative_110) {
        return function (__dict_Monoid_111) {
            return function (f) {
                return state(__dict_Applicative_110)(__dict_Monoid_111)(function (s) {
                    return Data_Tuple.Tuple(Prelude.unit)(f(s));
                });
            };
        };
    };
    var mapRWS = function (f) {
        return Control_Monad_RWS_Trans.mapRWST(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Prelude[">>>"](Prelude.semigroupoidArr({}))(f)(Control_Monad_Identity.Identity)));
    };
    var local = function (f) {
        return function (m) {
            return Control_Monad_RWS_Trans.RWST(function (r) {
                return function (s) {
                    return Control_Monad_RWS_Trans.runRWST(m)(f(r))(s);
                };
            });
        };
    };
    var listens = function (__dict_Monad_112) {
        return function (f) {
            return function (m) {
                return Control_Monad_RWS_Trans.RWST(function (r) {
                    return function (s) {
                        return Prelude[">>="](__dict_Monad_112["__superclasses"]["Prelude.Bind_1"]({}))(Control_Monad_RWS_Trans.runRWST(m)(r)(s))(function (_216) {
                            return Prelude.pure(__dict_Monad_112["__superclasses"]["Prelude.Applicative_0"]({}))({
                                state: _216.state, 
                                result: Data_Tuple.Tuple(_216.result)(f(_216.log)), 
                                log: _216.log
                            });
                        });
                    };
                });
            };
        };
    };
    var listen = function (__dict_Monad_113) {
        return function (m) {
            return Control_Monad_RWS_Trans.RWST(function (r) {
                return function (s) {
                    return Prelude[">>="](__dict_Monad_113["__superclasses"]["Prelude.Bind_1"]({}))(Control_Monad_RWS_Trans.runRWST(m)(r)(s))(function (_214) {
                        return Prelude.pure(__dict_Monad_113["__superclasses"]["Prelude.Applicative_0"]({}))({
                            state: _214.state, 
                            result: Data_Tuple.Tuple(_214.result)(_214.log), 
                            log: _214.log
                        });
                    });
                };
            });
        };
    };
    var gets = function (__dict_Applicative_114) {
        return function (__dict_Monoid_115) {
            return function (f) {
                return state(__dict_Applicative_114)(__dict_Monoid_115)(function (s) {
                    return Data_Tuple.Tuple(f(s))(s);
                });
            };
        };
    };
    var get = function (__dict_Applicative_116) {
        return function (__dict_Monoid_117) {
            return state(__dict_Applicative_116)(__dict_Monoid_117)(function (s) {
                return Data_Tuple.Tuple(s)(s);
            });
        };
    };
    var execRWS = function (m) {
        return function (r) {
            return function (s) {
                return Control_Monad_Identity.runIdentity(Control_Monad_RWS_Trans.execRWST(Control_Monad_Identity.monadIdentity({}))(m)(r)(s));
            };
        };
    };
    var evalRWS = function (m) {
        return function (r) {
            return function (s) {
                return Control_Monad_Identity.runIdentity(Control_Monad_RWS_Trans.evalRWST(Control_Monad_Identity.monadIdentity({}))(m)(r)(s));
            };
        };
    };
    var censor = function (__dict_Monad_118) {
        return function (f) {
            return function (m) {
                return Control_Monad_RWS_Trans.RWST(function (r) {
                    return function (s) {
                        return Prelude[">>="](__dict_Monad_118["__superclasses"]["Prelude.Bind_1"]({}))(Control_Monad_RWS_Trans.runRWST(m)(r)(s))(function (see) {
                            return Prelude.pure(__dict_Monad_118["__superclasses"]["Prelude.Applicative_0"]({}))((function () {
                                var _681 = {};
                                for (var _682 in see) {
                                    if (see.hasOwnProperty(_682)) {
                                        _681[_682] = see[_682];
                                    };
                                };
                                _681.log = f(see.log);
                                return _681;
                            })());
                        });
                    };
                });
            };
        };
    };
    var ask = function (__dict_Applicative_119) {
        return function (__dict_Monoid_120) {
            return Control_Monad_RWS_Trans.RWST(function (r) {
                return function (s) {
                    return Prelude.pure(__dict_Applicative_119)({
                        state: s, 
                        result: r, 
                        log: Data_Monoid.mempty(__dict_Monoid_120)
                    });
                };
            });
        };
    };
    return {
        modify: modify, 
        put: put, 
        gets: gets, 
        get: get, 
        state: state, 
        censor: censor, 
        listens: listens, 
        tell: tell, 
        pass: pass, 
        listen: listen, 
        writer: writer, 
        reader: reader, 
        local: local, 
        ask: ask, 
        withRWS: withRWS, 
        mapRWS: mapRWS, 
        execRWS: execRWS, 
        evalRWS: evalRWS, 
        runRWS: runRWS, 
        rws: rws
    };
})();
var PS = PS || {};
PS.Control_Monad_Reader = (function () {
    "use strict";
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Prelude = PS.Prelude;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var withReader = Control_Monad_Reader_Trans.withReaderT;
    var runReader = function (m) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Control_Monad_Reader_Trans.runReaderT(m));
    };
    var mapReader = function (f) {
        return Control_Monad_Reader_Trans.mapReaderT(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.Identity)(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(Control_Monad_Identity.runIdentity)));
    };
    return {
        mapReader: mapReader, 
        withReader: withReader, 
        runReader: runReader
    };
})();
var PS = PS || {};
PS.Control_Monad_State = (function () {
    "use strict";
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var Prelude = PS.Prelude;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Data_Tuple = PS.Data_Tuple;
    var withState = Control_Monad_State_Trans.withStateT;
    var runState = function (s) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Control_Monad_State_Trans.runStateT(s));
    };
    var mapState = function (f) {
        return Control_Monad_State_Trans.mapStateT(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.Identity)(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(Control_Monad_Identity.runIdentity)));
    };
    var execState = function (m) {
        return function (s) {
            return Data_Tuple.snd(runState(m)(s));
        };
    };
    var evalState = function (m) {
        return function (s) {
            return Data_Tuple.fst(runState(m)(s));
        };
    };
    return {
        withState: withState, 
        mapState: mapState, 
        execState: execState, 
        evalState: evalState, 
        runState: runState
    };
})();
var PS = PS || {};
PS.Control_Monad_Writer = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    var Data_Tuple = PS.Data_Tuple;
    var runWriter = Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Control_Monad_Writer_Trans.runWriterT);
    var mapWriter = function (f) {
        return Control_Monad_Writer_Trans.mapWriterT(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.Identity)(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(Control_Monad_Identity.runIdentity)));
    };
    var execWriter = function (m) {
        return Data_Tuple.snd(runWriter(m));
    };
    return {
        mapWriter: mapWriter, 
        execWriter: execWriter, 
        runWriter: runWriter
    };
})();
var PS = PS || {};
PS.Control_Monad_Error = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Either = PS.Data_Either;
    var strMsg = function (dict) {
        return dict.strMsg;
    };
    var noMsg = function (dict) {
        return dict.noMsg;
    };
    var errorString = function (_) {
        return {
            "__superclasses": {}, 
            noMsg: "", 
            strMsg: Prelude.id(Prelude.categoryArr({}))
        };
    };
    var errorEitherAlternative = function (__dict_Error_121) {
        return {
            "__superclasses": {}, 
            empty: Data_Either.Left(noMsg(__dict_Error_121)), 
            "<|>": function (_218) {
                return function (_219) {
                    if (_218.ctor === "Data.Either.Left") {
                        return _219;
                    };
                    return _218;
                };
            }
        };
    };
    return {
        strMsg: strMsg, 
        noMsg: noMsg, 
        errorString: errorString, 
        errorEitherAlternative: errorEitherAlternative
    };
})();
var PS = PS || {};
PS.Control_Monad_Error_Trans = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Either = PS.Data_Either;
    var Data_Tuple = PS.Data_Tuple;
    var Control_Monad_Error = PS.Control_Monad_Error;
    var ErrorT = function (value0) {
        return {
            ctor: "Control.Monad.Error.Trans.ErrorT", 
            values: [ value0 ]
        };
    };
    var runErrorT = function (_220) {
        return _220.values[0];
    };
    var monadTransErrorT = function (__dict_Error_122) {
        return {
            "__superclasses": {}, 
            lift: function (__dict_Monad_123) {
                return function (m) {
                    return ErrorT(Prelude[">>="](__dict_Monad_123["__superclasses"]["Prelude.Bind_1"]({}))(m)(function (_14) {
                        return Prelude["return"](__dict_Monad_123)(Data_Either.Right(_14));
                    }));
                };
            }
        };
    };
    var mapErrorT = function (f) {
        return function (m) {
            return ErrorT(f(runErrorT(m)));
        };
    };
    var liftPassError = function (__dict_Monad_126) {
        return function (pass) {
            return mapErrorT(function (m) {
                return pass(Prelude[">>="](__dict_Monad_126["__superclasses"]["Prelude.Bind_1"]({}))(m)(function (_16) {
                    return Prelude["return"](__dict_Monad_126)((function (_690) {
                        if (_690.ctor === "Data.Either.Left") {
                            return Data_Tuple.Tuple(Data_Either.Left(_690.values[0]))(Prelude.id(Prelude.categoryArr({})));
                        };
                        if (_690.ctor === "Data.Either.Right") {
                            return Data_Tuple.Tuple(Data_Either.Right((_690.values[0]).values[0]))((_690.values[0]).values[1]);
                        };
                        throw "Failed pattern match";
                    })(_16));
                }));
            });
        };
    };
    var liftListenError = function (__dict_Monad_127) {
        return function (listen) {
            return mapErrorT(function (m) {
                return Prelude[">>="](__dict_Monad_127["__superclasses"]["Prelude.Bind_1"]({}))(listen(m))(function (_15) {
                    return Prelude["return"](__dict_Monad_127)(Prelude["<$>"](Data_Either.functorEither({}))(function (r) {
                        return Data_Tuple.Tuple(r)(_15.values[1]);
                    })(_15.values[0]));
                });
            });
        };
    };
    var liftCallCCError = function (callCC) {
        return function (f) {
            return ErrorT(callCC(function (c) {
                return runErrorT(f(function (a) {
                    return ErrorT(c(Data_Either.Right(a)));
                }));
            }));
        };
    };
    var functorErrorT = function (__dict_Functor_128) {
        return {
            "__superclasses": {}, 
            "<$>": function (f) {
                return Prelude["<<<"](Prelude.semigroupoidArr({}))(ErrorT)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude["<$>"](__dict_Functor_128)(Prelude["<$>"](Data_Either.functorEither({}))(f)))(runErrorT));
            }
        };
    };
    var applyErrorT = function (__dict_Functor_131) {
        return function (__dict_Monad_132) {
            return {
                "__superclasses": {
                    "Prelude.Functor_0": function (_) {
                        return functorErrorT(__dict_Functor_131);
                    }
                }, 
                "<*>": function (f) {
                    return function (v) {
                        return ErrorT(Prelude[">>="](__dict_Monad_132["__superclasses"]["Prelude.Bind_1"]({}))(runErrorT(f))(function (_12) {
                            if (_12.ctor === "Data.Either.Left") {
                                return Prelude["return"](__dict_Monad_132)(Data_Either.Left(_12.values[0]));
                            };
                            if (_12.ctor === "Data.Either.Right") {
                                return Prelude[">>="](__dict_Monad_132["__superclasses"]["Prelude.Bind_1"]({}))(runErrorT(v))(function (_11) {
                                    return Prelude["return"](__dict_Monad_132)((function (_702) {
                                        if (_702.ctor === "Data.Either.Left") {
                                            return Data_Either.Left(_702.values[0]);
                                        };
                                        if (_702.ctor === "Data.Either.Right") {
                                            return Data_Either.Right(_12.values[0](_702.values[0]));
                                        };
                                        throw "Failed pattern match";
                                    })(_11));
                                });
                            };
                            throw "Failed pattern match";
                        }));
                    };
                }
            };
        };
    };
    var bindErrorT = function (__dict_Monad_129) {
        return function (__dict_Error_130) {
            return {
                "__superclasses": {
                    "Prelude.Apply_0": function (_) {
                        return applyErrorT(((__dict_Monad_129["__superclasses"]["Prelude.Applicative_0"]({}))["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}))(__dict_Monad_129);
                    }
                }, 
                ">>=": function (m) {
                    return function (f) {
                        return ErrorT(Prelude[">>="](__dict_Monad_129["__superclasses"]["Prelude.Bind_1"]({}))(runErrorT(m))(function (_13) {
                            if (_13.ctor === "Data.Either.Left") {
                                return Prelude["return"](__dict_Monad_129)(Data_Either.Left(_13.values[0]));
                            };
                            if (_13.ctor === "Data.Either.Right") {
                                return runErrorT(f(_13.values[0]));
                            };
                            throw "Failed pattern match";
                        }));
                    };
                }
            };
        };
    };
    var applicativeErrorT = function (__dict_Functor_133) {
        return function (__dict_Monad_134) {
            return {
                "__superclasses": {
                    "Prelude.Apply_0": function (_) {
                        return applyErrorT(__dict_Functor_133)(__dict_Monad_134);
                    }
                }, 
                pure: function (a) {
                    return ErrorT(Prelude.pure(__dict_Monad_134["__superclasses"]["Prelude.Applicative_0"]({}))(Data_Either.Right(a)));
                }
            };
        };
    };
    var monadErrorT = function (__dict_Monad_124) {
        return function (__dict_Error_125) {
            return {
                "__superclasses": {
                    "Prelude.Applicative_0": function (_) {
                        return applicativeErrorT(((__dict_Monad_124["__superclasses"]["Prelude.Applicative_0"]({}))["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}))(__dict_Monad_124);
                    }, 
                    "Prelude.Bind_1": function (_) {
                        return bindErrorT(__dict_Monad_124)(__dict_Error_125);
                    }
                }
            };
        };
    };
    var alternativeErrorT = function (__dict_Monad_135) {
        return function (__dict_Error_136) {
            return {
                "__superclasses": {}, 
                empty: ErrorT(Prelude["return"](__dict_Monad_135)(Data_Either.Left(Control_Monad_Error.strMsg(__dict_Error_136)("No alternative")))), 
                "<|>": function (x) {
                    return function (y) {
                        return ErrorT(Prelude[">>="](__dict_Monad_135["__superclasses"]["Prelude.Bind_1"]({}))(runErrorT(x))(function (e) {
                            if (e.ctor === "Data.Either.Left") {
                                return runErrorT(y);
                            };
                            return Prelude["return"](__dict_Monad_135)(e);
                        }));
                    };
                }
            };
        };
    };
    return {
        ErrorT: ErrorT, 
        liftCallCCError: liftCallCCError, 
        liftPassError: liftPassError, 
        liftListenError: liftListenError, 
        mapErrorT: mapErrorT, 
        runErrorT: runErrorT, 
        functorErrorT: functorErrorT, 
        applyErrorT: applyErrorT, 
        applicativeErrorT: applicativeErrorT, 
        alternativeErrorT: alternativeErrorT, 
        bindErrorT: bindErrorT, 
        monadErrorT: monadErrorT, 
        monadTransErrorT: monadTransErrorT
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function returnE(a) {  return function() {    return a;  };};
    function bindE(a) {  return function(f) {    return function() {      return f(a())();    };  };};
    function runPure(f) {  return f();};
    function untilE(f) {  return function() {    while (!f()) { }    return {};  };};
    function whileE(f) {  return function(a) {    return function() {      while (f()) {        a();      }      return {};    };  };};
    function forE(lo) {  return function(hi) {    return function(f) {      return function() {        for (var i = lo; i < hi; i++) {          f(i)();        }      };    };  };};
    function foreachE(as) {  return function(f) {    for (var i = 0; i < as.length; i++) {      f(as[i])();    }  };};
    var applicativeEff = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyEff({});
                }
            }, 
            pure: returnE
        };
    };
    var applyEff = function (_) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorEff({});
                }
            }, 
            "<*>": Prelude.ap(monadEff({}))
        };
    };
    var functorEff = function (_) {
        return {
            "__superclasses": {}, 
            "<$>": Prelude.liftA1(applicativeEff({}))
        };
    };
    var monadEff = function (_) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeEff({});
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindEff({});
                }
            }
        };
    };
    var bindEff = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyEff({});
                }
            }, 
            ">>=": bindE
        };
    };
    return {
        foreachE: foreachE, 
        forE: forE, 
        whileE: whileE, 
        untilE: untilE, 
        runPure: runPure, 
        bindE: bindE, 
        returnE: returnE, 
        functorEff: functorEff, 
        applyEff: applyEff, 
        applicativeEff: applicativeEff, 
        bindEff: bindEff, 
        monadEff: monadEff
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_Unsafe = (function () {
    "use strict";
    function unsafeInterleaveEff(f) {  return f;};
    return {
        unsafeInterleaveEff: unsafeInterleaveEff
    };
})();
var PS = PS || {};
PS.Control_Monad_Free = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Either = PS.Data_Either;
    var Pure = function (value0) {
        return {
            ctor: "Control.Monad.Free.Pure", 
            values: [ value0 ]
        };
    };
    var Free = function (value0) {
        return {
            ctor: "Control.Monad.Free.Free", 
            values: [ value0 ]
        };
    };
    var Gosub = function (value0) {
        return {
            ctor: "Control.Monad.Free.Gosub", 
            values: [ value0 ]
        };
    };
    function resume(__dict_Functor) {  return function(__copy__1) {    var _1 = __copy__1;    tco: while (true)      if (_1.ctor === 'Control.Monad.Free.Pure')        return Data_Either.Right(_1.values[0]);      else if (_1.ctor === 'Control.Monad.Free.Free')        return Data_Either.Left(_1.values[0]);      else {        var x = resumeGosub(__dict_Functor)(_1.values[0]);        if (x.ctor === 'Data.Either.Left')          return x;        else {          _1 = x.values[0];          continue tco;        }      }  };};
    function go(__dict_Functor) {  return function(f) {    return function(__copy__1) {      var _1 = __copy__1;      var r;      tco: while (true) {        r = resume(__dict_Functor)(_1);        if (r.ctor === 'Data.Either.Left') {          _1 = f(r.values[0]);          continue tco;        } else          return r.values[0];      }    };  };};
    function goEff(__dict_Functor) {  return function(f) {    return function(__copy__1) {      return function(){        var _1 = __copy__1;        var r;        tco: while (true) {          r = resume(__dict_Functor)(_1);          if (r.ctor === 'Data.Either.Left') {            _1 = f(r.values[0])();            continue tco;          } else            return function(){return r.values[0];};        }      };    };  };};
    var wrap = function (dict) {
        return dict.wrap;
    };
    var pureF = function (__dict_Applicative_138) {
        return function (a) {
            return Free(Prelude.pure(__dict_Applicative_138)(Pure(a)));
        };
    };
    var monadTransFree = function (_) {
        return {
            "__superclasses": {}, 
            lift: function (__dict_Monad_139) {
                return function (f) {
                    return Free(Prelude[">>="](__dict_Monad_139["__superclasses"]["Prelude.Bind_1"]({}))(f)(function (_17) {
                        return Prelude["return"](__dict_Monad_139)(Pure(_17));
                    }));
                };
            }
        };
    };
    var monadFreeFree = function (__dict_Functor_140) {
        return {
            "__superclasses": {}, 
            wrap: Free
        };
    };
    var liftF = function (__dict_Functor_142) {
        return function (__dict_Monad_143) {
            return function (__dict_MonadFree_144) {
                return function (fa) {
                    return wrap(__dict_MonadFree_144)(Prelude["<$>"](__dict_Functor_142)(Prelude["return"](__dict_Monad_143))(fa));
                };
            };
        };
    };
    var iterM = function (__dict_Functor_145) {
        return function (__dict_Monad_146) {
            return function (_221) {
                return function (_222) {
                    if (_222.ctor === "Control.Monad.Free.Pure") {
                        return Prelude["return"](__dict_Monad_146)(_222.values[0]);
                    };
                    if (_222.ctor === "Control.Monad.Free.Free") {
                        return _221(Prelude["<$>"](__dict_Functor_145)(iterM(__dict_Functor_145)(__dict_Monad_146)(_221))(_222.values[0]));
                    };
                    if (_222.ctor === "Control.Monad.Free.Gosub") {
                        return _222.values[0](function (req) {
                            return function (recv) {
                                return Prelude[">>="](__dict_Monad_146["__superclasses"]["Prelude.Bind_1"]({}))(iterM(__dict_Functor_145)(__dict_Monad_146)(_221)(req(Prelude.unit)))(Prelude["<<<"](Prelude.semigroupoidArr({}))(iterM(__dict_Functor_145)(__dict_Monad_146)(_221))(recv));
                            };
                        });
                    };
                    throw "Failed pattern match";
                };
            };
        };
    };
    var goM = function (__dict_Functor_147) {
        return function (__dict_Monad_148) {
            return function (k) {
                return function (f) {
                    return (function (_718) {
                        if (_718.ctor === "Data.Either.Left") {
                            return Prelude[">>="](__dict_Monad_148["__superclasses"]["Prelude.Bind_1"]({}))(k(_718.values[0]))(goM(__dict_Functor_147)(__dict_Monad_148)(k));
                        };
                        if (_718.ctor === "Data.Either.Right") {
                            return Prelude["return"](__dict_Monad_148)(_718.values[0]);
                        };
                        throw "Failed pattern match";
                    })(resume(__dict_Functor_147)(f));
                };
            };
        };
    };
    var applicativeFree = function (__dict_Functor_152) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyFree(__dict_Functor_152);
                }
            }, 
            pure: Pure
        };
    };
    var applyFree = function (__dict_Functor_151) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorFree(__dict_Functor_151);
                }
            }, 
            "<*>": Prelude.ap(monadFree(__dict_Functor_151))
        };
    };
    var functorFree = function (__dict_Functor_149) {
        return {
            "__superclasses": {}, 
            "<$>": function (_223) {
                return function (_224) {
                    if (_224.ctor === "Control.Monad.Free.Pure") {
                        return Pure(_223(_224.values[0]));
                    };
                    return Prelude.liftA1(applicativeFree(__dict_Functor_149))(_223)(_224);
                };
            }
        };
    };
    var monadFree = function (__dict_Functor_141) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeFree(__dict_Functor_141);
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindFree(__dict_Functor_141);
                }
            }
        };
    };
    var bindFree = function (__dict_Functor_150) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyFree(__dict_Functor_150);
                }
            }, 
            ">>=": function (_225) {
                return function (_226) {
                    if (_225.ctor === "Control.Monad.Free.Gosub") {
                        return Gosub(function (h) {
                            return _225.values[0](function (a) {
                                return function (i) {
                                    return h(a)(function (x) {
                                        return Gosub(function (j) {
                                            return j(Prelude["const"](i(x)))(_226);
                                        });
                                    });
                                };
                            });
                        });
                    };
                    return Gosub(function (h) {
                        return h(Prelude["const"](_225))(_226);
                    });
                };
            }
        };
    };
    var resumeGosub = function (__dict_Functor_137) {
        return function (f) {
            return f(function (a) {
                return function (g) {
                    return (function (_727) {
                        if (_727.ctor === "Control.Monad.Free.Pure") {
                            return Data_Either.Right(g(_727.values[0]));
                        };
                        if (_727.ctor === "Control.Monad.Free.Free") {
                            return Data_Either.Left(Prelude["<$>"](__dict_Functor_137)(function (h) {
                                return Prelude[">>="](bindFree(__dict_Functor_137))(h)(g);
                            })(_727.values[0]));
                        };
                        if (_727.ctor === "Control.Monad.Free.Gosub") {
                            return Data_Either.Right(_727.values[0](function (b) {
                                return function (i) {
                                    return Prelude[">>="](bindFree(__dict_Functor_137))(b(Prelude.unit))(function (x) {
                                        return Prelude[">>="](bindFree(__dict_Functor_137))(i(x))(g);
                                    });
                                };
                            }));
                        };
                        throw "Failed pattern match";
                    })(a(Prelude.unit));
                };
            });
        };
    };
    return {
        Pure: Pure, 
        Free: Free, 
        Gosub: Gosub, 
        goEff: goEff, 
        go: go, 
        resume: resume, 
        resumeGosub: resumeGosub, 
        goM: goM, 
        iterM: iterM, 
        pureF: pureF, 
        liftF: liftF, 
        wrap: wrap, 
        functorFree: functorFree, 
        applyFree: applyFree, 
        applicativeFree: applicativeFree, 
        bindFree: bindFree, 
        monadFree: monadFree, 
        monadTransFree: monadTransFree, 
        monadFreeFree: monadFreeFree
    };
})();
var PS = PS || {};
PS.Control_Monad_Trampoline = (function () {
    "use strict";
    var Control_Monad_Free = PS.Control_Monad_Free;
    var Prelude = PS.Prelude;
    var Delay = function (value0) {
        return {
            ctor: "Control.Monad.Trampoline.Delay", 
            values: [ value0 ]
        };
    };
    var suspend = function (a) {
        return Control_Monad_Free.Free(Delay(Prelude["const"](a)));
    };
    var done = Control_Monad_Free.Pure;
    var delayFunctor = function (_) {
        return {
            "__superclasses": {}, 
            "<$>": function (_228) {
                return function (_229) {
                    return Delay(Prelude["const"](_228(_229.values[0](Prelude.unit))));
                };
            }
        };
    };
    var runTrampoline = Control_Monad_Free.go(delayFunctor({}))(function (_227) {
        return _227.values[0](Prelude.unit);
    });
    var delayApply = function (_) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return delayFunctor({});
                }
            }, 
            "<*>": function (_230) {
                return function (_231) {
                    return Delay(function (_) {
                        return _230.values[0](Prelude.unit)(_231.values[0](Prelude.unit));
                    });
                };
            }
        };
    };
    var delayApplicative = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return delayApply({});
                }
            }, 
            pure: function (a) {
                return Delay(Prelude["const"](a));
            }
        };
    };
    var delay = function (a) {
        return Control_Monad_Free.Free(Prelude["<$>"](delayFunctor({}))(done)(Delay(a)));
    };
    return {
        Delay: Delay, 
        runTrampoline: runTrampoline, 
        delay: delay, 
        suspend: suspend, 
        done: done, 
        delayFunctor: delayFunctor, 
        delayApply: delayApply, 
        delayApplicative: delayApplicative
    };
})();
var PS = PS || {};
PS.Control_Monad_ST = (function () {
    "use strict";
    function newSTRef(val) {  return function () {    return { value: val };  };};
    function readSTRef(ref) {  return function() {    return ref.value;  };};
    function modifySTRef(ref) {  return function(f) {    return function() {      return ref.value = f(ref.value);    };  };};
    function writeSTRef(ref) {  return function(a) {    return function() {      return ref.value = a;    };  };};
    function newSTArray(len) {  return function(a) {    return function() {      var arr = [];      for (var i = 0; i < len; i++) {        arr[i] = a;      };      return arr;    };  };};
    function peekSTArray(arr) {  return function(i) {    return function() {      return arr[i];    };  };};
    function pokeSTArray(arr) {  return function(i) {    return function(a) {      return function() {        return arr[i] = a;      };    };  };};
    function runST(f) {  return f;};
    function runSTArray(f) {  return f;};
    return {
        runSTArray: runSTArray, 
        runST: runST, 
        pokeSTArray: pokeSTArray, 
        peekSTArray: peekSTArray, 
        newSTArray: newSTArray, 
        writeSTRef: writeSTRef, 
        modifySTRef: modifySTRef, 
        readSTRef: readSTRef, 
        newSTRef: newSTRef
    };
})();
var PS = PS || {};
PS.Debug_Trace = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function trace(s) {  return function() {    console.log(s);    return {};  };};
    var print = function (__dict_Show_153) {
        return function (o) {
            return trace(Prelude.show(__dict_Show_153)(o));
        };
    };
    return {
        print: print, 
        trace: trace
    };
})();
var PS = PS || {};
PS.Data_String_Chalk = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Bold = {
        ctor: "Data.String.Chalk.Bold", 
        values: [  ]
    };
    var Dim = {
        ctor: "Data.String.Chalk.Dim", 
        values: [  ]
    };
    var Hidden = {
        ctor: "Data.String.Chalk.Hidden", 
        values: [  ]
    };
    var Inverse = {
        ctor: "Data.String.Chalk.Inverse", 
        values: [  ]
    };
    var Italic = {
        ctor: "Data.String.Chalk.Italic", 
        values: [  ]
    };
    var Reset = {
        ctor: "Data.String.Chalk.Reset", 
        values: [  ]
    };
    var Strikethrough = {
        ctor: "Data.String.Chalk.Strikethrough", 
        values: [  ]
    };
    var Underline = {
        ctor: "Data.String.Chalk.Underline", 
        values: [  ]
    };
    var Black = {
        ctor: "Data.String.Chalk.Black", 
        values: [  ]
    };
    var Blue = {
        ctor: "Data.String.Chalk.Blue", 
        values: [  ]
    };
    var Cyan = {
        ctor: "Data.String.Chalk.Cyan", 
        values: [  ]
    };
    var Gray = {
        ctor: "Data.String.Chalk.Gray", 
        values: [  ]
    };
    var Green = {
        ctor: "Data.String.Chalk.Green", 
        values: [  ]
    };
    var Magenta = {
        ctor: "Data.String.Chalk.Magenta", 
        values: [  ]
    };
    var Red = {
        ctor: "Data.String.Chalk.Red", 
        values: [  ]
    };
    var White = {
        ctor: "Data.String.Chalk.White", 
        values: [  ]
    };
    var Yellow = {
        ctor: "Data.String.Chalk.Yellow", 
        values: [  ]
    };
    var BgBlack = {
        ctor: "Data.String.Chalk.BgBlack", 
        values: [  ]
    };
    var BgBlue = {
        ctor: "Data.String.Chalk.BgBlue", 
        values: [  ]
    };
    var BgCyan = {
        ctor: "Data.String.Chalk.BgCyan", 
        values: [  ]
    };
    var BgGreen = {
        ctor: "Data.String.Chalk.BgGreen", 
        values: [  ]
    };
    var BgMagenta = {
        ctor: "Data.String.Chalk.BgMagenta", 
        values: [  ]
    };
    var BgRed = {
        ctor: "Data.String.Chalk.BgRed", 
        values: [  ]
    };
    var BgWhite = {
        ctor: "Data.String.Chalk.BgWhite", 
        values: [  ]
    };
    var BgYellow = {
        ctor: "Data.String.Chalk.BgYellow", 
        values: [  ]
    };
    var localChalk = require('chalk');;
    function unsafeChalk(styles) {  return function(string) {    return styles.reduce(function(chalk, style) {      return chalk[showStyle_(style)];    }, localChalk)(string);  }};
    function unsafeCallChalk(method) {  return function(x) {    return localChalk[method](x);  }};
    var stripColor = function (string) {
        return unsafeCallChalk("stripColor")(string);
    };
    var showStyle = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_232) {
                if (_232.ctor === "Data.String.Chalk.BgBlack") {
                    return "bgblack";
                };
                if (_232.ctor === "Data.String.Chalk.BgBlue") {
                    return "bgblue";
                };
                if (_232.ctor === "Data.String.Chalk.BgCyan") {
                    return "bgcyan";
                };
                if (_232.ctor === "Data.String.Chalk.BgGreen") {
                    return "bggreen";
                };
                if (_232.ctor === "Data.String.Chalk.BgMagenta") {
                    return "bgmagenta";
                };
                if (_232.ctor === "Data.String.Chalk.BgRed") {
                    return "bgred";
                };
                if (_232.ctor === "Data.String.Chalk.BgWhite") {
                    return "bgwhite";
                };
                if (_232.ctor === "Data.String.Chalk.BgYellow") {
                    return "bgyellow";
                };
                if (_232.ctor === "Data.String.Chalk.Black") {
                    return "black";
                };
                if (_232.ctor === "Data.String.Chalk.Blue") {
                    return "blue";
                };
                if (_232.ctor === "Data.String.Chalk.Bold") {
                    return "bold";
                };
                if (_232.ctor === "Data.String.Chalk.Cyan") {
                    return "cyan";
                };
                if (_232.ctor === "Data.String.Chalk.Dim") {
                    return "dim";
                };
                if (_232.ctor === "Data.String.Chalk.Gray") {
                    return "gray";
                };
                if (_232.ctor === "Data.String.Chalk.Green") {
                    return "green";
                };
                if (_232.ctor === "Data.String.Chalk.Hidden") {
                    return "hidden";
                };
                if (_232.ctor === "Data.String.Chalk.Inverse") {
                    return "inverse";
                };
                if (_232.ctor === "Data.String.Chalk.Italic") {
                    return "italic";
                };
                if (_232.ctor === "Data.String.Chalk.Magenta") {
                    return "magenta";
                };
                if (_232.ctor === "Data.String.Chalk.Red") {
                    return "red";
                };
                if (_232.ctor === "Data.String.Chalk.Reset") {
                    return "reset";
                };
                if (_232.ctor === "Data.String.Chalk.Strikethrough") {
                    return "strikethrough";
                };
                if (_232.ctor === "Data.String.Chalk.Underline") {
                    return "underline";
                };
                if (_232.ctor === "Data.String.Chalk.White") {
                    return "white";
                };
                if (_232.ctor === "Data.String.Chalk.Yellow") {
                    return "yellow";
                };
                throw "Failed pattern match";
            }
        };
    };
    var showStyle_ = Prelude.show(showStyle({}));
    var hasColor = function (string) {
        return unsafeCallChalk("hasColor")(string);
    };
    var chalk$prime = function (styles) {
        return function (string) {
            return unsafeChalk(styles)(string);
        };
    };
    var chalk = function (style) {
        return function (string) {
            return unsafeChalk([ style ])(string);
        };
    };
    return {
        Bold: Bold, 
        Dim: Dim, 
        Hidden: Hidden, 
        Inverse: Inverse, 
        Italic: Italic, 
        Reset: Reset, 
        Strikethrough: Strikethrough, 
        Underline: Underline, 
        Black: Black, 
        Blue: Blue, 
        Cyan: Cyan, 
        Gray: Gray, 
        Green: Green, 
        Magenta: Magenta, 
        Red: Red, 
        White: White, 
        Yellow: Yellow, 
        BgBlack: BgBlack, 
        BgBlue: BgBlue, 
        BgCyan: BgCyan, 
        BgGreen: BgGreen, 
        BgMagenta: BgMagenta, 
        BgRed: BgRed, 
        BgWhite: BgWhite, 
        BgYellow: BgYellow, 
        stripColor: stripColor, 
        hasColor: hasColor, 
        "chalk'": chalk$prime, 
        chalk: chalk, 
        showStyle: showStyle
    };
})();
var PS = PS || {};
PS.Control_Monad_Cont_Trans = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var ContT = function (value0) {
        return {
            ctor: "Control.Monad.Cont.Trans.ContT", 
            values: [ value0 ]
        };
    };
    var runContT = function (_233) {
        return function (_234) {
            return _233.values[0](_234);
        };
    };
    var withContT = function (f) {
        return function (m) {
            return ContT(function (k) {
                return runContT(m)(f(k));
            });
        };
    };
    var monadTransContT = function (_) {
        return {
            "__superclasses": {}, 
            lift: function (__dict_Monad_154) {
                return function (m) {
                    return ContT(function (k) {
                        return Prelude[">>="](__dict_Monad_154["__superclasses"]["Prelude.Bind_1"]({}))(m)(k);
                    });
                };
            }
        };
    };
    var mapContT = function (f) {
        return function (m) {
            return ContT(function (k) {
                return f(runContT(m)(k));
            });
        };
    };
    var functorContT = function (__dict_Monad_156) {
        return {
            "__superclasses": {}, 
            "<$>": function (f) {
                return function (m) {
                    return ContT(function (k) {
                        return runContT(m)(function (a) {
                            return k(f(a));
                        });
                    });
                };
            }
        };
    };
    var callCC = function (f) {
        return ContT(function (k) {
            return runContT(f(function (a) {
                return ContT(function (_) {
                    return k(a);
                });
            }))(k);
        });
    };
    var appluContT = function (__dict_Functor_158) {
        return function (__dict_Monad_159) {
            return {
                "__superclasses": {
                    "Prelude.Functor_0": function (_) {
                        return functorContT(__dict_Monad_159);
                    }
                }, 
                "<*>": function (f) {
                    return function (v) {
                        return ContT(function (k) {
                            return runContT(f)(function (g) {
                                return runContT(v)(function (a) {
                                    return k(g(a));
                                });
                            });
                        });
                    };
                }
            };
        };
    };
    var bindContT = function (__dict_Monad_157) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return appluContT(((__dict_Monad_157["__superclasses"]["Prelude.Applicative_0"]({}))["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}))(__dict_Monad_157);
                }
            }, 
            ">>=": function (m) {
                return function (k) {
                    return ContT(function (k$prime) {
                        return runContT(m)(function (a) {
                            return runContT(k(a))(k$prime);
                        });
                    });
                };
            }
        };
    };
    var applicativeContT = function (__dict_Functor_160) {
        return function (__dict_Monad_161) {
            return {
                "__superclasses": {
                    "Prelude.Apply_0": function (_) {
                        return appluContT(__dict_Functor_160)(__dict_Monad_161);
                    }
                }, 
                pure: function (a) {
                    return ContT(function (k) {
                        return k(a);
                    });
                }
            };
        };
    };
    var monadContT = function (__dict_Monad_155) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeContT(((__dict_Monad_155["__superclasses"]["Prelude.Applicative_0"]({}))["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}))(__dict_Monad_155);
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindContT(__dict_Monad_155);
                }
            }
        };
    };
    return {
        ContT: ContT, 
        callCC: callCC, 
        withContT: withContT, 
        mapContT: mapContT, 
        runContT: runContT, 
        functorContT: functorContT, 
        appluContT: appluContT, 
        applicativeContT: applicativeContT, 
        bindContT: bindContT, 
        monadContT: monadContT, 
        monadTransContT: monadTransContT
    };
})();
var PS = PS || {};
PS.Control_Monad = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var when = function (__dict_Monad_162) {
        return function (_240) {
            return function (_241) {
                if (_240) {
                    return _241;
                };
                if (!_240) {
                    return Prelude["return"](__dict_Monad_162)(Prelude.unit);
                };
                throw "Failed pattern match";
            };
        };
    };
    var unless = function (__dict_Monad_163) {
        return function (_242) {
            return function (_243) {
                if (!_242) {
                    return _243;
                };
                if (_242) {
                    return Prelude["return"](__dict_Monad_163)(Prelude.unit);
                };
                throw "Failed pattern match";
            };
        };
    };
    var replicateM = function (__dict_Monad_164) {
        return function (_235) {
            return function (_236) {
                if (_235 === 0) {
                    return Prelude["return"](__dict_Monad_164)([  ]);
                };
                return Prelude[">>="](__dict_Monad_164["__superclasses"]["Prelude.Bind_1"]({}))(_236)(function (_19) {
                    return Prelude[">>="](__dict_Monad_164["__superclasses"]["Prelude.Bind_1"]({}))(replicateM(__dict_Monad_164)(_235 - 1)(_236))(function (_18) {
                        return Prelude["return"](__dict_Monad_164)(Prelude[":"](_19)(_18));
                    });
                });
            };
        };
    };
    var foldM = function (__dict_Monad_165) {
        return function (_237) {
            return function (_238) {
                return function (_239) {
                    if (_239.length === 0) {
                        return Prelude["return"](__dict_Monad_165)(_238);
                    };
                    if (_239.length > 0) {
                        var _756 = _239.slice(1);
                        return Prelude[">>="](__dict_Monad_165["__superclasses"]["Prelude.Bind_1"]({}))(_237(_238)(_239[0]))(function (a$prime) {
                            return foldM(__dict_Monad_165)(_237)(a$prime)(_756);
                        });
                    };
                    throw "Failed pattern match";
                };
            };
        };
    };
    return {
        unless: unless, 
        when: when, 
        foldM: foldM, 
        replicateM: replicateM
    };
})();
var PS = PS || {};
PS.Control_Monad_Maybe_Trans = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Tuple = PS.Data_Tuple;
    var MaybeT = function (value0) {
        return {
            ctor: "Control.Monad.Maybe.Trans.MaybeT", 
            values: [ value0 ]
        };
    };
    var runMaybeT = function (_244) {
        return _244.values[0];
    };
    var monadTransMaybeT = function (_) {
        return {
            "__superclasses": {}, 
            lift: function (__dict_Monad_166) {
                return Prelude["<<<"](Prelude.semigroupoidArr({}))(MaybeT)(Prelude.liftM1(__dict_Monad_166)(Data_Maybe.Just));
            }
        };
    };
    var mapMaybeT = function (f) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(MaybeT)(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(runMaybeT));
    };
    var liftPassMaybe = function (__dict_Monad_168) {
        return function (pass) {
            return mapMaybeT(function (m) {
                return pass(Prelude[">>="](__dict_Monad_168["__superclasses"]["Prelude.Bind_1"]({}))(m)(function (_22) {
                    return Prelude["return"](__dict_Monad_168)((function (_760) {
                        if (_760.ctor === "Data.Maybe.Nothing") {
                            return Data_Tuple.Tuple(Data_Maybe.Nothing)(Prelude.id(Prelude.categoryArr({})));
                        };
                        if (_760.ctor === "Data.Maybe.Just") {
                            return Data_Tuple.Tuple(Data_Maybe.Just((_760.values[0]).values[0]))((_760.values[0]).values[1]);
                        };
                        throw "Failed pattern match";
                    })(_22));
                }));
            });
        };
    };
    var liftListenMaybe = function (__dict_Monad_169) {
        return function (listen) {
            return mapMaybeT(function (m) {
                return Prelude[">>="](__dict_Monad_169["__superclasses"]["Prelude.Bind_1"]({}))(listen(m))(function (_21) {
                    return Prelude["return"](__dict_Monad_169)(Prelude["<$>"](Data_Maybe.functorMaybe({}))(function (r) {
                        return Data_Tuple.Tuple(r)(_21.values[1]);
                    })(_21.values[0]));
                });
            });
        };
    };
    var liftCatchMaybe = function ($$catch) {
        return function (m) {
            return function (h) {
                return MaybeT($$catch(runMaybeT(m))(Prelude["<<<"](Prelude.semigroupoidArr({}))(runMaybeT)(h)));
            };
        };
    };
    var liftCallCCMaybe = function (callCC) {
        return function (f) {
            return MaybeT(callCC(function (c) {
                return runMaybeT(f(function (a) {
                    return MaybeT(c(Data_Maybe.Just(a)));
                }));
            }));
        };
    };
    var applicativeMaybeT = function (__dict_Monad_173) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyMaybeT(__dict_Monad_173);
                }
            }, 
            pure: Prelude["<<<"](Prelude.semigroupoidArr({}))(MaybeT)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude.pure(__dict_Monad_173["__superclasses"]["Prelude.Applicative_0"]({})))(Data_Maybe.Just))
        };
    };
    var applyMaybeT = function (__dict_Monad_172) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorMaybeT(__dict_Monad_172);
                }
            }, 
            "<*>": Prelude.ap(monadMaybeT(__dict_Monad_172))
        };
    };
    var functorMaybeT = function (__dict_Monad_170) {
        return {
            "__superclasses": {}, 
            "<$>": Prelude.liftA1(applicativeMaybeT(__dict_Monad_170))
        };
    };
    var monadMaybeT = function (__dict_Monad_167) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeMaybeT(__dict_Monad_167);
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindMaybeT(__dict_Monad_167);
                }
            }
        };
    };
    var bindMaybeT = function (__dict_Monad_171) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyMaybeT(__dict_Monad_171);
                }
            }, 
            ">>=": function (x) {
                return function (f) {
                    return MaybeT(Prelude[">>="](__dict_Monad_171["__superclasses"]["Prelude.Bind_1"]({}))(runMaybeT(x))(function (_20) {
                        if (_20.ctor === "Data.Maybe.Nothing") {
                            return Prelude["return"](__dict_Monad_171)(Data_Maybe.Nothing);
                        };
                        if (_20.ctor === "Data.Maybe.Just") {
                            return runMaybeT(f(_20.values[0]));
                        };
                        throw "Failed pattern match";
                    }));
                };
            }
        };
    };
    return {
        MaybeT: MaybeT, 
        liftCallCCMaybe: liftCallCCMaybe, 
        liftPassMaybe: liftPassMaybe, 
        liftListenMaybe: liftListenMaybe, 
        liftCatchMaybe: liftCatchMaybe, 
        mapMaybeT: mapMaybeT, 
        runMaybeT: runMaybeT, 
        functorMaybeT: functorMaybeT, 
        applyMaybeT: applyMaybeT, 
        applicativeMaybeT: applicativeMaybeT, 
        bindMaybeT: bindMaybeT, 
        monadMaybeT: monadMaybeT, 
        monadTransMaybeT: monadTransMaybeT
    };
})();
var PS = PS || {};
PS.Control_Monad_Cont_Class = (function () {
    "use strict";
    var Control_Monad_Cont_Trans = PS.Control_Monad_Cont_Trans;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    var monadContContT = function (__dict_Monad_174) {
        return {
            "__superclasses": {}, 
            callCC: Control_Monad_Cont_Trans.callCC
        };
    };
    var callCC = function (dict) {
        return dict.callCC;
    };
    var monadContErrorT = function (__dict_Error_175) {
        return function (__dict_MonadCont_176) {
            return {
                "__superclasses": {}, 
                callCC: Control_Monad_Error_Trans.liftCallCCError(callCC(__dict_MonadCont_176))
            };
        };
    };
    var monadContMaybeT = function (__dict_MonadCont_177) {
        return {
            "__superclasses": {}, 
            callCC: Control_Monad_Maybe_Trans.liftCallCCMaybe(callCC(__dict_MonadCont_177))
        };
    };
    var monadContReaderT = function (__dict_MonadCont_178) {
        return {
            "__superclasses": {}, 
            callCC: Control_Monad_Reader_Trans.liftCallCCReader(callCC(__dict_MonadCont_178))
        };
    };
    var monadContStateT = function (__dict_MonadCont_179) {
        return {
            "__superclasses": {}, 
            callCC: Control_Monad_State_Trans["liftCallCCState'"](callCC(__dict_MonadCont_179))
        };
    };
    var monadWriterT = function (__dict_Monoid_180) {
        return function (__dict_MonadCont_181) {
            return {
                "__superclasses": {}, 
                callCC: Control_Monad_Writer_Trans.liftCallCCWriter(__dict_Monoid_180)(callCC(__dict_MonadCont_181))
            };
        };
    };
    return {
        callCC: callCC, 
        monadContContT: monadContContT, 
        monadContErrorT: monadContErrorT, 
        monadContMaybeT: monadContMaybeT, 
        monadContReaderT: monadContReaderT, 
        monadContStateT: monadContStateT, 
        monadWriterT: monadWriterT
    };
})();
var PS = PS || {};
PS.Control_Monad_Error_Class = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    var Data_Either = PS.Data_Either;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    var throwError = function (dict) {
        return dict.throwError;
    };
    var monadErrorErrorT = function (__dict_Monad_182) {
        return function (__dict_Error_183) {
            return {
                "__superclasses": {}, 
                throwError: function (e) {
                    return Control_Monad_Error_Trans.ErrorT(Prelude["return"](__dict_Monad_182)(Data_Either.Left(e)));
                }, 
                catchError: function (m) {
                    return function (h) {
                        return Control_Monad_Error_Trans.ErrorT(Prelude[">>="](__dict_Monad_182["__superclasses"]["Prelude.Bind_1"]({}))(Control_Monad_Error_Trans.runErrorT(m))(function (_23) {
                            if (_23.ctor === "Data.Either.Left") {
                                return Control_Monad_Error_Trans.runErrorT(h(_23.values[0]));
                            };
                            if (_23.ctor === "Data.Either.Right") {
                                return Prelude["return"](__dict_Monad_182)(Data_Either.Right(_23.values[0]));
                            };
                            throw "Failed pattern match";
                        }));
                    };
                }
            };
        };
    };
    var monadErrorError = function (__dict_Error_184) {
        return {
            "__superclasses": {}, 
            throwError: Data_Either.Left, 
            catchError: function (_245) {
                return function (_246) {
                    if (_245.ctor === "Data.Either.Left") {
                        return _246(_245.values[0]);
                    };
                    if (_245.ctor === "Data.Either.Right") {
                        return Data_Either.Right(_245.values[0]);
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var catchError = function (dict) {
        return dict.catchError;
    };
    var monadErrorMaybeT = function (__dict_Monad_185) {
        return function (__dict_MonadError_186) {
            return {
                "__superclasses": {}, 
                throwError: function (e) {
                    return Control_Monad_Trans.lift(Control_Monad_Maybe_Trans.monadTransMaybeT({}))(__dict_Monad_185)(throwError(__dict_MonadError_186)(e));
                }, 
                catchError: Control_Monad_Maybe_Trans.liftCatchMaybe(catchError(__dict_MonadError_186))
            };
        };
    };
    var monadErrorReaderT = function (__dict_Monad_187) {
        return function (__dict_MonadError_188) {
            return {
                "__superclasses": {}, 
                throwError: function (e) {
                    return Control_Monad_Trans.lift(Control_Monad_Reader_Trans.monadTransReaderT({}))(__dict_Monad_187)(throwError(__dict_MonadError_188)(e));
                }, 
                catchError: Control_Monad_Reader_Trans.liftCatchReader(catchError(__dict_MonadError_188))
            };
        };
    };
    var monadErrorStateT = function (__dict_Monad_189) {
        return function (__dict_MonadError_190) {
            return {
                "__superclasses": {}, 
                throwError: function (e) {
                    return Control_Monad_Trans.lift(Control_Monad_State_Trans.monadTransStateT({}))(__dict_Monad_189)(throwError(__dict_MonadError_190)(e));
                }, 
                catchError: Control_Monad_State_Trans.liftCatchState(catchError(__dict_MonadError_190))
            };
        };
    };
    var monadErrorWriterT = function (__dict_Monad_191) {
        return function (__dict_Monoid_192) {
            return function (__dict_MonadError_193) {
                return {
                    "__superclasses": {}, 
                    throwError: function (e) {
                        return Control_Monad_Trans.lift(Control_Monad_Writer_Trans.monadTransWriterT(__dict_Monoid_192))(__dict_Monad_191)(throwError(__dict_MonadError_193)(e));
                    }, 
                    catchError: Control_Monad_Writer_Trans.liftCatchWriter(catchError(__dict_MonadError_193))
                };
            };
        };
    };
    return {
        catchError: catchError, 
        throwError: throwError, 
        monadErrorError: monadErrorError, 
        monadErrorErrorT: monadErrorErrorT, 
        monadErrorMaybeT: monadErrorMaybeT, 
        monadErrorReaderT: monadErrorReaderT, 
        monadErrorWriterT: monadErrorWriterT, 
        monadErrorStateT: monadErrorStateT
    };
})();
var PS = PS || {};
PS.Control_Monad_Reader_Class = (function () {
    "use strict";
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Prelude = PS.Prelude;
    var Control_Monad_RWS = PS.Control_Monad_RWS;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    var monadReaderReaderT = function (__dict_Monad_194) {
        return {
            "__superclasses": {}, 
            ask: Control_Monad_Reader_Trans.ReaderT(Prelude["return"](__dict_Monad_194)), 
            local: Control_Monad_Reader_Trans.withReaderT
        };
    };
    var monadReaderRWST = function (__dict_Monad_195) {
        return function (__dict_Monoid_196) {
            return {
                "__superclasses": {}, 
                ask: Control_Monad_RWS.ask(__dict_Monad_195["__superclasses"]["Prelude.Applicative_0"]({}))(__dict_Monoid_196), 
                local: Control_Monad_RWS.local
            };
        };
    };
    var monadReaderFun = function (_) {
        return {
            "__superclasses": {}, 
            ask: Prelude.id(Prelude.categoryArr({})), 
            local: Prelude[">>>"](Prelude.semigroupoidArr({}))
        };
    };
    var local = function (dict) {
        return dict.local;
    };
    var ask = function (dict) {
        return dict.ask;
    };
    var monadReaderErrorT = function (__dict_Monad_197) {
        return function (__dict_Error_198) {
            return function (__dict_MonadReader_199) {
                return {
                    "__superclasses": {}, 
                    ask: Control_Monad_Trans.lift(Control_Monad_Error_Trans.monadTransErrorT(__dict_Error_198))(__dict_Monad_197)(ask(__dict_MonadReader_199)), 
                    local: function (f) {
                        return Control_Monad_Error_Trans.mapErrorT(local(__dict_MonadReader_199)(f));
                    }
                };
            };
        };
    };
    var monadReaderMaybeT = function (__dict_Monad_200) {
        return function (__dict_MonadReader_201) {
            return {
                "__superclasses": {}, 
                ask: Control_Monad_Trans.lift(Control_Monad_Maybe_Trans.monadTransMaybeT({}))(__dict_Monad_200)(ask(__dict_MonadReader_201)), 
                local: function (f) {
                    return Control_Monad_Maybe_Trans.mapMaybeT(local(__dict_MonadReader_201)(f));
                }
            };
        };
    };
    var monadReaderStateT = function (__dict_Monad_202) {
        return function (__dict_MonadReader_203) {
            return {
                "__superclasses": {}, 
                ask: Control_Monad_Trans.lift(Control_Monad_State_Trans.monadTransStateT({}))(__dict_Monad_202)(ask(__dict_MonadReader_203)), 
                local: function (f) {
                    return Control_Monad_State_Trans.mapStateT(local(__dict_MonadReader_203)(f));
                }
            };
        };
    };
    var monadReaderWriterT = function (__dict_Monad_204) {
        return function (__dict_Monoid_205) {
            return function (__dict_MonadReader_206) {
                return {
                    "__superclasses": {}, 
                    ask: Control_Monad_Trans.lift(Control_Monad_Writer_Trans.monadTransWriterT(__dict_Monoid_205))(__dict_Monad_204)(ask(__dict_MonadReader_206)), 
                    local: function (f) {
                        return Control_Monad_Writer_Trans.mapWriterT(local(__dict_MonadReader_206)(f));
                    }
                };
            };
        };
    };
    var reader = function (__dict_Monad_207) {
        return function (__dict_MonadReader_208) {
            return function (f) {
                return Prelude[">>="](__dict_Monad_207["__superclasses"]["Prelude.Bind_1"]({}))(ask(__dict_MonadReader_208))(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude["return"](__dict_Monad_207))(f));
            };
        };
    };
    return {
        reader: reader, 
        local: local, 
        ask: ask, 
        monadReaderFun: monadReaderFun, 
        monadReaderReaderT: monadReaderReaderT, 
        monadReaderErrorT: monadReaderErrorT, 
        monadReaderMaybeT: monadReaderMaybeT, 
        monadReaderWriterT: monadReaderWriterT, 
        monadReaderStateT: monadReaderStateT, 
        monadReaderRWST: monadReaderRWST
    };
})();
var PS = PS || {};
PS.Control_Monad_State_Class = (function () {
    "use strict";
    var Data_Tuple = PS.Data_Tuple;
    var Prelude = PS.Prelude;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Control_Monad_RWS = PS.Control_Monad_RWS;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    var state = function (dict) {
        return dict.state;
    };
    var put = function (__dict_Monad_209) {
        return function (__dict_MonadState_210) {
            return function (s) {
                return state(__dict_MonadState_210)(function (_) {
                    return Data_Tuple.Tuple(Prelude.unit)(s);
                });
            };
        };
    };
    var monadStateWriterT = function (__dict_Monad_211) {
        return function (__dict_Monoid_212) {
            return function (__dict_MonadState_213) {
                return {
                    "__superclasses": {}, 
                    state: function (f) {
                        return Control_Monad_Trans.lift(Control_Monad_Writer_Trans.monadTransWriterT(__dict_Monoid_212))(__dict_Monad_211)(state(__dict_MonadState_213)(f));
                    }
                };
            };
        };
    };
    var monadStateStateT1 = function (__dict_Monad_214) {
        return function (__dict_MonadState_215) {
            return {
                "__superclasses": {}, 
                state: function (f) {
                    return Control_Monad_Trans.lift(Control_Monad_State_Trans.monadTransStateT({}))(__dict_Monad_214)(state(__dict_MonadState_215)(f));
                }
            };
        };
    };
    var monadStateStateT = function (__dict_Monad_216) {
        return {
            "__superclasses": {}, 
            state: function (f) {
                return Control_Monad_State_Trans.StateT(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude["return"](__dict_Monad_216))(f));
            }
        };
    };
    var monadStateReaderT = function (__dict_Monad_217) {
        return function (__dict_MonadState_218) {
            return {
                "__superclasses": {}, 
                state: function (f) {
                    return Control_Monad_Trans.lift(Control_Monad_Reader_Trans.monadTransReaderT({}))(__dict_Monad_217)(state(__dict_MonadState_218)(f));
                }
            };
        };
    };
    var monadStateRWST = function (__dict_Monad_219) {
        return function (__dict_Monoid_220) {
            return {
                "__superclasses": {}, 
                state: Control_Monad_RWS.state(__dict_Monad_219["__superclasses"]["Prelude.Applicative_0"]({}))(__dict_Monoid_220)
            };
        };
    };
    var monadStateMaybeT = function (__dict_Monad_221) {
        return function (__dict_MonadState_222) {
            return {
                "__superclasses": {}, 
                state: function (f) {
                    return Control_Monad_Trans.lift(Control_Monad_Maybe_Trans.monadTransMaybeT({}))(__dict_Monad_221)(state(__dict_MonadState_222)(f));
                }
            };
        };
    };
    var monadStateErrorT = function (__dict_Monad_223) {
        return function (__dict_Error_224) {
            return function (__dict_MonadState_225) {
                return {
                    "__superclasses": {}, 
                    state: function (f) {
                        return Control_Monad_Trans.lift(Control_Monad_Error_Trans.monadTransErrorT(__dict_Error_224))(__dict_Monad_223)(state(__dict_MonadState_225)(f));
                    }
                };
            };
        };
    };
    var modify = function (__dict_Monad_226) {
        return function (__dict_MonadState_227) {
            return function (f) {
                return state(__dict_MonadState_227)(function (s) {
                    return Data_Tuple.Tuple(Prelude.unit)(f(s));
                });
            };
        };
    };
    var gets = function (__dict_Monad_228) {
        return function (__dict_MonadState_229) {
            return function (f) {
                return state(__dict_MonadState_229)(function (s) {
                    return Data_Tuple.Tuple(f(s))(s);
                });
            };
        };
    };
    var get = function (__dict_Monad_230) {
        return function (__dict_MonadState_231) {
            return state(__dict_MonadState_231)(function (s) {
                return Data_Tuple.Tuple(s)(s);
            });
        };
    };
    return {
        modify: modify, 
        put: put, 
        gets: gets, 
        get: get, 
        state: state, 
        monadStateStateT: monadStateStateT, 
        monadStateStateT1: monadStateStateT1, 
        monadStateErrorT: monadStateErrorT, 
        monadStateMaybeT: monadStateMaybeT, 
        monadStateReaderT: monadStateReaderT, 
        monadStateWriterT: monadStateWriterT, 
        monadStateRWST: monadStateRWST
    };
})();
var PS = PS || {};
PS.Control_Monad_Writer_Class = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    var Control_Monad_RWS = PS.Control_Monad_RWS;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var writer = function (dict) {
        return dict.writer;
    };
    var tell = function (__dict_Monoid_232) {
        return function (__dict_Monad_233) {
            return function (__dict_MonadWriter_234) {
                return function (w) {
                    return writer(__dict_MonadWriter_234)(Data_Tuple.Tuple(Prelude.unit)(w));
                };
            };
        };
    };
    var pass = function (dict) {
        return dict.pass;
    };
    var monadWriterWriterT = function (__dict_Monoid_235) {
        return function (__dict_Monad_236) {
            return {
                "__superclasses": {}, 
                writer: Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Writer_Trans.WriterT)(Prelude["return"](__dict_Monad_236)), 
                listen: function (m) {
                    return Control_Monad_Writer_Trans.WriterT(Prelude[">>="](__dict_Monad_236["__superclasses"]["Prelude.Bind_1"]({}))(Control_Monad_Writer_Trans.runWriterT(m))(function (_26) {
                        return Prelude["return"](__dict_Monad_236)(Data_Tuple.Tuple(Data_Tuple.Tuple(_26.values[0])(_26.values[1]))(_26.values[1]));
                    }));
                }, 
                pass: function (m) {
                    return Control_Monad_Writer_Trans.WriterT(Prelude[">>="](__dict_Monad_236["__superclasses"]["Prelude.Bind_1"]({}))(Control_Monad_Writer_Trans.runWriterT(m))(function (_27) {
                        return Prelude["return"](__dict_Monad_236)(Data_Tuple.Tuple((_27.values[0]).values[0])((_27.values[0]).values[1](_27.values[1])));
                    }));
                }
            };
        };
    };
    var monadWriterRWST = function (__dict_Monad_237) {
        return function (__dict_Monoid_238) {
            return {
                "__superclasses": {}, 
                writer: Control_Monad_RWS.writer(__dict_Monad_237["__superclasses"]["Prelude.Applicative_0"]({})), 
                listen: Control_Monad_RWS.listen(__dict_Monad_237), 
                pass: Control_Monad_RWS.pass(__dict_Monad_237)
            };
        };
    };
    var listen = function (dict) {
        return dict.listen;
    };
    var listens = function (__dict_Monoid_239) {
        return function (__dict_Monad_240) {
            return function (__dict_MonadWriter_241) {
                return function (f) {
                    return function (m) {
                        return Prelude[">>="](__dict_Monad_240["__superclasses"]["Prelude.Bind_1"]({}))(listen(__dict_MonadWriter_241)(m))(function (_24) {
                            return Prelude["return"](__dict_Monad_240)(Data_Tuple.Tuple(_24.values[0])(f(_24.values[1])));
                        });
                    };
                };
            };
        };
    };
    var monadWriterErrorT = function (__dict_Monad_242) {
        return function (__dict_Error_243) {
            return function (__dict_MonadWriter_244) {
                return {
                    "__superclasses": {}, 
                    writer: function (wd) {
                        return Control_Monad_Trans.lift(Control_Monad_Error_Trans.monadTransErrorT(__dict_Error_243))(__dict_Monad_242)(writer(__dict_MonadWriter_244)(wd));
                    }, 
                    listen: Control_Monad_Error_Trans.liftListenError(__dict_Monad_242)(listen(__dict_MonadWriter_244)), 
                    pass: Control_Monad_Error_Trans.liftPassError(__dict_Monad_242)(pass(__dict_MonadWriter_244))
                };
            };
        };
    };
    var monadWriterMaybeT = function (__dict_Monad_245) {
        return function (__dict_MonadWriter_246) {
            return {
                "__superclasses": {}, 
                writer: function (wd) {
                    return Control_Monad_Trans.lift(Control_Monad_Maybe_Trans.monadTransMaybeT({}))(__dict_Monad_245)(writer(__dict_MonadWriter_246)(wd));
                }, 
                listen: Control_Monad_Maybe_Trans.liftListenMaybe(__dict_Monad_245)(listen(__dict_MonadWriter_246)), 
                pass: Control_Monad_Maybe_Trans.liftPassMaybe(__dict_Monad_245)(pass(__dict_MonadWriter_246))
            };
        };
    };
    var monadWriterReaderT = function (__dict_Monad_247) {
        return function (__dict_MonadWriter_248) {
            return {
                "__superclasses": {}, 
                writer: function (wd) {
                    return Control_Monad_Trans.lift(Control_Monad_Reader_Trans.monadTransReaderT({}))(__dict_Monad_247)(writer(__dict_MonadWriter_248)(wd));
                }, 
                listen: Control_Monad_Reader_Trans.mapReaderT(listen(__dict_MonadWriter_248)), 
                pass: Control_Monad_Reader_Trans.mapReaderT(pass(__dict_MonadWriter_248))
            };
        };
    };
    var monadWriterStateT = function (__dict_Monad_249) {
        return function (__dict_MonadWriter_250) {
            return {
                "__superclasses": {}, 
                writer: function (wd) {
                    return Control_Monad_Trans.lift(Control_Monad_State_Trans.monadTransStateT({}))(__dict_Monad_249)(writer(__dict_MonadWriter_250)(wd));
                }, 
                listen: Control_Monad_State_Trans.liftListenState(__dict_Monad_249)(listen(__dict_MonadWriter_250)), 
                pass: Control_Monad_State_Trans.liftPassState(__dict_Monad_249)(pass(__dict_MonadWriter_250))
            };
        };
    };
    var censor = function (__dict_Monoid_251) {
        return function (__dict_Monad_252) {
            return function (__dict_MonadWriter_253) {
                return function (f) {
                    return function (m) {
                        return pass(__dict_MonadWriter_253)(Prelude[">>="](__dict_Monad_252["__superclasses"]["Prelude.Bind_1"]({}))(m)(function (_25) {
                            return Prelude["return"](__dict_Monad_252)(Data_Tuple.Tuple(_25)(f));
                        }));
                    };
                };
            };
        };
    };
    return {
        censor: censor, 
        listens: listens, 
        tell: tell, 
        pass: pass, 
        listen: listen, 
        writer: writer, 
        monadWriterWriterT: monadWriterWriterT, 
        monadWriterErrorT: monadWriterErrorT, 
        monadWriterMaybeT: monadWriterMaybeT, 
        monadWriterStateT: monadWriterStateT, 
        monadWriterReaderT: monadWriterReaderT, 
        monadWriterRWST: monadWriterRWST
    };
})();
var PS = PS || {};
PS.Control_Monad_RWS_Class = (function () {
    "use strict";
    var Control_Monad_RWS_Trans = PS.Control_Monad_RWS_Trans;
    var Control_Monad_Reader_Class = PS.Control_Monad_Reader_Class;
    var Control_Monad_Writer_Class = PS.Control_Monad_Writer_Class;
    var Control_Monad_State_Class = PS.Control_Monad_State_Class;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    var monadRWSRWST = function (__dict_Monad_254) {
        return function (__dict_Monoid_255) {
            return {
                "__superclasses": {
                    "Prelude.Monad_0": function (_) {
                        return Control_Monad_RWS_Trans.monadRWST(__dict_Monad_254)(__dict_Monoid_255);
                    }, 
                    "Data.Monoid.Monoid_1": function (_) {
                        return __dict_Monoid_255;
                    }, 
                    "Control.Monad.Reader.Class.MonadReader_2": function (_) {
                        return Control_Monad_Reader_Class.monadReaderRWST(__dict_Monad_254)(__dict_Monoid_255);
                    }, 
                    "Control.Monad.Writer.Class.MonadWriter_3": function (_) {
                        return Control_Monad_Writer_Class.monadWriterRWST(__dict_Monad_254)(__dict_Monoid_255);
                    }, 
                    "Control.Monad.State.Class.MonadState_4": function (_) {
                        return Control_Monad_State_Class.monadStateRWST(__dict_Monad_254)(__dict_Monoid_255);
                    }
                }
            };
        };
    };
    var monadRWSMaybeT = function (__dict_Monad_256) {
        return function (__dict_Monoid_257) {
            return function (__dict_MonadRWS_258) {
                return function (__dict_MonadReader_259) {
                    return function (__dict_MonadWriter_260) {
                        return function (__dict_MonadState_261) {
                            return {
                                "__superclasses": {
                                    "Prelude.Monad_0": function (_) {
                                        return Control_Monad_Maybe_Trans.monadMaybeT(__dict_Monad_256);
                                    }, 
                                    "Data.Monoid.Monoid_1": function (_) {
                                        return __dict_Monoid_257;
                                    }, 
                                    "Control.Monad.Reader.Class.MonadReader_2": function (_) {
                                        return Control_Monad_Reader_Class.monadReaderMaybeT(__dict_Monad_256)(__dict_MonadReader_259);
                                    }, 
                                    "Control.Monad.Writer.Class.MonadWriter_3": function (_) {
                                        return Control_Monad_Writer_Class.monadWriterMaybeT(__dict_Monad_256)(__dict_MonadWriter_260);
                                    }, 
                                    "Control.Monad.State.Class.MonadState_4": function (_) {
                                        return Control_Monad_State_Class.monadStateMaybeT(__dict_Monad_256)(__dict_MonadState_261);
                                    }
                                }
                            };
                        };
                    };
                };
            };
        };
    };
    var monadRWSErrorT = function (__dict_Monad_262) {
        return function (__dict_Monoid_263) {
            return function (__dict_MonadRWS_264) {
                return function (__dict_MonadReader_265) {
                    return function (__dict_MonadWriter_266) {
                        return function (__dict_MonadState_267) {
                            return function (__dict_Error_268) {
                                return {
                                    "__superclasses": {
                                        "Prelude.Monad_0": function (_) {
                                            return Control_Monad_Error_Trans.monadErrorT(__dict_Monad_262)(__dict_Error_268);
                                        }, 
                                        "Data.Monoid.Monoid_1": function (_) {
                                            return __dict_Monoid_263;
                                        }, 
                                        "Control.Monad.Reader.Class.MonadReader_2": function (_) {
                                            return Control_Monad_Reader_Class.monadReaderErrorT(__dict_Monad_262)(__dict_Error_268)(__dict_MonadReader_265);
                                        }, 
                                        "Control.Monad.Writer.Class.MonadWriter_3": function (_) {
                                            return Control_Monad_Writer_Class.monadWriterErrorT(__dict_Monad_262)(__dict_Error_268)(__dict_MonadWriter_266);
                                        }, 
                                        "Control.Monad.State.Class.MonadState_4": function (_) {
                                            return Control_Monad_State_Class.monadStateErrorT(__dict_Monad_262)(__dict_Error_268)(__dict_MonadState_267);
                                        }
                                    }
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    return {
        monadRWSRWST: monadRWSRWST, 
        monadRWSErrorT: monadRWSErrorT, 
        monadRWSMaybeT: monadRWSMaybeT
    };
})();
var PS = PS || {};
PS.Test_FeatureSpec = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_RWS_Trans = PS.Control_Monad_RWS_Trans;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Data_Array = PS.Data_Array;
    var Control_Monad_RWS = PS.Control_Monad_RWS;
    var Data_Monoid = PS.Data_Monoid;
    var Data_String_Chalk = PS.Data_String_Chalk;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Debug_Trace = PS.Debug_Trace;
    var Data_String = PS.Data_String;
    var Pending = {
        ctor: "Test.FeatureSpec.Pending", 
        values: [  ]
    };
    var Good = function (value0) {
        return {
            ctor: "Test.FeatureSpec.Good", 
            values: [ value0 ]
        };
    };
    var Bad = function (value0) {
        return {
            ctor: "Test.FeatureSpec.Bad", 
            values: [ value0 ]
        };
    };
    var when = function (str) {
        return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Control_Monad_RWS.ask(Control_Monad_Identity.applicativeIdentity({}))(Data_Monoid.monoidArray({})))(function (_32) {
            return Control_Monad_RWS.tell(Control_Monad_Identity.applicativeIdentity({}))([ Data_String_Chalk.chalk(Data_String_Chalk.Green)(_32 + "When ") + str ]);
        });
    };
    var pending = Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Control_Monad_RWS.ask(Control_Monad_Identity.applicativeIdentity({}))(Data_Monoid.monoidArray({})))(function (_30) {
        return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Control_Monad_RWS.tell(Control_Monad_Identity.applicativeIdentity({}))([ Data_String_Chalk.chalk(Data_String_Chalk.Yellow)(_30 + "pending") ]))(function (_) {
            return Control_Monad_RWS.modify(Control_Monad_Identity.applicativeIdentity({}))(Data_Monoid.monoidArray({}))(Prelude[":"](Pending));
        });
    });
    var it = function (str) {
        return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Control_Monad_RWS.ask(Control_Monad_Identity.applicativeIdentity({}))(Data_Monoid.monoidArray({})))(function (_33) {
            return Control_Monad_RWS.tell(Control_Monad_Identity.applicativeIdentity({}))([ Data_String_Chalk.chalk(Data_String_Chalk.Green)(_33 + "It ") + str ]);
        });
    };
    var info = function (str) {
        return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Control_Monad_RWS.ask(Control_Monad_Identity.applicativeIdentity({}))(Data_Monoid.monoidArray({})))(function (_34) {
            return Control_Monad_RWS.tell(Control_Monad_Identity.applicativeIdentity({}))([ _34 + str ]);
        });
    };
    var indent = "  ";
    var spec = function (str) {
        return function (features) {
            return (function (_794) {
                return function __do() {
                    Debug_Trace.trace(Data_String_Chalk.chalk(Data_String_Chalk.Green)("Spec: ") + str)();
                    return Debug_Trace.trace(Data_String.joinWith("\n")(_794.log))();
                };
            })(Control_Monad_RWS.runRWS(features)(indent)([  ]));
        };
    };
    var given = function (str) {
        return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Control_Monad_RWS.ask(Control_Monad_Identity.applicativeIdentity({}))(Data_Monoid.monoidArray({})))(function (_31) {
            return Control_Monad_RWS.tell(Control_Monad_Identity.applicativeIdentity({}))([ Data_String_Chalk.chalk(Data_String_Chalk.Green)(_31 + "Given ") + str ]);
        });
    };
    var feature = function (str) {
        return function (scenarios) {
            return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Control_Monad_RWS.ask(Control_Monad_Identity.applicativeIdentity({}))(Data_Monoid.monoidArray({})))(function (_28) {
                var indent$prime = _28 + indent;
                return (function (_798) {
                    return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Control_Monad_RWS.tell(Control_Monad_Identity.applicativeIdentity({}))([ Data_String_Chalk.chalk(Data_String_Chalk.Green)(_28 + "Feature: ") + str ]))(function (_) {
                        return Control_Monad_RWS.tell(Control_Monad_Identity.applicativeIdentity({}))([ Data_String.joinWith("\n")(_798.log) ]);
                    });
                })(Control_Monad_RWS.runRWS(scenarios)(indent$prime)([  ]));
            });
        };
    };
    var eqResult = function (_) {
        return {
            "__superclasses": {}, 
            "==": function (_250) {
                return function (_251) {
                    if (_250.ctor === "Test.FeatureSpec.Pending") {
                        if (_251.ctor === "Test.FeatureSpec.Pending") {
                            return true;
                        };
                    };
                    if (_250.ctor === "Test.FeatureSpec.Good") {
                        if (_251.ctor === "Test.FeatureSpec.Good") {
                            return _250.values[0] === _251.values[0];
                        };
                    };
                    if (_250.ctor === "Test.FeatureSpec.Bad") {
                        if (_251.ctor === "Test.FeatureSpec.Bad") {
                            return _250.values[0] === _251.values[0];
                        };
                    };
                    return false;
                };
            }, 
            "/=": function (res) {
                return function (res$prime) {
                    return !Prelude["=="](eqResult({}))(res)(res$prime);
                };
            }
        };
    };
    var badResult = function (_249) {
        if (_249.ctor === "Test.FeatureSpec.Bad") {
            return true;
        };
        return false;
    };
    var scenario = function (str) {
        return function (tests) {
            return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Control_Monad_RWS.ask(Control_Monad_Identity.applicativeIdentity({}))(Data_Monoid.monoidArray({})))(function (_29) {
                var indent$prime = _29 + indent;
                return (function (_810) {
                    var badRes = Data_Array.filter(badResult)(_810.state);
                    var color = Data_Array["null"](badRes) ? [ Data_String_Chalk.Green ] : [ Data_String_Chalk.Red, Data_String_Chalk.Bold ];
                    return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Control_Monad_RWS.tell(Control_Monad_Identity.applicativeIdentity({}))([ Data_String_Chalk["chalk'"](color)(_29 + "Scenario: ") + str ]))(function (_) {
                        return Control_Monad_RWS.tell(Control_Monad_Identity.applicativeIdentity({}))([ Data_String.joinWith("\n")(_810.log) ]);
                    });
                })(Control_Monad_RWS.runRWS(tests)(indent$prime)([  ]));
            });
        };
    };
    var assert = function (_247) {
        return function (_248) {
            if (_247) {
                return Control_Monad_RWS.modify(Control_Monad_Identity.applicativeIdentity({}))(Data_Monoid.monoidArray({}))(Prelude[":"](Good(_248)));
            };
            if (!_247) {
                return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Control_Monad_RWS.ask(Control_Monad_Identity.applicativeIdentity({}))(Data_Monoid.monoidArray({})))(function (_35) {
                    var error = _35 + Data_String_Chalk["chalk'"]([ Data_String_Chalk.Red, Data_String_Chalk.Bold ])("Failed ") + _248;
                    return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Control_Monad_RWS.modify(Control_Monad_Identity.applicativeIdentity({}))(Data_Monoid.monoidArray({}))(Prelude[":"](Bad(error))))(function (_) {
                        return Control_Monad_RWS.tell(Control_Monad_Identity.applicativeIdentity({}))([ error ]);
                    });
                });
            };
            throw "Failed pattern match";
        };
    };
    var assert$prime = function (b) {
        return assert(b)("");
    };
    return {
        Pending: Pending, 
        Good: Good, 
        Bad: Bad, 
        badResult: badResult, 
        "assert'": assert$prime, 
        assert: assert, 
        info: info, 
        it: it, 
        when: when, 
        given: given, 
        pending: pending, 
        scenario: scenario, 
        feature: feature, 
        spec: spec, 
        indent: indent, 
        eqResult: eqResult
    };
})();
var PS = PS || {};
PS.Test_Test_FeatureSpec = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Test_FeatureSpec = PS.Test_FeatureSpec;
    var Control_Monad_RWS_Trans = PS.Control_Monad_RWS_Trans;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Data_Array = PS.Data_Array;
    var tvSet = {
        on: false
    };
    var pressPowerButton = function (tv) {
        var _816 = {};
        for (var _817 in tv) {
            if (tv.hasOwnProperty(_817)) {
                _816[_817] = tv[_817];
            };
        };
        _816.on = !tv.on;
        return _816;
    };
    var isOn = function (tv) {
        return tv.on;
    };
    var main = Test_FeatureSpec.spec("TvSetSpec")(Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Test_FeatureSpec.info("As a TV set owner"))(function (_) {
        return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Test_FeatureSpec.info("I want to be able to turn the TV on and off"))(function (_) {
            return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Test_FeatureSpec.info("So I can watch TV when I want"))(function (_) {
                return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Test_FeatureSpec.info("And save energy when I'm not watching TV"))(function (_) {
                    return Test_FeatureSpec.feature("TV power button")(Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Test_FeatureSpec.scenario("User presses power button when TV is off")(Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Test_FeatureSpec.given("a TV set that is switched off"))(function (_) {
                        return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Test_FeatureSpec.assert(!isOn(tvSet))("tv is off"))(function (_) {
                            return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Test_FeatureSpec.when("the power button is pressed"))(function (_) {
                                var tv$prime = pressPowerButton(tvSet);
                                return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Test_FeatureSpec.it("should switch on"))(function (_) {
                                    return Test_FeatureSpec.assert(isOn(tv$prime))("tv should be on");
                                });
                            });
                        });
                    })))(function (_) {
                        return Test_FeatureSpec.scenario("User presses power button when TV is on")(Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Test_FeatureSpec.given("a TV set that is switched on"))(function (_) {
                            var tv$prime = pressPowerButton(tvSet);
                            return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Test_FeatureSpec.assert(isOn(tv$prime))("tv starts on"))(function (_) {
                                return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Test_FeatureSpec.when("the power button is pressed"))(function (_) {
                                    var tv$prime$prime = pressPowerButton(tv$prime);
                                    return Prelude[">>="](Control_Monad_RWS_Trans.bindRWST(Control_Monad_Identity.bindIdentity({}))(Data_Array.semigroupArray({})))(Test_FeatureSpec.it("should switch off"))(function (_) {
                                        return Test_FeatureSpec.assert(!isOn(tv$prime$prime))("tv should be off");
                                    });
                                });
                            });
                        }));
                    }));
                });
            });
        });
    }));
    return {
        main: main, 
        pressPowerButton: pressPowerButton, 
        isOn: isOn, 
        tvSet: tvSet
    };
})();
var PS = PS || {};
PS.Control_Bind = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var $greater$eq$greater = function (__dict_Bind_269) {
        return function (f) {
            return function (g) {
                return function (a) {
                    return Prelude[">>="](__dict_Bind_269)(f(a))(g);
                };
            };
        };
    };
    var $eq$less$less = function (__dict_Bind_270) {
        return function (f) {
            return function (m) {
                return Prelude[">>="](__dict_Bind_270)(m)(f);
            };
        };
    };
    var $less$eq$less = function (__dict_Bind_271) {
        return function (f) {
            return function (g) {
                return function (a) {
                    return $eq$less$less(__dict_Bind_271)(f)(g(a));
                };
            };
        };
    };
    var join = function (__dict_Bind_272) {
        return function (m) {
            return Prelude[">>="](__dict_Bind_272)(m)(Prelude.id(Prelude.categoryArr({})));
        };
    };
    var ifM = function (__dict_Bind_273) {
        return function (cond) {
            return function (t) {
                return function (f) {
                    return Prelude[">>="](__dict_Bind_273)(cond)(function (cond$prime) {
                        return cond$prime ? t : f;
                    });
                };
            };
        };
    };
    return {
        ifM: ifM, 
        join: join, 
        "<=<": $less$eq$less, 
        ">=>": $greater$eq$greater, 
        "=<<": $eq$less$less
    };
})();
var PS = PS || {};
PS.Control_Apply = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var $less$times = function (__dict_Apply_274) {
        return function (a) {
            return function (b) {
                return Prelude["<*>"](__dict_Apply_274)(Prelude["<$>"](__dict_Apply_274["__superclasses"]["Prelude.Functor_0"]({}))(Prelude["const"])(a))(b);
            };
        };
    };
    var $times$greater = function (__dict_Apply_275) {
        return function (a) {
            return function (b) {
                return Prelude["<*>"](__dict_Apply_275)(Prelude["<$>"](__dict_Apply_275["__superclasses"]["Prelude.Functor_0"]({}))(Prelude["const"](Prelude.id(Prelude.categoryArr({}))))(a))(b);
            };
        };
    };
    var lift5 = function (__dict_Apply_276) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return function (c) {
                        return function (d) {
                            return function (e) {
                                return Prelude["<*>"](__dict_Apply_276)(Prelude["<*>"](__dict_Apply_276)(Prelude["<*>"](__dict_Apply_276)(Prelude["<*>"](__dict_Apply_276)(Prelude["<$>"](__dict_Apply_276["__superclasses"]["Prelude.Functor_0"]({}))(f)(a))(b))(c))(d))(e);
                            };
                        };
                    };
                };
            };
        };
    };
    var lift4 = function (__dict_Apply_277) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return function (c) {
                        return function (d) {
                            return Prelude["<*>"](__dict_Apply_277)(Prelude["<*>"](__dict_Apply_277)(Prelude["<*>"](__dict_Apply_277)(Prelude["<$>"](__dict_Apply_277["__superclasses"]["Prelude.Functor_0"]({}))(f)(a))(b))(c))(d);
                        };
                    };
                };
            };
        };
    };
    var lift3 = function (__dict_Apply_278) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return function (c) {
                        return Prelude["<*>"](__dict_Apply_278)(Prelude["<*>"](__dict_Apply_278)(Prelude["<$>"](__dict_Apply_278["__superclasses"]["Prelude.Functor_0"]({}))(f)(a))(b))(c);
                    };
                };
            };
        };
    };
    var lift2 = function (__dict_Apply_279) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return Prelude["<*>"](__dict_Apply_279)(Prelude["<$>"](__dict_Apply_279["__superclasses"]["Prelude.Functor_0"]({}))(f)(a))(b);
                };
            };
        };
    };
    var forever = function (__dict_Apply_280) {
        return function (a) {
            return $times$greater(__dict_Apply_280)(a)(forever(__dict_Apply_280)(a));
        };
    };
    return {
        forever: forever, 
        lift5: lift5, 
        lift4: lift4, 
        lift3: lift3, 
        lift2: lift2, 
        "*>": $times$greater, 
        "<*": $less$times
    };
})();
PS.Test_Test_FeatureSpec.main();
