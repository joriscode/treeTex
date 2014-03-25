/** @constructor */
ScalaJS.c.scala_Product6$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product6$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product6$.prototype.constructor = ScalaJS.c.scala_Product6$;
ScalaJS.c.scala_Product6$.prototype.unapply__Lscala_Product6__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product6$.prototype.unapply__Lscala_Product6__ = (function(x) {
  return this.unapply__Lscala_Product6__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product6$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product6$.prototype = ScalaJS.c.scala_Product6$.prototype;
ScalaJS.is.scala_Product6$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product6$)))
});
ScalaJS.as.scala_Product6$ = (function(obj) {
  if ((ScalaJS.is.scala_Product6$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product6")
  }
});
ScalaJS.isArrayOf.scala_Product6$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product6$)))
});
ScalaJS.asArrayOf.scala_Product6$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product6$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product6;", depth)
  }
});
ScalaJS.data.scala_Product6$ = new ScalaJS.ClassTypeData({
  scala_Product6$: 0
}, false, "scala.Product6$", ScalaJS.data.java_lang_Object, {
  scala_Product6$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product6$.prototype.$classData = ScalaJS.data.scala_Product6$;
ScalaJS.moduleInstances.scala_Product6 = undefined;
ScalaJS.modules.scala_Product6 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product6)) {
    ScalaJS.moduleInstances.scala_Product6 = new ScalaJS.c.scala_Product6$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product6
});
//@ sourceMappingURL=Product6$.js.map
