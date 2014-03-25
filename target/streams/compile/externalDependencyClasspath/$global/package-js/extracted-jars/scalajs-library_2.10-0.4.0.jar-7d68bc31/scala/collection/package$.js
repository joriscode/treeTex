/** @constructor */
ScalaJS.c.scala_collection_package$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_package$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_package$.prototype.constructor = ScalaJS.c.scala_collection_package$;
ScalaJS.c.scala_collection_package$.prototype.breakOut__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom = (function(b) {
  return new ScalaJS.c.scala_collection_package$$anon$1().init___Lscala_collection_generic_CanBuildFrom(b)
});
ScalaJS.c.scala_collection_package$.prototype.breakOut__Lscala_collection_generic_CanBuildFrom__ = (function(b) {
  return this.breakOut__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom(b)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_package$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_package$.prototype = ScalaJS.c.scala_collection_package$.prototype;
ScalaJS.is.scala_collection_package$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_package$)))
});
ScalaJS.as.scala_collection_package$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_package$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.package")
  }
});
ScalaJS.isArrayOf.scala_collection_package$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_package$)))
});
ScalaJS.asArrayOf.scala_collection_package$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_package$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.package;", depth)
  }
});
ScalaJS.data.scala_collection_package$ = new ScalaJS.ClassTypeData({
  scala_collection_package$: 0
}, false, "scala.collection.package$", ScalaJS.data.java_lang_Object, {
  scala_collection_package$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_package$.prototype.$classData = ScalaJS.data.scala_collection_package$;
ScalaJS.moduleInstances.scala_collection_package = undefined;
ScalaJS.modules.scala_collection_package = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_package)) {
    ScalaJS.moduleInstances.scala_collection_package = new ScalaJS.c.scala_collection_package$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_package
});
//@ sourceMappingURL=package$.js.map
