/** @constructor */
ScalaJS.c.scala_Product22$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product22$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product22$.prototype.constructor = ScalaJS.c.scala_Product22$;
ScalaJS.c.scala_Product22$.prototype.unapply__Lscala_Product22__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product22$.prototype.unapply__Lscala_Product22__ = (function(x) {
  return this.unapply__Lscala_Product22__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product22$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product22$.prototype = ScalaJS.c.scala_Product22$.prototype;
ScalaJS.is.scala_Product22$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product22$)))
});
ScalaJS.as.scala_Product22$ = (function(obj) {
  if ((ScalaJS.is.scala_Product22$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product22")
  }
});
ScalaJS.isArrayOf.scala_Product22$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product22$)))
});
ScalaJS.asArrayOf.scala_Product22$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product22$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product22;", depth)
  }
});
ScalaJS.data.scala_Product22$ = new ScalaJS.ClassTypeData({
  scala_Product22$: 0
}, false, "scala.Product22$", ScalaJS.data.java_lang_Object, {
  scala_Product22$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product22$.prototype.$classData = ScalaJS.data.scala_Product22$;
ScalaJS.moduleInstances.scala_Product22 = undefined;
ScalaJS.modules.scala_Product22 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product22)) {
    ScalaJS.moduleInstances.scala_Product22 = new ScalaJS.c.scala_Product22$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product22
});
//@ sourceMappingURL=Product22$.js.map
