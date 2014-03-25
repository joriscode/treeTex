/** @constructor */
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$ = (function() {
  ScalaJS.c.scala_collection_generic_ClassTagTraversableFactory.call(this);
  this.waterline$3 = 0;
  this.waterlineDelim$3 = 0;
  this.unrolledlength$3 = 0
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$.prototype = new ScalaJS.inheritable.scala_collection_generic_ClassTagTraversableFactory();
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$.prototype.constructor = ScalaJS.c.scala_collection_mutable_UnrolledBuffer$;
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$.prototype.canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom = (function(t) {
  return new ScalaJS.c.scala_collection_generic_ClassTagTraversableFactory$GenericCanBuildFrom().init___Lscala_collection_generic_ClassTagTraversableFactory__Lscala_reflect_ClassTag(this, t)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$.prototype.newBuilder__Lscala_reflect_ClassTag__Lscala_collection_mutable_Builder = (function(t) {
  return new ScalaJS.c.scala_collection_mutable_UnrolledBuffer().init___Lscala_reflect_ClassTag(t)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$.prototype.waterline__I = (function() {
  return this.waterline$3
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$.prototype.waterlineDelim__I = (function() {
  return this.waterlineDelim$3
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$.prototype.unrolledlength__I = (function() {
  return this.unrolledlength$3
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$.prototype.readResolve__p3__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_UnrolledBuffer()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_generic_ClassTagTraversableFactory.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_mutable_UnrolledBuffer = this;
  this.waterline$3 = 50;
  this.waterlineDelim$3 = 100;
  this.unrolledlength$3 = 32;
  return this
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$.prototype.unrolledlength__ = (function() {
  return ScalaJS.bI(this.unrolledlength__I())
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$.prototype.waterlineDelim__ = (function() {
  return ScalaJS.bI(this.waterlineDelim__I())
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$.prototype.waterline__ = (function() {
  return ScalaJS.bI(this.waterline__I())
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$.prototype.canBuildFrom__Lscala_reflect_ClassTag__ = (function(t) {
  return this.canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(t)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_UnrolledBuffer$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_UnrolledBuffer$.prototype = ScalaJS.c.scala_collection_mutable_UnrolledBuffer$.prototype;
ScalaJS.is.scala_collection_mutable_UnrolledBuffer$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_UnrolledBuffer$)))
});
ScalaJS.as.scala_collection_mutable_UnrolledBuffer$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_UnrolledBuffer$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.UnrolledBuffer")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_UnrolledBuffer$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_UnrolledBuffer$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_UnrolledBuffer$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_UnrolledBuffer$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.UnrolledBuffer;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_UnrolledBuffer$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_UnrolledBuffer$: 0
}, false, "scala.collection.mutable.UnrolledBuffer$", ScalaJS.data.scala_collection_generic_ClassTagTraversableFactory, {
  scala_collection_mutable_UnrolledBuffer$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_ClassTagTraversableFactory: 1,
  scala_collection_generic_GenericClassTagCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$.prototype.$classData = ScalaJS.data.scala_collection_mutable_UnrolledBuffer$;
ScalaJS.moduleInstances.scala_collection_mutable_UnrolledBuffer = undefined;
ScalaJS.modules.scala_collection_mutable_UnrolledBuffer = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_UnrolledBuffer)) {
    ScalaJS.moduleInstances.scala_collection_mutable_UnrolledBuffer = new ScalaJS.c.scala_collection_mutable_UnrolledBuffer$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_UnrolledBuffer
});
//@ sourceMappingURL=UnrolledBuffer$.js.map
