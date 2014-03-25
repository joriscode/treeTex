/** @constructor */
ScalaJS.c.java_lang_Math$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.E$1 = 0.0;
  this.PI$1 = 0.0
});
ScalaJS.c.java_lang_Math$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Math$.prototype.constructor = ScalaJS.c.java_lang_Math$;
ScalaJS.c.java_lang_Math$.prototype.E__D = (function() {
  return this.E$1
});
ScalaJS.c.java_lang_Math$.prototype.PI__D = (function() {
  return this.PI$1
});
ScalaJS.c.java_lang_Math$.prototype.abs__I__I = (function(a) {
  return (ScalaJS.g["Math"]["abs"](a) | 0)
});
ScalaJS.c.java_lang_Math$.prototype.abs__J__J = (function(a) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromDouble__D__Lscala_scalajs_runtime_Long(ScalaJS.g["Math"]["abs"](ScalaJS.modules.scala_scalajs_js_Any().fromLong__J__Lscala_scalajs_js_Number(a)))
});
ScalaJS.c.java_lang_Math$.prototype.abs__F__F = (function(a) {
  return ScalaJS.g["Math"]["abs"](a)
});
ScalaJS.c.java_lang_Math$.prototype.abs__D__D = (function(a) {
  return ScalaJS.g["Math"]["abs"](a)
});
ScalaJS.c.java_lang_Math$.prototype.max__I__I__I = (function(a, b) {
  return (ScalaJS.g["Math"]["max"](a, b) | 0)
});
ScalaJS.c.java_lang_Math$.prototype.max__J__J__J = (function(a, b) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromDouble__D__Lscala_scalajs_runtime_Long(ScalaJS.g["Math"]["max"](ScalaJS.modules.scala_scalajs_js_Any().fromLong__J__Lscala_scalajs_js_Number(a), ScalaJS.modules.scala_scalajs_js_Any().fromLong__J__Lscala_scalajs_js_Number(b)))
});
ScalaJS.c.java_lang_Math$.prototype.max__F__F__F = (function(a, b) {
  return ScalaJS.g["Math"]["max"](a, b)
});
ScalaJS.c.java_lang_Math$.prototype.max__D__D__D = (function(a, b) {
  return ScalaJS.g["Math"]["max"](a, b)
});
ScalaJS.c.java_lang_Math$.prototype.min__I__I__I = (function(a, b) {
  return (ScalaJS.g["Math"]["min"](a, b) | 0)
});
ScalaJS.c.java_lang_Math$.prototype.min__J__J__J = (function(a, b) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromDouble__D__Lscala_scalajs_runtime_Long(ScalaJS.g["Math"]["min"](ScalaJS.modules.scala_scalajs_js_Any().fromLong__J__Lscala_scalajs_js_Number(a), ScalaJS.modules.scala_scalajs_js_Any().fromLong__J__Lscala_scalajs_js_Number(b)))
});
ScalaJS.c.java_lang_Math$.prototype.min__F__F__F = (function(a, b) {
  return ScalaJS.g["Math"]["min"](a, b)
});
ScalaJS.c.java_lang_Math$.prototype.min__D__D__D = (function(a, b) {
  return ScalaJS.g["Math"]["min"](a, b)
});
ScalaJS.c.java_lang_Math$.prototype.ceil__D__D = (function(a) {
  return ScalaJS.g["Math"]["ceil"](a)
});
ScalaJS.c.java_lang_Math$.prototype.floor__D__D = (function(a) {
  return ScalaJS.g["Math"]["floor"](a)
});
ScalaJS.c.java_lang_Math$.prototype.round__F__I = (function(a) {
  return (ScalaJS.g["Math"]["round"](a) | 0)
});
ScalaJS.c.java_lang_Math$.prototype.round__D__J = (function(a) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromDouble__D__Lscala_scalajs_runtime_Long(ScalaJS.g["Math"]["round"](a))
});
ScalaJS.c.java_lang_Math$.prototype.sqrt__D__D = (function(a) {
  return ScalaJS.g["Math"]["sqrt"](a)
});
ScalaJS.c.java_lang_Math$.prototype.pow__D__D__D = (function(a, b) {
  return ScalaJS.g["Math"]["pow"](a, b)
});
ScalaJS.c.java_lang_Math$.prototype.exp__D__D = (function(a) {
  return ScalaJS.g["Math"]["exp"](a)
});
ScalaJS.c.java_lang_Math$.prototype.log__D__D = (function(a) {
  return ScalaJS.g["Math"]["log"](a)
});
ScalaJS.c.java_lang_Math$.prototype.log10__D__D = (function(a) {
  return (this.log__D__D(a) / ScalaJS.g["Math"]["LN10"])
});
ScalaJS.c.java_lang_Math$.prototype.log1p__D__D = (function(a) {
  return this.log__D__D((a + 1))
});
ScalaJS.c.java_lang_Math$.prototype.sin__D__D = (function(a) {
  return ScalaJS.g["Math"]["sin"](a)
});
ScalaJS.c.java_lang_Math$.prototype.cos__D__D = (function(a) {
  return ScalaJS.g["Math"]["cos"](a)
});
ScalaJS.c.java_lang_Math$.prototype.tan__D__D = (function(a) {
  return ScalaJS.g["Math"]["tan"](a)
});
ScalaJS.c.java_lang_Math$.prototype.asin__D__D = (function(a) {
  return ScalaJS.g["Math"]["asin"](a)
});
ScalaJS.c.java_lang_Math$.prototype.acos__D__D = (function(a) {
  return ScalaJS.g["Math"]["acos"](a)
});
ScalaJS.c.java_lang_Math$.prototype.atan__D__D = (function(a) {
  return ScalaJS.g["Math"]["atan"](a)
});
ScalaJS.c.java_lang_Math$.prototype.atan2__D__D__D = (function(y, x) {
  return ScalaJS.g["Math"]["atan2"](y, x)
});
ScalaJS.c.java_lang_Math$.prototype.random__D = (function() {
  return ScalaJS.g["Math"]["random"]()
});
ScalaJS.c.java_lang_Math$.prototype.toDegrees__D__D = (function(a) {
  return ((a * 180.0) / this.PI__D())
});
ScalaJS.c.java_lang_Math$.prototype.toRadians__D__D = (function(a) {
  return ((a / 180.0) * this.PI__D())
});
ScalaJS.c.java_lang_Math$.prototype.signum__D__D = (function(a) {
  if ((a > 0)) {
    return 1.0
  } else {
    if ((a < 0)) {
      return -1.0
    } else {
      return a
    }
  }
});
ScalaJS.c.java_lang_Math$.prototype.signum__F__F = (function(a) {
  if ((a > 0)) {
    return 1.0
  } else {
    if ((a < 0)) {
      return -1.0
    } else {
      return a
    }
  }
});
ScalaJS.c.java_lang_Math$.prototype.cbrt__D__D = (function(a) {
  if (((a === 0) || ScalaJS.modules.scala_Predef().double2Double__D__Ljava_lang_Double(a).isNaN__Z())) {
    return a
  };
  if ((a < 0.0)) {
    var sign = -1.0
  } else {
    var sign = 1.0
  };
  var value = (sign * a);
  var x = 0.0;
  var xi = this.pow__D__D__D(value, 0.3333333333333333);
  while ((this.abs__D__D((x - xi)) >= 1.0E-16)) {
    x = xi;
    var x3 = ScalaJS.g["Math"]["pow"](x, 3);
    var x3Plusa = (x3 + value);
    xi = ((x * (x3Plusa + value)) / (x3Plusa + x3))
  };
  return (sign * xi)
});
ScalaJS.c.java_lang_Math$.prototype.nextUp__D__D = (function(a) {
  if (((a !== a) || (a === Infinity))) {
    return a
  } else {
    if ((a === -Infinity)) {
      return (-1.7976931348623157E308)
    } else {
      if ((a === 1.7976931348623157E308)) {
        return Infinity
      } else {
        if ((a === 0)) {
          return ScalaJS.modules.scala_Double().MinValue__D()
        } else {
          var d = ScalaJS.modules.java_lang_Math().max__D__D__D((ScalaJS.modules.java_lang_Math().abs__D__D(a) * 2.0E-16), ScalaJS.modules.scala_Double().MinValue__D());
          var ad = (a + d);
          if ((ad === Infinity)) {
            var xi0 = 1.7976931348623157E308
          } else {
            var xi0 = ad
          };
          return this.iter$1__p1__D__D__D__D__D(a, xi0, a, a)
        }
      }
    }
  }
});
ScalaJS.c.java_lang_Math$.prototype.nextAfter__D__D__D = (function(a, b) {
  if ((b < a)) {
    return (-this.nextUp__D__D((-a)))
  } else {
    if ((a < b)) {
      return this.nextUp__D__D(a)
    } else {
      if (((a !== a) || (b !== b))) {
        return NaN
      } else {
        return b
      }
    }
  }
});
ScalaJS.c.java_lang_Math$.prototype.ulp__D__D = (function(a) {
  if ((this.abs__D__D(a) === Infinity)) {
    return Infinity
  } else {
    if ((this.abs__D__D(a) === 1.7976931348623157E308)) {
      return this.pow__D__D__D(2.0, 971.0)
    } else {
      return (this.nextAfter__D__D__D(this.abs__D__D(a), 1.7976931348623157E308) - a)
    }
  }
});
ScalaJS.c.java_lang_Math$.prototype.hypot__D__D__D = (function(a, b) {
  if (((this.abs__D__D(a) === Infinity) || (this.abs__D__D(b) === Infinity))) {
    return Infinity
  } else {
    if ((ScalaJS.modules.scala_Predef().double2Double__D__Ljava_lang_Double(a).isNaN__Z() || ScalaJS.modules.scala_Predef().double2Double__D__Ljava_lang_Double(b).isNaN__Z())) {
      return NaN
    } else {
      if (((a === 0) && (b === 0))) {
        return 0.0
      } else {
        var x = this.abs__D__D(a);
        var y = this.abs__D__D(b);
        var m = this.max__D__D__D(x, y);
        var t = (this.min__D__D__D(x, y) / m);
        return (m * this.sqrt__D__D((1 + (t * t))))
      }
    }
  }
});
ScalaJS.c.java_lang_Math$.prototype.expm1__D__D = (function(a) {
  if (((a === 0) || ScalaJS.modules.scala_Predef().double2Double__D__Ljava_lang_Double(a).isNaN__Z())) {
    return a
  } else {
    if ((this.abs__D__D(a) < 1.0E-5)) {
      return (a + ((0.5 * a) * a))
    } else {
      return (this.exp__D__D(a) - 1.0)
    }
  }
});
ScalaJS.c.java_lang_Math$.prototype.sinh__D__D = (function(a) {
  if (((ScalaJS.modules.scala_Predef().double2Double__D__Ljava_lang_Double(a).isNaN__Z() || (a === 0.0)) || (this.abs__D__D(a) === Infinity))) {
    return a
  } else {
    return ((this.exp__D__D(a) - this.exp__D__D((-a))) / 2.0)
  }
});
ScalaJS.c.java_lang_Math$.prototype.cosh__D__D = (function(a) {
  if (ScalaJS.modules.scala_Predef().double2Double__D__Ljava_lang_Double(a).isNaN__Z()) {
    return a
  } else {
    if ((a === 0.0)) {
      return 1.0
    } else {
      if ((this.abs__D__D(a) === Infinity)) {
        return Infinity
      } else {
        return ((this.exp__D__D(a) + this.exp__D__D((-a))) / 2.0)
      }
    }
  }
});
ScalaJS.c.java_lang_Math$.prototype.tanh__D__D = (function(a) {
  if ((ScalaJS.modules.scala_Predef().double2Double__D__Ljava_lang_Double(a).isNaN__Z() || (a === 0.0))) {
    return a
  } else {
    if ((this.abs__D__D(a) === Infinity)) {
      return this.signum__D__D(a)
    } else {
      var expma = this.exp__D__D((-a));
      if ((expma === Infinity)) {
        return -1.0
      } else {
        var expa = this.exp__D__D(a);
        var ret = (expma / (expa + expma));
        return (1.0 - (2.0 * ret))
      }
    }
  }
});
ScalaJS.c.java_lang_Math$.prototype.iter$1__p1__D__D__D__D__D = (function(x, xi, n, a$1) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((ScalaJS.modules.java_lang_Math().abs__D__D((xi - x)) >= 1.0E-16)) {
      var c0 = ((xi + x) / 2);
      if (((c0 === -Infinity) || (c0 === Infinity))) {
        var c = (x + ((xi - x) / 2))
      } else {
        var c = c0
      };
      if ((n === c)) {
        return xi
      } else {
        if ((a$1 < c)) {
          var temp$xi = c;
          var temp$n = c;
          xi = temp$xi;
          n = temp$n;
          continue tailCallLoop
        } else {
          var temp$x = c;
          var temp$n = c;
          x = temp$x;
          n = temp$n;
          continue tailCallLoop
        }
      }
    } else {
      return xi
    }
  }
});
ScalaJS.c.java_lang_Math$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.java_lang_Math = this;
  this.E$1 = ScalaJS.g["Math"]["E"];
  this.PI$1 = ScalaJS.g["Math"]["PI"];
  return this
});
ScalaJS.c.java_lang_Math$.prototype.tanh__D__ = (function(a) {
  return ScalaJS.bD(this.tanh__D__D(a))
});
ScalaJS.c.java_lang_Math$.prototype.cosh__D__ = (function(a$2) {
  return ScalaJS.bD(this.cosh__D__D(a$2))
});
ScalaJS.c.java_lang_Math$.prototype.sinh__D__ = (function(a$3) {
  return ScalaJS.bD(this.sinh__D__D(a$3))
});
ScalaJS.c.java_lang_Math$.prototype.expm1__D__ = (function(a$4) {
  return ScalaJS.bD(this.expm1__D__D(a$4))
});
ScalaJS.c.java_lang_Math$.prototype.hypot__D__D__ = (function(a$5, b) {
  return ScalaJS.bD(this.hypot__D__D__D(a$5, b))
});
ScalaJS.c.java_lang_Math$.prototype.ulp__D__ = (function(a$6) {
  return ScalaJS.bD(this.ulp__D__D(a$6))
});
ScalaJS.c.java_lang_Math$.prototype.nextAfter__D__D__ = (function(a$7, b$2) {
  return ScalaJS.bD(this.nextAfter__D__D__D(a$7, b$2))
});
ScalaJS.c.java_lang_Math$.prototype.nextUp__D__ = (function(a$8) {
  return ScalaJS.bD(this.nextUp__D__D(a$8))
});
ScalaJS.c.java_lang_Math$.prototype.cbrt__D__ = (function(a$9) {
  return ScalaJS.bD(this.cbrt__D__D(a$9))
});
ScalaJS.c.java_lang_Math$.prototype.signum__F__ = (function(a$10) {
  return ScalaJS.bF(this.signum__F__F(a$10))
});
ScalaJS.c.java_lang_Math$.prototype.signum__D__ = (function(a$11) {
  return ScalaJS.bD(this.signum__D__D(a$11))
});
ScalaJS.c.java_lang_Math$.prototype.toRadians__D__ = (function(a$12) {
  return ScalaJS.bD(this.toRadians__D__D(a$12))
});
ScalaJS.c.java_lang_Math$.prototype.toDegrees__D__ = (function(a$13) {
  return ScalaJS.bD(this.toDegrees__D__D(a$13))
});
ScalaJS.c.java_lang_Math$.prototype.random__ = (function() {
  return ScalaJS.bD(this.random__D())
});
ScalaJS.c.java_lang_Math$.prototype.atan2__D__D__ = (function(y, x) {
  return ScalaJS.bD(this.atan2__D__D__D(y, x))
});
ScalaJS.c.java_lang_Math$.prototype.atan__D__ = (function(a$14) {
  return ScalaJS.bD(this.atan__D__D(a$14))
});
ScalaJS.c.java_lang_Math$.prototype.acos__D__ = (function(a$15) {
  return ScalaJS.bD(this.acos__D__D(a$15))
});
ScalaJS.c.java_lang_Math$.prototype.asin__D__ = (function(a$16) {
  return ScalaJS.bD(this.asin__D__D(a$16))
});
ScalaJS.c.java_lang_Math$.prototype.tan__D__ = (function(a$17) {
  return ScalaJS.bD(this.tan__D__D(a$17))
});
ScalaJS.c.java_lang_Math$.prototype.cos__D__ = (function(a$18) {
  return ScalaJS.bD(this.cos__D__D(a$18))
});
ScalaJS.c.java_lang_Math$.prototype.sin__D__ = (function(a$19) {
  return ScalaJS.bD(this.sin__D__D(a$19))
});
ScalaJS.c.java_lang_Math$.prototype.log1p__D__ = (function(a$20) {
  return ScalaJS.bD(this.log1p__D__D(a$20))
});
ScalaJS.c.java_lang_Math$.prototype.log10__D__ = (function(a$21) {
  return ScalaJS.bD(this.log10__D__D(a$21))
});
ScalaJS.c.java_lang_Math$.prototype.log__D__ = (function(a$22) {
  return ScalaJS.bD(this.log__D__D(a$22))
});
ScalaJS.c.java_lang_Math$.prototype.exp__D__ = (function(a$23) {
  return ScalaJS.bD(this.exp__D__D(a$23))
});
ScalaJS.c.java_lang_Math$.prototype.pow__D__D__ = (function(a$24, b$3) {
  return ScalaJS.bD(this.pow__D__D__D(a$24, b$3))
});
ScalaJS.c.java_lang_Math$.prototype.sqrt__D__ = (function(a$25) {
  return ScalaJS.bD(this.sqrt__D__D(a$25))
});
ScalaJS.c.java_lang_Math$.prototype.round__D__ = (function(a$26) {
  return ScalaJS.bJ(this.round__D__J(a$26))
});
ScalaJS.c.java_lang_Math$.prototype.round__F__ = (function(a$27) {
  return ScalaJS.bI(this.round__F__I(a$27))
});
ScalaJS.c.java_lang_Math$.prototype.floor__D__ = (function(a$28) {
  return ScalaJS.bD(this.floor__D__D(a$28))
});
ScalaJS.c.java_lang_Math$.prototype.ceil__D__ = (function(a$29) {
  return ScalaJS.bD(this.ceil__D__D(a$29))
});
ScalaJS.c.java_lang_Math$.prototype.min__D__D__ = (function(a$30, b$4) {
  return ScalaJS.bD(this.min__D__D__D(a$30, b$4))
});
ScalaJS.c.java_lang_Math$.prototype.min__F__F__ = (function(a$31, b$5) {
  return ScalaJS.bF(this.min__F__F__F(a$31, b$5))
});
ScalaJS.c.java_lang_Math$.prototype.min__J__J__ = (function(a$32, b$6) {
  return ScalaJS.bJ(this.min__J__J__J(a$32, b$6))
});
ScalaJS.c.java_lang_Math$.prototype.min__I__I__ = (function(a$33, b$7) {
  return ScalaJS.bI(this.min__I__I__I(a$33, b$7))
});
ScalaJS.c.java_lang_Math$.prototype.max__D__D__ = (function(a$34, b$8) {
  return ScalaJS.bD(this.max__D__D__D(a$34, b$8))
});
ScalaJS.c.java_lang_Math$.prototype.max__F__F__ = (function(a$35, b$9) {
  return ScalaJS.bF(this.max__F__F__F(a$35, b$9))
});
ScalaJS.c.java_lang_Math$.prototype.max__J__J__ = (function(a$36, b$10) {
  return ScalaJS.bJ(this.max__J__J__J(a$36, b$10))
});
ScalaJS.c.java_lang_Math$.prototype.max__I__I__ = (function(a$37, b$11) {
  return ScalaJS.bI(this.max__I__I__I(a$37, b$11))
});
ScalaJS.c.java_lang_Math$.prototype.abs__D__ = (function(a$38) {
  return ScalaJS.bD(this.abs__D__D(a$38))
});
ScalaJS.c.java_lang_Math$.prototype.abs__F__ = (function(a$39) {
  return ScalaJS.bF(this.abs__F__F(a$39))
});
ScalaJS.c.java_lang_Math$.prototype.abs__J__ = (function(a$40) {
  return ScalaJS.bJ(this.abs__J__J(a$40))
});
ScalaJS.c.java_lang_Math$.prototype.abs__I__ = (function(a$41) {
  return ScalaJS.bI(this.abs__I__I(a$41))
});
ScalaJS.c.java_lang_Math$.prototype.PI__ = (function() {
  return ScalaJS.bD(this.PI__D())
});
ScalaJS.c.java_lang_Math$.prototype.E__ = (function() {
  return ScalaJS.bD(this.E__D())
});
/** @constructor */
ScalaJS.inheritable.java_lang_Math$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Math$.prototype = ScalaJS.c.java_lang_Math$.prototype;
ScalaJS.is.java_lang_Math$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Math$)))
});
ScalaJS.as.java_lang_Math$ = (function(obj) {
  if ((ScalaJS.is.java_lang_Math$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Math")
  }
});
ScalaJS.isArrayOf.java_lang_Math$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Math$)))
});
ScalaJS.asArrayOf.java_lang_Math$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Math$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Math;", depth)
  }
});
ScalaJS.data.java_lang_Math$ = new ScalaJS.ClassTypeData({
  java_lang_Math$: 0
}, false, "java.lang.Math$", ScalaJS.data.java_lang_Object, {
  java_lang_Math$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Math$.prototype.$classData = ScalaJS.data.java_lang_Math$;
ScalaJS.moduleInstances.java_lang_Math = undefined;
ScalaJS.modules.java_lang_Math = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_Math)) {
    ScalaJS.moduleInstances.java_lang_Math = new ScalaJS.c.java_lang_Math$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_Math
});
//@ sourceMappingURL=Math$.js.map
