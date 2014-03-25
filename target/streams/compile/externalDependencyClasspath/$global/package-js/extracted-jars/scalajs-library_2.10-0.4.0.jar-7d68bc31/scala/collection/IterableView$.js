/** @constructor */
ScalaJS.c.scala_collection_IterableView$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_IterableView$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_IterableView$.prototype.constructor = ScalaJS.c.scala_collection_IterableView$;
ScalaJS.c.scala_collection_IterableView$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_IterableView$$anon$1().init___()
});
ScalaJS.c.scala_collection_IterableView$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_IterableView$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_IterableView$.prototype = ScalaJS.c.scala_collection_IterableView$.prototype;
ScalaJS.is.scala_collection_IterableView$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_IterableView$)))
});
ScalaJS.as.scala_collection_IterableView$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_IterableView$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.IterableView")
  }
});
ScalaJS.isArrayOf.scala_collection_IterableView$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_IterableView$)))
});
ScalaJS.asArrayOf.scala_collection_IterableView$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_IterableView$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.IterableView;", depth)
  }
});
ScalaJS.data.scala_collection_IterableView$ = new ScalaJS.ClassTypeData({
  scala_collection_IterableView$: 0
}, false, "scala.collection.IterableView$", ScalaJS.data.java_lang_Object, {
  scala_collection_IterableView$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_IterableView$.prototype.$classData = ScalaJS.data.scala_collection_IterableView$;
ScalaJS.moduleInstances.scala_collection_IterableView = undefined;
ScalaJS.modules.scala_collection_IterableView = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_IterableView)) {
    ScalaJS.moduleInstances.scala_collection_IterableView = new ScalaJS.c.scala_collection_IterableView$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_IterableView
});
//@ sourceMappingURL=IterableView$.js.map
