/** @constructor */
ScalaJS.c.scala_reflect_macros_internal_macroImpl = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this);
  this.referenceToMacroImpl$2 = null
});
ScalaJS.c.scala_reflect_macros_internal_macroImpl.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_reflect_macros_internal_macroImpl.prototype.constructor = ScalaJS.c.scala_reflect_macros_internal_macroImpl;
ScalaJS.c.scala_reflect_macros_internal_macroImpl.prototype.referenceToMacroImpl__O = (function() {
  return this.referenceToMacroImpl$2
});
ScalaJS.c.scala_reflect_macros_internal_macroImpl.prototype.init___O = (function(referenceToMacroImpl) {
  this.referenceToMacroImpl$2 = referenceToMacroImpl;
  ScalaJS.c.scala_annotation_Annotation.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_reflect_macros_internal_macroImpl.prototype.referenceToMacroImpl__ = (function() {
  return this.referenceToMacroImpl__O()
});
/** @constructor */
ScalaJS.inheritable.scala_reflect_macros_internal_macroImpl = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_reflect_macros_internal_macroImpl.prototype = ScalaJS.c.scala_reflect_macros_internal_macroImpl.prototype;
ScalaJS.is.scala_reflect_macros_internal_macroImpl = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_reflect_macros_internal_macroImpl)))
});
ScalaJS.as.scala_reflect_macros_internal_macroImpl = (function(obj) {
  if ((ScalaJS.is.scala_reflect_macros_internal_macroImpl(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.reflect.macros.internal.macroImpl")
  }
});
ScalaJS.isArrayOf.scala_reflect_macros_internal_macroImpl = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_reflect_macros_internal_macroImpl)))
});
ScalaJS.asArrayOf.scala_reflect_macros_internal_macroImpl = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_reflect_macros_internal_macroImpl(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.reflect.macros.internal.macroImpl;", depth)
  }
});
ScalaJS.data.scala_reflect_macros_internal_macroImpl = new ScalaJS.ClassTypeData({
  scala_reflect_macros_internal_macroImpl: 0
}, false, "scala.reflect.macros.internal.macroImpl", ScalaJS.data.scala_annotation_Annotation, {
  scala_reflect_macros_internal_macroImpl: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_reflect_macros_internal_macroImpl.prototype.$classData = ScalaJS.data.scala_reflect_macros_internal_macroImpl;
//@ sourceMappingURL=macroImpl.js.map
