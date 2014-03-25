/** @constructor */
ScalaJS.c.scala_collection_TraversableView$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_TraversableView$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_TraversableView$.prototype.constructor = ScalaJS.c.scala_collection_TraversableView$;
ScalaJS.c.scala_collection_TraversableView$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_TraversableView$$anon$1().init___()
});
ScalaJS.c.scala_collection_TraversableView$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_TraversableView$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_TraversableView$.prototype = ScalaJS.c.scala_collection_TraversableView$.prototype;
ScalaJS.is.scala_collection_TraversableView$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableView$)))
});
ScalaJS.as.scala_collection_TraversableView$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableView$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableView")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableView$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableView$)))
});
ScalaJS.asArrayOf.scala_collection_TraversableView$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableView$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableView;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableView$ = new ScalaJS.ClassTypeData({
  scala_collection_TraversableView$: 0
}, false, "scala.collection.TraversableView$", ScalaJS.data.java_lang_Object, {
  scala_collection_TraversableView$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_TraversableView$.prototype.$classData = ScalaJS.data.scala_collection_TraversableView$;
ScalaJS.moduleInstances.scala_collection_TraversableView = undefined;
ScalaJS.modules.scala_collection_TraversableView = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_TraversableView)) {
    ScalaJS.moduleInstances.scala_collection_TraversableView = new ScalaJS.c.scala_collection_TraversableView$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_TraversableView
});
//@ sourceMappingURL=TraversableView$.js.map
