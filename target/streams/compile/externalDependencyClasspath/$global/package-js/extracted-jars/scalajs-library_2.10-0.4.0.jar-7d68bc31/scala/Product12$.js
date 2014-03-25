/** @constructor */
ScalaJS.c.scala_Product12$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product12$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product12$.prototype.constructor = ScalaJS.c.scala_Product12$;
ScalaJS.c.scala_Product12$.prototype.unapply__Lscala_Product12__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product12$.prototype.unapply__Lscala_Product12__ = (function(x) {
  return this.unapply__Lscala_Product12__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product12$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product12$.prototype = ScalaJS.c.scala_Product12$.prototype;
ScalaJS.is.scala_Product12$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product12$)))
});
ScalaJS.as.scala_Product12$ = (function(obj) {
  if ((ScalaJS.is.scala_Product12$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product12")
  }
});
ScalaJS.isArrayOf.scala_Product12$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product12$)))
});
ScalaJS.asArrayOf.scala_Product12$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product12$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product12;", depth)
  }
});
ScalaJS.data.scala_Product12$ = new ScalaJS.ClassTypeData({
  scala_Product12$: 0
}, false, "scala.Product12$", ScalaJS.data.java_lang_Object, {
  scala_Product12$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product12$.prototype.$classData = ScalaJS.data.scala_Product12$;
ScalaJS.moduleInstances.scala_Product12 = undefined;
ScalaJS.modules.scala_Product12 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product12)) {
    ScalaJS.moduleInstances.scala_Product12 = new ScalaJS.c.scala_Product12$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product12
});
//@ sourceMappingURL=Product12$.js.map
