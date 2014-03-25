/** @constructor */
ScalaJS.c.scala_volatile = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_volatile.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_volatile.prototype.constructor = ScalaJS.c.scala_volatile;
/** @constructor */
ScalaJS.inheritable.scala_volatile = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_volatile.prototype = ScalaJS.c.scala_volatile.prototype;
ScalaJS.is.scala_volatile = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_volatile)))
});
ScalaJS.as.scala_volatile = (function(obj) {
  if ((ScalaJS.is.scala_volatile(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.volatile")
  }
});
ScalaJS.isArrayOf.scala_volatile = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_volatile)))
});
ScalaJS.asArrayOf.scala_volatile = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_volatile(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.volatile;", depth)
  }
});
ScalaJS.data.scala_volatile = new ScalaJS.ClassTypeData({
  scala_volatile: 0
}, false, "scala.volatile", ScalaJS.data.scala_annotation_Annotation, {
  scala_volatile: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_volatile.prototype.$classData = ScalaJS.data.scala_volatile;
//@ sourceMappingURL=volatile.js.map
