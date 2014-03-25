/** @constructor */
ScalaJS.c.scala_math_BigInt$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.minCached$1 = 0;
  this.maxCached$1 = 0;
  this.cache$1 = null;
  this.scala$math$BigInt$$minusOne$1 = null;
  this.MinLong$1 = null;
  this.MaxLong$1 = null
});
ScalaJS.c.scala_math_BigInt$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_BigInt$.prototype.constructor = ScalaJS.c.scala_math_BigInt$;
ScalaJS.c.scala_math_BigInt$.prototype.minCached__p1__I = (function() {
  return this.minCached$1
});
ScalaJS.c.scala_math_BigInt$.prototype.maxCached__p1__I = (function() {
  return this.maxCached$1
});
ScalaJS.c.scala_math_BigInt$.prototype.cache__p1__ALscala_math_BigInt = (function() {
  return this.cache$1
});
ScalaJS.c.scala_math_BigInt$.prototype.scala$math$BigInt$$minusOne__Ljava_math_BigInteger = (function() {
  return this.scala$math$BigInt$$minusOne$1
});
ScalaJS.c.scala_math_BigInt$.prototype.MinLong__Lscala_math_BigInt = (function() {
  return this.MinLong$1
});
ScalaJS.c.scala_math_BigInt$.prototype.MaxLong__Lscala_math_BigInt = (function() {
  return this.MaxLong$1
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__I__Lscala_math_BigInt = (function(i) {
  if (((this.minCached__p1__I() <= i) && (i <= this.maxCached__p1__I()))) {
    var offset = (i - this.minCached__p1__I());
    var n = this.cache__p1__ALscala_math_BigInt().underlying[offset];
    if ((n === null)) {
      n = new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(ScalaJS.modules.java_math_BigInteger().valueOf__J__Ljava_math_BigInteger(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(i)));
      this.cache__p1__ALscala_math_BigInt().underlying[offset] = n
    };
    return n
  } else {
    return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(ScalaJS.modules.java_math_BigInteger().valueOf__J__Ljava_math_BigInteger(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(i)))
  }
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__J__Lscala_math_BigInt = (function(l) {
  if ((ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(this.minCached__p1__I()).$$less$eq__Lscala_scalajs_runtime_Long__Z(l) && l.$$less$eq__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(this.maxCached__p1__I())))) {
    return this.apply__I__Lscala_math_BigInt(l.toInt__I())
  } else {
    return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(ScalaJS.modules.java_math_BigInteger().valueOf__J__Ljava_math_BigInteger(l))
  }
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__AB__Lscala_math_BigInt = (function(x) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(new ScalaJS.c.java_math_BigInteger().init___AB(x))
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__I__AB__Lscala_math_BigInt = (function(signum, magnitude) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(new ScalaJS.c.java_math_BigInteger().init___I__AB(signum, magnitude))
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__I__I__Lscala_util_Random__Lscala_math_BigInt = (function(bitlength, certainty, rnd) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(new ScalaJS.c.java_math_BigInteger().init___I__I__Ljava_util_Random(bitlength, certainty, rnd.self__Ljava_util_Random()))
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__I__Lscala_util_Random__Lscala_math_BigInt = (function(numbits, rnd) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(new ScalaJS.c.java_math_BigInteger().init___I__Ljava_util_Random(numbits, rnd.self__Ljava_util_Random()))
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__T__Lscala_math_BigInt = (function(x) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(new ScalaJS.c.java_math_BigInteger().init___T(x))
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__T__I__Lscala_math_BigInt = (function(x, radix) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(new ScalaJS.c.java_math_BigInteger().init___T__I(x, radix))
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__Ljava_math_BigInteger__Lscala_math_BigInt = (function(x) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(x)
});
ScalaJS.c.scala_math_BigInt$.prototype.probablePrime__I__Lscala_util_Random__Lscala_math_BigInt = (function(bitLength, rnd) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(ScalaJS.modules.java_math_BigInteger().probablePrime__I__Ljava_util_Random__Ljava_math_BigInteger(bitLength, rnd.self__Ljava_util_Random()))
});
ScalaJS.c.scala_math_BigInt$.prototype.int2bigInt__I__Lscala_math_BigInt = (function(i) {
  return this.apply__I__Lscala_math_BigInt(i)
});
ScalaJS.c.scala_math_BigInt$.prototype.long2bigInt__J__Lscala_math_BigInt = (function(l) {
  return this.apply__J__Lscala_math_BigInt(l)
});
ScalaJS.c.scala_math_BigInt$.prototype.javaBigInteger2bigInt__Ljava_math_BigInteger__Lscala_math_BigInt = (function(x) {
  return this.apply__Ljava_math_BigInteger__Lscala_math_BigInt(x)
});
ScalaJS.c.scala_math_BigInt$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_math_BigInt()
});
ScalaJS.c.scala_math_BigInt$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_math_BigInt = this;
  this.minCached$1 = -1024;
  this.maxCached$1 = 1024;
  this.cache$1 = ScalaJS.newArrayObject(ScalaJS.data.scala_math_BigInt.getArrayOf(), [((this.maxCached__p1__I() - this.minCached__p1__I()) + 1)]);
  this.scala$math$BigInt$$minusOne$1 = ScalaJS.modules.java_math_BigInteger().valueOf__J__Ljava_math_BigInteger(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 1048575));
  this.MinLong$1 = ScalaJS.modules.scala_math_BigInt().apply__J__Lscala_math_BigInt(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 524288));
  this.MaxLong$1 = ScalaJS.modules.scala_math_BigInt().apply__J__Lscala_math_BigInt(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 524287));
  return this
});
ScalaJS.c.scala_math_BigInt$.prototype.javaBigInteger2bigInt__Ljava_math_BigInteger__ = (function(x) {
  return this.javaBigInteger2bigInt__Ljava_math_BigInteger__Lscala_math_BigInt(x)
});
ScalaJS.c.scala_math_BigInt$.prototype.long2bigInt__J__ = (function(l) {
  return this.long2bigInt__J__Lscala_math_BigInt(l)
});
ScalaJS.c.scala_math_BigInt$.prototype.int2bigInt__I__ = (function(i) {
  return this.int2bigInt__I__Lscala_math_BigInt(i)
});
ScalaJS.c.scala_math_BigInt$.prototype.probablePrime__I__Lscala_util_Random__ = (function(bitLength, rnd) {
  return this.probablePrime__I__Lscala_util_Random__Lscala_math_BigInt(bitLength, rnd)
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__Ljava_math_BigInteger__ = (function(x$2) {
  return this.apply__Ljava_math_BigInteger__Lscala_math_BigInt(x$2)
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__T__I__ = (function(x$3, radix) {
  return this.apply__T__I__Lscala_math_BigInt(x$3, radix)
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__T__ = (function(x$4) {
  return this.apply__T__Lscala_math_BigInt(x$4)
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__I__Lscala_util_Random__ = (function(numbits, rnd$2) {
  return this.apply__I__Lscala_util_Random__Lscala_math_BigInt(numbits, rnd$2)
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__I__I__Lscala_util_Random__ = (function(bitlength, certainty, rnd$3) {
  return this.apply__I__I__Lscala_util_Random__Lscala_math_BigInt(bitlength, certainty, rnd$3)
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__I__AB__ = (function(signum, magnitude) {
  return this.apply__I__AB__Lscala_math_BigInt(signum, magnitude)
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__AB__ = (function(x$5) {
  return this.apply__AB__Lscala_math_BigInt(x$5)
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__J__ = (function(l$2) {
  return this.apply__J__Lscala_math_BigInt(l$2)
});
ScalaJS.c.scala_math_BigInt$.prototype.apply__I__ = (function(i$2) {
  return this.apply__I__Lscala_math_BigInt(i$2)
});
ScalaJS.c.scala_math_BigInt$.prototype.MaxLong__ = (function() {
  return this.MaxLong__Lscala_math_BigInt()
});
ScalaJS.c.scala_math_BigInt$.prototype.MinLong__ = (function() {
  return this.MinLong__Lscala_math_BigInt()
});
ScalaJS.c.scala_math_BigInt$.prototype.scala$math$BigInt$$minusOne__ = (function() {
  return this.scala$math$BigInt$$minusOne__Ljava_math_BigInteger()
});
/** @constructor */
ScalaJS.inheritable.scala_math_BigInt$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_BigInt$.prototype = ScalaJS.c.scala_math_BigInt$.prototype;
ScalaJS.is.scala_math_BigInt$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_BigInt$)))
});
ScalaJS.as.scala_math_BigInt$ = (function(obj) {
  if ((ScalaJS.is.scala_math_BigInt$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.BigInt")
  }
});
ScalaJS.isArrayOf.scala_math_BigInt$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_BigInt$)))
});
ScalaJS.asArrayOf.scala_math_BigInt$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_BigInt$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.BigInt;", depth)
  }
});
ScalaJS.data.scala_math_BigInt$ = new ScalaJS.ClassTypeData({
  scala_math_BigInt$: 0
}, false, "scala.math.BigInt$", ScalaJS.data.java_lang_Object, {
  scala_math_BigInt$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_BigInt$.prototype.$classData = ScalaJS.data.scala_math_BigInt$;
ScalaJS.moduleInstances.scala_math_BigInt = undefined;
ScalaJS.modules.scala_math_BigInt = (function() {
  if ((!ScalaJS.moduleInstances.scala_math_BigInt)) {
    ScalaJS.moduleInstances.scala_math_BigInt = new ScalaJS.c.scala_math_BigInt$().init___()
  };
  return ScalaJS.moduleInstances.scala_math_BigInt
});
//@ sourceMappingURL=BigInt$.js.map
