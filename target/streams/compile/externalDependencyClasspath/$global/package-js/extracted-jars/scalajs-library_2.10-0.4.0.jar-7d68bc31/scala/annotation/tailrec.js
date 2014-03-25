/** @constructor */
ScalaJS.c.scala_annotation_tailrec = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_tailrec.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_tailrec.prototype.constructor = ScalaJS.c.scala_annotation_tailrec;
/** @constructor */
ScalaJS.inheritable.scala_annotation_tailrec = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_tailrec.prototype = ScalaJS.c.scala_annotation_tailrec.prototype;
ScalaJS.is.scala_annotation_tailrec = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_tailrec)))
});
ScalaJS.as.scala_annotation_tailrec = (function(obj) {
  if ((ScalaJS.is.scala_annotation_tailrec(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.tailrec")
  }
});
ScalaJS.isArrayOf.scala_annotation_tailrec = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_tailrec)))
});
ScalaJS.asArrayOf.scala_annotation_tailrec = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_tailrec(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.tailrec;", depth)
  }
});
ScalaJS.data.scala_annotation_tailrec = new ScalaJS.ClassTypeData({
  scala_annotation_tailrec: 0
}, false, "scala.annotation.tailrec", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_tailrec: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_tailrec.prototype.$classData = ScalaJS.data.scala_annotation_tailrec;
//@ sourceMappingURL=tailrec.js.map
