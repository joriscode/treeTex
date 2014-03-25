/** @constructor */
ScalaJS.c.scala_remote = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_remote.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_remote.prototype.constructor = ScalaJS.c.scala_remote;
/** @constructor */
ScalaJS.inheritable.scala_remote = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_remote.prototype = ScalaJS.c.scala_remote.prototype;
ScalaJS.is.scala_remote = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_remote)))
});
ScalaJS.as.scala_remote = (function(obj) {
  if ((ScalaJS.is.scala_remote(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.remote")
  }
});
ScalaJS.isArrayOf.scala_remote = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_remote)))
});
ScalaJS.asArrayOf.scala_remote = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_remote(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.remote;", depth)
  }
});
ScalaJS.data.scala_remote = new ScalaJS.ClassTypeData({
  scala_remote: 0
}, false, "scala.remote", ScalaJS.data.scala_annotation_Annotation, {
  scala_remote: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_remote.prototype.$classData = ScalaJS.data.scala_remote;
//@ sourceMappingURL=remote.js.map
