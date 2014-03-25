/** @constructor */
ScalaJS.c.scala_runtime_AbstractFunction4 = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_AbstractFunction4.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_AbstractFunction4.prototype.constructor = ScalaJS.c.scala_runtime_AbstractFunction4;
ScalaJS.c.scala_runtime_AbstractFunction4.prototype.curried__Lscala_Function1 = (function() {
  return ScalaJS.impls.scala_Function4$class__curried__Lscala_Function4__Lscala_Function1(this)
});
ScalaJS.c.scala_runtime_AbstractFunction4.prototype.tupled__Lscala_Function1 = (function() {
  return ScalaJS.impls.scala_Function4$class__tupled__Lscala_Function4__Lscala_Function1(this)
});
ScalaJS.c.scala_runtime_AbstractFunction4.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_Function4$class__toString__Lscala_Function4__T(this)
});
ScalaJS.c.scala_runtime_AbstractFunction4.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Function4$class__$init$__Lscala_Function4__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractFunction4.prototype.tupled__ = (function() {
  return this.tupled__Lscala_Function1()
});
ScalaJS.c.scala_runtime_AbstractFunction4.prototype.curried__ = (function() {
  return this.curried__Lscala_Function1()
});
ScalaJS.c.scala_runtime_AbstractFunction4.prototype.apply__O__O__O__O__ = (function(v1, v2, v3, v4) {
  return this.apply__O__O__O__O__O(v1, v2, v3, v4)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractFunction4 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractFunction4.prototype = ScalaJS.c.scala_runtime_AbstractFunction4.prototype;
ScalaJS.is.scala_runtime_AbstractFunction4 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractFunction4)))
});
ScalaJS.as.scala_runtime_AbstractFunction4 = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractFunction4(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractFunction4")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractFunction4 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractFunction4)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractFunction4 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractFunction4(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractFunction4;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractFunction4 = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractFunction4: 0
}, false, "scala.runtime.AbstractFunction4", ScalaJS.data.java_lang_Object, {
  scala_runtime_AbstractFunction4: 1,
  scala_Function4: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractFunction4.prototype.$classData = ScalaJS.data.scala_runtime_AbstractFunction4;
//@ sourceMappingURL=AbstractFunction4.js.map
