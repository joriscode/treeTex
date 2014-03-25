/** @constructor */
ScalaJS.c.scala_FallbackArrayBuilding = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_FallbackArrayBuilding.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_FallbackArrayBuilding.prototype.constructor = ScalaJS.c.scala_FallbackArrayBuilding;
ScalaJS.c.scala_FallbackArrayBuilding.prototype.fallbackCanBuildFrom__Lscala_Predef$DummyImplicit__Lscala_collection_generic_CanBuildFrom = (function(m) {
  return new ScalaJS.c.scala_FallbackArrayBuilding$$anon$1().init___Lscala_FallbackArrayBuilding(this)
});
ScalaJS.c.scala_FallbackArrayBuilding.prototype.fallbackCanBuildFrom__Lscala_Predef$DummyImplicit__ = (function(m) {
  return this.fallbackCanBuildFrom__Lscala_Predef$DummyImplicit__Lscala_collection_generic_CanBuildFrom(m)
});
/** @constructor */
ScalaJS.inheritable.scala_FallbackArrayBuilding = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_FallbackArrayBuilding.prototype = ScalaJS.c.scala_FallbackArrayBuilding.prototype;
ScalaJS.is.scala_FallbackArrayBuilding = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_FallbackArrayBuilding)))
});
ScalaJS.as.scala_FallbackArrayBuilding = (function(obj) {
  if ((ScalaJS.is.scala_FallbackArrayBuilding(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.FallbackArrayBuilding")
  }
});
ScalaJS.isArrayOf.scala_FallbackArrayBuilding = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_FallbackArrayBuilding)))
});
ScalaJS.asArrayOf.scala_FallbackArrayBuilding = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_FallbackArrayBuilding(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.FallbackArrayBuilding;", depth)
  }
});
ScalaJS.data.scala_FallbackArrayBuilding = new ScalaJS.ClassTypeData({
  scala_FallbackArrayBuilding: 0
}, false, "scala.FallbackArrayBuilding", ScalaJS.data.java_lang_Object, {
  scala_FallbackArrayBuilding: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_FallbackArrayBuilding.prototype.$classData = ScalaJS.data.scala_FallbackArrayBuilding;
//@ sourceMappingURL=FallbackArrayBuilding.js.map
