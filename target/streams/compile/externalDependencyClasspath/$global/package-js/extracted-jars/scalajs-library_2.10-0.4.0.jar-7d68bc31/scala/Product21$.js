/** @constructor */
ScalaJS.c.scala_Product21$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product21$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product21$.prototype.constructor = ScalaJS.c.scala_Product21$;
ScalaJS.c.scala_Product21$.prototype.unapply__Lscala_Product21__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product21$.prototype.unapply__Lscala_Product21__ = (function(x) {
  return this.unapply__Lscala_Product21__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product21$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product21$.prototype = ScalaJS.c.scala_Product21$.prototype;
ScalaJS.is.scala_Product21$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product21$)))
});
ScalaJS.as.scala_Product21$ = (function(obj) {
  if ((ScalaJS.is.scala_Product21$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product21")
  }
});
ScalaJS.isArrayOf.scala_Product21$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product21$)))
});
ScalaJS.asArrayOf.scala_Product21$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product21$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product21;", depth)
  }
});
ScalaJS.data.scala_Product21$ = new ScalaJS.ClassTypeData({
  scala_Product21$: 0
}, false, "scala.Product21$", ScalaJS.data.java_lang_Object, {
  scala_Product21$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product21$.prototype.$classData = ScalaJS.data.scala_Product21$;
ScalaJS.moduleInstances.scala_Product21 = undefined;
ScalaJS.modules.scala_Product21 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product21)) {
    ScalaJS.moduleInstances.scala_Product21 = new ScalaJS.c.scala_Product21$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product21
});
//@ sourceMappingURL=Product21$.js.map
