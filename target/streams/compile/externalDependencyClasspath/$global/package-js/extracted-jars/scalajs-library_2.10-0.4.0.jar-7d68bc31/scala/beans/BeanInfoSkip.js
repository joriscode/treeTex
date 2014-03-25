/** @constructor */
ScalaJS.c.scala_beans_BeanInfoSkip = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_beans_BeanInfoSkip.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_beans_BeanInfoSkip.prototype.constructor = ScalaJS.c.scala_beans_BeanInfoSkip;
/** @constructor */
ScalaJS.inheritable.scala_beans_BeanInfoSkip = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_beans_BeanInfoSkip.prototype = ScalaJS.c.scala_beans_BeanInfoSkip.prototype;
ScalaJS.is.scala_beans_BeanInfoSkip = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_beans_BeanInfoSkip)))
});
ScalaJS.as.scala_beans_BeanInfoSkip = (function(obj) {
  if ((ScalaJS.is.scala_beans_BeanInfoSkip(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.beans.BeanInfoSkip")
  }
});
ScalaJS.isArrayOf.scala_beans_BeanInfoSkip = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_beans_BeanInfoSkip)))
});
ScalaJS.asArrayOf.scala_beans_BeanInfoSkip = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_beans_BeanInfoSkip(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.beans.BeanInfoSkip;", depth)
  }
});
ScalaJS.data.scala_beans_BeanInfoSkip = new ScalaJS.ClassTypeData({
  scala_beans_BeanInfoSkip: 0
}, false, "scala.beans.BeanInfoSkip", ScalaJS.data.scala_annotation_Annotation, {
  scala_beans_BeanInfoSkip: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_beans_BeanInfoSkip.prototype.$classData = ScalaJS.data.scala_beans_BeanInfoSkip;
//@ sourceMappingURL=BeanInfoSkip.js.map
