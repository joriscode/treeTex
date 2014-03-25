/** @constructor */
ScalaJS.c.scala_inline = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_inline.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_inline.prototype.constructor = ScalaJS.c.scala_inline;
/** @constructor */
ScalaJS.inheritable.scala_inline = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_inline.prototype = ScalaJS.c.scala_inline.prototype;
ScalaJS.is.scala_inline = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_inline)))
});
ScalaJS.as.scala_inline = (function(obj) {
  if ((ScalaJS.is.scala_inline(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.inline")
  }
});
ScalaJS.isArrayOf.scala_inline = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_inline)))
});
ScalaJS.asArrayOf.scala_inline = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_inline(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.inline;", depth)
  }
});
ScalaJS.data.scala_inline = new ScalaJS.ClassTypeData({
  scala_inline: 0
}, false, "scala.inline", ScalaJS.data.scala_annotation_Annotation, {
  scala_inline: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_inline.prototype.$classData = ScalaJS.data.scala_inline;
//@ sourceMappingURL=inline.js.map
