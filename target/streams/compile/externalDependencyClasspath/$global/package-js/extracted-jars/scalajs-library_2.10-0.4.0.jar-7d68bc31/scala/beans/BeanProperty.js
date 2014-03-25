/** @constructor */
ScalaJS.c.scala_beans_BeanProperty = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_beans_BeanProperty.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_beans_BeanProperty.prototype.constructor = ScalaJS.c.scala_beans_BeanProperty;
/** @constructor */
ScalaJS.inheritable.scala_beans_BeanProperty = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_beans_BeanProperty.prototype = ScalaJS.c.scala_beans_BeanProperty.prototype;
ScalaJS.is.scala_beans_BeanProperty = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_beans_BeanProperty)))
});
ScalaJS.as.scala_beans_BeanProperty = (function(obj) {
  if ((ScalaJS.is.scala_beans_BeanProperty(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.beans.BeanProperty")
  }
});
ScalaJS.isArrayOf.scala_beans_BeanProperty = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_beans_BeanProperty)))
});
ScalaJS.asArrayOf.scala_beans_BeanProperty = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_beans_BeanProperty(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.beans.BeanProperty;", depth)
  }
});
ScalaJS.data.scala_beans_BeanProperty = new ScalaJS.ClassTypeData({
  scala_beans_BeanProperty: 0
}, false, "scala.beans.BeanProperty", ScalaJS.data.scala_annotation_Annotation, {
  scala_beans_BeanProperty: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_beans_BeanProperty.prototype.$classData = ScalaJS.data.scala_beans_BeanProperty;
//@ sourceMappingURL=BeanProperty.js.map
