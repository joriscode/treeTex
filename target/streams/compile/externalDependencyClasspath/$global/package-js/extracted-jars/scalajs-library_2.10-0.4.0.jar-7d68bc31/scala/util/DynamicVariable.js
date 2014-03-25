/** @constructor */
ScalaJS.c.scala_util_DynamicVariable = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$util$DynamicVariable$$init$f = null;
  this.tl$1 = null
});
ScalaJS.c.scala_util_DynamicVariable.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_DynamicVariable.prototype.constructor = ScalaJS.c.scala_util_DynamicVariable;
ScalaJS.c.scala_util_DynamicVariable.prototype.tl__p1__Ljava_lang_InheritableThreadLocal = (function() {
  return this.tl$1
});
ScalaJS.c.scala_util_DynamicVariable.prototype.value__O = (function() {
  return this.tl__p1__Ljava_lang_InheritableThreadLocal().get__O()
});
ScalaJS.c.scala_util_DynamicVariable.prototype.withValue__O__Lscala_Function0__O = (function(newval, thunk) {
  var oldval = this.value__O();
  this.tl__p1__Ljava_lang_InheritableThreadLocal().set__O__V(newval);
  try {
    return thunk.apply__O()
  } finally {
    this.tl__p1__Ljava_lang_InheritableThreadLocal().set__O__V(oldval)
  }
});
ScalaJS.c.scala_util_DynamicVariable.prototype.value$und$eq__O__V = (function(newval) {
  this.tl__p1__Ljava_lang_InheritableThreadLocal().set__O__V(newval)
});
ScalaJS.c.scala_util_DynamicVariable.prototype.toString__T = (function() {
  return (("DynamicVariable(" + this.value__O()) + ")")
});
ScalaJS.c.scala_util_DynamicVariable.prototype.init___O = (function(init) {
  this.scala$util$DynamicVariable$$init$f = init;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.tl$1 = new ScalaJS.c.scala_util_DynamicVariable$$anon$1().init___Lscala_util_DynamicVariable(this);
  return this
});
ScalaJS.c.scala_util_DynamicVariable.prototype.value$und$eq__O__ = (function(newval) {
  return ScalaJS.bV(this.value$und$eq__O__V(newval))
});
ScalaJS.c.scala_util_DynamicVariable.prototype.withValue__O__Lscala_Function0__ = (function(newval$2, thunk) {
  return this.withValue__O__Lscala_Function0__O(newval$2, thunk)
});
ScalaJS.c.scala_util_DynamicVariable.prototype.value__ = (function() {
  return this.value__O()
});
/** @constructor */
ScalaJS.inheritable.scala_util_DynamicVariable = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_DynamicVariable.prototype = ScalaJS.c.scala_util_DynamicVariable.prototype;
ScalaJS.is.scala_util_DynamicVariable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_DynamicVariable)))
});
ScalaJS.as.scala_util_DynamicVariable = (function(obj) {
  if ((ScalaJS.is.scala_util_DynamicVariable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.DynamicVariable")
  }
});
ScalaJS.isArrayOf.scala_util_DynamicVariable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_DynamicVariable)))
});
ScalaJS.asArrayOf.scala_util_DynamicVariable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_DynamicVariable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.DynamicVariable;", depth)
  }
});
ScalaJS.data.scala_util_DynamicVariable = new ScalaJS.ClassTypeData({
  scala_util_DynamicVariable: 0
}, false, "scala.util.DynamicVariable", ScalaJS.data.java_lang_Object, {
  scala_util_DynamicVariable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_DynamicVariable.prototype.$classData = ScalaJS.data.scala_util_DynamicVariable;
//@ sourceMappingURL=DynamicVariable.js.map
