/** @constructor */
ScalaJS.c.scala_Product18$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product18$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product18$.prototype.constructor = ScalaJS.c.scala_Product18$;
ScalaJS.c.scala_Product18$.prototype.unapply__Lscala_Product18__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product18$.prototype.unapply__Lscala_Product18__ = (function(x) {
  return this.unapply__Lscala_Product18__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product18$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product18$.prototype = ScalaJS.c.scala_Product18$.prototype;
ScalaJS.is.scala_Product18$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product18$)))
});
ScalaJS.as.scala_Product18$ = (function(obj) {
  if ((ScalaJS.is.scala_Product18$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product18")
  }
});
ScalaJS.isArrayOf.scala_Product18$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product18$)))
});
ScalaJS.asArrayOf.scala_Product18$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product18$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product18;", depth)
  }
});
ScalaJS.data.scala_Product18$ = new ScalaJS.ClassTypeData({
  scala_Product18$: 0
}, false, "scala.Product18$", ScalaJS.data.java_lang_Object, {
  scala_Product18$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product18$.prototype.$classData = ScalaJS.data.scala_Product18$;
ScalaJS.moduleInstances.scala_Product18 = undefined;
ScalaJS.modules.scala_Product18 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product18)) {
    ScalaJS.moduleInstances.scala_Product18 = new ScalaJS.c.scala_Product18$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product18
});
//@ sourceMappingURL=Product18$.js.map
