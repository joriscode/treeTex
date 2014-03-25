/** @constructor */
ScalaJS.c.scala_util_Random = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.self$1 = null
});
ScalaJS.c.scala_util_Random.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_Random.prototype.constructor = ScalaJS.c.scala_util_Random;
ScalaJS.c.scala_util_Random.prototype.self__Ljava_util_Random = (function() {
  return this.self$1
});
ScalaJS.c.scala_util_Random.prototype.nextBoolean__Z = (function() {
  return this.self__Ljava_util_Random().nextBoolean__Z()
});
ScalaJS.c.scala_util_Random.prototype.nextBytes__AB__V = (function(bytes) {
  this.self__Ljava_util_Random().nextBytes__AB__V(bytes)
});
ScalaJS.c.scala_util_Random.prototype.nextDouble__D = (function() {
  return this.self__Ljava_util_Random().nextDouble__D()
});
ScalaJS.c.scala_util_Random.prototype.nextFloat__F = (function() {
  return this.self__Ljava_util_Random().nextFloat__F()
});
ScalaJS.c.scala_util_Random.prototype.nextGaussian__D = (function() {
  return this.self__Ljava_util_Random().nextGaussian__D()
});
ScalaJS.c.scala_util_Random.prototype.nextInt__I = (function() {
  return this.self__Ljava_util_Random().nextInt__I()
});
ScalaJS.c.scala_util_Random.prototype.nextInt__I__I = (function(n) {
  return this.self__Ljava_util_Random().nextInt__I__I(n)
});
ScalaJS.c.scala_util_Random.prototype.nextLong__J = (function() {
  return this.self__Ljava_util_Random().nextLong__J()
});
ScalaJS.c.scala_util_Random.prototype.nextString__I__T = (function(length) {
  return ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.modules.scala_collection_immutable_List().fill__I__Lscala_Function0__Lscala_collection_GenTraversable(length, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return ScalaJS.bC(arg$outer.scala$util$Random$$safeChar$1__C())
    })
  })(this)))).mkString__T()
});
ScalaJS.c.scala_util_Random.prototype.nextPrintableChar__C = (function() {
  var low = 33;
  var high = 127;
  return ((this.self__Ljava_util_Random().nextInt__I__I((high - low)) + low) & 65535)
});
ScalaJS.c.scala_util_Random.prototype.setSeed__J__V = (function(seed) {
  this.self__Ljava_util_Random().setSeed__J__V(seed)
});
ScalaJS.c.scala_util_Random.prototype.shuffle__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__Lscala_collection_TraversableOnce = (function(xs, bf) {
  var buf = new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ArrayBuffer(xs);
  ScalaJS.modules.scala_runtime_RichInt().to$extension0__I__I__Lscala_collection_immutable_Range$Inclusive(ScalaJS.modules.scala_Predef().intWrapper__I__I(buf.length__I()), 2).by__I__Lscala_collection_immutable_Range(-1).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, buf$1) {
    return (function(n) {
      n = ScalaJS.uI(n);
      var k = arg$outer.nextInt__I__I(n);
      arg$outer.scala$util$Random$$swap$1__I__I__Lscala_collection_mutable_ArrayBuffer__V((n - 1), k, buf$1);
      return ScalaJS.bV(undefined)
    })
  })(this, buf)));
  return ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.as.scala_collection_mutable_Builder(bf.apply__O__Lscala_collection_mutable_Builder(xs).$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(buf)).result__O())
});
ScalaJS.c.scala_util_Random.prototype.alphanumeric__Lscala_collection_immutable_Stream = (function() {
  return ScalaJS.modules.scala_collection_immutable_Stream().continually__Lscala_Function0__Lscala_collection_immutable_Stream(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return ScalaJS.bC(arg$outer.nextPrintableChar__C())
    })
  })(this))).filter__Lscala_Function1__Lscala_collection_immutable_Stream(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(c) {
      c = ScalaJS.uC(c);
      return ScalaJS.bZ(arg$outer.scala$util$Random$$isAlphaNum$1__C__Z(c))
    })
  })(this)))
});
ScalaJS.c.scala_util_Random.prototype.scala$util$Random$$safeChar$1__C = (function() {
  var surrogateStart = 55296;
  var res = (this.nextInt__I__I((surrogateStart - 1)) + 1);
  return (res & 65535)
});
ScalaJS.c.scala_util_Random.prototype.scala$util$Random$$swap$1__I__I__Lscala_collection_mutable_ArrayBuffer__V = (function(i1, i2, buf$1) {
  var tmp = buf$1.apply__I__O(i1);
  buf$1.update__I__O__V(i1, buf$1.apply__I__O(i2));
  buf$1.update__I__O__V(i2, tmp)
});
ScalaJS.c.scala_util_Random.prototype.scala$util$Random$$isAlphaNum$1__C__Z = (function(c) {
  return ((((c >= 65) && (c <= 90)) || ((c >= 97) && (c <= 122))) || ((c >= 48) && (c <= 57)))
});
ScalaJS.c.scala_util_Random.prototype.init___Ljava_util_Random = (function(self) {
  this.self$1 = self;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_util_Random.prototype.init___J = (function(seed) {
  ScalaJS.c.scala_util_Random.prototype.init___Ljava_util_Random.call(this, new ScalaJS.c.java_util_Random().init___J(seed));
  return this
});
ScalaJS.c.scala_util_Random.prototype.init___I = (function(seed) {
  ScalaJS.c.scala_util_Random.prototype.init___J.call(this, ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(seed));
  return this
});
ScalaJS.c.scala_util_Random.prototype.init___ = (function() {
  ScalaJS.c.scala_util_Random.prototype.init___Ljava_util_Random.call(this, new ScalaJS.c.java_util_Random().init___());
  return this
});
ScalaJS.c.scala_util_Random.prototype.scala$util$Random$$isAlphaNum$1__C__ = (function(c) {
  return ScalaJS.bZ(this.scala$util$Random$$isAlphaNum$1__C__Z(c))
});
ScalaJS.c.scala_util_Random.prototype.scala$util$Random$$swap$1__I__I__Lscala_collection_mutable_ArrayBuffer__ = (function(i1, i2, buf$1) {
  return ScalaJS.bV(this.scala$util$Random$$swap$1__I__I__Lscala_collection_mutable_ArrayBuffer__V(i1, i2, buf$1))
});
ScalaJS.c.scala_util_Random.prototype.scala$util$Random$$safeChar$1__ = (function() {
  return ScalaJS.bC(this.scala$util$Random$$safeChar$1__C())
});
ScalaJS.c.scala_util_Random.prototype.alphanumeric__ = (function() {
  return this.alphanumeric__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_util_Random.prototype.shuffle__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__ = (function(xs, bf) {
  return this.shuffle__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__Lscala_collection_TraversableOnce(xs, bf)
});
ScalaJS.c.scala_util_Random.prototype.setSeed__J__ = (function(seed) {
  return ScalaJS.bV(this.setSeed__J__V(seed))
});
ScalaJS.c.scala_util_Random.prototype.nextPrintableChar__ = (function() {
  return ScalaJS.bC(this.nextPrintableChar__C())
});
ScalaJS.c.scala_util_Random.prototype.nextString__I__ = (function(length) {
  return this.nextString__I__T(length)
});
ScalaJS.c.scala_util_Random.prototype.nextLong__ = (function() {
  return ScalaJS.bJ(this.nextLong__J())
});
ScalaJS.c.scala_util_Random.prototype.nextInt__I__ = (function(n) {
  return ScalaJS.bI(this.nextInt__I__I(n))
});
ScalaJS.c.scala_util_Random.prototype.nextInt__ = (function() {
  return ScalaJS.bI(this.nextInt__I())
});
ScalaJS.c.scala_util_Random.prototype.nextGaussian__ = (function() {
  return ScalaJS.bD(this.nextGaussian__D())
});
ScalaJS.c.scala_util_Random.prototype.nextFloat__ = (function() {
  return ScalaJS.bF(this.nextFloat__F())
});
ScalaJS.c.scala_util_Random.prototype.nextDouble__ = (function() {
  return ScalaJS.bD(this.nextDouble__D())
});
ScalaJS.c.scala_util_Random.prototype.nextBytes__AB__ = (function(bytes) {
  return ScalaJS.bV(this.nextBytes__AB__V(bytes))
});
ScalaJS.c.scala_util_Random.prototype.nextBoolean__ = (function() {
  return ScalaJS.bZ(this.nextBoolean__Z())
});
ScalaJS.c.scala_util_Random.prototype.self__ = (function() {
  return this.self__Ljava_util_Random()
});
/** @constructor */
ScalaJS.inheritable.scala_util_Random = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Random.prototype = ScalaJS.c.scala_util_Random.prototype;
ScalaJS.is.scala_util_Random = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Random)))
});
ScalaJS.as.scala_util_Random = (function(obj) {
  if ((ScalaJS.is.scala_util_Random(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Random")
  }
});
ScalaJS.isArrayOf.scala_util_Random = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Random)))
});
ScalaJS.asArrayOf.scala_util_Random = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Random(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Random;", depth)
  }
});
ScalaJS.data.scala_util_Random = new ScalaJS.ClassTypeData({
  scala_util_Random: 0
}, false, "scala.util.Random", ScalaJS.data.java_lang_Object, {
  scala_util_Random: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Random.prototype.$classData = ScalaJS.data.scala_util_Random;
//@ sourceMappingURL=Random.js.map
