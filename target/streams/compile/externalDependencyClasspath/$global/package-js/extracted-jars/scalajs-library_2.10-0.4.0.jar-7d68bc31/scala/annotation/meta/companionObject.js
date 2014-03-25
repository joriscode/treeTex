/** @constructor */
ScalaJS.c.scala_annotation_meta_companionObject = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_meta_companionObject.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_meta_companionObject.prototype.constructor = ScalaJS.c.scala_annotation_meta_companionObject;
/** @constructor */
ScalaJS.inheritable.scala_annotation_meta_companionObject = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_meta_companionObject.prototype = ScalaJS.c.scala_annotation_meta_companionObject.prototype;
ScalaJS.is.scala_annotation_meta_companionObject = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_meta_companionObject)))
});
ScalaJS.as.scala_annotation_meta_companionObject = (function(obj) {
  if ((ScalaJS.is.scala_annotation_meta_companionObject(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.meta.companionObject")
  }
});
ScalaJS.isArrayOf.scala_annotation_meta_companionObject = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_meta_companionObject)))
});
ScalaJS.asArrayOf.scala_annotation_meta_companionObject = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_meta_companionObject(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.meta.companionObject;", depth)
  }
});
ScalaJS.data.scala_annotation_meta_companionObject = new ScalaJS.ClassTypeData({
  scala_annotation_meta_companionObject: 0
}, false, "scala.annotation.meta.companionObject", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_meta_companionObject: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_meta_companionObject.prototype.$classData = ScalaJS.data.scala_annotation_meta_companionObject;
//@ sourceMappingURL=companionObject.js.map
