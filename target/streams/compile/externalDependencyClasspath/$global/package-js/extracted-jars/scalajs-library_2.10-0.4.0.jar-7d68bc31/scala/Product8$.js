/** @constructor */
ScalaJS.c.scala_Product8$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product8$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product8$.prototype.constructor = ScalaJS.c.scala_Product8$;
ScalaJS.c.scala_Product8$.prototype.unapply__Lscala_Product8__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product8$.prototype.unapply__Lscala_Product8__ = (function(x) {
  return this.unapply__Lscala_Product8__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product8$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product8$.prototype = ScalaJS.c.scala_Product8$.prototype;
ScalaJS.is.scala_Product8$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product8$)))
});
ScalaJS.as.scala_Product8$ = (function(obj) {
  if ((ScalaJS.is.scala_Product8$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product8")
  }
});
ScalaJS.isArrayOf.scala_Product8$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product8$)))
});
ScalaJS.asArrayOf.scala_Product8$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product8$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product8;", depth)
  }
});
ScalaJS.data.scala_Product8$ = new ScalaJS.ClassTypeData({
  scala_Product8$: 0
}, false, "scala.Product8$", ScalaJS.data.java_lang_Object, {
  scala_Product8$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product8$.prototype.$classData = ScalaJS.data.scala_Product8$;
ScalaJS.moduleInstances.scala_Product8 = undefined;
ScalaJS.modules.scala_Product8 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product8)) {
    ScalaJS.moduleInstances.scala_Product8 = new ScalaJS.c.scala_Product8$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product8
});
//@ sourceMappingURL=Product8$.js.map
