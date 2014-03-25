/** @constructor */
ScalaJS.c.scala_runtime_AbstractFunction7 = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_AbstractFunction7.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_AbstractFunction7.prototype.constructor = ScalaJS.c.scala_runtime_AbstractFunction7;
ScalaJS.c.scala_runtime_AbstractFunction7.prototype.curried__Lscala_Function1 = (function() {
  return ScalaJS.impls.scala_Function7$class__curried__Lscala_Function7__Lscala_Function1(this)
});
ScalaJS.c.scala_runtime_AbstractFunction7.prototype.tupled__Lscala_Function1 = (function() {
  return ScalaJS.impls.scala_Function7$class__tupled__Lscala_Function7__Lscala_Function1(this)
});
ScalaJS.c.scala_runtime_AbstractFunction7.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_Function7$class__toString__Lscala_Function7__T(this)
});
ScalaJS.c.scala_runtime_AbstractFunction7.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Function7$class__$init$__Lscala_Function7__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractFunction7.prototype.tupled__ = (function() {
  return this.tupled__Lscala_Function1()
});
ScalaJS.c.scala_runtime_AbstractFunction7.prototype.curried__ = (function() {
  return this.curried__Lscala_Function1()
});
ScalaJS.c.scala_runtime_AbstractFunction7.prototype.apply__O__O__O__O__O__O__O__ = (function(v1, v2, v3, v4, v5, v6, v7) {
  return this.apply__O__O__O__O__O__O__O__O(v1, v2, v3, v4, v5, v6, v7)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractFunction7 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractFunction7.prototype = ScalaJS.c.scala_runtime_AbstractFunction7.prototype;
ScalaJS.is.scala_runtime_AbstractFunction7 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractFunction7)))
});
ScalaJS.as.scala_runtime_AbstractFunction7 = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractFunction7(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractFunction7")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractFunction7 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractFunction7)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractFunction7 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractFunction7(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractFunction7;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractFunction7 = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractFunction7: 0
}, false, "scala.runtime.AbstractFunction7", ScalaJS.data.java_lang_Object, {
  scala_runtime_AbstractFunction7: 1,
  scala_Function7: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractFunction7.prototype.$classData = ScalaJS.data.scala_runtime_AbstractFunction7;
//@ sourceMappingURL=AbstractFunction7.js.map
