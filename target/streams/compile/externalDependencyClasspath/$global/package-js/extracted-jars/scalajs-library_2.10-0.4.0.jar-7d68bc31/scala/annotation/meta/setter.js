/** @constructor */
ScalaJS.c.scala_annotation_meta_setter = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_meta_setter.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_meta_setter.prototype.constructor = ScalaJS.c.scala_annotation_meta_setter;
/** @constructor */
ScalaJS.inheritable.scala_annotation_meta_setter = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_meta_setter.prototype = ScalaJS.c.scala_annotation_meta_setter.prototype;
ScalaJS.is.scala_annotation_meta_setter = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_meta_setter)))
});
ScalaJS.as.scala_annotation_meta_setter = (function(obj) {
  if ((ScalaJS.is.scala_annotation_meta_setter(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.meta.setter")
  }
});
ScalaJS.isArrayOf.scala_annotation_meta_setter = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_meta_setter)))
});
ScalaJS.asArrayOf.scala_annotation_meta_setter = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_meta_setter(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.meta.setter;", depth)
  }
});
ScalaJS.data.scala_annotation_meta_setter = new ScalaJS.ClassTypeData({
  scala_annotation_meta_setter: 0
}, false, "scala.annotation.meta.setter", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_meta_setter: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_meta_setter.prototype.$classData = ScalaJS.data.scala_annotation_meta_setter;
//@ sourceMappingURL=setter.js.map
