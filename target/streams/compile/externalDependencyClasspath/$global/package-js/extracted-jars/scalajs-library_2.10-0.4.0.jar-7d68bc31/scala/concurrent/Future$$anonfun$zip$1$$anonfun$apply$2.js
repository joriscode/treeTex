/** @constructor */
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2 = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this);
  this.$$outer$2 = null
});
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2.prototype.constructor = ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2;
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2.prototype.applyOrElse__Ljava_lang_Throwable__Lscala_Function1__O = (function(x2, default$2) {
  var x1 = x2;
  return this.$$outer$2.p$9$f.failure__Ljava_lang_Throwable__Lscala_concurrent_Promise(x1)
});
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2.prototype.isDefinedAt__Ljava_lang_Throwable__Z = (function(x2) {
  var x1 = x2;
  return true
});
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__Ljava_lang_Throwable__Z(ScalaJS.as.java_lang_Throwable(x))
});
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2.prototype.applyOrElse__O__Lscala_Function1__O = (function(x, default$2) {
  return this.applyOrElse__Ljava_lang_Throwable__Lscala_Function1__O(ScalaJS.as.java_lang_Throwable(x), default$2)
});
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2.prototype.init___Lscala_concurrent_Future$$anonfun$zip$1 = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2.prototype.isDefinedAt__Ljava_lang_Throwable__ = (function(x2) {
  return ScalaJS.bZ(this.isDefinedAt__Ljava_lang_Throwable__Z(x2))
});
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2.prototype.applyOrElse__Ljava_lang_Throwable__Lscala_Function1__ = (function(x2$2, default$2) {
  return this.applyOrElse__Ljava_lang_Throwable__Lscala_Function1__O(x2$2, default$2)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2.prototype = ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2.prototype;
ScalaJS.is.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2)))
});
ScalaJS.as.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Future$$anonfun$zip$1$$anonfun$apply$2")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2)))
});
ScalaJS.asArrayOf.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Future$$anonfun$zip$1$$anonfun$apply$2;", depth)
  }
});
ScalaJS.data.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2 = new ScalaJS.ClassTypeData({
  scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2: 0
}, false, "scala.concurrent.Future$$anonfun$zip$1$$anonfun$apply$2", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2.prototype.$classData = ScalaJS.data.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2;
//@ sourceMappingURL=Future$$anonfun$zip$1$$anonfun$apply$2.js.map
