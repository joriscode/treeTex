/** @constructor */
ScalaJS.c.scala_math_Ordered$$anon$1 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.x$1$1 = null;
  this.ord$1$1 = null
});
ScalaJS.c.scala_math_Ordered$$anon$1.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Ordered$$anon$1.prototype.constructor = ScalaJS.c.scala_math_Ordered$$anon$1;
ScalaJS.c.scala_math_Ordered$$anon$1.prototype.$$less__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$less__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_math_Ordered$$anon$1.prototype.$$greater__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$greater__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_math_Ordered$$anon$1.prototype.$$less$eq__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$less$eq__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_math_Ordered$$anon$1.prototype.$$greater$eq__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$greater$eq__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_math_Ordered$$anon$1.prototype.compareTo__O__I = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__compareTo__Lscala_math_Ordered__O__I(this, that)
});
ScalaJS.c.scala_math_Ordered$$anon$1.prototype.compare__O__I = (function(that) {
  return this.ord$1$1.compare__O__O__I(this.x$1$1, that)
});
ScalaJS.c.scala_math_Ordered$$anon$1.prototype.init___O__Lscala_math_Ordering = (function(x$1, ord$1) {
  this.x$1$1 = x$1;
  this.ord$1$1 = ord$1;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_math_Ordered$class__$init$__Lscala_math_Ordered__V(this);
  return this
});
ScalaJS.c.scala_math_Ordered$$anon$1.prototype.compareTo__O__ = (function(that) {
  return ScalaJS.bI(this.compareTo__O__I(that))
});
ScalaJS.c.scala_math_Ordered$$anon$1.prototype.$$greater$eq__O__ = (function(that$2) {
  return ScalaJS.bZ(this.$$greater$eq__O__Z(that$2))
});
ScalaJS.c.scala_math_Ordered$$anon$1.prototype.$$less$eq__O__ = (function(that$3) {
  return ScalaJS.bZ(this.$$less$eq__O__Z(that$3))
});
ScalaJS.c.scala_math_Ordered$$anon$1.prototype.$$greater__O__ = (function(that$4) {
  return ScalaJS.bZ(this.$$greater__O__Z(that$4))
});
ScalaJS.c.scala_math_Ordered$$anon$1.prototype.$$less__O__ = (function(that$5) {
  return ScalaJS.bZ(this.$$less__O__Z(that$5))
});
ScalaJS.c.scala_math_Ordered$$anon$1.prototype.compare__O__ = (function(that$6) {
  return ScalaJS.bI(this.compare__O__I(that$6))
});
/** @constructor */
ScalaJS.inheritable.scala_math_Ordered$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Ordered$$anon$1.prototype = ScalaJS.c.scala_math_Ordered$$anon$1.prototype;
ScalaJS.is.scala_math_Ordered$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Ordered$$anon$1)))
});
ScalaJS.as.scala_math_Ordered$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_math_Ordered$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Ordered$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_math_Ordered$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Ordered$$anon$1)))
});
ScalaJS.asArrayOf.scala_math_Ordered$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Ordered$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Ordered$$anon$1;", depth)
  }
});
ScalaJS.data.scala_math_Ordered$$anon$1 = new ScalaJS.ClassTypeData({
  scala_math_Ordered$$anon$1: 0
}, false, "scala.math.Ordered$$anon$1", ScalaJS.data.java_lang_Object, {
  scala_math_Ordered$$anon$1: 1,
  scala_math_Ordered: 1,
  java_lang_Comparable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Ordered$$anon$1.prototype.$classData = ScalaJS.data.scala_math_Ordered$$anon$1;
//@ sourceMappingURL=Ordered$$anon$1.js.map
