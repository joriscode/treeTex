/** @constructor */
ScalaJS.c.scala_Product17$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product17$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product17$.prototype.constructor = ScalaJS.c.scala_Product17$;
ScalaJS.c.scala_Product17$.prototype.unapply__Lscala_Product17__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product17$.prototype.unapply__Lscala_Product17__ = (function(x) {
  return this.unapply__Lscala_Product17__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product17$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product17$.prototype = ScalaJS.c.scala_Product17$.prototype;
ScalaJS.is.scala_Product17$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product17$)))
});
ScalaJS.as.scala_Product17$ = (function(obj) {
  if ((ScalaJS.is.scala_Product17$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product17")
  }
});
ScalaJS.isArrayOf.scala_Product17$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product17$)))
});
ScalaJS.asArrayOf.scala_Product17$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product17$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product17;", depth)
  }
});
ScalaJS.data.scala_Product17$ = new ScalaJS.ClassTypeData({
  scala_Product17$: 0
}, false, "scala.Product17$", ScalaJS.data.java_lang_Object, {
  scala_Product17$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product17$.prototype.$classData = ScalaJS.data.scala_Product17$;
ScalaJS.moduleInstances.scala_Product17 = undefined;
ScalaJS.modules.scala_Product17 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product17)) {
    ScalaJS.moduleInstances.scala_Product17 = new ScalaJS.c.scala_Product17$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product17
});
//@ sourceMappingURL=Product17$.js.map
