/** @constructor */
ScalaJS.c.scala_Product11$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product11$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product11$.prototype.constructor = ScalaJS.c.scala_Product11$;
ScalaJS.c.scala_Product11$.prototype.unapply__Lscala_Product11__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product11$.prototype.unapply__Lscala_Product11__ = (function(x) {
  return this.unapply__Lscala_Product11__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product11$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product11$.prototype = ScalaJS.c.scala_Product11$.prototype;
ScalaJS.is.scala_Product11$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product11$)))
});
ScalaJS.as.scala_Product11$ = (function(obj) {
  if ((ScalaJS.is.scala_Product11$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product11")
  }
});
ScalaJS.isArrayOf.scala_Product11$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product11$)))
});
ScalaJS.asArrayOf.scala_Product11$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product11$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product11;", depth)
  }
});
ScalaJS.data.scala_Product11$ = new ScalaJS.ClassTypeData({
  scala_Product11$: 0
}, false, "scala.Product11$", ScalaJS.data.java_lang_Object, {
  scala_Product11$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product11$.prototype.$classData = ScalaJS.data.scala_Product11$;
ScalaJS.moduleInstances.scala_Product11 = undefined;
ScalaJS.modules.scala_Product11 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product11)) {
    ScalaJS.moduleInstances.scala_Product11 = new ScalaJS.c.scala_Product11$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product11
});
//@ sourceMappingURL=Product11$.js.map
