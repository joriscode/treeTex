/** @constructor */
ScalaJS.c.scala_collection_SeqView$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_SeqView$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_SeqView$.prototype.constructor = ScalaJS.c.scala_collection_SeqView$;
ScalaJS.c.scala_collection_SeqView$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_SeqView$$anon$1().init___()
});
ScalaJS.c.scala_collection_SeqView$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_SeqView$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_SeqView$.prototype = ScalaJS.c.scala_collection_SeqView$.prototype;
ScalaJS.is.scala_collection_SeqView$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SeqView$)))
});
ScalaJS.as.scala_collection_SeqView$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_SeqView$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SeqView")
  }
});
ScalaJS.isArrayOf.scala_collection_SeqView$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SeqView$)))
});
ScalaJS.asArrayOf.scala_collection_SeqView$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SeqView$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SeqView;", depth)
  }
});
ScalaJS.data.scala_collection_SeqView$ = new ScalaJS.ClassTypeData({
  scala_collection_SeqView$: 0
}, false, "scala.collection.SeqView$", ScalaJS.data.java_lang_Object, {
  scala_collection_SeqView$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_SeqView$.prototype.$classData = ScalaJS.data.scala_collection_SeqView$;
ScalaJS.moduleInstances.scala_collection_SeqView = undefined;
ScalaJS.modules.scala_collection_SeqView = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_SeqView)) {
    ScalaJS.moduleInstances.scala_collection_SeqView = new ScalaJS.c.scala_collection_SeqView$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_SeqView
});
//@ sourceMappingURL=SeqView$.js.map
