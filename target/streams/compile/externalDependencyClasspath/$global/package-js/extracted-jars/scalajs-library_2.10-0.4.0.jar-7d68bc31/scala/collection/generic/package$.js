/** @constructor */
ScalaJS.c.scala_collection_generic_package$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_generic_package$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_package$.prototype.constructor = ScalaJS.c.scala_collection_generic_package$;
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_package$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_package$.prototype = ScalaJS.c.scala_collection_generic_package$.prototype;
ScalaJS.is.scala_collection_generic_package$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_package$)))
});
ScalaJS.as.scala_collection_generic_package$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_package$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.package")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_package$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_package$)))
});
ScalaJS.asArrayOf.scala_collection_generic_package$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_package$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.package;", depth)
  }
});
ScalaJS.data.scala_collection_generic_package$ = new ScalaJS.ClassTypeData({
  scala_collection_generic_package$: 0
}, false, "scala.collection.generic.package$", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_package$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_package$.prototype.$classData = ScalaJS.data.scala_collection_generic_package$;
ScalaJS.moduleInstances.scala_collection_generic_package = undefined;
ScalaJS.modules.scala_collection_generic_package = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_generic_package)) {
    ScalaJS.moduleInstances.scala_collection_generic_package = new ScalaJS.c.scala_collection_generic_package$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_generic_package
});
//@ sourceMappingURL=package$.js.map
