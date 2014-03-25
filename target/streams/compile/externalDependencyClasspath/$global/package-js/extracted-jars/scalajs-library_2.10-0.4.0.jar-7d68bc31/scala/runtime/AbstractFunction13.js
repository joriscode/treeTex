/** @constructor */
ScalaJS.c.scala_runtime_AbstractFunction13 = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_AbstractFunction13.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_AbstractFunction13.prototype.constructor = ScalaJS.c.scala_runtime_AbstractFunction13;
ScalaJS.c.scala_runtime_AbstractFunction13.prototype.curried__Lscala_Function1 = (function() {
  return ScalaJS.impls.scala_Function13$class__curried__Lscala_Function13__Lscala_Function1(this)
});
ScalaJS.c.scala_runtime_AbstractFunction13.prototype.tupled__Lscala_Function1 = (function() {
  return ScalaJS.impls.scala_Function13$class__tupled__Lscala_Function13__Lscala_Function1(this)
});
ScalaJS.c.scala_runtime_AbstractFunction13.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_Function13$class__toString__Lscala_Function13__T(this)
});
ScalaJS.c.scala_runtime_AbstractFunction13.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Function13$class__$init$__Lscala_Function13__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractFunction13.prototype.tupled__ = (function() {
  return this.tupled__Lscala_Function1()
});
ScalaJS.c.scala_runtime_AbstractFunction13.prototype.curried__ = (function() {
  return this.curried__Lscala_Function1()
});
ScalaJS.c.scala_runtime_AbstractFunction13.prototype.apply__O__O__O__O__O__O__O__O__O__O__O__O__O__ = (function(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13) {
  return this.apply__O__O__O__O__O__O__O__O__O__O__O__O__O__O(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractFunction13 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractFunction13.prototype = ScalaJS.c.scala_runtime_AbstractFunction13.prototype;
ScalaJS.is.scala_runtime_AbstractFunction13 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractFunction13)))
});
ScalaJS.as.scala_runtime_AbstractFunction13 = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractFunction13(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractFunction13")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractFunction13 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractFunction13)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractFunction13 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractFunction13(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractFunction13;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractFunction13 = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractFunction13: 0
}, false, "scala.runtime.AbstractFunction13", ScalaJS.data.java_lang_Object, {
  scala_runtime_AbstractFunction13: 1,
  scala_Function13: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractFunction13.prototype.$classData = ScalaJS.data.scala_runtime_AbstractFunction13;
//@ sourceMappingURL=AbstractFunction13.js.map
