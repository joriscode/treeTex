/** @constructor */
ScalaJS.c.java_util_Random = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.nextNextGaussian$1 = 0.0;
  this.haveNextNextGaussian$1 = false
});
ScalaJS.c.java_util_Random.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_util_Random.prototype.constructor = ScalaJS.c.java_util_Random;
ScalaJS.c.java_util_Random.prototype.nextNextGaussian__p1__D = (function() {
  return this.nextNextGaussian$1
});
ScalaJS.c.java_util_Random.prototype.nextNextGaussian$und$eq__p1__D__V = (function(x$1) {
  this.nextNextGaussian$1 = x$1
});
ScalaJS.c.java_util_Random.prototype.haveNextNextGaussian__p1__Z = (function() {
  return this.haveNextNextGaussian$1
});
ScalaJS.c.java_util_Random.prototype.haveNextNextGaussian$und$eq__p1__Z__V = (function(x$1) {
  this.haveNextNextGaussian$1 = x$1
});
ScalaJS.c.java_util_Random.prototype.setSeed__J__V = (function(seed) {
  /*<skip>*/
});
ScalaJS.c.java_util_Random.prototype.next__I__I = (function(bits) {
  if ((bits >= 32)) {
    return this.nextInt__I()
  } else {
    return this.nextInt__I__I((1 << bits))
  }
});
ScalaJS.c.java_util_Random.prototype.nextDouble__D = (function() {
  return ScalaJS.g["Math"]["random"]()
});
ScalaJS.c.java_util_Random.prototype.nextBoolean__Z = (function() {
  return (this.nextDouble__D() >= 0.5)
});
ScalaJS.c.java_util_Random.prototype.nextInt__I = (function() {
  return ((ScalaJS.g["Math"]["floor"]((this.nextDouble__D() * 4.294967296E9)) - 2.147483648E9) | 0)
});
ScalaJS.c.java_util_Random.prototype.nextInt__I__I = (function(n) {
  return (ScalaJS.g["Math"]["floor"]((this.nextDouble__D() * n)) | 0)
});
ScalaJS.c.java_util_Random.prototype.nextLong__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(this.nextInt__I()).$$less$less__I__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(32)).$$bar__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(this.nextInt__I()).$$amp__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 1023, 0)))
});
ScalaJS.c.java_util_Random.prototype.nextFloat__F = (function() {
  return this.nextDouble__D()
});
ScalaJS.c.java_util_Random.prototype.nextBytes__AB__V = (function(bytes) {
  var i = 0;
  while ((i < bytes.underlying.length)) {
    bytes.underlying[i] = this.nextInt__I__I(256);
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Random.prototype.nextGaussian__D = (function() {
  if (this.haveNextNextGaussian__p1__Z()) {
    this.haveNextNextGaussian$und$eq__p1__Z__V(false);
    return this.nextNextGaussian__p1__D()
  };
  var x = 0.0;
  var y = 0.0;
  var rds = 0.0;
  do {
    x = ((this.nextDouble__D() * 2) - 1);
    y = ((this.nextDouble__D() * 2) - 1);
    rds = ((x * x) + (y * y))
  } while (((rds === 0) || (rds > 1)));
  var c = ScalaJS.g["Math"]["sqrt"](((-2 * ScalaJS.g["Math"]["log"](rds)) / rds));
  this.nextNextGaussian$und$eq__p1__D__V((y * c));
  this.haveNextNextGaussian$und$eq__p1__Z__V(true);
  return (x * c)
});
ScalaJS.c.java_util_Random.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.haveNextNextGaussian$1 = false;
  return this
});
ScalaJS.c.java_util_Random.prototype.init___J = (function(seed) {
  ScalaJS.c.java_util_Random.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_util_Random.prototype.nextGaussian__ = (function() {
  return ScalaJS.bD(this.nextGaussian__D())
});
ScalaJS.c.java_util_Random.prototype.nextBytes__AB__ = (function(bytes) {
  return ScalaJS.bV(this.nextBytes__AB__V(bytes))
});
ScalaJS.c.java_util_Random.prototype.nextFloat__ = (function() {
  return ScalaJS.bF(this.nextFloat__F())
});
ScalaJS.c.java_util_Random.prototype.nextLong__ = (function() {
  return ScalaJS.bJ(this.nextLong__J())
});
ScalaJS.c.java_util_Random.prototype.nextInt__I__ = (function(n) {
  return ScalaJS.bI(this.nextInt__I__I(n))
});
ScalaJS.c.java_util_Random.prototype.nextInt__ = (function() {
  return ScalaJS.bI(this.nextInt__I())
});
ScalaJS.c.java_util_Random.prototype.nextBoolean__ = (function() {
  return ScalaJS.bZ(this.nextBoolean__Z())
});
ScalaJS.c.java_util_Random.prototype.nextDouble__ = (function() {
  return ScalaJS.bD(this.nextDouble__D())
});
ScalaJS.c.java_util_Random.prototype.next__I__ = (function(bits) {
  return ScalaJS.bI(this.next__I__I(bits))
});
ScalaJS.c.java_util_Random.prototype.setSeed__J__ = (function(seed) {
  return ScalaJS.bV(this.setSeed__J__V(seed))
});
/** @constructor */
ScalaJS.inheritable.java_util_Random = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_Random.prototype = ScalaJS.c.java_util_Random.prototype;
ScalaJS.is.java_util_Random = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_Random)))
});
ScalaJS.as.java_util_Random = (function(obj) {
  if ((ScalaJS.is.java_util_Random(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.Random")
  }
});
ScalaJS.isArrayOf.java_util_Random = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_Random)))
});
ScalaJS.asArrayOf.java_util_Random = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_Random(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.Random;", depth)
  }
});
ScalaJS.data.java_util_Random = new ScalaJS.ClassTypeData({
  java_util_Random: 0
}, false, "java.util.Random", ScalaJS.data.java_lang_Object, {
  java_util_Random: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_Random.prototype.$classData = ScalaJS.data.java_util_Random;
//@ sourceMappingURL=Random.js.map
