/** @constructor */
ScalaJS.c.scala_collection_immutable_package$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_package$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_package$.prototype.constructor = ScalaJS.c.scala_collection_immutable_package$;
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_package$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_package$.prototype = ScalaJS.c.scala_collection_immutable_package$.prototype;
ScalaJS.is.scala_collection_immutable_package$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_package$)))
});
ScalaJS.as.scala_collection_immutable_package$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_package$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.package")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_package$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_package$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_package$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_package$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.package;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_package$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_package$: 0
}, false, "scala.collection.immutable.package$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_package$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_package$.prototype.$classData = ScalaJS.data.scala_collection_immutable_package$;
ScalaJS.moduleInstances.scala_collection_immutable_package = undefined;
ScalaJS.modules.scala_collection_immutable_package = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_package)) {
    ScalaJS.moduleInstances.scala_collection_immutable_package = new ScalaJS.c.scala_collection_immutable_package$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_package
});
//@ sourceMappingURL=package$.js.map
