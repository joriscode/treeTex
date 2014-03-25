/** @constructor */
ScalaJS.c.scala_math_PartialOrdering$$anon$1 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype.constructor = ScalaJS.c.scala_math_PartialOrdering$$anon$1;
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype.gteq__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_PartialOrdering$class__gteq__Lscala_math_PartialOrdering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype.lt__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_PartialOrdering$class__lt__Lscala_math_PartialOrdering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype.gt__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_PartialOrdering$class__gt__Lscala_math_PartialOrdering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype.equiv__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_PartialOrdering$class__equiv__Lscala_math_PartialOrdering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype.reverse__Lscala_math_PartialOrdering = (function() {
  return this.$$outer$1
});
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype.lteq__O__O__Z = (function(x, y) {
  return this.$$outer$1.lteq__O__O__Z(y, x)
});
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype.tryCompare__O__O__Lscala_Option = (function(x, y) {
  return this.$$outer$1.tryCompare__O__O__Lscala_Option(y, x)
});
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype.init___Lscala_math_PartialOrdering = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_math_PartialOrdering$class__$init$__Lscala_math_PartialOrdering__V(this);
  return this
});
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype.equiv__O__O__ = (function(x, y) {
  return ScalaJS.bZ(this.equiv__O__O__Z(x, y))
});
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype.gt__O__O__ = (function(x$2, y$2) {
  return ScalaJS.bZ(this.gt__O__O__Z(x$2, y$2))
});
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype.lt__O__O__ = (function(x$3, y$3) {
  return ScalaJS.bZ(this.lt__O__O__Z(x$3, y$3))
});
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype.gteq__O__O__ = (function(x$4, y$4) {
  return ScalaJS.bZ(this.gteq__O__O__Z(x$4, y$4))
});
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype.tryCompare__O__O__ = (function(x$5, y$5) {
  return this.tryCompare__O__O__Lscala_Option(x$5, y$5)
});
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype.lteq__O__O__ = (function(x$6, y$6) {
  return ScalaJS.bZ(this.lteq__O__O__Z(x$6, y$6))
});
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype.reverse__ = (function() {
  return this.reverse__Lscala_math_PartialOrdering()
});
/** @constructor */
ScalaJS.inheritable.scala_math_PartialOrdering$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_PartialOrdering$$anon$1.prototype = ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype;
ScalaJS.is.scala_math_PartialOrdering$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_PartialOrdering$$anon$1)))
});
ScalaJS.as.scala_math_PartialOrdering$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_math_PartialOrdering$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.PartialOrdering$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_math_PartialOrdering$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_PartialOrdering$$anon$1)))
});
ScalaJS.asArrayOf.scala_math_PartialOrdering$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_PartialOrdering$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.PartialOrdering$$anon$1;", depth)
  }
});
ScalaJS.data.scala_math_PartialOrdering$$anon$1 = new ScalaJS.ClassTypeData({
  scala_math_PartialOrdering$$anon$1: 0
}, false, "scala.math.PartialOrdering$$anon$1", ScalaJS.data.java_lang_Object, {
  scala_math_PartialOrdering$$anon$1: 1,
  scala_math_PartialOrdering: 1,
  scala_math_Equiv: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_PartialOrdering$$anon$1.prototype.$classData = ScalaJS.data.scala_math_PartialOrdering$$anon$1;
//@ sourceMappingURL=PartialOrdering$$anon$1.js.map
