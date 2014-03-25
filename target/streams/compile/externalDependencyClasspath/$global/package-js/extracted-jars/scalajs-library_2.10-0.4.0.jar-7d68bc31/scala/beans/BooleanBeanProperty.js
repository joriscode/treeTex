/** @constructor */
ScalaJS.c.scala_beans_BooleanBeanProperty = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_beans_BooleanBeanProperty.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_beans_BooleanBeanProperty.prototype.constructor = ScalaJS.c.scala_beans_BooleanBeanProperty;
/** @constructor */
ScalaJS.inheritable.scala_beans_BooleanBeanProperty = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_beans_BooleanBeanProperty.prototype = ScalaJS.c.scala_beans_BooleanBeanProperty.prototype;
ScalaJS.is.scala_beans_BooleanBeanProperty = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_beans_BooleanBeanProperty)))
});
ScalaJS.as.scala_beans_BooleanBeanProperty = (function(obj) {
  if ((ScalaJS.is.scala_beans_BooleanBeanProperty(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.beans.BooleanBeanProperty")
  }
});
ScalaJS.isArrayOf.scala_beans_BooleanBeanProperty = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_beans_BooleanBeanProperty)))
});
ScalaJS.asArrayOf.scala_beans_BooleanBeanProperty = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_beans_BooleanBeanProperty(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.beans.BooleanBeanProperty;", depth)
  }
});
ScalaJS.data.scala_beans_BooleanBeanProperty = new ScalaJS.ClassTypeData({
  scala_beans_BooleanBeanProperty: 0
}, false, "scala.beans.BooleanBeanProperty", ScalaJS.data.scala_annotation_Annotation, {
  scala_beans_BooleanBeanProperty: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_beans_BooleanBeanProperty.prototype.$classData = ScalaJS.data.scala_beans_BooleanBeanProperty;
//@ sourceMappingURL=BooleanBeanProperty.js.map
