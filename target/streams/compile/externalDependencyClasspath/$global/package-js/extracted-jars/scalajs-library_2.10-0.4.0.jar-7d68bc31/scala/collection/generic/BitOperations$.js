/** @constructor */
ScalaJS.c.scala_collection_generic_BitOperations$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_generic_BitOperations$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_BitOperations$.prototype.constructor = ScalaJS.c.scala_collection_generic_BitOperations$;
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_BitOperations$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_BitOperations$.prototype = ScalaJS.c.scala_collection_generic_BitOperations$.prototype;
ScalaJS.is.scala_collection_generic_BitOperations$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_BitOperations$)))
});
ScalaJS.as.scala_collection_generic_BitOperations$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_BitOperations$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.BitOperations")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_BitOperations$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_BitOperations$)))
});
ScalaJS.asArrayOf.scala_collection_generic_BitOperations$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_BitOperations$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.BitOperations;", depth)
  }
});
ScalaJS.data.scala_collection_generic_BitOperations$ = new ScalaJS.ClassTypeData({
  scala_collection_generic_BitOperations$: 0
}, false, "scala.collection.generic.BitOperations$", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_BitOperations$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_BitOperations$.prototype.$classData = ScalaJS.data.scala_collection_generic_BitOperations$;
ScalaJS.moduleInstances.scala_collection_generic_BitOperations = undefined;
ScalaJS.modules.scala_collection_generic_BitOperations = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_generic_BitOperations)) {
    ScalaJS.moduleInstances.scala_collection_generic_BitOperations = new ScalaJS.c.scala_collection_generic_BitOperations$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_generic_BitOperations
});
//@ sourceMappingURL=BitOperations$.js.map
