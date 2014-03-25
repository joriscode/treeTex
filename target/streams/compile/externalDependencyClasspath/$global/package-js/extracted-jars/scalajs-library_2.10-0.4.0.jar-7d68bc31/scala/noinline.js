/** @constructor */
ScalaJS.c.scala_noinline = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_noinline.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_noinline.prototype.constructor = ScalaJS.c.scala_noinline;
/** @constructor */
ScalaJS.inheritable.scala_noinline = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_noinline.prototype = ScalaJS.c.scala_noinline.prototype;
ScalaJS.is.scala_noinline = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_noinline)))
});
ScalaJS.as.scala_noinline = (function(obj) {
  if ((ScalaJS.is.scala_noinline(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.noinline")
  }
});
ScalaJS.isArrayOf.scala_noinline = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_noinline)))
});
ScalaJS.asArrayOf.scala_noinline = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_noinline(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.noinline;", depth)
  }
});
ScalaJS.data.scala_noinline = new ScalaJS.ClassTypeData({
  scala_noinline: 0
}, false, "scala.noinline", ScalaJS.data.scala_annotation_Annotation, {
  scala_noinline: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_noinline.prototype.$classData = ScalaJS.data.scala_noinline;
//@ sourceMappingURL=noinline.js.map
