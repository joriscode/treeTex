/** @constructor */
ScalaJS.c.scala_PartialFunction$Unlifted = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this);
  this.f$2 = null
});
ScalaJS.c.scala_PartialFunction$Unlifted.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_PartialFunction$Unlifted.prototype.constructor = ScalaJS.c.scala_PartialFunction$Unlifted;
ScalaJS.c.scala_PartialFunction$Unlifted.prototype.isDefinedAt__O__Z = (function(x) {
  return ScalaJS.as.scala_Option(this.f$2.apply__O__O(x)).isDefined__Z()
});
ScalaJS.c.scala_PartialFunction$Unlifted.prototype.applyOrElse__O__Lscala_Function1__O = (function(x, default$2) {
  var z = ScalaJS.as.scala_Option(this.f$2.apply__O__O(x));
  if ((!z.isEmpty__Z())) {
    return z.get__O()
  } else {
    return default$2.apply__O__O(x)
  }
});
ScalaJS.c.scala_PartialFunction$Unlifted.prototype.lift__Lscala_Function1 = (function() {
  return this.f$2
});
ScalaJS.c.scala_PartialFunction$Unlifted.prototype.init___Lscala_Function1 = (function(f) {
  this.f$2 = f;
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_PartialFunction$Unlifted = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_PartialFunction$Unlifted.prototype = ScalaJS.c.scala_PartialFunction$Unlifted.prototype;
ScalaJS.is.scala_PartialFunction$Unlifted = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_PartialFunction$Unlifted)))
});
ScalaJS.as.scala_PartialFunction$Unlifted = (function(obj) {
  if ((ScalaJS.is.scala_PartialFunction$Unlifted(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.PartialFunction$Unlifted")
  }
});
ScalaJS.isArrayOf.scala_PartialFunction$Unlifted = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_PartialFunction$Unlifted)))
});
ScalaJS.asArrayOf.scala_PartialFunction$Unlifted = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_PartialFunction$Unlifted(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.PartialFunction$Unlifted;", depth)
  }
});
ScalaJS.data.scala_PartialFunction$Unlifted = new ScalaJS.ClassTypeData({
  scala_PartialFunction$Unlifted: 0
}, false, "scala.PartialFunction$Unlifted", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_PartialFunction$Unlifted: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_PartialFunction$Unlifted.prototype.$classData = ScalaJS.data.scala_PartialFunction$Unlifted;
//@ sourceMappingURL=PartialFunction$Unlifted.js.map
