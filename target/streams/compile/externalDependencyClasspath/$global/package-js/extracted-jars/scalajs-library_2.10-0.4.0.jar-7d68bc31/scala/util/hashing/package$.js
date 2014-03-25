/** @constructor */
ScalaJS.c.scala_util_hashing_package$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_hashing_package$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_hashing_package$.prototype.constructor = ScalaJS.c.scala_util_hashing_package$;
ScalaJS.c.scala_util_hashing_package$.prototype.byteswap32__I__I = (function(v) {
  var hc = (v * -1640532531);
  hc = ScalaJS.modules.java_lang_Integer().reverseBytes__I__I(hc);
  return (hc * -1640532531)
});
ScalaJS.c.scala_util_hashing_package$.prototype.byteswap64__J__J = (function(v) {
  var hc = v.$$times__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(3634637, 1521272, 648055));
  hc = ScalaJS.modules.java_lang_Long().reverseBytes__J__J(hc);
  return hc.$$times__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(3634637, 1521272, 648055))
});
ScalaJS.c.scala_util_hashing_package$.prototype.byteswap64__J__ = (function(v) {
  return ScalaJS.bJ(this.byteswap64__J__J(v))
});
ScalaJS.c.scala_util_hashing_package$.prototype.byteswap32__I__ = (function(v$2) {
  return ScalaJS.bI(this.byteswap32__I__I(v$2))
});
/** @constructor */
ScalaJS.inheritable.scala_util_hashing_package$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_hashing_package$.prototype = ScalaJS.c.scala_util_hashing_package$.prototype;
ScalaJS.is.scala_util_hashing_package$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_hashing_package$)))
});
ScalaJS.as.scala_util_hashing_package$ = (function(obj) {
  if ((ScalaJS.is.scala_util_hashing_package$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.hashing.package")
  }
});
ScalaJS.isArrayOf.scala_util_hashing_package$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_hashing_package$)))
});
ScalaJS.asArrayOf.scala_util_hashing_package$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_hashing_package$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.hashing.package;", depth)
  }
});
ScalaJS.data.scala_util_hashing_package$ = new ScalaJS.ClassTypeData({
  scala_util_hashing_package$: 0
}, false, "scala.util.hashing.package$", ScalaJS.data.java_lang_Object, {
  scala_util_hashing_package$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_hashing_package$.prototype.$classData = ScalaJS.data.scala_util_hashing_package$;
ScalaJS.moduleInstances.scala_util_hashing_package = undefined;
ScalaJS.modules.scala_util_hashing_package = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_hashing_package)) {
    ScalaJS.moduleInstances.scala_util_hashing_package = new ScalaJS.c.scala_util_hashing_package$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_hashing_package
});
//@ sourceMappingURL=package$.js.map
