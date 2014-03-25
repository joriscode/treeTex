/** @constructor */
ScalaJS.c.scala_specialized = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_specialized.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_specialized.prototype.constructor = ScalaJS.c.scala_specialized;
ScalaJS.c.scala_specialized.prototype.init___Lscala_Specializable$SpecializedGroup = (function(group) {
  ScalaJS.c.scala_annotation_Annotation.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_specialized.prototype.init___Lscala_collection_Seq = (function(types) {
  ScalaJS.c.scala_specialized.prototype.init___Lscala_Specializable$SpecializedGroup.call(this, new ScalaJS.c.scala_Specializable$Group().init___O(types.toList__Lscala_collection_immutable_List()));
  return this
});
ScalaJS.c.scala_specialized.prototype.init___ = (function() {
  ScalaJS.c.scala_specialized.prototype.init___Lscala_Specializable$SpecializedGroup.call(this, ScalaJS.modules.scala_Specializable().Primitives__Lscala_Specializable$Group());
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_specialized = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_specialized.prototype = ScalaJS.c.scala_specialized.prototype;
ScalaJS.is.scala_specialized = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_specialized)))
});
ScalaJS.as.scala_specialized = (function(obj) {
  if ((ScalaJS.is.scala_specialized(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.specialized")
  }
});
ScalaJS.isArrayOf.scala_specialized = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_specialized)))
});
ScalaJS.asArrayOf.scala_specialized = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_specialized(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.specialized;", depth)
  }
});
ScalaJS.data.scala_specialized = new ScalaJS.ClassTypeData({
  scala_specialized: 0
}, false, "scala.specialized", ScalaJS.data.scala_annotation_Annotation, {
  scala_specialized: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_specialized.prototype.$classData = ScalaJS.data.scala_specialized;
//@ sourceMappingURL=specialized.js.map
