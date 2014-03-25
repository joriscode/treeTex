/** @constructor */
ScalaJS.c.scala_math_BigDecimal$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.minCached$1 = 0;
  this.maxCached$1 = 0;
  this.defaultMathContext$1 = null;
  this.MinLong$1 = null;
  this.MaxLong$1 = null;
  this.cache$1 = null;
  this.bitmap$0$1 = false
});
ScalaJS.c.scala_math_BigDecimal$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_BigDecimal$.prototype.constructor = ScalaJS.c.scala_math_BigDecimal$;
ScalaJS.c.scala_math_BigDecimal$.prototype.cache$lzycompute__p1__ALscala_math_BigDecimal = (function() {
  if ((!this.bitmap$0$1)) {
    this.cache$1 = ScalaJS.newArrayObject(ScalaJS.data.scala_math_BigDecimal.getArrayOf(), [((this.maxCached__p1__I() - this.minCached__p1__I()) + 1)]);
    this.bitmap$0$1 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.cache$1
});
ScalaJS.c.scala_math_BigDecimal$.prototype.minCached__p1__I = (function() {
  return this.minCached$1
});
ScalaJS.c.scala_math_BigDecimal$.prototype.maxCached__p1__I = (function() {
  return this.maxCached$1
});
ScalaJS.c.scala_math_BigDecimal$.prototype.defaultMathContext__Ljava_math_MathContext = (function() {
  return this.defaultMathContext$1
});
ScalaJS.c.scala_math_BigDecimal$.prototype.MinLong__Lscala_math_BigDecimal = (function() {
  return this.MinLong$1
});
ScalaJS.c.scala_math_BigDecimal$.prototype.MaxLong__Lscala_math_BigDecimal = (function() {
  return this.MaxLong$1
});
ScalaJS.c.scala_math_BigDecimal$.prototype.cache__p1__ALscala_math_BigDecimal = (function() {
  if ((!this.bitmap$0$1)) {
    return this.cache$lzycompute__p1__ALscala_math_BigDecimal()
  } else {
    return this.cache$1
  }
});
ScalaJS.c.scala_math_BigDecimal$.prototype.valueOf__D__Lscala_math_BigDecimal = (function(d) {
  return this.apply__Ljava_math_BigDecimal__Lscala_math_BigDecimal(ScalaJS.modules.java_math_BigDecimal().valueOf__D__Ljava_math_BigDecimal(d))
});
ScalaJS.c.scala_math_BigDecimal$.prototype.valueOf__D__Ljava_math_MathContext__Lscala_math_BigDecimal = (function(d, mc) {
  return this.apply__Ljava_math_BigDecimal__Ljava_math_MathContext__Lscala_math_BigDecimal(ScalaJS.modules.java_math_BigDecimal().valueOf__D__Ljava_math_BigDecimal(d), mc)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__I__Lscala_math_BigDecimal = (function(i) {
  return this.apply__I__Ljava_math_MathContext__Lscala_math_BigDecimal(i, this.defaultMathContext__Ljava_math_MathContext())
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__I__Ljava_math_MathContext__Lscala_math_BigDecimal = (function(i, mc) {
  if (((ScalaJS.anyRefEqEq(mc, this.defaultMathContext__Ljava_math_MathContext()) && (this.minCached__p1__I() <= i)) && (i <= this.maxCached__p1__I()))) {
    var offset = (i - this.minCached__p1__I());
    var n = this.cache__p1__ALscala_math_BigDecimal().underlying[offset];
    if ((n === null)) {
      n = new ScalaJS.c.scala_math_BigDecimal().init___Ljava_math_BigDecimal__Ljava_math_MathContext(ScalaJS.modules.java_math_BigDecimal().valueOf__J__Ljava_math_BigDecimal(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(i)), mc);
      this.cache__p1__ALscala_math_BigDecimal().underlying[offset] = n
    };
    return n
  } else {
    return new ScalaJS.c.scala_math_BigDecimal().init___Ljava_math_BigDecimal__Ljava_math_MathContext(ScalaJS.modules.java_math_BigDecimal().valueOf__J__Ljava_math_BigDecimal(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(i)), mc)
  }
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__J__Lscala_math_BigDecimal = (function(l) {
  if ((ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(this.minCached__p1__I()).$$less$eq__Lscala_scalajs_runtime_Long__Z(l) && l.$$less$eq__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(this.maxCached__p1__I())))) {
    return this.apply__I__Lscala_math_BigDecimal(l.toInt__I())
  } else {
    return new ScalaJS.c.scala_math_BigDecimal().init___Ljava_math_BigDecimal__Ljava_math_MathContext(ScalaJS.modules.java_math_BigDecimal().valueOf__J__Ljava_math_BigDecimal(l), this.defaultMathContext__Ljava_math_MathContext())
  }
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__J__Ljava_math_MathContext__Lscala_math_BigDecimal = (function(l, mc) {
  return new ScalaJS.c.scala_math_BigDecimal().init___Ljava_math_BigDecimal__Ljava_math_MathContext(new ScalaJS.c.java_math_BigDecimal().init___J__Ljava_math_MathContext(l, mc), mc)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__J__I__Lscala_math_BigDecimal = (function(unscaledVal, scale) {
  return this.apply__Lscala_math_BigInt__I__Lscala_math_BigDecimal(ScalaJS.modules.scala_math_BigInt().apply__J__Lscala_math_BigInt(unscaledVal), scale)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__J__I__Ljava_math_MathContext__Lscala_math_BigDecimal = (function(unscaledVal, scale, mc) {
  return this.apply__Lscala_math_BigInt__I__Ljava_math_MathContext__Lscala_math_BigDecimal(ScalaJS.modules.scala_math_BigInt().apply__J__Lscala_math_BigInt(unscaledVal), scale, mc)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__D__Lscala_math_BigDecimal = (function(d) {
  return this.apply__D__Ljava_math_MathContext__Lscala_math_BigDecimal(d, this.defaultMathContext__Ljava_math_MathContext())
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__D__Ljava_math_MathContext__Lscala_math_BigDecimal = (function(d, mc) {
  return new ScalaJS.c.scala_math_BigDecimal().init___Ljava_math_BigDecimal__Ljava_math_MathContext(new ScalaJS.c.java_math_BigDecimal().init___T__Ljava_math_MathContext(ScalaJS.modules.java_lang_Double().toString__D__T(d), mc), mc)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__AC__Lscala_math_BigDecimal = (function(x) {
  return this.apply__AC__Ljava_math_MathContext__Lscala_math_BigDecimal(x, this.defaultMathContext__Ljava_math_MathContext())
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__AC__Ljava_math_MathContext__Lscala_math_BigDecimal = (function(x, mc) {
  return new ScalaJS.c.scala_math_BigDecimal().init___Ljava_math_BigDecimal__Ljava_math_MathContext(new ScalaJS.c.java_math_BigDecimal().init___T__Ljava_math_MathContext(ScalaJS.modules.scala_Predef().charArrayOps__AC__Lscala_collection_mutable_ArrayOps(x).mkString__T(), mc), mc)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__T__Lscala_math_BigDecimal = (function(x) {
  return this.apply__T__Ljava_math_MathContext__Lscala_math_BigDecimal(x, this.defaultMathContext__Ljava_math_MathContext())
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__T__Ljava_math_MathContext__Lscala_math_BigDecimal = (function(x, mc) {
  return new ScalaJS.c.scala_math_BigDecimal().init___Ljava_math_BigDecimal__Ljava_math_MathContext(new ScalaJS.c.java_math_BigDecimal().init___T__Ljava_math_MathContext(x, mc), mc)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__Lscala_math_BigInt__Lscala_math_BigDecimal = (function(x) {
  return this.apply__Lscala_math_BigInt__Ljava_math_MathContext__Lscala_math_BigDecimal(x, this.defaultMathContext__Ljava_math_MathContext())
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__Lscala_math_BigInt__Ljava_math_MathContext__Lscala_math_BigDecimal = (function(x, mc) {
  return new ScalaJS.c.scala_math_BigDecimal().init___Ljava_math_BigDecimal__Ljava_math_MathContext(new ScalaJS.c.java_math_BigDecimal().init___Ljava_math_BigInteger__Ljava_math_MathContext(x.bigInteger__Ljava_math_BigInteger(), mc), mc)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__Lscala_math_BigInt__I__Lscala_math_BigDecimal = (function(unscaledVal, scale) {
  return this.apply__Lscala_math_BigInt__I__Ljava_math_MathContext__Lscala_math_BigDecimal(unscaledVal, scale, this.defaultMathContext__Ljava_math_MathContext())
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__Lscala_math_BigInt__I__Ljava_math_MathContext__Lscala_math_BigDecimal = (function(unscaledVal, scale, mc) {
  return new ScalaJS.c.scala_math_BigDecimal().init___Ljava_math_BigDecimal__Ljava_math_MathContext(new ScalaJS.c.java_math_BigDecimal().init___Ljava_math_BigInteger__I__Ljava_math_MathContext(unscaledVal.bigInteger__Ljava_math_BigInteger(), scale, mc), mc)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__Ljava_math_BigDecimal__Lscala_math_BigDecimal = (function(bd) {
  return this.apply__Ljava_math_BigDecimal__Ljava_math_MathContext__Lscala_math_BigDecimal(bd, this.defaultMathContext__Ljava_math_MathContext())
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__Ljava_math_BigDecimal__Ljava_math_MathContext__Lscala_math_BigDecimal = (function(bd, mc) {
  return new ScalaJS.c.scala_math_BigDecimal().init___Ljava_math_BigDecimal__Ljava_math_MathContext(bd, mc)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.int2bigDecimal__I__Lscala_math_BigDecimal = (function(i) {
  return this.apply__I__Lscala_math_BigDecimal(i)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.long2bigDecimal__J__Lscala_math_BigDecimal = (function(l) {
  return this.apply__J__Lscala_math_BigDecimal(l)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.double2bigDecimal__D__Lscala_math_BigDecimal = (function(d) {
  return this.valueOf__D__Ljava_math_MathContext__Lscala_math_BigDecimal(d, this.defaultMathContext__Ljava_math_MathContext())
});
ScalaJS.c.scala_math_BigDecimal$.prototype.javaBigDecimal2bigDecimal__Ljava_math_BigDecimal__Lscala_math_BigDecimal = (function(x) {
  return this.apply__Ljava_math_BigDecimal__Lscala_math_BigDecimal(x)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_math_BigDecimal()
});
ScalaJS.c.scala_math_BigDecimal$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_math_BigDecimal = this;
  this.minCached$1 = -512;
  this.maxCached$1 = 512;
  this.defaultMathContext$1 = ScalaJS.modules.java_math_MathContext().DECIMAL128__Ljava_math_MathContext();
  this.MinLong$1 = new ScalaJS.c.scala_math_BigDecimal().init___Ljava_math_BigDecimal__Ljava_math_MathContext(ScalaJS.modules.java_math_BigDecimal().valueOf__J__Ljava_math_BigDecimal(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 524288)), this.defaultMathContext__Ljava_math_MathContext());
  this.MaxLong$1 = new ScalaJS.c.scala_math_BigDecimal().init___Ljava_math_BigDecimal__Ljava_math_MathContext(ScalaJS.modules.java_math_BigDecimal().valueOf__J__Ljava_math_BigDecimal(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 524287)), this.defaultMathContext__Ljava_math_MathContext());
  return this
});
ScalaJS.c.scala_math_BigDecimal$.prototype.javaBigDecimal2bigDecimal__Ljava_math_BigDecimal__ = (function(x) {
  return this.javaBigDecimal2bigDecimal__Ljava_math_BigDecimal__Lscala_math_BigDecimal(x)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.double2bigDecimal__D__ = (function(d) {
  return this.double2bigDecimal__D__Lscala_math_BigDecimal(d)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.long2bigDecimal__J__ = (function(l) {
  return this.long2bigDecimal__J__Lscala_math_BigDecimal(l)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.int2bigDecimal__I__ = (function(i) {
  return this.int2bigDecimal__I__Lscala_math_BigDecimal(i)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__Ljava_math_BigDecimal__Ljava_math_MathContext__ = (function(bd, mc) {
  return this.apply__Ljava_math_BigDecimal__Ljava_math_MathContext__Lscala_math_BigDecimal(bd, mc)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__Ljava_math_BigDecimal__ = (function(bd$2) {
  return this.apply__Ljava_math_BigDecimal__Lscala_math_BigDecimal(bd$2)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__Lscala_math_BigInt__I__Ljava_math_MathContext__ = (function(unscaledVal, scale, mc$2) {
  return this.apply__Lscala_math_BigInt__I__Ljava_math_MathContext__Lscala_math_BigDecimal(unscaledVal, scale, mc$2)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__Lscala_math_BigInt__I__ = (function(unscaledVal$2, scale$2) {
  return this.apply__Lscala_math_BigInt__I__Lscala_math_BigDecimal(unscaledVal$2, scale$2)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__Lscala_math_BigInt__Ljava_math_MathContext__ = (function(x$2, mc$3) {
  return this.apply__Lscala_math_BigInt__Ljava_math_MathContext__Lscala_math_BigDecimal(x$2, mc$3)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__Lscala_math_BigInt__ = (function(x$3) {
  return this.apply__Lscala_math_BigInt__Lscala_math_BigDecimal(x$3)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__T__Ljava_math_MathContext__ = (function(x$4, mc$4) {
  return this.apply__T__Ljava_math_MathContext__Lscala_math_BigDecimal(x$4, mc$4)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__T__ = (function(x$5) {
  return this.apply__T__Lscala_math_BigDecimal(x$5)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__AC__Ljava_math_MathContext__ = (function(x$6, mc$5) {
  return this.apply__AC__Ljava_math_MathContext__Lscala_math_BigDecimal(x$6, mc$5)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__AC__ = (function(x$7) {
  return this.apply__AC__Lscala_math_BigDecimal(x$7)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__D__Ljava_math_MathContext__ = (function(d$2, mc$6) {
  return this.apply__D__Ljava_math_MathContext__Lscala_math_BigDecimal(d$2, mc$6)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__D__ = (function(d$3) {
  return this.apply__D__Lscala_math_BigDecimal(d$3)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__J__I__Ljava_math_MathContext__ = (function(unscaledVal$3, scale$3, mc$7) {
  return this.apply__J__I__Ljava_math_MathContext__Lscala_math_BigDecimal(unscaledVal$3, scale$3, mc$7)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__J__I__ = (function(unscaledVal$4, scale$4) {
  return this.apply__J__I__Lscala_math_BigDecimal(unscaledVal$4, scale$4)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__J__Ljava_math_MathContext__ = (function(l$2, mc$8) {
  return this.apply__J__Ljava_math_MathContext__Lscala_math_BigDecimal(l$2, mc$8)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__J__ = (function(l$3) {
  return this.apply__J__Lscala_math_BigDecimal(l$3)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__I__Ljava_math_MathContext__ = (function(i$2, mc$9) {
  return this.apply__I__Ljava_math_MathContext__Lscala_math_BigDecimal(i$2, mc$9)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.apply__I__ = (function(i$3) {
  return this.apply__I__Lscala_math_BigDecimal(i$3)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.valueOf__D__Ljava_math_MathContext__ = (function(d$4, mc$10) {
  return this.valueOf__D__Ljava_math_MathContext__Lscala_math_BigDecimal(d$4, mc$10)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.valueOf__D__ = (function(d$5) {
  return this.valueOf__D__Lscala_math_BigDecimal(d$5)
});
ScalaJS.c.scala_math_BigDecimal$.prototype.MaxLong__ = (function() {
  return this.MaxLong__Lscala_math_BigDecimal()
});
ScalaJS.c.scala_math_BigDecimal$.prototype.MinLong__ = (function() {
  return this.MinLong__Lscala_math_BigDecimal()
});
ScalaJS.c.scala_math_BigDecimal$.prototype.defaultMathContext__ = (function() {
  return this.defaultMathContext__Ljava_math_MathContext()
});
/** @constructor */
ScalaJS.inheritable.scala_math_BigDecimal$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_BigDecimal$.prototype = ScalaJS.c.scala_math_BigDecimal$.prototype;
ScalaJS.is.scala_math_BigDecimal$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_BigDecimal$)))
});
ScalaJS.as.scala_math_BigDecimal$ = (function(obj) {
  if ((ScalaJS.is.scala_math_BigDecimal$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.BigDecimal")
  }
});
ScalaJS.isArrayOf.scala_math_BigDecimal$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_BigDecimal$)))
});
ScalaJS.asArrayOf.scala_math_BigDecimal$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_BigDecimal$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.BigDecimal;", depth)
  }
});
ScalaJS.data.scala_math_BigDecimal$ = new ScalaJS.ClassTypeData({
  scala_math_BigDecimal$: 0
}, false, "scala.math.BigDecimal$", ScalaJS.data.java_lang_Object, {
  scala_math_BigDecimal$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_BigDecimal$.prototype.$classData = ScalaJS.data.scala_math_BigDecimal$;
ScalaJS.moduleInstances.scala_math_BigDecimal = undefined;
ScalaJS.modules.scala_math_BigDecimal = (function() {
  if ((!ScalaJS.moduleInstances.scala_math_BigDecimal)) {
    ScalaJS.moduleInstances.scala_math_BigDecimal = new ScalaJS.c.scala_math_BigDecimal$().init___()
  };
  return ScalaJS.moduleInstances.scala_math_BigDecimal
});
//@ sourceMappingURL=BigDecimal$.js.map
