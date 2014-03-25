/** @constructor */
ScalaJS.c.scala_annotation_varargs = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_varargs.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_varargs.prototype.constructor = ScalaJS.c.scala_annotation_varargs;
/** @constructor */
ScalaJS.inheritable.scala_annotation_varargs = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_varargs.prototype = ScalaJS.c.scala_annotation_varargs.prototype;
ScalaJS.is.scala_annotation_varargs = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_varargs)))
});
ScalaJS.as.scala_annotation_varargs = (function(obj) {
  if ((ScalaJS.is.scala_annotation_varargs(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.varargs")
  }
});
ScalaJS.isArrayOf.scala_annotation_varargs = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_varargs)))
});
ScalaJS.asArrayOf.scala_annotation_varargs = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_varargs(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.varargs;", depth)
  }
});
ScalaJS.data.scala_annotation_varargs = new ScalaJS.ClassTypeData({
  scala_annotation_varargs: 0
}, false, "scala.annotation.varargs", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_varargs: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_varargs.prototype.$classData = ScalaJS.data.scala_annotation_varargs;
//@ sourceMappingURL=varargs.js.map
