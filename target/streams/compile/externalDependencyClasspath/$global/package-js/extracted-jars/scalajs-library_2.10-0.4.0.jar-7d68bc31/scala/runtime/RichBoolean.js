/** @constructor */
ScalaJS.c.scala_runtime_RichBoolean = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.self$1 = false
});
ScalaJS.c.scala_runtime_RichBoolean.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_RichBoolean.prototype.constructor = ScalaJS.c.scala_runtime_RichBoolean;
ScalaJS.c.scala_runtime_RichBoolean.prototype.compare__O__I = (function(y) {
  return ScalaJS.impls.scala_runtime_OrderedProxy$class__compare__Lscala_runtime_OrderedProxy__O__I(this, y)
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_Proxy$class__toString__Lscala_Proxy__T(this)
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.$$less__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$less__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.$$greater__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$greater__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.$$less$eq__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$less$eq__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.$$greater$eq__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$greater$eq__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.compareTo__O__I = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__compareTo__Lscala_math_Ordered__O__I(this, that)
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.self__Z = (function() {
  return this.self$1
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.ord__Lscala_math_Ordering$Boolean$ = (function() {
  return ScalaJS.modules.scala_runtime_RichBoolean().ord$extension__Z__Lscala_math_Ordering$Boolean$(this.self__Z())
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_RichBoolean().hashCode$extension__Z__I(this.self__Z())
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.equals__O__Z = (function(x$1) {
  return ScalaJS.modules.scala_runtime_RichBoolean().equals$extension__Z__O__Z(this.self__Z(), x$1)
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.ord__Lscala_math_Ordering = (function() {
  return ScalaJS.modules.scala_runtime_RichBoolean().ord$extension__Z__Lscala_math_Ordering$Boolean$(this.self__Z())
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.self__O = (function() {
  return ScalaJS.bZ(this.self__Z())
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.init___Z = (function(self) {
  this.self$1 = self;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_math_Ordered$class__$init$__Lscala_math_Ordered__V(this);
  ScalaJS.impls.scala_Proxy$class__$init$__Lscala_Proxy__V(this);
  ScalaJS.impls.scala_runtime_OrderedProxy$class__$init$__Lscala_runtime_OrderedProxy__V(this);
  return this
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.compareTo__O__ = (function(that) {
  return ScalaJS.bI(this.compareTo__O__I(that))
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.$$greater$eq__O__ = (function(that$2) {
  return ScalaJS.bZ(this.$$greater$eq__O__Z(that$2))
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.$$less$eq__O__ = (function(that$3) {
  return ScalaJS.bZ(this.$$less$eq__O__Z(that$3))
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.$$greater__O__ = (function(that$4) {
  return ScalaJS.bZ(this.$$greater__O__Z(that$4))
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.$$less__O__ = (function(that$5) {
  return ScalaJS.bZ(this.$$less__O__Z(that$5))
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.compare__O__ = (function(y) {
  return ScalaJS.bI(this.compare__O__I(y))
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.ord__ = (function() {
  return this.ord__Lscala_math_Ordering$Boolean$()
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.self__ = (function() {
  return ScalaJS.bZ(this.self__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_RichBoolean = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_RichBoolean.prototype = ScalaJS.c.scala_runtime_RichBoolean.prototype;
ScalaJS.is.scala_runtime_RichBoolean = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_RichBoolean)))
});
ScalaJS.as.scala_runtime_RichBoolean = (function(obj) {
  if ((ScalaJS.is.scala_runtime_RichBoolean(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.RichBoolean")
  }
});
ScalaJS.isArrayOf.scala_runtime_RichBoolean = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_RichBoolean)))
});
ScalaJS.asArrayOf.scala_runtime_RichBoolean = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_RichBoolean(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.RichBoolean;", depth)
  }
});
ScalaJS.data.scala_runtime_RichBoolean = new ScalaJS.ClassTypeData({
  scala_runtime_RichBoolean: 0
}, false, "scala.runtime.RichBoolean", ScalaJS.data.java_lang_Object, {
  scala_runtime_RichBoolean: 1,
  scala_runtime_OrderedProxy: 1,
  scala_Proxy$Typed: 1,
  scala_Proxy: 1,
  scala_math_Ordered: 1,
  java_lang_Comparable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_RichBoolean.prototype.$classData = ScalaJS.data.scala_runtime_RichBoolean;
//@ sourceMappingURL=RichBoolean.js.map
