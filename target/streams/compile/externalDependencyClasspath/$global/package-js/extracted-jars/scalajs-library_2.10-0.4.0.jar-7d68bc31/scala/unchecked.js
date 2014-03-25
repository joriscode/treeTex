/** @constructor */
ScalaJS.c.scala_unchecked = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_unchecked.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_unchecked.prototype.constructor = ScalaJS.c.scala_unchecked;
/** @constructor */
ScalaJS.inheritable.scala_unchecked = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_unchecked.prototype = ScalaJS.c.scala_unchecked.prototype;
ScalaJS.is.scala_unchecked = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_unchecked)))
});
ScalaJS.as.scala_unchecked = (function(obj) {
  if ((ScalaJS.is.scala_unchecked(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.unchecked")
  }
});
ScalaJS.isArrayOf.scala_unchecked = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_unchecked)))
});
ScalaJS.asArrayOf.scala_unchecked = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_unchecked(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.unchecked;", depth)
  }
});
ScalaJS.data.scala_unchecked = new ScalaJS.ClassTypeData({
  scala_unchecked: 0
}, false, "scala.unchecked", ScalaJS.data.scala_annotation_Annotation, {
  scala_unchecked: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_unchecked.prototype.$classData = ScalaJS.data.scala_unchecked;
//@ sourceMappingURL=unchecked.js.map
