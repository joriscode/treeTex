/** @constructor */
ScalaJS.c.scala_Product16$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product16$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product16$.prototype.constructor = ScalaJS.c.scala_Product16$;
ScalaJS.c.scala_Product16$.prototype.unapply__Lscala_Product16__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product16$.prototype.unapply__Lscala_Product16__ = (function(x) {
  return this.unapply__Lscala_Product16__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product16$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product16$.prototype = ScalaJS.c.scala_Product16$.prototype;
ScalaJS.is.scala_Product16$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product16$)))
});
ScalaJS.as.scala_Product16$ = (function(obj) {
  if ((ScalaJS.is.scala_Product16$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product16")
  }
});
ScalaJS.isArrayOf.scala_Product16$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product16$)))
});
ScalaJS.asArrayOf.scala_Product16$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product16$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product16;", depth)
  }
});
ScalaJS.data.scala_Product16$ = new ScalaJS.ClassTypeData({
  scala_Product16$: 0
}, false, "scala.Product16$", ScalaJS.data.java_lang_Object, {
  scala_Product16$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product16$.prototype.$classData = ScalaJS.data.scala_Product16$;
ScalaJS.moduleInstances.scala_Product16 = undefined;
ScalaJS.modules.scala_Product16 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product16)) {
    ScalaJS.moduleInstances.scala_Product16 = new ScalaJS.c.scala_Product16$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product16
});
//@ sourceMappingURL=Product16$.js.map
