/** @constructor */
ScalaJS.c.scala_concurrent_ThreadPoolRunner$RunCallable = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.fun$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_concurrent_ThreadPoolRunner$RunCallable.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_ThreadPoolRunner$RunCallable.prototype.constructor = ScalaJS.c.scala_concurrent_ThreadPoolRunner$RunCallable;
ScalaJS.c.scala_concurrent_ThreadPoolRunner$RunCallable.prototype.run__V = (function() {
  this.fun$1.apply__O()
});
ScalaJS.c.scala_concurrent_ThreadPoolRunner$RunCallable.prototype.call__O = (function() {
  return this.fun$1.apply__O()
});
ScalaJS.c.scala_concurrent_ThreadPoolRunner$RunCallable.prototype.scala$concurrent$ThreadPoolRunner$RunCallable$$$outer__Lscala_concurrent_ThreadPoolRunner = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_concurrent_ThreadPoolRunner$RunCallable.prototype.init___Lscala_concurrent_ThreadPoolRunner__Lscala_Function0 = (function($$outer, fun) {
  this.fun$1 = fun;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_concurrent_ThreadPoolRunner$RunCallable.prototype.scala$concurrent$ThreadPoolRunner$RunCallable$$$outer__ = (function() {
  return this.scala$concurrent$ThreadPoolRunner$RunCallable$$$outer__Lscala_concurrent_ThreadPoolRunner()
});
ScalaJS.c.scala_concurrent_ThreadPoolRunner$RunCallable.prototype.call__ = (function() {
  return this.call__O()
});
ScalaJS.c.scala_concurrent_ThreadPoolRunner$RunCallable.prototype.run__ = (function() {
  return ScalaJS.bV(this.run__V())
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_ThreadPoolRunner$RunCallable = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_ThreadPoolRunner$RunCallable.prototype = ScalaJS.c.scala_concurrent_ThreadPoolRunner$RunCallable.prototype;
ScalaJS.is.scala_concurrent_ThreadPoolRunner$RunCallable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_ThreadPoolRunner$RunCallable)))
});
ScalaJS.as.scala_concurrent_ThreadPoolRunner$RunCallable = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_ThreadPoolRunner$RunCallable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.ThreadPoolRunner$RunCallable")
  }
});
ScalaJS.isArrayOf.scala_concurrent_ThreadPoolRunner$RunCallable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_ThreadPoolRunner$RunCallable)))
});
ScalaJS.asArrayOf.scala_concurrent_ThreadPoolRunner$RunCallable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_ThreadPoolRunner$RunCallable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.ThreadPoolRunner$RunCallable;", depth)
  }
});
ScalaJS.data.scala_concurrent_ThreadPoolRunner$RunCallable = new ScalaJS.ClassTypeData({
  scala_concurrent_ThreadPoolRunner$RunCallable: 0
}, false, "scala.concurrent.ThreadPoolRunner$RunCallable", ScalaJS.data.java_lang_Object, {
  scala_concurrent_ThreadPoolRunner$RunCallable: 1,
  java_util_concurrent_Callable: 1,
  java_lang_Runnable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_ThreadPoolRunner$RunCallable.prototype.$classData = ScalaJS.data.scala_concurrent_ThreadPoolRunner$RunCallable;
//@ sourceMappingURL=ThreadPoolRunner$RunCallable.js.map
