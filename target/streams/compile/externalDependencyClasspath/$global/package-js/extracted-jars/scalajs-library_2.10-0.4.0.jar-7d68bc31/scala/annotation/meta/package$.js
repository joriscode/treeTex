/** @constructor */
ScalaJS.c.scala_annotation_meta_package$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_annotation_meta_package$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_annotation_meta_package$.prototype.constructor = ScalaJS.c.scala_annotation_meta_package$;
/** @constructor */
ScalaJS.inheritable.scala_annotation_meta_package$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_meta_package$.prototype = ScalaJS.c.scala_annotation_meta_package$.prototype;
ScalaJS.is.scala_annotation_meta_package$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_meta_package$)))
});
ScalaJS.as.scala_annotation_meta_package$ = (function(obj) {
  if ((ScalaJS.is.scala_annotation_meta_package$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.meta.package")
  }
});
ScalaJS.isArrayOf.scala_annotation_meta_package$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_meta_package$)))
});
ScalaJS.asArrayOf.scala_annotation_meta_package$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_meta_package$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.meta.package;", depth)
  }
});
ScalaJS.data.scala_annotation_meta_package$ = new ScalaJS.ClassTypeData({
  scala_annotation_meta_package$: 0
}, false, "scala.annotation.meta.package$", ScalaJS.data.java_lang_Object, {
  scala_annotation_meta_package$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_meta_package$.prototype.$classData = ScalaJS.data.scala_annotation_meta_package$;
ScalaJS.moduleInstances.scala_annotation_meta_package = undefined;
ScalaJS.modules.scala_annotation_meta_package = (function() {
  if ((!ScalaJS.moduleInstances.scala_annotation_meta_package)) {
    ScalaJS.moduleInstances.scala_annotation_meta_package = new ScalaJS.c.scala_annotation_meta_package$().init___()
  };
  return ScalaJS.moduleInstances.scala_annotation_meta_package
});
//@ sourceMappingURL=package$.js.map
