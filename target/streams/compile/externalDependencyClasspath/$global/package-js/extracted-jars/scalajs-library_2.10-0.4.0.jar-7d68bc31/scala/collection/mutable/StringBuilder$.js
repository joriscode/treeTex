/** @constructor */
ScalaJS.c.scala_collection_mutable_StringBuilder$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_StringBuilder$.prototype.constructor = ScalaJS.c.scala_collection_mutable_StringBuilder$;
ScalaJS.c.scala_collection_mutable_StringBuilder$.prototype.newBuilder__Lscala_collection_mutable_StringBuilder = (function() {
  return new ScalaJS.c.scala_collection_mutable_StringBuilder().init___()
});
ScalaJS.c.scala_collection_mutable_StringBuilder$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_StringBuilder()
});
ScalaJS.c.scala_collection_mutable_StringBuilder$.prototype.newBuilder__ = (function() {
  return this.newBuilder__Lscala_collection_mutable_StringBuilder()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_StringBuilder$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_StringBuilder$.prototype = ScalaJS.c.scala_collection_mutable_StringBuilder$.prototype;
ScalaJS.is.scala_collection_mutable_StringBuilder$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_StringBuilder$)))
});
ScalaJS.as.scala_collection_mutable_StringBuilder$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_StringBuilder$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.StringBuilder")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_StringBuilder$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_StringBuilder$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_StringBuilder$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_StringBuilder$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.StringBuilder;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_StringBuilder$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_StringBuilder$: 0
}, false, "scala.collection.mutable.StringBuilder$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_StringBuilder$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_StringBuilder$.prototype.$classData = ScalaJS.data.scala_collection_mutable_StringBuilder$;
ScalaJS.moduleInstances.scala_collection_mutable_StringBuilder = undefined;
ScalaJS.modules.scala_collection_mutable_StringBuilder = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_StringBuilder)) {
    ScalaJS.moduleInstances.scala_collection_mutable_StringBuilder = new ScalaJS.c.scala_collection_mutable_StringBuilder$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_StringBuilder
});
//@ sourceMappingURL=StringBuilder$.js.map
