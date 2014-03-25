/** @constructor */
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this);
  this.$$outer$2 = null;
  this.r$1$2 = null
});
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1.prototype.constructor = ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1;
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1.prototype.applyOrElse__O__Lscala_Function1__O = (function(x1, default$2) {
  var x1$2 = x1;
  return this.$$outer$2.p$9$f.success__O__Lscala_concurrent_Promise(new ScalaJS.c.scala_Tuple2().init___O__O(this.r$1$2, x1$2))
});
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1.prototype.isDefinedAt__O__Z = (function(x1) {
  var x1$2 = x1;
  return true
});
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1.prototype.init___Lscala_concurrent_Future$$anonfun$zip$1__O = (function($$outer, r$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.r$1$2 = r$1;
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1.prototype = ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1.prototype;
ScalaJS.is.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1)))
});
ScalaJS.as.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Future$$anonfun$zip$1$$anonfun$apply$1")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1)))
});
ScalaJS.asArrayOf.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Future$$anonfun$zip$1$$anonfun$apply$1;", depth)
  }
});
ScalaJS.data.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1 = new ScalaJS.ClassTypeData({
  scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1: 0
}, false, "scala.concurrent.Future$$anonfun$zip$1$$anonfun$apply$1", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1.prototype.$classData = ScalaJS.data.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1;
//@ sourceMappingURL=Future$$anonfun$zip$1$$anonfun$apply$1.js.map
