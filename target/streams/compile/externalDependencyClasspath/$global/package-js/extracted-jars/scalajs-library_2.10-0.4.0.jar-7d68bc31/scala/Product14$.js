/** @constructor */
ScalaJS.c.scala_Product14$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product14$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product14$.prototype.constructor = ScalaJS.c.scala_Product14$;
ScalaJS.c.scala_Product14$.prototype.unapply__Lscala_Product14__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product14$.prototype.unapply__Lscala_Product14__ = (function(x) {
  return this.unapply__Lscala_Product14__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product14$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product14$.prototype = ScalaJS.c.scala_Product14$.prototype;
ScalaJS.is.scala_Product14$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product14$)))
});
ScalaJS.as.scala_Product14$ = (function(obj) {
  if ((ScalaJS.is.scala_Product14$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product14")
  }
});
ScalaJS.isArrayOf.scala_Product14$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product14$)))
});
ScalaJS.asArrayOf.scala_Product14$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product14$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product14;", depth)
  }
});
ScalaJS.data.scala_Product14$ = new ScalaJS.ClassTypeData({
  scala_Product14$: 0
}, false, "scala.Product14$", ScalaJS.data.java_lang_Object, {
  scala_Product14$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product14$.prototype.$classData = ScalaJS.data.scala_Product14$;
ScalaJS.moduleInstances.scala_Product14 = undefined;
ScalaJS.modules.scala_Product14 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product14)) {
    ScalaJS.moduleInstances.scala_Product14 = new ScalaJS.c.scala_Product14$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product14
});
//@ sourceMappingURL=Product14$.js.map
