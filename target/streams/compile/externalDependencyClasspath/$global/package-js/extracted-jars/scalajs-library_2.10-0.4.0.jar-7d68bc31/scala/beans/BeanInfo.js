/** @constructor */
ScalaJS.c.scala_beans_BeanInfo = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_beans_BeanInfo.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_beans_BeanInfo.prototype.constructor = ScalaJS.c.scala_beans_BeanInfo;
/** @constructor */
ScalaJS.inheritable.scala_beans_BeanInfo = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_beans_BeanInfo.prototype = ScalaJS.c.scala_beans_BeanInfo.prototype;
ScalaJS.is.scala_beans_BeanInfo = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_beans_BeanInfo)))
});
ScalaJS.as.scala_beans_BeanInfo = (function(obj) {
  if ((ScalaJS.is.scala_beans_BeanInfo(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.beans.BeanInfo")
  }
});
ScalaJS.isArrayOf.scala_beans_BeanInfo = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_beans_BeanInfo)))
});
ScalaJS.asArrayOf.scala_beans_BeanInfo = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_beans_BeanInfo(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.beans.BeanInfo;", depth)
  }
});
ScalaJS.data.scala_beans_BeanInfo = new ScalaJS.ClassTypeData({
  scala_beans_BeanInfo: 0
}, false, "scala.beans.BeanInfo", ScalaJS.data.scala_annotation_Annotation, {
  scala_beans_BeanInfo: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_beans_BeanInfo.prototype.$classData = ScalaJS.data.scala_beans_BeanInfo;
//@ sourceMappingURL=BeanInfo.js.map
