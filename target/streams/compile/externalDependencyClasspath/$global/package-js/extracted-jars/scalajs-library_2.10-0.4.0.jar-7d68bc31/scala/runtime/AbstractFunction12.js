/** @constructor */
ScalaJS.c.scala_runtime_AbstractFunction12 = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_AbstractFunction12.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_AbstractFunction12.prototype.constructor = ScalaJS.c.scala_runtime_AbstractFunction12;
ScalaJS.c.scala_runtime_AbstractFunction12.prototype.curried__Lscala_Function1 = (function() {
  return ScalaJS.impls.scala_Function12$class__curried__Lscala_Function12__Lscala_Function1(this)
});
ScalaJS.c.scala_runtime_AbstractFunction12.prototype.tupled__Lscala_Function1 = (function() {
  return ScalaJS.impls.scala_Function12$class__tupled__Lscala_Function12__Lscala_Function1(this)
});
ScalaJS.c.scala_runtime_AbstractFunction12.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_Function12$class__toString__Lscala_Function12__T(this)
});
ScalaJS.c.scala_runtime_AbstractFunction12.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Function12$class__$init$__Lscala_Function12__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractFunction12.prototype.tupled__ = (function() {
  return this.tupled__Lscala_Function1()
});
ScalaJS.c.scala_runtime_AbstractFunction12.prototype.curried__ = (function() {
  return this.curried__Lscala_Function1()
});
ScalaJS.c.scala_runtime_AbstractFunction12.prototype.apply__O__O__O__O__O__O__O__O__O__O__O__O__ = (function(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12) {
  return this.apply__O__O__O__O__O__O__O__O__O__O__O__O__O(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractFunction12 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractFunction12.prototype = ScalaJS.c.scala_runtime_AbstractFunction12.prototype;
ScalaJS.is.scala_runtime_AbstractFunction12 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractFunction12)))
});
ScalaJS.as.scala_runtime_AbstractFunction12 = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractFunction12(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractFunction12")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractFunction12 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractFunction12)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractFunction12 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractFunction12(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractFunction12;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractFunction12 = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractFunction12: 0
}, false, "scala.runtime.AbstractFunction12", ScalaJS.data.java_lang_Object, {
  scala_runtime_AbstractFunction12: 1,
  scala_Function12: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractFunction12.prototype.$classData = ScalaJS.data.scala_runtime_AbstractFunction12;
//@ sourceMappingURL=AbstractFunction12.js.map
