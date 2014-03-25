/** @constructor */
ScalaJS.c.scala_collection_mutable_IndexedSeqView$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_IndexedSeqView$.prototype.constructor = ScalaJS.c.scala_collection_mutable_IndexedSeqView$;
ScalaJS.c.scala_collection_mutable_IndexedSeqView$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$6().init___()
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$.prototype.arrCanBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$7().init___()
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$.prototype.arrCanBuildFrom__ = (function() {
  return this.arrCanBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_IndexedSeqView$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_IndexedSeqView$.prototype = ScalaJS.c.scala_collection_mutable_IndexedSeqView$.prototype;
ScalaJS.is.scala_collection_mutable_IndexedSeqView$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_IndexedSeqView$)))
});
ScalaJS.as.scala_collection_mutable_IndexedSeqView$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_IndexedSeqView$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.IndexedSeqView")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_IndexedSeqView$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_IndexedSeqView$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_IndexedSeqView$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_IndexedSeqView$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.IndexedSeqView;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_IndexedSeqView$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_IndexedSeqView$: 0
}, false, "scala.collection.mutable.IndexedSeqView$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_IndexedSeqView$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_IndexedSeqView$.prototype.$classData = ScalaJS.data.scala_collection_mutable_IndexedSeqView$;
ScalaJS.moduleInstances.scala_collection_mutable_IndexedSeqView = undefined;
ScalaJS.modules.scala_collection_mutable_IndexedSeqView = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_IndexedSeqView)) {
    ScalaJS.moduleInstances.scala_collection_mutable_IndexedSeqView = new ScalaJS.c.scala_collection_mutable_IndexedSeqView$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_IndexedSeqView
});
//@ sourceMappingURL=IndexedSeqView$.js.map
