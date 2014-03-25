/** @constructor */
ScalaJS.c.scala_PartialFunction$$anonfun$apply$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this);
  this.f$1$2 = null
});
ScalaJS.c.scala_PartialFunction$$anonfun$apply$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_PartialFunction$$anonfun$apply$1.prototype.constructor = ScalaJS.c.scala_PartialFunction$$anonfun$apply$1;
ScalaJS.c.scala_PartialFunction$$anonfun$apply$1.prototype.applyOrElse__O__Lscala_Function1__O = (function(x2, default$2) {
  var x1 = x2;
  return this.f$1$2.apply__O__O(x1)
});
ScalaJS.c.scala_PartialFunction$$anonfun$apply$1.prototype.isDefinedAt__O__Z = (function(x2) {
  var x1 = x2;
  return true
});
ScalaJS.c.scala_PartialFunction$$anonfun$apply$1.prototype.init___Lscala_Function1 = (function(f$1) {
  this.f$1$2 = f$1;
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_PartialFunction$$anonfun$apply$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_PartialFunction$$anonfun$apply$1.prototype = ScalaJS.c.scala_PartialFunction$$anonfun$apply$1.prototype;
ScalaJS.is.scala_PartialFunction$$anonfun$apply$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_PartialFunction$$anonfun$apply$1)))
});
ScalaJS.as.scala_PartialFunction$$anonfun$apply$1 = (function(obj) {
  if ((ScalaJS.is.scala_PartialFunction$$anonfun$apply$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.PartialFunction$$anonfun$apply$1")
  }
});
ScalaJS.isArrayOf.scala_PartialFunction$$anonfun$apply$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_PartialFunction$$anonfun$apply$1)))
});
ScalaJS.asArrayOf.scala_PartialFunction$$anonfun$apply$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_PartialFunction$$anonfun$apply$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.PartialFunction$$anonfun$apply$1;", depth)
  }
});
ScalaJS.data.scala_PartialFunction$$anonfun$apply$1 = new ScalaJS.ClassTypeData({
  scala_PartialFunction$$anonfun$apply$1: 0
}, false, "scala.PartialFunction$$anonfun$apply$1", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_PartialFunction$$anonfun$apply$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_PartialFunction$$anonfun$apply$1.prototype.$classData = ScalaJS.data.scala_PartialFunction$$anonfun$apply$1;
//@ sourceMappingURL=PartialFunction$$anonfun$apply$1.js.map
