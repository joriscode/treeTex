/** @constructor */
ScalaJS.c.scala_runtime_AbstractFunction20 = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_AbstractFunction20.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_AbstractFunction20.prototype.constructor = ScalaJS.c.scala_runtime_AbstractFunction20;
ScalaJS.c.scala_runtime_AbstractFunction20.prototype.curried__Lscala_Function1 = (function() {
  return ScalaJS.impls.scala_Function20$class__curried__Lscala_Function20__Lscala_Function1(this)
});
ScalaJS.c.scala_runtime_AbstractFunction20.prototype.tupled__Lscala_Function1 = (function() {
  return ScalaJS.impls.scala_Function20$class__tupled__Lscala_Function20__Lscala_Function1(this)
});
ScalaJS.c.scala_runtime_AbstractFunction20.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_Function20$class__toString__Lscala_Function20__T(this)
});
ScalaJS.c.scala_runtime_AbstractFunction20.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Function20$class__$init$__Lscala_Function20__V(this);
  return this
});
ScalaJS.c.scala_runtime_AbstractFunction20.prototype.tupled__ = (function() {
  return this.tupled__Lscala_Function1()
});
ScalaJS.c.scala_runtime_AbstractFunction20.prototype.curried__ = (function() {
  return this.curried__Lscala_Function1()
});
ScalaJS.c.scala_runtime_AbstractFunction20.prototype.apply__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__ = (function(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20) {
  return this.apply__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O__O(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_AbstractFunction20 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_AbstractFunction20.prototype = ScalaJS.c.scala_runtime_AbstractFunction20.prototype;
ScalaJS.is.scala_runtime_AbstractFunction20 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_AbstractFunction20)))
});
ScalaJS.as.scala_runtime_AbstractFunction20 = (function(obj) {
  if ((ScalaJS.is.scala_runtime_AbstractFunction20(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.AbstractFunction20")
  }
});
ScalaJS.isArrayOf.scala_runtime_AbstractFunction20 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_AbstractFunction20)))
});
ScalaJS.asArrayOf.scala_runtime_AbstractFunction20 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_AbstractFunction20(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.AbstractFunction20;", depth)
  }
});
ScalaJS.data.scala_runtime_AbstractFunction20 = new ScalaJS.ClassTypeData({
  scala_runtime_AbstractFunction20: 0
}, false, "scala.runtime.AbstractFunction20", ScalaJS.data.java_lang_Object, {
  scala_runtime_AbstractFunction20: 1,
  scala_Function20: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_AbstractFunction20.prototype.$classData = ScalaJS.data.scala_runtime_AbstractFunction20;
//@ sourceMappingURL=AbstractFunction20.js.map