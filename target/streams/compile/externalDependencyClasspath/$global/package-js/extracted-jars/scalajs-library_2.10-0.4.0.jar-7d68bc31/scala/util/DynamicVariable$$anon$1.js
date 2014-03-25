/** @constructor */
ScalaJS.c.scala_util_DynamicVariable$$anon$1 = (function() {
  ScalaJS.c.java_lang_InheritableThreadLocal.call(this);
  this.$$outer$3 = null
});
ScalaJS.c.scala_util_DynamicVariable$$anon$1.prototype = new ScalaJS.inheritable.java_lang_InheritableThreadLocal();
ScalaJS.c.scala_util_DynamicVariable$$anon$1.prototype.constructor = ScalaJS.c.scala_util_DynamicVariable$$anon$1;
ScalaJS.c.scala_util_DynamicVariable$$anon$1.prototype.initialValue__O = (function() {
  return this.$$outer$3.scala$util$DynamicVariable$$init$f
});
ScalaJS.c.scala_util_DynamicVariable$$anon$1.prototype.init___Lscala_util_DynamicVariable = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$3 = $$outer
  };
  ScalaJS.c.java_lang_InheritableThreadLocal.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_util_DynamicVariable$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_DynamicVariable$$anon$1.prototype = ScalaJS.c.scala_util_DynamicVariable$$anon$1.prototype;
ScalaJS.is.scala_util_DynamicVariable$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_DynamicVariable$$anon$1)))
});
ScalaJS.as.scala_util_DynamicVariable$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_util_DynamicVariable$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.DynamicVariable$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_util_DynamicVariable$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_DynamicVariable$$anon$1)))
});
ScalaJS.asArrayOf.scala_util_DynamicVariable$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_DynamicVariable$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.DynamicVariable$$anon$1;", depth)
  }
});
ScalaJS.data.scala_util_DynamicVariable$$anon$1 = new ScalaJS.ClassTypeData({
  scala_util_DynamicVariable$$anon$1: 0
}, false, "scala.util.DynamicVariable$$anon$1", ScalaJS.data.java_lang_InheritableThreadLocal, {
  scala_util_DynamicVariable$$anon$1: 1,
  java_lang_InheritableThreadLocal: 1,
  java_lang_ThreadLocal: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_DynamicVariable$$anon$1.prototype.$classData = ScalaJS.data.scala_util_DynamicVariable$$anon$1;
//@ sourceMappingURL=DynamicVariable$$anon$1.js.map
